import { myHumansTxt, HumansTxtContent } from "./constants";

function formatHumansTxt(content: HumansTxtContent): string {
  const sections = [];

  for (const [sectionKey, sectionValue] of Object.entries(content)) {
    sections.push(`/* ${sectionKey.replaceAll("_", " ").toUpperCase()} */\n\n`);

    if (Array.isArray(sectionValue)) {
      sectionValue.forEach((item) => {
        for (const [key, value] of Object.entries(item)) {
          sections.push(`${key.replaceAll("_", " ")}: ${value}\n`);
        }
        sections.push("\n");
      });
    } else if (typeof sectionValue === "object" && sectionValue !== null) {
      for (const [key, value] of Object.entries(sectionValue)) {
        sections.push(`${key.replaceAll("_", " ")}: ${value}\n`);
      }
      sections.push("\n");
    } else if (typeof sectionValue === "string") {
      sections.push(`${sectionValue}\n\n`);
    }
  }

  return sections.join("");
}

export async function GET() {
  const textContent = formatHumansTxt(myHumansTxt);

  return new Response(textContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
