import { COPYRIGHT_STRING, PATH_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import NavButton from "../common/links/NavButton";
import { Separator } from "../ui/separator";

export default function PostFooter({ nextPost }: { nextPost?: Post }) {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
      {nextPost ? (
        <div className="flex max-w-full overflow-hidden items-center h-5 gap-2 mt-2 -mb-1">
          <NavButton href={PATH_WRITING} className="pl-0">
            <ArrowLeftIcon /> Back
          </NavButton>
          <Separator orientation="vertical" />
          <NavButton
            href={`${PATH_WRITING}/${nextPost.slug}`}
            className="flex-1 min-w-0"
          >
            <span className="truncate overflow-hidden whitespace-nowrap text-ellipsis">
              {nextPost.title}
            </span>
            <ArrowRightIcon />
          </NavButton>
        </div>
      ) : (
        <NavButton href={PATH_WRITING} className="pl-0 mt-2 -mb-1">
          <ArrowLeftIcon /> Back to Writing
        </NavButton>
      )}
      <p className="hidden sm:block text-muted-foreground font-thin flex-shrink-0 pr-0 mt-2 -mb-1">
        {COPYRIGHT_STRING}
      </p>
    </div>
  );
}
