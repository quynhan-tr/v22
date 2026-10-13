import { type NextRequest, NextResponse } from "next/server";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

type SpotifyTokenResponse = {
  error?: string;
  refresh_token?: string;
};

export async function GET(request: NextRequest) {
  const error = request.nextUrl.searchParams.get("error");
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const savedState = request.cookies.get("spotify_oauth_state")?.value;

  if (error) {
    return new NextResponse(`Spotify authorization failed: ${error}`, {
      status: 400,
    });
  }

  if (!code || !state || state !== savedState) {
    return new NextResponse("Invalid Spotify authorization response.", {
      status: 400,
    });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return new NextResponse("Spotify environment variables are missing.", {
      status: 500,
    });
  }

  const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
    cache: "no-store",
  });

  const tokenData = (await tokenResponse.json()) as SpotifyTokenResponse;

  if (!tokenResponse.ok || !tokenData.refresh_token) {
    return new NextResponse(
      `Spotify did not return a refresh token. ${tokenData.error ?? ""}`.trim(),
      { status: 502 },
    );
  }

  const response = new NextResponse(
    [
      "Spotify connected successfully.",
      "",
      "Copy this entire line into .env.local, then restart the dev server:",
      "",
      `SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}`,
    ].join("\n"),
    {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );

  response.cookies.delete("spotify_oauth_state");

  return response;
}
