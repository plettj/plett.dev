import InlineLink from "./InlineLink";

/**
 * A component for an InlineLink that should function differently on desktop and mobile.
 */
export default function ResponsiveInlineLink({
  desktopHref,
  mobileHref,
  children,
}: Readonly<{
  desktopHref: string;
  mobileHref: string;
  children: React.ReactNode;
}>) {
  return (
    <>
      <InlineLink href={desktopHref} className="hidden md:inline-block">
        {children}
      </InlineLink>
      <InlineLink href={mobileHref} className="inline-block md:hidden" external>
        {children}
      </InlineLink>
    </>
  );
}
