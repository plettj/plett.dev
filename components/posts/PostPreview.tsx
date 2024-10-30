import { PATH_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import Link from "next/link";

export default function PostPreview({ post }: { post: Post }) {
  const date = new Date(post.date).toLocaleDateString("en-CA", {
    month: "short",
    day: "2-digit",
  });

  return (
    <Link href={`${PATH_WRITING}/${post.slug}`} passHref>
      <div className="flex justify-between hover:underline hover:cursor-pointer py-4 -my-4">
        <h1 className="font-semibold dark:font-bold tracking-tight text-balance w-full">
          {post.title}
        </h1>
        <p className="w-[9ch] font-semibold dark:font-bold text-muted-foreground text-right">
          {date}
        </p>
      </div>
    </Link>
  );
}
