"use server";

import redis from "@/lib/redis";
import { isProd } from "@/lib/utils";
import { NextFetchEvent } from "next/server";

/**
 * Middleware to increment the views from a given IP address.
 *
 * @returns {Promise<boolean>} Whether the views were incremented.
 */
export async function incrViews(
  ip: string,
  context: NextFetchEvent,
  categories: string[]
): Promise<boolean> {
  if (!isProd()) {
    return false;
  }

  const visits = await redis.incr(ip);

  if (visits > 1) {
    return false;
  }

  await redis.expire(ip, 60 * 60 * 24);

  let updated = false;

  context.waitUntil(
    (async () => {
      try {
        for (const category of categories) {
          await redis.incr(category);
          console.log(`Successfully incremented "${category}" from IP ${ip}.`);
          updated = true;
        }
      } catch (error) {
        console.error("Failed to increment:", error);
      }
    })()
  );

  return updated;
}
