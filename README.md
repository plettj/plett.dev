# plett.dev

This repo holds the code to my personal website at [plett.dev](https://plett.dev).

I keep the code simple, and I care more about best practices than my sanity.

### Tech

- Framework: [Next.js](https://nextjs.org/)
- Hosting: [Vercel](https://vercel.com)
- Styling: [shadcn/ui](https://ui.shadcn.com/) with [Tailwind CSS](https://tailwindcss.com)
- Database: [Redis](https://redis.io/) with [Upstash](https://upstash.com/)
- Design: [Figma](https://figma.com)

### Features

- Statically generated posts from markdown, with search engine optimization ([writing](https://plett.dev/posts)).
- Statically generated _books_ from markdown, with a dynamic TOC and responsive layout ([raytracing book](https://plett.dev/raytracing)).
- Custom masonry layout with modern image loading ([photography](https://plett.dev/photography)).
- Mouse-following tooltips ([notes](https://plett.dev/notes)).
- Thoroughly tested responsive design and ARIA compliance.

<details>
<summary>Developer to-dos</summary>
<br>

- [x] Solve Next.js security vulnerability by upgrading to Next.js 16 ([resource](https://vercel.com/kb/bulletin/react2shell#how-to-upgrade-for-next.js))
- [x] Allow book contents to be written entirely in markdown.
  - [x] Make the actual introduction separate, and above the main titles.
    - [ ] Include an inline image in the primary intro, showing progression.
  - [x] Decide if I even want pseudocode at all (it's a lot of work)...
    - [x] Remove pseudocode from the plan.
  - [x] Gutter citations.
    - [x] Ensure they change when the screen gets smaller.
  - [ ] On mobile, ensure images are in the correct spot between paragraphs, not clumped at the end.
    - [x] Remove images from the right column on big screens.
  - [ ] Show on my Writing page.
  - [x] Dynamic reading time estimates.
  - [ ] (After writing) Toss in relevant links throughout (in the form of citations?).
- [ ] Improve metadata on all pages by fixing SSG metadata, and using SEO tools beyond metadata and sitemaps.
- [ ] Hook up Vercel Analytics and then Use the data to inform my next updates.

</details>

### License

1. If you intend to copy much of this website, simply fork the repo, and remove all my personal text and files before you deploy.
2. Drop a star and credit me if you found this repo useful. :-]
3. Otherwise, enjoy!
