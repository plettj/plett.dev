# Blog Library Information

The code that statically generates my blog posts from markdown files is modelled after [this](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) example created by the Vercel team.

### How does it work?

Statically generating blog posts is not particularly complicated.

Here is a walkthrough of how to add a post, while explaining the code details along the way.

1. Create a markdown file out of your new blog post. It should contain [front matter](https://dpericich.medium.com/what-is-front-matter-and-how-is-it-used-to-create-dynamic-webpages-9d8dc053b457) adhering to [these](/lib/blog/types.ts) custom-defined types.

2. It uses the [gray-matter](https://www.npmjs.com/package/gray-matter) library to convert the front-matter, or metadata, of my post markdown files into an object.
