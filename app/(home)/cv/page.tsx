import InlineLink from "@/components/InlineLink";

export const metadata = {
  title: "Resume | Josiah Plett",
};

export default async function Resume() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p>
        Click <InlineLink href="/cv/Josiah_Plett_CV_2024.pdf">here</InlineLink>{" "}
        to open my CV in a separate tab.
      </p>
      <iframe
        className="h-[126vw] max-h-[835px] mt-8 mb-2"
        src="/cv/Josiah_Plett_CV_2024.pdf"
      />
    </div>
  );
}
