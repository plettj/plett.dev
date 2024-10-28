import { COPYRIGHT_STRING, URL_OLD_SITE } from "@/lib/constants";
import NavButton from "../NavButton";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-12">
      <hr />
      <section className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full my-10">
        <nav className="flex gap-2 -ml-2">
          <NavButton href="https://github.com/plettj" external>
            GitHub
          </NavButton>
          <NavButton href="https://www.linkedin.com/in/josiahplett/" external>
            LinkedIn
          </NavButton>
          <NavButton href={URL_OLD_SITE} className="hidden sm:flex">
            Old site
          </NavButton>
        </nav>
        <p className="text-muted-foreground font-thin">{COPYRIGHT_STRING}</p>
      </section>
    </footer>
  );
}
