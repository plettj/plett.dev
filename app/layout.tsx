import TopLoader from "@/components/layouts/TopLoader";
import { BASE_URL, URL_OLD_SITE } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { author } from "@/lib/posts/constants";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

// OPG compliant metadata (https://ogp.me/)
export const metadata: Metadata = {
  title: {
    template: "%s | Josiah Plett",
    default: "Josiah Plett",
  },
  description:
    "A website housing my online presence. This includes my professional interests, hobbies, writing, photography, games, and other such things.",
  generator: "Next.js",
  keywords: [
    "Entrepreneur",
    "University of Waterloo",
    "Game Development",
    "Writing",
    "Photography",
    "Blog",
    "Startup",
    "Professional",
    "Software Developer",
    "Design",
    "Speedcubing",
    "Piano",
  ],
  authors: author,
  creator: "Josiah Plett",
  referrer: "strict-origin-when-cross-origin", // Default
  icons: [
    { url: `${BASE_URL}/icons/favicon32.png`, sizes: "32x32" },
    { url: `${BASE_URL}/icons/favicon256.png`, sizes: "256x256" },
  ],
  metadataBase: new URL(BASE_URL),
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
  archives: URL_OLD_SITE,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "plett.dev",
    title: "Josiah Plett",
    description: "Josiah Plett's personal website",
    images: [
      {
        url: `${BASE_URL}/icons/favicon32.png`,
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
      <body className="flex flex-col h-screen items-center overflow-x-hidden scrollbar bg-background font-sans antialiased transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          <TopLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
