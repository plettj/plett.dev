import TopLoader from "@/components/layouts/TopLoader";
import { BASE_URL } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";
import { ThemeProvider } from "next-themes";
import { author } from "@/lib/posts/constants";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

// OPG compliant metadata (https://ogp.me/)
export const metadata: Metadata = {
  title: "Josiah Plett",
  description:
    "Come explore my professional interests, hobbies, writing, and photography.",
  generator: "Next.js",
  keywords: [
    "Entrepreneur",
    "University of Waterloo",
    "Game Development",
    "Writing",
    "Photography",
    "Blog",
    "Startup",
    "Software Developer",
    "Design",
    "Speedcubing",
    "Piano",
  ],
  authors: author,
  creator: "Josiah Plett",
  verification: {
    google: process.env.COMMON_VERIFICATION_GOOGLE /* ?? "uuid" */,
    yahoo: process.env.COMMON_VERIFICATION_YAHOO,
    yandex: process.env.COMMON_VERIFICATION_YANDEX,
    me: process.env.COMMON_VERIFICATION_ME,
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: true,
    url: true,
    address: false,
  },
  archives: "https://old.plett.dev/",
  openGraph: {
    type: "website",
    locale: "en_CA",
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
  // manifest: JSON_MANIFEST // TODO: Add a manifest to support my site being downloaded as a PWA
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
      <body className="flex flex-col h-screen items-center overflow-x-hidden scrollbar bg-background font-sans antialiased transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          <TopLoader />
          <main className="h-full max-w-[80ch] w-full flex flex-col text-sm">
            <Navigation />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
