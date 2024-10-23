import { Metadata } from "next";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getAllPosts, getPostBySlugSafely } from "@/lib/posts/api";
import { author } from "@/lib/posts/constants";
import PostHeader from "@/components/posts/PostHeader";
import { PostBody } from "@/components/posts/PostBody";
import { Code } from "@/components/ui/code";
import Navigation from "@/components/layouts/Navigation";
import { URL_WRITING } from "@/lib/constants";
import NavButton from "@/components/NavButton";
import PostFooter from "@/components/posts/PostFooter";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="px-8">
          <p>
            Post <Code>{params.slug[0]}</Code> not found.
          </p>
          <NavButton href={URL_WRITING} className="block px-0 mt-6">
            Back
          </NavButton>
        </div>
      </>
    );
  }

  const content = await markdownToHtml(post.content);

  return (
    <article className="px-8 mt-8">
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody content={content} />
      <PostFooter />
    </article>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return {};
  }

  const title = `${post.title}`;

  return {
    title,
    description: post.preview,
    generator: "Next.js",
    keywords: post.tags,
    authors: author,
    creator: "Josiah Plett",
    openGraph: {
      type: "article",
      title,
      description: post.preview,
      siteName: "Josiah Plett",
      ...(post.ogImage && { image: [{ url: post.ogImage }] }),
      locale: "en_CA",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}
