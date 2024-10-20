import InlineLink from "@/components/InlineLink";
import { hobbyItems, professionalItems } from "./content";
import Title from "@/components/Title";
import { ContentList } from "@/components/layouts/ContentList";

export const metadata = {
  title: "Josiah Plett",
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p>
        I&apos;m Josiah Plett, a software developer and entrepreneur with a
        passion for making things people love. I&apos;m currently pursuing a
        Bachelor of Computer Science at the University of Waterloo.
      </p>
      <p>
        I enjoy many things, including{" "}
        <InlineLink href="https://plett.fun/" external>
          game development
        </InlineLink>
        , <InlineLink href="/writing">writing</InlineLink>, and{" "}
        <InlineLink href="/photography">photography</InlineLink>. Below is a
        list of more of these things.
      </p>
      <Title>Professional</Title>
      <ContentList items={professionalItems} />
      <Title>Hobby</Title>
      <ContentList items={hobbyItems} />
    </div>
  );
}
