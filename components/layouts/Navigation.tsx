"use client";

import { usePathname } from "next/navigation";
import NavButton from "../NavButton";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 px-6 my-10">
      <NavButton href={"/"} active={pathname === "/"}>
        Home
      </NavButton>
      <NavButton href={"https://plett.fun"} external>
        Games <ExternalLinkIcon />
      </NavButton>
      <NavButton href={"/writing"} active={pathname.includes("/writing")}>
        Writing
      </NavButton>
      <NavButton href={"/photography"} active={pathname === "/photography"}>
        Photography
      </NavButton>
    </nav>
  );
}
