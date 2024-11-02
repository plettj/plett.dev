import { cn } from "@/lib/utils";

export default function Container({
  fullWidth = false,
  children,
}: {
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        "flex flex-col content-center text-sm px-6",
        fullWidth ? "w-screen sm:px-16" : "w-full max-w-[80ch] sm:px-8"
      )}
    >
      {children}
    </main>
  );
}
