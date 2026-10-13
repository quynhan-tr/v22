import { cacheLife } from "next/cache";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export type SpotifyTrack = {
  artist: string;
  imageUrl?: string;
  title: string;
  url: string;
};

type AccessTokenResponse = {
  access_token?: string;
};

type RecentlyPlayedResponse = {
  items?: Array<{
    track?: {
      album?: {
        images?: Array<{ url?: string }>;
      };
      artists?: Array<{ name?: string }>;
      external_urls?: { spotify?: string };
      name?: string;
    };
  }>;
};

export async function getLastPlayedTrack(): Promise<SpotifyTrack | null> {
  "use cache";
  cacheLife("minutes");

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  try {
    const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    });

    if (!tokenResponse.ok) {
      console.error(
        `Spotify access-token request failed with status ${tokenResponse.status}.`,
      );
      return null;
    }

    const tokenData = (await tokenResponse.json()) as AccessTokenResponse;

    if (!tokenData.access_token) {
      return null;
    }

    const historyResponse = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      cache: "no-store",
    });

    if (!historyResponse.ok) {
      console.error(
        `Spotify listening-history request failed with status ${historyResponse.status}.`,
      );
      return null;
    }

    const historyData =
      (await historyResponse.json()) as RecentlyPlayedResponse;
    const track = historyData.items?.[0]?.track;
    const title = track?.name;
    const imageUrl = track?.album?.images?.[0]?.url;
    const artist = track?.artists
      ?.map(({ name }) => name)
      .filter((name): name is string => Boolean(name))
      .join(", ");
    const url = track?.external_urls?.spotify;

    if (!title || !artist || !url) {
      return null;
    }

    return { artist, imageUrl, title, url };
  } catch (error) {
    console.error("Could not load Spotify listening history.", error);
    return null;
  }
}
