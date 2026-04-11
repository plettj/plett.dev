"use client";
import { useEffect, useState } from "react";

export function useActiveHash(hashes: string[]): string | null {
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    // Extend top margin way up so headings stay intersecting after scrolling past them.
    const observer = new IntersectionObserver(
      (entries) => {
        // Build a map of which hashes are currently intersecting
        setActiveHash((prev) => {
          const intersecting = new Set<string>();
          // Seed with previous active so it persists until something new wins
          if (prev) intersecting.add(prev);

          entries.forEach((e) => {
            const id = e.target.getAttribute("id");
            if (!id) return;
            if (e.isIntersecting) intersecting.add(id);
            else intersecting.delete(id);
          });

          // Pick the last intersecting heading in DOM order
          const winner = hashes.findLast((h) => intersecting.has(h));
          return winner ?? prev;
        });
      },
      // Once a heading is in the top 40% of the screen, the hash updates.
      { rootMargin: "0px 0px -40% 0px", threshold: 0 },
    );

    hashes.forEach((hash) => {
      const el = document.getElementById(hash);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hashes]);

  return activeHash;
}
