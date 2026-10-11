import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Idea.support — Membantu Bisnis Membangun Produk Digital",
  description:
    "Kami adalah tim yang mengerjakan pembuatan web, aplikasi mobile, dan produk digital untuk bisnis dan sekolah prosesnya jelas dari brief sampai rilis, dengan hasil yang rapi dan siap dipakai.",
  keywords: [
    "Idea.support",
    "Produk Digital",
    "Web Development",
    "Aplikasi Mobile",
    "Software House",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#EDF5FE] text-[#1e293b]">
        {children}
      </body>
    </html>
  );
}
