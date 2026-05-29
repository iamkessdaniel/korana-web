import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korana.ai — AI Chief of Staff for every company",
  description:
    "Run your company the AI-native way. Korana.ai handles bookkeeping, invoicing, tax, customer messages, sales follow-ups, scheduling, and weekly reporting — one AI operator instead of 5–10 hires. You approve what matters.",
  metadataBase: new URL("https://korana.ai"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Korana.ai — AI Chief of Staff for every company",
    description:
      "Run your company the AI-native way. Skip the 5–10 hires. You approve what matters.",
    siteName: "Korana.ai",
    type: "website",
    url: "https://korana.ai",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Korana.ai — AI Chief of Staff for every company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korana.ai — AI Chief of Staff for every company",
    description:
      "Run your company the AI-native way. Skip the 5–10 hires. You approve what matters.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://korana.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Korana.ai",
      url: "https://korana.ai",
      logo: "https://korana.ai/icon-512.png",
      description:
        "AI Chief of Staff for every company. Bookkeeping, invoicing, tax, customer messages, sales, scheduling, reporting — one AI operator instead of 5–10 hires.",
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      name: "Korana.ai",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android, WhatsApp",
      description:
        "AI Chief of Staff that handles bookkeeping, invoicing, tax, customer messages, sales follow-ups, scheduling, and weekly reporting.",
      offers: [
        { "@type": "Offer", name: "Solo", price: "29", priceCurrency: "USD", description: "For solo founders" },
        { "@type": "Offer", name: "Team", price: "159", priceCurrency: "USD", description: "For growing teams" },
      ],
    },
    {
      "@type": "WebSite",
      name: "Korana.ai",
      url: "https://korana.ai",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
