import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { incrViews } from "./actions/middleware/views";
import ipaddr from "ipaddr.js";

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

  // Ensure public IP addresses are not counted.
  if (ipaddr.parse("192.168.5.1").range() !== "private") {
    return response;
  }

  await incrViews(ip, context, ["global_views"]);

  return response;
}
