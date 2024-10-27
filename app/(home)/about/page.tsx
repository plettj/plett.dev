import { hobbyItems, professionalItems } from "./content";
import Title from "@/components/Title";
import { ContentList } from "@/components/layouts/ContentList";

export const metadata = {
  title: "About",
};

export default async function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center text-center w-full">
        <p className="mb-1">I enjoy many things.</p>
        <i className="mb-1 text-muted-foreground font-thin sm:text-right">
          Not a resume. Not comprehensive.
        </i>
      </div>
      <Title>Professional Interests</Title>
      <ContentList items={professionalItems} />
      <Title>Hobbies</Title>
      <ContentList items={hobbyItems} />
    </div>
  );
}
