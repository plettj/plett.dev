"use client";

import React from "react";

export default function MouseTooltip({
  tooltip,
  children,
}: {
  tooltip: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden">{tooltip}</div>
      {children}
    </>
  );
}
