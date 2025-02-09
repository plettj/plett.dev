import Title from "@/components/atoms/Title";
import Visitors from "@/components/atoms/Visitors";
import AboutList from "@/components/layouts/AboutList";
import { BASE_URL, META_DESCRIPTION_HOME, PATH_ABOUT } from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";
import { hobbyItems, professionalItems } from "./content";

export const metadata: Metadata = {
  title: "About",
  description: META_DESCRIPTION_HOME,
  openGraph: getOGData({
    title: "About",
    description: META_DESCRIPTION_HOME,
    url: `${BASE_URL}${PATH_ABOUT}`,
  }),
};

export default async function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center text-center w-full">
        <p className="mb-1">I enjoy many things.</p>
        <Visitors />
      </div>
      <Title>Professional Interests</Title>
      <AboutList items={professionalItems} />
      <Title>Hobbies</Title>
      <AboutList items={hobbyItems} />
    </div>
  );
}
