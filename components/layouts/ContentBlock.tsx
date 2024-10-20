export default function ContentBlock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-1xl font-semibold">{title}</h1>
        <h2 className="text-sm text-muted-foreground">{subtitle}</h2>
      </div>
      {children}
    </article>
  );
}
