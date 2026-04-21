import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Webbitis | Premium Web Design, SEO, Automation & AI Solutions",
  description:
    "Webbitis creates premium business websites, SEO strategies, workflow automation and AI-powered digital solutions for businesses in Armenia, Canada and the US.",
   metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  openGraph: {
    title: "Webbitis | Premium Web Design, SEO & AI Solutions",
    description:
      "Premium websites, SEO, workflow automation and AI integration for businesses in Armenia, Canada and the USA.",
    url: "https://webbitis.com/",
    siteName: "Webbitis",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webbitis Premium Digital Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#07090f] text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}