import { URL_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import Link from "next/link";

export default function PostPreview({ post }: { post: Post }) {
  const date = new Date(post.date).toLocaleDateString("en-CA", {
    month: "short",
    day: "2-digit",
  });

  return (
    <Link href={`${URL_WRITING}/${post.slug}`} passHref>
      <div className="flex justify-between items-center hover:underline hover:cursor-pointer py-4 -my-4">
        <h1 className="font-semibold dark:font-bold leading-snug tracking-tight">
          {post.title}
        </h1>
        <p className="font-semibold text-muted-foreground">{date}</p>
      </div>
    </Link>
  );
}