import { URL_WEBRING } from "@/lib/constants";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function WebringArrow({
  direction,
}: {
  direction: "prev" | "next";
}) {
  return (
    <a
      href={`${URL_WEBRING}?nav=${direction}`}
      rel="noopener noreferrer"
      target="_blank"
      className="cursor-pointer text-foreground hover:text-muted-foreground"
    >
      {direction == "prev" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </a>
  );
}
