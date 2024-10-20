import InlineLink from "@/components/InlineLink";

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
      <p className="text-balance">
        Find my games at{" "}
        <InlineLink href="https://plett.fun/">plett.fun</InlineLink>, or writing{" "}
        <InlineLink href="/writing">here</InlineLink>.
      </p>
      <p>
        See my professional experience on my{" "}
        <InlineLink href="/cv">CV</InlineLink> or{" "}
        <InlineLink href="https://www.linkedin.com/in/josiahplett/">
          LinkedIn
        </InlineLink>
        .
      </p>
    </div>
  );
}
