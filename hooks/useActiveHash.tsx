"use client";
import { useEffect, useState } from "react";

export function useActiveHash(hashes: string[]): string | null {
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("id");
          if (!id) return;
          if (e.isIntersecting) intersecting.add(id);
          else intersecting.delete(id);
        });

        // Last intersecting heading in DOM order should be the one the user is "in."
        const winner = hashes.findLast((h) => intersecting.has(h));
        if (winner) setActiveHash(winner);
      },
      // 99999px: Current heading could be very high up, so check everything above.
      // -70%: Bring the bottom edge of the intersection up, so new headings won't activate early.
      { rootMargin: "99999px 0px -70% 0px", threshold: 0 },
    );

    hashes.forEach((hash) => {
      const el = document.getElementById(hash);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hashes]);

  return activeHash;
}
