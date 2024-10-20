import InlineLink from "@/components/InlineLink";
import ContentBlock from "@/components/layouts/ContentBlock";

export const metadata = {
  title: "Josiah Plett",
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p>
        I&apos;m Josiah Plett, a software developer and designer with a passion
        for making things people love. I&apos;m currently pursuing a Bachelor of
        Computer Science at the University of Waterloo.
      </p>
      <p>
        Find my games at{" "}
        <InlineLink href="https://plett.fun/" external>
          plett.fun
        </InlineLink>
        , or writing <InlineLink href="/writing">here</InlineLink>.
      </p>
      <p>
        Find my work experience on my <InlineLink href="/cv">CV</InlineLink> or
        on{" "}
        <InlineLink href="https://www.linkedin.com/in/josiahplett/" external>
          LinkedIn
        </InlineLink>
        .
      </p>
      <ContentBlock title="Startups" subtitle="2024-Present">
        Some text content in the block.
      </ContentBlock>
      <ContentBlock title="Game dev" subtitle="2013-Present">
        Some text content in the block.
      </ContentBlock>
    </div>
  );
}
