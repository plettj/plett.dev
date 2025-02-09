import { isSoccer } from "soccer-football";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Soccer() {
  const soccer = isSoccer(); // Localization utility from a public npm package I made: https://www.npmjs.com/package/soccer-football

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
