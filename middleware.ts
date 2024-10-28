import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { incrViews } from "./actions/middleware/views";
import { processIp } from "./lib/utils";

// TODO: Improve my matcher.
export const config = {
  matcher: ["/about/:path*", "/posts/:path*"],
};

export default async function middleware(
  request: NextRequest,
  context: NextFetchEvent
) {
  const response = NextResponse.next();

  const forwardedIp = request.headers.get("x-forwarded-for");
  const rawIp = forwardedIp
    ? forwardedIp.split(/, /)[0]
    : request.ip ?? "unknown";
  const ip = processIp(rawIp);

  await incrViews(ip, context, ["global_views"]);

  return response;
}
