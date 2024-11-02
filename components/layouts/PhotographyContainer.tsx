export default function PhotographyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full max-w-[140ch] mx-auto pb-8">{children}</div>;
}
