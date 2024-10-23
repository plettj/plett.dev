import Footer from "@/components/layouts/Footer";

export default async function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full max-w-[80ch] w-full flex flex-col text-sm">
      {children}
      <Footer />
    </main>
  );
}
