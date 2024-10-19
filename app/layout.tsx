import TopLoader from "@/components/layouts/TopLoader";
import { BASE_URL } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

// OPG compliant metadata (https://ogp.me/)
export const metadata: Metadata = {
  title: "plett.dev",
  description: "Josiah Plett's personal website",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "plett.dev",
    title: "Josiah Plett",
    description: "Josiah Plett's personal website",
    images: [
      {
        url: `${BASE_URL}/static/assets/opengraph-image.png`,
        alt: "Jiffy the Dino",
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
      <body className="flex flex-col h-screen overflow-hidden bg-background font-sans antialiased">
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
