import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full max-w-[80ch] w-full flex flex-col text-sm">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
