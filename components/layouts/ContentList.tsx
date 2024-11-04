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
          <AccordionTrigger className="group py-2 w-full">
            <p className="font-semibold">{item.title}</p>
            <p className="text-muted-foreground text-right text-balance group-hover:underline decoration-muted-foreground">
              {item.subtitle}
            </p>
          </AccordionTrigger>
          <AccordionContent>{item.children}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
