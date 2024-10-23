import { cn } from "@/lib/utils";
import * as React from "react";

export interface CodeProps {
  children?: React.ReactNode;
  className?: string;
}

const Code = ({ className, children }: CodeProps) => {
  return (
    <code
      className={cn(
        "inline-block rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium",
        className
      )}
    >
      {children}
    </code>
  );
};
Code.displayName = "Code";

export { Code };
