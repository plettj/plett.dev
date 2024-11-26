import {
  COPYRIGHT_STRING,
  URL_MY_GITHUB,
  URL_MY_LINKEDIN,
  URL_MY_OLD_SITE,
} from "@/lib/constants";
import NavButton from "../NavButton";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-12">
      <hr />
      <section className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full my-10">
        <nav className="flex gap-1 -ml-2">
          <NavButton href={URL_MY_GITHUB} external>
            <GitHubLogoIcon />
          </NavButton>
          <NavButton href={URL_MY_LINKEDIN} external>
            <LinkedInLogoIcon />
          </NavButton>
          <NavButton href={URL_MY_OLD_SITE} className="hidden sm:flex">
            Old site
          </NavButton>
        </nav>
        <p className="text-muted-foreground font-thin">{COPYRIGHT_STRING}</p>
      </section>
    </footer>
  );
}
