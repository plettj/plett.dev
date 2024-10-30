import { Metadata } from "next";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getAllPosts, getPostBySlugSafely } from "@/lib/posts/api";
import { author } from "@/lib/posts/constants";
import PostHeader from "@/components/posts/PostHeader";
import PostBody from "@/components/posts/PostBody";
import { Code } from "@/components/ui/code";
import Navigation from "@/components/layouts/Navigation";
import PostFooter from "@/components/posts/PostFooter";
import { PATH_WRITING } from "@/lib/constants";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return (
      <div className="w-full">
        <Navigation />
        <p className="mb-6">
          Post <Code>{params.slug[0]}</Code> not found.
        </p>
        <PostFooter />
      </div>
    );
  }

  const content = await markdownToHtml(post.content);

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;

  return (
    <article className="mt-8 sm:mt-4">
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody content={content} />
      <PostFooter nextPost={nextPost} />
    </article>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return {
      title: "Post 404",
    };
  }

  const title = `${post.title}`;

  return {
    title,
    description: post.preview,
    keywords: post.tags,
    alternates: {
      canonical: `${PATH_WRITING}/${post.slug}`,
    },
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
