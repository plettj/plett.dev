import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";
import { isProd } from "@/lib/utils";

// import { incrViews } from "./actions/middleware/views";

/**
 * Middleware to increment the views from a given IP address.
 *
 * @returns {boolean} Whether the views were incremented.
 */
export async function incrViews(ip: string, categories: string[]) {
  console.log("Attempting to increment views from IP: ", ip);

  if (!isProd()) {
    console.log("Skipping view increment in development mode.");
    return false;
  }

  const visits = await redis.incr(ip);

  console.log(`Total visits from IP "${ip}": ${visits}`);

  if (visits > 1) {
    console.log(`Skipping view increment for IP "${ip}" (already visited).`);
    return false;
  }

  await redis.expire(ip, 60);

  let updated = false;

  try {
    for (const category of categories) {
      await redis.incr(category);
      console.log(`Successfully incremented "${category}" by 1.`);
      updated = true;
    }
  } catch (error) {
    console.error("Failed to update global page views:", error);
    // return NextResponse.json({ error: "Failed to update data", status: 500 });
    return NextResponse.error();
  }

  return updated;
}

// TODO: Improve my matcher.
export const config = {
  matcher: ["/about/:path*", "/posts/:path*"],
};

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const ip = request.headers.get("x-forwarded-for") || request.ip || "unknown";

  console.log("Middleware running on IP: ", ip);

  incrViews(ip, ["global_views"]);

  return response;
}
