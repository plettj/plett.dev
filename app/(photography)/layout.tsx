import Container from "@/components/layouts/Container";

export default async function PhotographyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container fullWidth>{children}</Container>;
}
