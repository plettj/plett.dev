import Image from "next/image";
import NavButton from "../NavButton";
import { PATH_WRITING } from "@/lib/constants";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { formatDate } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";

export default function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
}: {
  title: string;
  subtitle?: string;
  coverImage?: string;
  date: string;
}) {
  return (
    <>
      <div className="flex justify-between items-start pt-6 -mr-2">
        <h1 className="text-2xl font-semibold mt-[2px] pr-4 text-balance tracking-tight">
          {title}
        </h1>
        <ThemeToggle />
      </div>
      {subtitle && (
        <i className="text-lg font-thin text-muted-foreground">{subtitle}</i>
      )}
      <div className="flex justify-between items-center pt-6 pb-4 border-b -mr-1">
        <p>{formatDate(date)}</p>
        <NavButton href={PATH_WRITING} className="pr-0">
          <ArrowLeftIcon /> Home
        </NavButton>
      </div>
      {coverImage && (
        <div className="relative w-full">
          <Image src={coverImage} alt={title} fill />
        </div>
      )}
    </>
  );
}
