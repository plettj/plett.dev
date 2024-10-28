import { hobbyItems, professionalItems } from "./content";
import Title from "@/components/Title";
import Visitors from "@/components/Visitors";
import { ContentList } from "@/components/layouts/ContentList";

export const metadata = {
  title: "About",
};

export default async function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center text-center w-full">
        <p className="mb-1">I enjoy many things.</p>
        <Visitors />
      </div>
      <Title>Professional Interests</Title>
      <ContentList items={professionalItems} />
      <Title>Hobbies</Title>
      <ContentList items={hobbyItems} />
    </div>
  );
}
