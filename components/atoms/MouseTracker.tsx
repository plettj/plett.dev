"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * A Next.js-compatible mouse tracking component, inspired by https://yoavik.com/snippets/mouse-tracker
 */
export const MouseTracker = ({
  offset = { x: 0, y: 0 },
  className,
  children,
}: {
  offset: { x: number; y: number };
  className?: string;
  children: React.ReactNode;
}) => {
  const element = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (element.current) {
        const x = e.clientX + offset.x,
          y = e.clientY + offset.y;
        element.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    }
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [offset.x, offset.y]);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <div
          className={cn(
            "fixed w-full pointer-events-none transition-opacity duration-300",
            className
          )}
          ref={element}
        >
          {children}
        </div>,
        document.body
      )
    : null;
};
