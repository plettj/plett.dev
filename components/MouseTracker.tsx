"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// A TypeScript implementation of https://yoavik.com/snippets/mouse-tracker
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

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (element.current) {
        const x = e.clientX + offset.x,
          y = e.clientY + offset.y;
        element.current.style.transform = `translate(${x}px, ${y}px)`;
        element.current.style.visibility = "visible";
      }
    }
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [offset.x, offset.y]);

  // TODO: Majorly broken :/
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={cn("fixed pointer-events-none transition-opacity", className)}
      ref={element}
    >
      {children}
    </div>,
    document.body
  );
};
