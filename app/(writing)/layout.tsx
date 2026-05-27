import Container from "@/components/layouts/Container";

export default async function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container hideNavBar>{children}</Container>;
}
