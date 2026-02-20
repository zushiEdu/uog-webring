import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const heading = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://uoguelph.network";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "uoguelph.network | University of Guelph Webring",
    template: "%s | uoguelph.network",
  },
  description:
    "University of Guelph student webring. Discover personal websites, projects, and portfolios built by the UoGuelph community.",
  applicationName: "uoguelph.network",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseUrl,
    siteName: "uoguelph.network",
    title: "uoguelph.network | University of Guelph Webring",
    description:
      "Discover University of Guelph student websites, projects, and portfolios in one web ring.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "uoguelph.network - University of Guelph Webring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "uoguelph.network | University of Guelph Webring",
    description:
      "Discover University of Guelph student websites, projects, and portfolios in one web ring.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body className={`${heading.variable} ${body.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
