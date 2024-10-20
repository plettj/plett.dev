import NavButton from "../NavButton";

export default async function TopNavigation() {
  return (
    <nav className="gap-2 px-6 py-2">
      <NavButton href="/">Home</NavButton>
      <NavButton href="/games">Games</NavButton>
      <NavButton href="/writing">Writing</NavButton>
      <NavButton href="/photography">Photography</NavButton>
      <NavButton href="/media">Media</NavButton>
      <NavButton href="/misc">Miscellaneous</NavButton>
      <NavButton href="/lists">Lists</NavButton>
      <NavButton href="/cv">CV</NavButton>
    </nav>
  );
}
