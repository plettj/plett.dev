import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // Allow raw HTML like <sup>
    .process(markdown);
  return result.toString();
}
