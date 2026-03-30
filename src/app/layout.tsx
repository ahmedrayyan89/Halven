import type { Metadata } from "next";
import { Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HALVEN — Luxury Curated Travel",
  description:
    "Private expeditions to the world's most extraordinary destinations across the US, India, and the Middle East. Book your journey beyond the last horizon.",
  keywords: ["luxury travel", "private travel", "curated travel", "India travel", "Middle East travel"],
  openGraph: {
    title: "HALVEN — Luxury Curated Travel",
    description:
      "Private expeditions to the world's most extraordinary destinations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HALVEN — Luxury Curated Travel",
    description:
      "Private expeditions to the world's most extraordinary destinations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable}`}>
      <body className="bg-void text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}