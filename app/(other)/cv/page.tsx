export const metadata = {
  title: "Resume | Josiah Plett",
};

export default async function Resume() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <iframe className="h-screen" src="/cv/Josiah_Plett_CV_2024.pdf" />
    </div>
  );
}
