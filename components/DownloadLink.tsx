"use client";

import { cn } from "@/lib/utils";
import { saveAs } from "file-saver";

export default function DownloadLink({
  children,
  filepath,
  filename,
  className,
}: Readonly<{
  children: React.ReactNode;
  filepath: string;
  filename: string;
  className?: string;
}>) {
  const saveFile = () => {
    saveAs(filepath, filename);
  };

  return (
    <span
      onClick={saveFile}
      className={cn(
        "p-0 h-6 -my-1 text-muted-foreground font-semibold decoration-dotted underline sm:decoration-solid sm:no-underline hover:underline",
        className
      )}
    >
      {children}
    </span>
  );
}
