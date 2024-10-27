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
          <AccordionTrigger className="py-2 w-full decoration-muted-foreground">
            <p className="font-semibold">{item.title}</p>
            <p className="text-muted-foreground">{item.subtitle}</p>
          </AccordionTrigger>
          <AccordionContent>{item.children}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
