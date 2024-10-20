import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Josiah Plett",
};

export default async function Home() {
  return (
    <div className="flex flex-col gap-2 px-8 overflow-y-auto scrollbar">
      <p className="text-balance">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button asChild className="w-64 my-2">
        <Link href="/games">games</Link>
      </Button>
    </div>
  );
}
