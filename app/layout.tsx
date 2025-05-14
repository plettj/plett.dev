import "./globals.css";

import TopLoader from "@/components/layouts/TopLoader";
import {
  BASE_URL,
  META_DESCRIPTION_HOME,
  META_TITLE_HOME,
  THEME_DARK_PRIMARY,
  THEME_LIGHT_PRIMARY,
  URL_MY_OLD_SITE,
} from "@/lib/constants";
import { AUTHOR } from "@/lib/posts/constants";
import { cn, getOGData } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import { Metadata, Viewport } from "next/types";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // https://stackoverflow.com/a/78016250/8360465
});

// Other fonts to consider:
// - Europa Grotesk No. 2 SH
// - Eloquia Display
// - IBM Plex Sans

export const metadata: Metadata = {
  title: {
    default: META_TITLE_HOME,
    template: `%s | ${META_TITLE_HOME}`,
  },
  description: META_DESCRIPTION_HOME,
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
  authors: AUTHOR,
  creator: "Josiah Plett",
  referrer: "strict-origin-when-cross-origin", // Default
  icons: [
    { url: `${BASE_URL}/icons/favicon32.png`, sizes: "32x32" },
    { url: `${BASE_URL}/icons/favicon256.png`, sizes: "256x256" },
  ],
  metadataBase: new URL(BASE_URL),
  verification: {
    google: process.env.COMMON_VERIFICATION_GOOGLE,
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
  archives: URL_MY_OLD_SITE,
  openGraph: getOGData({
    title: META_TITLE_HOME,
    description: META_DESCRIPTION_HOME,
    url: BASE_URL,
  }),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_LIGHT_PRIMARY },
    { media: "(prefers-color-scheme: dark)", color: THEME_DARK_PRIMARY },
  ],
  colorScheme: "light dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "flex flex-col h-screen items-center overflow-x-hidden scrollbar bg-background font-sans antialiased transition-colors"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
