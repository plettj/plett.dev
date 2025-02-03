"use client";

import {
  autoUpdate,
  flip,
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import NavButton from "./NavButton";

// TODO: Make this the desktop-only icon, and make one for mobile.
// TODO: Copy the svg for the lion from Justin's repo and customize the colours.
export default function WebringIcon() {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [flip()],
    whileElementsMounted: autoUpdate,
  });
  const { styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
  });

  const hover = useHover(context, {
    move: false,
    handleClose: safePolygon(),
    delay: { open: 0, close: 200 },
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      <NavButton href={"https://cs.uwatering.com/#https://plett.dev"} external>
        <Image
          src={
            resolvedTheme === "dark"
              ? "https://cs.uwatering.com/icon.white.svg"
              : "https://cs.uwatering.com/icon.black.svg"
          }
          height={16}
          width={16}
          alt="UW CS Webring"
          className="opacity-70"
        />
      </NavButton>
      {isOpen && (
        <span
          ref={refs.setFloating}
          {...getFloatingProps()}
          style={{ ...floatingStyles, ...transitionStyles }}
          className="flex gap-2 max-w-64 bg-background text-muted-foreground border text-xs rounded px-2 py-1.5"
        >
          <TooltipNavigateIcon href="https://cs.uwatering.com/#https://plett.dev?nav=prev">
            <ArrowLeftIcon />
          </TooltipNavigateIcon>
          <a
            href="https://cs.uwatering.com/#https://plett.dev"
            className="inline-block sm:hidden cursor-pointer text-foreground hover:text-muted-foreground"
          >
            UW CS Webring
          </a>
          <span className="hidden sm:inline-block">UW CS Webring</span>
          <TooltipNavigateIcon href="https://cs.uwatering.com/#https://plett.dev?nav=next">
            <ArrowRightIcon />
          </TooltipNavigateIcon>
        </span>
      )}
    </div>
  );
}

function TooltipNavigateIcon({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="cursor-pointer text-foreground hover:text-muted-foreground"
    >
      {children}
    </a>
  );
}
