import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veltrix — AI-Powered E-Commerce Intelligence for TikTok Shop",
  description:
    "Unlock hidden opportunities with real-time analytics, AI-driven insights, and 500M+ data points across products, creators, and content on TikTok Shop.",
  keywords: [
    "TikTok Shop analytics",
    "e-commerce intelligence",
    "AI analytics",
    "TikTok data",
    "product analytics",
    "creator analytics",
  ],
  openGraph: {
    title: "Veltrix — AI-Powered E-Commerce Intelligence",
    description:
      "Real-time analytics and AI-driven insights for TikTok Shop sellers, brands, and creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
