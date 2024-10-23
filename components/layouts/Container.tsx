export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full max-w-[80ch] flex flex-col text-sm px-6 sm:px-8">
      {children}
    </main>
  );
}
