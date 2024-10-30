import NavButton from "../NavButton";
import { PATH_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function PostFooter({ nextPost }: { nextPost?: Post }) {
  return (
    <div className="flex justify-between items-center w-full">
      {nextPost ? (
        <NavButton
          href={`${PATH_WRITING}/${nextPost.slug}`}
          className="pl-0 mt-2 -mb-1"
        >
          {nextPost.title} <ArrowRightIcon />
        </NavButton>
      ) : (
        <NavButton href={PATH_WRITING} className="pl-0 mt-2 -mb-1">
          <ArrowLeftIcon /> Back to Writing
        </NavButton>
      )}
      <NavButton href="/feed.xml" className="pr-0 mt-2 -mb-1 font-thin">
        RSS
      </NavButton>
    </div>
  );
}
