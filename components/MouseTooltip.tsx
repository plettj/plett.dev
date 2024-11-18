import { cn } from "@/lib/utils";
import { MouseTracker } from "./MouseTracker";

export default function MouseTooltip({
  on,
  children,
}: {
  on: boolean;
  children: React.ReactNode;
}) {
  console.log(on);
  return (
    <MouseTracker
      offset={{ x: -100, y: 0 }}
      className={cn("opacity-0 bg-red-100", on && "opacity-100")}
    >
      {children}
    </MouseTracker>
  );
}
