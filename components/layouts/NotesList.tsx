"use client";

import { useState } from "react";
import NotesItem from "./NotesItem";

export type NotesListItem = {
  title: string;
  // For smaller screens
  shortTitle: string;
  course: { name: string; href: string };
  year: string;
  // Abbreviated form
  university: string;
  // Used for the tooltip
  summary: string;
  // PDF link
  href: string;
};

export default function NotesList({ items }: { items: NotesListItem[] }) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-2 items-center">
      {items.map((item, index) => (
        <NotesItem
          key={index}
          item={item}
          index={index}
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
        />
      ))}
    </div>
  );
}
