import NavButton from "../NavButton";

export default async function Footer() {
  return (
    <footer className="flex flex-col w-full mt-12">
      <hr className="border-balance mx-8" />
      <section className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full px-6 my-10">
        <div className="flex gap-2">
          <NavButton href="https://github.com/plettj" external>
            GitHub
          </NavButton>
          <NavButton href="https://www.linkedin.com/in/josiahplett/" external>
            LinkedIn
          </NavButton>
        </div>
        <p className="text-muted-foreground font-thin mx-2">
          Copyright {new Date().getFullYear()} © Josiah Plett
        </p>
      </section>
    </footer>
  );
}
