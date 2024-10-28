"use server";

import redis from "@/lib/redis";
import { inProd } from "@/lib/utils";
import { NextFetchEvent } from "next/server";

/**
 * Middleware to increment the views from a given IP address.
 *
 * @returns {boolean} Whether the views were incremented.
 */
export async function incrViews(
  ip: string,
  context: NextFetchEvent,
  categories: string[]
) {
  if (!inProd()) {
    return false;
  }

  const visits = await redis.incr(ip);

  if (visits > 1) {
    return false;
  }

  await redis.expire(ip, 60);

  let updated = false;

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

  return updated;
}
