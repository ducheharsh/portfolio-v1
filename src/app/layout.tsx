import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Duche | Portfolio",
  icons: {
    icon: "/boy.png"
  },
  description: "Harsh Duche's Portfolio",
  keywords: ["Harsh Duche", "Portfolio", "Harsh", "Duche"],
  authors: [{ name: "Harsh Duche", url: "https://harshduche.com" }],
  creator: "Harsh Duche",
  publisher: "Harsh Duche",
  openGraph: {
    title: "Harsh Duche | Portfolio",
    description: "Harsh Duche's Portfolio",
    url: "https://harshduche.com",
    siteName: "Harsh Duche",
    images: [
      {
        url: "dev.png",
        width: 1200,
        height: 630,
        alt: "Harsh Duche",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Duche | Portfolio",
    description: "Harsh Duche's Portfolio",
    images: ["dev.png"],
  },
  metadataBase: new URL("https://harshduche.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
