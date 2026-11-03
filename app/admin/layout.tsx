import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
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
  title: "Admin Portal — IDEA SUPPORT",
  description: "Panel Kontrol dan Manajemen Database IDEA SUPPORT",
};

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-screen text-slate-800 antialiased font-sans flex"
        style={{
          backgroundColor: '#DAE5F6',
          backgroundImage: 'linear-gradient(rgba(100,140,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,140,210,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        {/* Sidebar Navigasi Admin */}
        <AdminSidebar />

        {/* Kontainer Halaman Admin */}
        <div className="flex-1 flex flex-col min-w-0">
          <AdminHeader />
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
