import { FALLBACK_TOTAL_VISITORS } from "@/lib/constants";
import redis from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  // Never hit Redis during static generation
  if (process.env.NEXT_PHASE === "phase-production-build") {
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
