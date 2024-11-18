"use client";

import { usePathname } from "next/navigation";
import NavButton from "../NavButton";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "../ThemeToggle";
import {
  PATH_ABOUT,
  PATH_HOME,
  PATH_NOTES,
  PATH_PHOTOGRAPHY,
  PATH_WRITING,
} from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 -mx-2 my-10">
      <NavButton href={PATH_HOME} active={pathname === PATH_HOME}>
        J
      </NavButton>
      <NavButton href={PATH_ABOUT} active={pathname === PATH_ABOUT}>
        About
      </NavButton>
      <NavButton href={"https://plett.fun"} external>
        Games <ExternalLinkIcon />
      </NavButton>
      <NavButton href={PATH_WRITING} active={pathname.includes(PATH_WRITING)}>
        Writing
      </NavButton>
      <NavButton
        href={PATH_NOTES}
        active={pathname.includes(PATH_NOTES)}
        className="hidden sm:flex"
      >
        Notes
      </NavButton>
      <NavButton
        href={PATH_PHOTOGRAPHY}
        active={pathname === PATH_PHOTOGRAPHY}
        className="hidden sm:flex"
      >
        Photography
      </NavButton>
      <div className="flex-1" />
      <ThemeToggle />
    </nav>
  );
}
