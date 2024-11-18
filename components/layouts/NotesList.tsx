"use client";

import { useState } from "react";
import MouseTooltip from "../MouseTooltip";
import Link from "next/link";
import InlineLink from "../InlineLink";

export type NotesListItem = {
  title: string;
  course: { name: string; href: string };
  year: string;
  university: string;
  summary: string;
  href: string;
};

export default function NotesList({ items }: { items: NotesListItem[] }) {
  const [hovered, setHovered] = useState(false);
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2 items-center w-full cursor-pointer">
      <MouseTooltip on={hovered}>
        <div>{tooltipContent}</div>
      </MouseTooltip>
      {items.map((item, index) => (
        <div
          key={index}
          className="group flex justify-between items-center py-2 w-full"
        >
          <p
            className="font-semibold text-balance"
            onMouseEnter={() => {
              setTooltipContent(item.summary);
              setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
          >
            <Link
              key={index}
              className="underline decoration-dotted hover:decoration-solid font-semibold"
              href={item.href}
              target="_blank"
            >
              {item.title}{" "}
            </Link>
          </p>
          <p className="flex-none text-muted-foreground text-right font-thin decoration-muted-foreground">
            <InlineLink href={item.course.href} external>
              {item.course.name}
            </InlineLink>{" "}
            {item.university} {item.year}
          </p>
        </div>
      ))}
    </div>
  );
}
