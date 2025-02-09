"use client";

import NavButton from "@/components/NavButton";
import {
  THEME_DARK_MUTED,
  THEME_LIGHT_MUTED,
  URL_WEBRING,
} from "@/lib/constants";
import {
  autoUpdate,
  flip,
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LionSvg from "./LionSvg";
import WebringArrow from "./WebringArrow";

export default function WebringIcon() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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

  // Prevent theme rendering mismatch between server and client.
  useEffect(() => setMounted(true), []);

  const iconColor =
    theme === "dark" || resolvedTheme === "dark"
      ? THEME_DARK_MUTED
      : THEME_LIGHT_MUTED;

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      <NavButton href={URL_WEBRING} external>
        {!mounted ? (
          <LionSvg color={THEME_LIGHT_MUTED} />
        ) : (
          <LionSvg color={iconColor} />
        )}
      </NavButton>
      {isOpen && (
        <span
          ref={refs.setFloating}
          {...getFloatingProps()}
          style={{ ...floatingStyles, ...transitionStyles }}
          className="flex gap-2 max-w-64 bg-background text-muted-foreground border text-xs rounded px-2 py-1.5"
        >
          <WebringArrow direction="prev" />
          <span>UW CS Webring</span>
          <WebringArrow direction="next" />
        </span>
      )}
    </div>
  );
}
