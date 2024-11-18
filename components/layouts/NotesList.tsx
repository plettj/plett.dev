"use client";

import { useState } from "react";
import MouseTooltip from "../MouseTooltip";
import Link from "next/link";

export type NotesListItem = {
  title: string;
  course: string;
  year: string;
  university: string;
  summary: string;
  href: string;
};

export default function NotesList({ items }: { items: NotesListItem[] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-2 items-center w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MouseTooltip on={hovered}>
        <div>Sample text. AHHH!</div>
      </MouseTooltip>
      {items.map((item, index) => (
        <Link
          key={index}
          className="group flex justify-between items-center py-2 w-full"
          href={item.href}
          target="_blank"
        >
          <p className="font-semibold">
            <span className="group-hover:underline">{item.title} </span>
            <span className="text-muted-foreground decoration-muted-foreground font-normal group-hover:underline">
              - {item.course}
            </span>
          </p>
          <p className="text-muted-foreground text-right text-balance group-hover:underline decoration-muted-foreground">
            {item.university}, {item.year}
          </p>
        </Link>
      ))}
    </div>
  );
}
