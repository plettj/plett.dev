import NotesList from "@/components/layouts/NotesList";
import Title from "@/components/Title";
import { csItems, mathItems } from "./content";
import { Metadata } from "next/types";
import { BASE_URL, META_DESCRIPTION_NOTES, PATH_NOTES } from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import InlineLink from "@/components/InlineLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Course Notes",
  description: META_DESCRIPTION_NOTES,
  openGraph: getOGData({
    title: "Course Notes",
    description: META_DESCRIPTION_NOTES,
    url: `${BASE_URL}${PATH_NOTES}`,
  }),
};

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full">
        <p className="mb-1">
          My university course notes.
          <br />
          <br />
          They are very concise while covering all course content, intended to
          be used as a starting-point for planning your studies, and a reference
          sheet during those studies.
        </p>
      </div>
      <Disclaimer />
      <Title>Mathematics</Title>
      <NotesList items={mathItems} />
      <Title>Hobbies</Title>
      <NotesList items={csItems} />
    </div>
  );
}

function Disclaimer() {
  return (
    <Accordion type="single" collapsible className="w-full -my-4 py-0">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="mr-2 font-semibold text-muted-foreground">
            Disclaimer
          </span>
          <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          <div className="flex-1" />
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-muted-foreground">
            Notes are written entirely by me, while attending lectures at the
            University of Waterloo and the Technical University of Denmark. No
            monetary compensation was received for these notes. You may use or
            distribute them provided you attribute me,{" "}
            <InlineLink href={BASE_URL}>Josiah Plett</InlineLink>, and the
            associated university.
            <br />
            <br />I do not intend to infringe on the IP rights of any party, and
            am happy to honour takedown notices.
            <br />
            <br />
            Most of these notes have either been adopted by professors as
            official material, or accepted as complete. Regardless, they are
            provided as-is with no guarantee of accuracy.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
