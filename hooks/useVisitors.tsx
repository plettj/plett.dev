"use client";

import { FALLBACK_TOTAL_VISITORS } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function useVisitors() {
  const [views, setViews] = useState<number>(FALLBACK_TOTAL_VISITORS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch("/api/views");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setViews(data.globalViews);
      } catch (err) {
        console.error(err);
        setError("Failed to load total visitors.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchViews();
  }, []);

  return { views, isLoading, error };
}
