import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ContentListItem = {
  title: string;
  subtitle: string;
  year: string;
  children: React.ReactNode;
};

export function ContentList({
  items,
  open = false,
}: {
  items: ContentListItem[];
  open?: boolean;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={open ? "item-0" : undefined}
      className="w-full"
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="py-2">
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
