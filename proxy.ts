import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonical host. Must match `business.url` in lib/data.ts — canonical tags,
 * the sitemap and robots.txt all point there. Kept as a literal so Proxy
 * doesn't import app modules.
 */
const CANONICAL_HOST = "smyardservices.com";

/**
 * Other domains pointed at this same app. Serving identical pages on them
 * (with canonicals pointing elsewhere) made Google index only the homepage,
 * so they 301 to the canonical host instead.
 */
const ALIAS_HOSTS = new Set([
  "www.smyardservices.com",
  "smyardandbeyondserices.com",
  "www.smyardandbeyondserices.com",
]);

export function proxy(request: NextRequest) {
  // Behind Cloudflare/Render, so read the forwarded host rather than nextUrl.
  const host = (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    ""
  )
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, "");

  if (!ALIAS_HOSTS.has(host)) return NextResponse.next();

  const { pathname, search } = request.nextUrl;
  return NextResponse.redirect(
    `https://${CANONICAL_HOST}${pathname}${search}`,
    301,
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|.*\\.(?:png|jpg|jpeg|svg|webp|ico)$).*)"],
};
