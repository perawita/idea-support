import React from "react";
import IdeaSupportLogo from "./IdeaSupportLogo";

export default function Footer() {
  return (
    <footer id="kontak" className="w-full mt-auto py-8 sm:py-10 border-t border-[#D0E3F8]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <IdeaSupportLogo variant="primary" size="sm" />
        </div>
        <p className="text-xs sm:text-[13px] text-[#666666] text-center sm:text-right">
          © 2026 Idea.support. Solusi pengembangan produk digital web dan aplikasi mobile.
        </p>
      </div>
    </footer>
  );
}
