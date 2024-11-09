import InlineLink from "@/components/InlineLink";
import ProfilePhoto from "@/components/ProfilePhoto";
import {
  PATH_ABOUT,
  PATH_CV,
  PATH_CV_STATIC,
  URL_MY_GITHUB,
  URL_MY_LINKEDIN,
  PATH_WRITING,
} from "@/lib/constants";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6 sm:gap-8 flex-col sm:flex-row">
        <div className="flex flex-col gap-3 mb-2">
          <p>
            I&apos;m Josiah Plett, a software developer, designer, and
            entrepreneur.
          </p>
          <p>
            I&apos;m currently pursuing a Bachelor of Computer Science at the
            University of Waterloo, and looking for my 6th co-op job for Fall
            2025.
          </p>
        </div>
        <ProfilePhoto
          src={[
            "/images/home/Profile_Light.jpg",
            "/images/home/Profile_Dark.jpg",
          ]}
          size={256}
        />
      </div>
      <p className="mt-2">Are you...</p>
      <ul className="ml-6 list-disc [&>li]:mt-2">
        <li>
          A <span className="font-semibold dark:font-bold">recruiter?</span> See
          my{" "}
          {/* Open in a new tab on mobile, and within my website on desktop */}
          <InlineLink href={PATH_CV} className="hidden md:inline-block">
            CV
          </InlineLink>
          <InlineLink
            href={PATH_CV_STATIC}
            className="inline-block md:hidden"
            external
          >
            CV
          </InlineLink>
          ,{" "}
          <InlineLink href={URL_MY_LINKEDIN} external>
            LinkedIn
          </InlineLink>
          , or{" "}
          <InlineLink href={URL_MY_GITHUB} external>
            GitHub
          </InlineLink>
          .
        </li>
        <li>
          A <span className="font-semibold dark:font-bold">gamer?</span> Find my
          games on{" "}
          <InlineLink href="https://plett.fun/" external>
            plett.fun
          </InlineLink>
          .
        </li>
        <li>
          A <span className="font-semibold dark:font-bold">reader?</span> Check
          out <InlineLink href={PATH_WRITING}>my writing</InlineLink>.
        </li>
        <li>
          Just exploring? Start with my{" "}
          <InlineLink href={PATH_ABOUT}>about me</InlineLink> page.
        </li>
      </ul>
    </div>
  );
}
