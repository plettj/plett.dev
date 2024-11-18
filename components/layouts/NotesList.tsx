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
    <div className="w-full flex flex-col gap-2 items-center">
      <MouseTooltip on={hovered}>
        <div>{tooltipContent}</div>
      </MouseTooltip>
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full group flex justify-between items-center py-2"
        >
          <p className="font-semibold text-balance">
            <Link
              key={index}
              className="underline decoration-dotted hover:decoration-solid font-semibold"
              href={item.href}
              target="_blank"
              onMouseEnter={() => {
                setTooltipContent(item.summary);
                setHovered(true);
              }}
              onMouseLeave={() => setHovered(false)}
            >
              {item.title}
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
