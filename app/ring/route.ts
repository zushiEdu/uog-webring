import { NextRequest, NextResponse } from "next/server";
import { getAllMembers } from "@/lib/members";
import { resolveRingTarget, type RingAction } from "@/lib/ring";

function fallbackPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>uoguelph.network ring</title>
    <style>
      body { font-family: sans-serif; padding: 2rem; color: #153f2e; }
      a { color: #153f2e; }
    </style>
  </head>
  <body>
    <h1>Site not found in the ring</h1>
    <p>Check the site URL and try again.</p>
    <p><a href="/members">Browse member directory</a></p>
  </body>
</html>`;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const site = url.searchParams.get("site");
  const action = (url.searchParams.get("action") ?? "random") as RingAction;

  if (action !== "prev" && action !== "next" && action !== "random") {
    return new NextResponse(fallbackPage(), { status: 400, headers: { "Content-Type": "text/html" } });
  }

  const target = resolveRingTarget(site ?? "", action, getAllMembers());
  if (!target) {
    return new NextResponse(fallbackPage(), { status: 404, headers: { "Content-Type": "text/html" } });
  }

  return NextResponse.redirect(target.url, 307);
}
