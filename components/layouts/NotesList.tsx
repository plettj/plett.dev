export type NotesListItem = {
  title: string;
  course: string;
  year: string;
  university: string;
  summary: string;
  href: string;
};

export default function NotesList({ items }: { items: NotesListItem[] }) {
  return (
    <div className="flex flex-col gap-2 items-center w-full bg-red-500">
      {items.map((item, index) => (
        <div key={index} className="group py-2 w-full">
          <p className="font-semibold">{item.title}</p>
          <p className="text-muted-foreground text-right text-balance group-hover:underline decoration-muted-foreground">
            {item.course} ({item.year}) at {item.university}
          </p>
        </div>
      ))}
    </div>
  );
}
