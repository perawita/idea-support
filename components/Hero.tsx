import React from "react";
import EmailForm from "./EmailForm";

export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="w-full pt-12 sm:pt-16 md:pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center"
    >
      {/* Badge Pill: Wujudkan Ide Digitalmu Hari Ini */}
      <div className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 sm:px-5 py-1.5 shadow-[0_2px_10px_rgba(0,98,224,0.06)] border border-[#D0E3F8] mb-6 sm:mb-8 transition-transform hover:scale-[1.02] duration-150">
        <span
          className="w-3 h-3 rounded-full bg-[#0062E0] ring-4 ring-[#D0E3F8] shrink-0"
          aria-hidden="true"
        />
        <span className="text-xs sm:text-[13.5px] font-medium text-[#1e293b]">
          Wujudkan Ide Digitalmu Hari Ini
        </span>
      </div>

      {/* Main Headline (H1) */}
      <h1 className="text-[#0062E0] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.2] sm:leading-[1.18] tracking-tight max-w-4xl">
        Membantu Bisnis Membangun
        <br />
        Produk Digital Dengan
        <br />
        Web dan Aplikasi Mobile
      </h1>

      {/* Subtitle / Description */}
      <p className="mt-6 sm:mt-8 mb-8 sm:mb-10 text-[#666666] text-sm sm:text-[15.5px] leading-relaxed max-w-2xl sm:max-w-2xl">
        Kami adalah tim yang mengerjakan pembuatan web, aplikasi mobile, dan
        produk digital untuk bisnis dan sekolah. Prosesnya jelas dari brief
        sampai rilis, dengan hasil yang rapi dan siap dipakai.
      </p>

      {/* Cooperation Email Form */}
      <div className="w-full max-w-xl">
        <EmailForm />
      </div>
    </section>
  );
}
