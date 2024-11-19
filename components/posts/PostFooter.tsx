import NavButton from "../NavButton";
import { PATH_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";

export default function PostFooter({ nextPost }: { nextPost?: Post }) {
  return (
    <div className="flex justify-between items-center w-full">
      {nextPost ? (
        <div className="flex max-w-full overflow-hidden items-center h-5 gap-2 mt-2 -mb-1">
          <NavButton href={PATH_WRITING} className="pl-0">
            <ArrowLeftIcon /> Back
          </NavButton>
          <Separator orientation="vertical" />
          <NavButton href={`${PATH_WRITING}/${nextPost.slug}`}>
            {nextPost.title} <ArrowRightIcon />
          </NavButton>
        </div>
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
