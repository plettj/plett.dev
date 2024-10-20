"use client";

import { usePathname } from "next/navigation";
import NavButton from "../NavButton";
import { URL_TITLES_FROM_HREF } from "@/lib/constants";

export default function TopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between gap-2 px-8 py-2">
      <section className="flex items-center">
        <h1 className="font-bold">{URL_TITLES_FROM_HREF[pathname] ?? "404"}</h1>
      </section>
      <section className="gap-2">
        {Object.keys(URL_TITLES_FROM_HREF).map((href, i) => (
          <NavButton key={i} href={href} active={pathname === href}>
            {URL_TITLES_FROM_HREF[href]}
          </NavButton>
        ))}
      </section>
    </nav>
  );
}
