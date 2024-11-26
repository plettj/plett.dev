"use client";

import {
  useClientPoint,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import Link from "next/link";
import { useState } from "react";
import InlineLink from "../InlineLink";
import { NotesListItem } from "./NotesList";

type NotesItemProps = {
  item: NotesListItem;
  index: number;
  activeTooltip: number | null;
  setActiveTooltip: (index: number | null) => void;
};

export default function NotesItem({
  item,
  index,
  activeTooltip,
  setActiveTooltip,
}: NotesItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const clientPoint = useClientPoint(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    clientPoint,
  ]);

  const handleMouseEnter = () => {
    setActiveTooltip(index);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
    setIsOpen(false);
  };

  // TODO: Extract into a separate component.
  return (
    <div
      key={index}
      className="w-full group flex justify-between items-center py-2"
    >
      <div
        ref={refs.setReference}
        {...getReferenceProps({
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })}
      >
        <Link
          href={item.href}
          target="_blank"
          className="underline font-semibold text-balance"
        >
          <span className="hidden sm:inline-block underline decoration-dotted hover:decoration-solid">
            {item.title}
          </span>
          <span className="sm:hidden underline decoration-dotted hover:decoration-solid">
            {item.shortTitle}
          </span>
        </Link>
      </div>
      <p className="flex-none text-muted-foreground text-right font-thin decoration-muted-foreground">
        <InlineLink href={item.course.href} external>
          {item.course.name}
        </InlineLink>{" "}
        {item.university} {item.year}
      </p>
      {isOpen && activeTooltip === index && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            transform: `${floatingStyles.transform} translateY(-100%) translateY(-12px)`,
          }}
          {...getFloatingProps()}
          className="max-w-64 bg-background border text-xs rounded px-2 py-1.5 pointer-events-none"
        >
          {item.summary}
        </div>
      )}
    </div>
  );
}
