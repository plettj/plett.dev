"use server";

import redis from "@/lib/redis";
import { isProd } from "@/lib/utils";
import { NextResponse } from "next/server";

/**
 * Middleware to increment the views from a given IP address.
 *
 * @returns {boolean} Whether the views were incremented.
 */
export async function incrViews(ip: string, categories: string[]) {
  if (!isProd()) {
    console.log("Skipping view increment in development mode.");
    return false;
  }

  console.log("Attempting to get total global views...");
  const totalVisits = await redis.get("global_views");
  console.log(`Total global views: ${totalVisits}`);

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
    return NextResponse.json({ error: "Failed to update data", status: 500 });
  }

  /*
  context.waitUntil(
    (async () => {
      try {
        for (const category of categories) {
          await redis.incr(category);
          updated = true;
        }
      } catch (error) {
        console.error("Failed to update global page views:", error);
      }
    })()
  );
  */

  return updated;
}
