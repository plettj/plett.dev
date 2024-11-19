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

  return (
    <>
      {tooltip}
      {children}
    </>
  );
}
