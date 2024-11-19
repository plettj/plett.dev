import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Container({
  fullWidth = false,
  hideNavBar = false,
  children,
}: {
  fullWidth?: boolean;
  hideNavBar?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        "flex flex-col text-sm px-6",
        fullWidth ? "w-screen sm:px-16" : "w-full max-w-[80ch] sm:px-8",
      )}
    >
      {!hideNavBar && (
        <div className="max-w-[80ch] w-full mx-auto">
          <Navigation />
        </div>
      )}

      {children}

      <div className="max-w-[80ch] w-full mx-auto">
        <Footer />
      </div>
    </main>
  );
}
