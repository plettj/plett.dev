"use client";

import { useState } from "react";
import {
  useFloating,
  useClientPoint,
  useInteractions,
} from "@floating-ui/react";
import Link from "next/link";
import InlineLink from "../InlineLink";

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
      {items.map((item, index) => {
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
      })}
    </div>
  );
}
