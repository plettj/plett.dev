"use client";

import Tippy from "@tippyjs/react/headless";
import { followCursor } from "tippy.js/headless";

export default function MouseTooltip({
  tooltip,
  children,
}: {
  tooltip: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Tippy
      render={(attrs) => (
        <>
          <div className="size-12 bg-red-500">TESTER SQUARE</div>
          <div
            tabIndex={-1}
            className="max-w-56 border bg-background px-2 py-1.5 text-xs rounded-md"
            {...attrs}
          >
            {tooltip}
          </div>
        </>
      )}
      animation="fade"
      followCursor="horizontal"
      trigger="mouseenter focus"
      plugins={[followCursor]}
    >
      <>{children}</>
    </Tippy>
  );
}
