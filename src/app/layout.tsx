import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/animations/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velora Villas | Where Nature Meets Quiet Luxury",
  description: "A collection of private villas designed for a relaxing holiday, where architecture organically blends with nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#201F22] text-[#FFFFFF] selection:bg-[#FFFFFF]/20 selection:text-[#FFFFFF] font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
