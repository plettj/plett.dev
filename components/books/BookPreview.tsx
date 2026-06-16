import { Book } from "@/lib/books/types";
import {} from "@/lib/constants";
import Link from "next/link";

// TODO: Convert this to a card-based format with images. Use reading time and coverImage.
export default function BookPreview({ book }: { book: Book }) {
  const date = new Date(book.date).toLocaleDateString("en-CA", {
    month: "short",
    day: "2-digit",
  });

  return (
    // TODO: Don't hard-code this; card based format should take care of this.
    <Link href={`/raytracing`} passHref role="navigation">
      <div className="flex justify-between group hover:underline hover:cursor-pointer py-4 -my-4">
        <h1 className="font-semibold dark:font-bold tracking-tight text-balance w-full">
          {book.title}
        </h1>
        <p className="w-[9ch] font-semibold dark:font-bold text-muted-foreground text-right group-hover:underline decoration-muted-foreground">
          {date}
        </p>
      </div>
    </Link>
  );
}
