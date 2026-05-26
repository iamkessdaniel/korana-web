import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
