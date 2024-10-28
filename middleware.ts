import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { incrViews } from "./actions/middleware/views";

// TODO: Improve my matcher.
export const config = {
  matcher: ["/about/:path*", "/posts/:path*"],
};

export default async function middleware(
  request: NextRequest,
  context: NextFetchEvent
) {
  const response = NextResponse.next();

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(/, /)[0] : request.ip ?? "unknown";

  await incrViews(ip, context, ["global_views"]);

  return response;
}
