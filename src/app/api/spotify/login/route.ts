import { NextResponse } from "next/server";

const SPOTIFY_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";

export function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "Spotify client ID or redirect URI is missing." },
      { status: 500 },
    );
  }

  const state = crypto.randomUUID();
  const authorizationUrl = new URL(SPOTIFY_AUTHORIZE_URL);

  authorizationUrl.search = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "user-read-recently-played",
    state,
    show_dialog: "true",
  }).toString();

  const response = NextResponse.redirect(authorizationUrl);
  response.cookies.set("spotify_oauth_state", state, {
    httpOnly: true,
    maxAge: 10 * 60,
    path: "/api/spotify",
    sameSite: "lax",
    secure: redirectUri.startsWith("https://"),
  });

  return response;
}
