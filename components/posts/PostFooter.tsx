import NavButton from "../NavButton";
import { URL_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function PostFooter({ nextPost }: { nextPost?: Post }) {
  if (!nextPost) {
    return (
      <NavButton href={URL_WRITING} className="pl-0 mt-2 -mb-1">
        <ArrowLeftIcon /> Back to Writing
      </NavButton>
    );
  }

  return (
    <NavButton
      href={`${URL_WRITING}/${nextPost.slug}`}
      className="pl-0 mt-2 -mb-1"
    >
      {nextPost.title} <ArrowRightIcon />
    </NavButton>
  );
}
