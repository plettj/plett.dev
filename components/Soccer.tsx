import { saysSoccer } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function Soccer() {
  const soccer = saysSoccer();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="font-semibold text-muted-foreground cursor-pointer">
            {soccer ? "soccer" : "football"}
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-background border border-border text-foreground">
          <p>{soccer ? "Football, to many" : "Soccer, to some"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
