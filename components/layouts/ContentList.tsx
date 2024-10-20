import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ContentListItem = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function ContentList({ items }: { items: ContentListItem[] }) {
  return (
    <Accordion type="multiple" className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex justify-between w-full">
              <h1 className="text-1xl font-semibold">{item.title}</h1>
              <h2 className="text-sm text-muted-foreground">{item.subtitle}</h2>
            </div>
          </AccordionTrigger>
          <AccordionContent>{item.children}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
