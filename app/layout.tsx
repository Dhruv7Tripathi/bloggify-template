import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import TopBanner from "@/components/ui/top-banner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bloggify-template.vercel.app/"),
  title: {
    default: "Bloggify - Template for Developers | LayrdUI",
    template: "%s | Bloggify - LayrdUI",
  },
  description:
    "Bloggify is a sleek, SEO-optimized, and fully responsive Next.js 15 landing page template for developers. Built with TypeScript, Tailwind CSS, and best modern UI practices by LayrdUI.",
  keywords: [
    "Bloggify",
    "LayrdUI",
    "Next.js Template",
    "Landing Page Template",
    "Developer Portfolio Template",
    "Tailwind CSS",
    "TypeScript",
    "Marketing Website Template",
    "Responsive Web Design",
  ],
  openGraph: {
    title: "Bloggify - Template for Developers | LayrdUI",
    description:
      "A modern, developer-focused landing page template built with Next.js 15, TypeScript, and Tailwind CSS — perfect for SaaS, portfolios, and startups.",
    url: "https://bloggify-template.vercel.app/",
    siteName: "LayrdUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bloggify Template Preview - LayrdUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloggify - Template for Developers | LayrdUI",
    description:
      "Next.js 15 + Tailwind CSS marketing template for developers. Built for performance, responsiveness, and conversion.",
    creator: "@layrdui",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.layrdui.in/bloggify-template",
  },
  authors: [{ name: "LayrdUI Team", url: "https://www.layrdui.in" }],
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Basic SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBanner />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
