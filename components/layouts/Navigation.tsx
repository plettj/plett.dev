"use client";

import {
  PATH_ABOUT,
  PATH_HOME,
  PATH_NOTES,
  PATH_PHOTOGRAPHY,
  PATH_WRITING,
  URL_MY_GAMES,
} from "@/lib/constants";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../atoms/ThemeToggle";
import NavButton from "../common/links/NavButton";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 -mx-2 my-10">
      <NavButton
        href={PATH_HOME}
        active={pathname === PATH_HOME}
        aria-label="Home"
      >
        J
      </NavButton>
      <NavButton
        href={PATH_ABOUT}
        active={pathname === PATH_ABOUT}
        aria-label="About"
      >
        About
      </NavButton>
      <NavButton href={URL_MY_GAMES} external aria-label="My Games">
        Games <ExternalLinkIcon />
      </NavButton>
      <NavButton
        href={PATH_WRITING}
        active={pathname.includes(PATH_WRITING)}
        aria-label="Writing"
      >
        Writing
      </NavButton>
      <NavButton
        href={PATH_NOTES}
        active={pathname.includes(PATH_NOTES)}
        aria-label="Course Notes"
        className="hidden sm:flex"
      >
        Notes
      </NavButton>
      <NavButton
        href={PATH_PHOTOGRAPHY}
        active={pathname === PATH_PHOTOGRAPHY}
        aria-label="Photography"
        className="hidden sm:flex"
      >
        Photography
      </NavButton>
      <div className="flex-1" />
      <ThemeToggle />
    </nav>
  );
}
