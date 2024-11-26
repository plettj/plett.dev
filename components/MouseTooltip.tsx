"use client";

import React from "react";

export default function MouseTooltip({
  tooltip,
  children,
}: {
  tooltip: React.ReactNode;
  children: React.ReactNode;
}) {
  /* <div
            tabIndex={-1}
            className="max-w-56 border bg-background px-2 py-1.5 text-xs rounded-md"
            {...attrs}
          >
            {tooltip}
          </div> */

  // 1. Tooltip. https://floating-ui.com/docs/tooltip
  // 2. Follow mouse. https://floating-ui.com/docs/useclientpoint
  return (
    <>
      <div className="hidden">{tooltip}</div>
      {children}
    </>
  );
}
