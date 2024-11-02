import Container from "@/components/layouts/Container";
import Footer from "@/components/layouts/Footer";

export default async function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
}
