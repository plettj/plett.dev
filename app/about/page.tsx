import { hobbyItems, professionalItems } from "./content";
import Title from "@/components/Title";
import { ContentList } from "@/components/layouts/ContentList";

export const metadata = {
  title: "Josiah Plett",
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p className="mb-1">I enjoy many things.</p>
      <Title>Professional Interests</Title>
      <ContentList items={professionalItems} />
      <Title>Hobbies</Title>
      <ContentList items={hobbyItems} />
    </div>
  );
}
