import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Korana — The AI Chief of Staff for every company",
  description:
    "Korana is your AI Chief of Staff — the operating brain that lets any company run the AI-native way. Bookkeeping, invoicing, tax, customer messages, sales, scheduling, reporting — run by one operator instead of 5–10 hires. You approve what matters.",
  openGraph: {
    title: "Korana — The AI Chief of Staff for every company",
    description:
      "Run your company the AI-native way. Skip the 5–10 hires. You approve what matters.",
    siteName: "Korana",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korana — The AI Chief of Staff for every company",
    description:
      "Run your company the AI-native way. Skip the 5–10 hires. You approve what matters.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
