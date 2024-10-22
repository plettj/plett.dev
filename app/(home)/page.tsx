import InlineLink from "@/components/InlineLink";
import { URL_ABOUT, URL_CV, URL_WRITING } from "@/lib/constants";

export const metadata = {
  title: "Josiah Plett",
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p>
        I&apos;m Josiah Plett, a software developer, designer, and entrepreneur.
        I&apos;m currently pursuing a Bachelor of Computer Science at the
        University of Waterloo, and looking for my 6th co-op job for Fall 2025.
      </p>
      <p className="mt-2">Are you...</p>
      <ul className="ml-6 list-disc [&>li]:mt-2">
        <li>
          A <span className="font-semibold">recruiter?</span> See my{" "}
          <InlineLink href={URL_CV}>CV</InlineLink>,{" "}
          <InlineLink href="https://www.linkedin.com/in/josiahplett/" external>
            LinkedIn
          </InlineLink>
          , or{" "}
          <InlineLink href="https://github.com/plettj" external>
            GitHub
          </InlineLink>
          .
        </li>
        <li>
          A <span className="font-semibold">gamer?</span> Find my games on{" "}
          <InlineLink href="https://plett.fun/" external>
            plett.fun
          </InlineLink>
          .
        </li>
        <li>
          A <span className="font-semibold">reader?</span> Check out{" "}
          <InlineLink href={URL_WRITING}>my writing</InlineLink>.
        </li>
        <li>
          Just exploring? Start with my{" "}
          <InlineLink href={URL_ABOUT}>about me</InlineLink> page.
        </li>
      </ul>
      {/* <Image
        src="/images/home/Socratica_Symposium_Presentation_Compressed.jpg"
        alt="Josiah on stage in front of a live 1000-person audience"
        priority
        width={1824}
        height={538}
      /> */}
    </div>
  );
}
