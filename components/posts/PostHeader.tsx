import Image from "next/image";
import NavButton from "../NavButton";
import { URL_WRITING } from "@/lib/constants";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function PostHeader({
  title,
  coverImage,
  date,
}: {
  title: string;
  coverImage?: string;
  date: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-semibold mt-8 mr-20 leading-snug text-balance tracking-tight">
        {title}
      </h1>
      <div className="flex justify-between items-center pt-2 pb-4 border-b">
        <p>{date}</p>
        <NavButton href={URL_WRITING} className="pr-0">
          <ArrowLeftIcon /> Back
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
