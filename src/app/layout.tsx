import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./clean-styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafi Mahrus - Portfolio 2025 | Software Developer",
  description: "Rafi Mahrus's portofolio, a fast and good software developer.",
  keywords: ["Software Developer", "Rafi Mahrus", "Website", "AI automation"],
  authors: [{ name: "Rafi Mahrus" }],
  creator: "Rafi Mahrus",
  openGraph: {
    title: "Rafi Mahrus - Portfolio 2025",
    description: "Software Developer specializing in web development and AI automation",
    url: "https://reneemontalvo.com",
    siteName: "Rafi Mahrus Portfolio",
    locale: "ID_id",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafi Mahrus - Portfolio 2025",
    description: "Software Developer specializing in web development and AI automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
