import { NextResponse } from "next/server";
import redis from "@/lib/redis";
import { FALLBACK_TOTAL_VISITORS } from "@/lib/constants";
import { isProd } from "@/lib/utils";

export async function GET() {
  if (!isProd()) {
    return NextResponse.json({ globalViews: FALLBACK_TOTAL_VISITORS });
  }

  try {
    const globalViews: string = (await redis.get("global_views")) || "0";
    return NextResponse.json({ globalViews: parseInt(globalViews, 10) });
  } catch (error) {
    console.error("Failed to fetch global page views:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
