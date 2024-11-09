---
title: "How To Make This Blog Site"
preview: "A tutorial for building your custom, search-engine-optimized, statically generated blog site with Next.js."
date: "2024-10-23T00:54:22Z"
tags:
  [
    "main",
    "writing",
    "personal",
    "blog",
    "software",
    "next.js",
    "tailwind",
    "static",
    "ssg",
    "productivity",
    "seo",
    "web development",
    "web dev",
  ]
lat: "55.7934747"
long: "12.5250258"
---

This site creates statically generated and search engine optimized posts out of [markdown](https://www.markdownguide.org/getting-started/) files, displays them nicely, and provides a way to [view them all](/posts).

Everything from the title to the URL slug to the text content is all part of one markdown file.

Add a file to the `/posts` folder, and a new post is born.

### How do we build it?

All we really need is [this example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) from the [Next.js SSG](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) (Static Site Generation) documentation. Statically generating blogs are not hard!

Here, I'll explain how it all works.

> If at any point you need more context, see [my site's Github repository](https://github.com/plettj/plett.dev).

#### 0. Code environment

This is a [Next.js](https://nextjs.org/) site built with [tailwind.css](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/), and hosted on [Vercel](https://vercel.com/) for free. If you've got that set up then following along will be a breeze. If you don't, start [here](https://ui.shadcn.com/docs/installation/next) and you'll be caught up in 2 minutes.

#### 1. Support front matter

[Front matter](https://dpericich.medium.com/what-is-front-matter-and-how-is-it-used-to-create-dynamic-webpages-9d8dc053b457) is used as [metadata](https://atlan.com/what-is-metadata/) for all kinds of files, including markdown files. For our blog, we'll be adhering to [these](/lib/blog/types.ts) custom-defined types, and using [gray-matter](https://www.npmjs.com/package/gray-matter) for actually reading the front matter.

#### 2. Parse the markdown

The next step is using [remark](https://www.npmjs.com/package/remark) to convert our markdown files into HTML. Specifically, [remark-html](https://www.npmjs.com/package/remark-html/v/14.0.1) gets the job done in just one line:

```
const HTML = await remark().use(html).process(MARKDOWN).toString();
```

#### 3. Create the posts

Only three things now need to happen for the posts to be made.

- Generate the post's metadata with [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).
- Generate the post's url [slug](https://developer.mozilla.org/en-US/docs/Glossary/Slug) from its file name using [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).
- Serve the post's page contents, which come from the code on the previous step.

#### 4. Style the posts

The last technical aspect of our static blog generation is styling the interface. Luckily, [CSS modules](https://nextjs.org/docs/app/building-your-application/styling) and the [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) directive make the job easy. After adding our styles to a CSS module and importing it like so, we're off to the races!

```
import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }: { content: string }) {
  return (
    <article
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
```

### Is that it?

Yup! If you'd like to take a closer look at the code, feel free to explore the files [here on github](https://github.com/plettj/plett.dev) or give it a star if you found this helpful. The code is quite clean, so you should have no trouble navigating it.

---

While this post does provide the basics to get you up and running, I did skip over a number of web essentials. Be sure to take a look at [RSS feeds](https://www.rssboard.org/rss-specification#whatIsRss), [sitemaps](https://www.sitemaps.org/protocol.html), [robots](https://developers.google.com/search/docs/crawling-indexing/robots/intro), and [manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest), if you want to do everything right. Heck, you could even make a [humans.txt](https://humanstxt.org/) like [me](/humans.txt) and [Google](https://www.google.com/humans.txt) while you're busy checking every box.

Thanks for reading my first blog post!
