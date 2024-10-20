import TopLoader from "@/components/layouts/TopLoader";
import { BASE_URL } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { ThemeProvider } from "next-themes";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

// OPG compliant metadata (https://ogp.me/)
export const metadata: Metadata = {
  title: "plett.dev",
  description: "Josiah Plett's personal website",
  icons: {
    icon: `/icons/favicon.ico`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "plett.dev",
    title: "Josiah Plett",
    description: "Josiah Plett's personal website",
    images: [
      {
        url: `${BASE_URL}/icons/favicon.png`,
        alt: "J logo",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
      <body className="flex flex-col h-screen items-center overflow-x-hidden overflow-y-auto scrollbar bg-background font-sans antialiased transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          <TopLoader />
          <main className="h-full md:w-[80ch] flex flex-col text-sm">
            <Navigation />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
