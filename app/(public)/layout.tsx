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
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased font-sans`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('idea-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-300 idea-blueprint-body">
        {children}
      </body>
    </html>
  );
}
