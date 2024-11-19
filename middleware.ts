import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { incrViews } from "./actions/middleware/views";
import { processIp } from "./lib/utils";

export const config = {
  matcher: ["/", "/about", "/posts/:path*"],
};

export default async function middleware(
  request: NextRequest,
  context: NextFetchEvent,
) {
  const response = NextResponse.next();

  const forwardedIp = request.headers.get("x-forwarded-for");
  const rawIp = forwardedIp
    ? forwardedIp.split(/, /)[0]
    : request.ip ?? "unknown";
  const ip = processIp(rawIp);

  // TODO: Add categories for each individual blog post.
  await incrViews(ip, context, ["global_views"]);

  return response;
}
