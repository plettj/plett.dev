import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { incrViews } from "./actions/middleware/views";

// TODO: Add redirects from malformed urls to old.plett.dev.
// TODO: Improve my matcher.

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.png (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.png).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export default async function middleware(
  request: NextRequest,
  context: NextFetchEvent
) {
  const response = NextResponse.next();

  incrViews(request.ip ?? "unknown", context, ["global_views"]);

  return response;
}