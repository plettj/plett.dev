import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Book } from "./types";

const booksDirectory = join(process.cwd(), "books");

function filterSlugs(slugs: string[]): string[] {
  return slugs.filter((slug) => {
    return !/^(DRAFT-|ARCHIVE-)/.test(slug.toUpperCase());
  });
}

export function getBookSlugs() {
  const allSlugs: string[] = fs.readdirSync(booksDirectory);

  return filterSlugs(allSlugs);
}

/**
 * Throws if the slug is not valid; otherwise, returns the book object.
 *
 * @param slug URL slug of the book to find
 * @returns Book object corresponding to the given slug
 */
export function getBookBySlug(slug: string): Book {
  const realSlug = slug.replace(/\.md$/, "");

  if (filterSlugs([realSlug]).length < 1) {
    throw new Error(`No book corresponds to the given slug: ${slug}.`);
  }

  const fullPath = join(booksDirectory, `${realSlug}.md`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    throw new Error(`No book corresponds to the given slug: ${slug}.`);
  }

  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Book;
}

export function getBookBySlugSafely(slug: string): Book | null {
  try {
    return getBookBySlug(slug);
  } catch {
    return null;
  }
}

export function getAllBooks(): Book[] {
  const slugs = getBookSlugs();
  const books = slugs
    .map((slug) => getBookBySlug(slug))
    .sort((book1, book2) =>
      new Date(book1.date).getTime() > new Date(book2.date).getTime() ? -1 : 1,
    );
  return books;
}
