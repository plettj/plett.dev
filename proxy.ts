import { ipAddress } from "@vercel/functions";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { incrViews } from "./actions/middleware/views";
import { processIp } from "./lib/utils";

export const config = {
  // NOTE: Matchers must be static strings, so they can be parsed at compile time.
  matcher: ["/", "/notes", "/about", "/photography", "/writing/:path*"],
};

export default async function proxy(
  request: NextRequest,
  context: NextFetchEvent,
) {
  const response = NextResponse.next();

  const forwardedIp = request.headers.get("x-forwarded-for");
  const rawIp = forwardedIp
    ? forwardedIp.split(/, /)[0]
    : (ipAddress(request) ?? "unknown");
  const ip = processIp(rawIp);

  // TODO: Add categories for each individual blog post.
  await incrViews(ip, context, ["global_views"]);

  return response;
}
