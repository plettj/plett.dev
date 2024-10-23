"use client";

import { usePathname } from "next/navigation";
import NavButton from "../NavButton";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "../ThemeToggle";
import {
  URL_ABOUT,
  URL_HOME,
  URL_PHOTOGRAPHY,
  URL_WRITING,
} from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 px-6 my-10">
      <NavButton href={URL_HOME} active={pathname === URL_HOME}>
        J
      </NavButton>
      <NavButton href={URL_ABOUT} active={pathname === URL_ABOUT}>
        About
      </NavButton>
      <NavButton href={"https://plett.fun"} external>
        Games <ExternalLinkIcon />
      </NavButton>
      <NavButton href={URL_WRITING} active={pathname.includes(URL_WRITING)}>
        Writing
      </NavButton>
      <NavButton
        href={URL_PHOTOGRAPHY}
        active={pathname === URL_PHOTOGRAPHY}
        className="hidden sm:flex"
      >
        Photography
      </NavButton>
      <div className="flex-1" />
      <ThemeToggle />
    </nav>
  );
}
