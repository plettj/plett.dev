import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  icons: {
    icon: `/icons/favicon.ico`,
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col gap-2 my-auto items-center">
      <h1>plett.dev</h1>
      <hr className="h-2" />
      <Button asChild className="w-64 my-2">
        <Link href="/games">games</Link>
      </Button>
    </main>
  );
}
