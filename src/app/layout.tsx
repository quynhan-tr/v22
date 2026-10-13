import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "@/components/layout/layout.css";
import "@/components/home/home.css";
import "@/components/home/portrait-illustration.css";
import "@/components/home/joys-section.css";
import "@/components/projects/project-gallery.css";
import "@/components/flower/flower.css";

const sans = DM_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "An Tran ﹏𓊝﹏",
  description:
    "An Tran’s personal notebook. A home for the things I make, the ideas I’m exploring, and the small details worth keeping.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
