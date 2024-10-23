import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import Container from "@/components/layouts/Container";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
}
