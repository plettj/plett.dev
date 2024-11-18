import { cn } from "@/lib/utils";
import { MouseTracker } from "./MouseTracker";

export default function MouseTooltip({
  on,
  children,
}: {
  on: boolean;
  children: React.ReactNode;
}) {
  // TODO: Modify this component so it knows if it's off-screen and puts itself on the bottom.
  return (
    <MouseTracker
      offset={{ x: 0, y: -12 }}
      className={cn("opacity-0", on && "opacity-100")}
    >
      <div className="max-w-56 border bg-background px-2 py-1.5 text-xs transform -translate-x-1/2 -translate-y-full rounded-md">
        {children}
      </div>
    </MouseTracker>
  );
}
