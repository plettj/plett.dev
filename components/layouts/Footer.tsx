import {
  URL_MY_GITHUB,
  URL_MY_LINKEDIN,
  URL_MY_OLD_SITE,
} from "@/lib/constants";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import NavButton from "../common/links/NavButton";
import WebringIcon from "../common/webring/WebringIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-12">
      <hr />
      <section className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full my-10">
        <nav className="flex gap-1 -ml-2">
          <NavButton href={URL_MY_GITHUB} external>
            <GitHubLogoIcon />
            <span className="sr-only">GitHub</span>
          </NavButton>
          <NavButton href={URL_MY_LINKEDIN} external>
            <LinkedInLogoIcon />
            <span className="sr-only">LinkedIn</span>
          </NavButton>
          <WebringIcon />
          <NavButton href={URL_MY_OLD_SITE} className="hidden sm:flex">
            Old site
          </NavButton>
        </nav>
        <NavButton href="/feed.xml" external className="px-0 -ml-2 font-thin">
          RSS
        </NavButton>
      </section>
    </footer>
  );
}
