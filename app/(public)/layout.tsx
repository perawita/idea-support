import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Idea.support — Membantu Bisnis Membangun Produk Digital",
  description:
    "Kami adalah tim yang mengerjakan pembuatan web, aplikasi mobile, dan produk digital untuk bisnis dan sekolah. Prosesnya jelas dari brief sampai rilis, dengan hasil yang rapi dan siap dipakai.",
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
      data-scroll-behavior="smooth"
      className={`${poppins.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-screen flex flex-col bg-[#DAE5F6] text-[#1e293b] font-sans">
        {children}
      </body>
    </html>
  );
}
