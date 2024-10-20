import TopLoader from "@/components/layouts/TopLoader";
import { BASE_URL } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TopNavigation from "@/components/layouts/TopNavigation";

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
      <body className="flex flex-col h-screen items-center overflow-y-auto scrollbar bg-background font-sans antialiased">
        <TopLoader />
        <main className="h-full sm:w-[60ch] lg:w-[80ch] flex flex-col text-sm">
          <TopNavigation />
          {children}
        </main>
      </body>
    </html>
  );
}
