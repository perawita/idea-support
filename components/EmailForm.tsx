"use client";

import React, { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      setStatus("error");
      setFeedbackMessage("Mohon masukkan alamat email Anda terlebih dahulu.");
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setFeedbackMessage("Format email tidak valid. Contoh: nama@domain.com");
      return;
    }

    // Email is valid
    setStatus("success");
    setFeedbackMessage(
      "Membuka aplikasi email Anda untuk menghubungi tim Idea.support..."
    );

    // Open mailto link as temporary backend action without falsely claiming server sent
    const mailtoUrl = `mailto:halo@idea.support?subject=${encodeURIComponent(
      "Inquiry Kerja Sama Proyek Digital — Idea.support"
    )}&body=${encodeURIComponent(
      `Halo Tim Idea.support,\n\nSaya tertarik untuk bekerja sama membangun produk digital.\n\nEmail saya: ${trimmedEmail}\n\nTerima kasih.`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-6 shadow-[0_4px_20px_rgba(0,98,224,0.08)] border border-[#D0E3F8] flex items-center justify-between transition-all focus-within:ring-2 focus-within:ring-[#0062E0]/40 focus-within:border-[#0062E0]"
      >
        <label htmlFor="email-kerjasama" className="sr-only">
          Email Kerja Sama
        </label>
        <input
          id="email-kerjasama"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Email Kerja Sama"
          className="w-full bg-transparent text-[#1e293b] placeholder-[#999999] text-sm sm:text-[15px] font-sans focus:outline-none pr-3"
          aria-describedby="email-feedback"
        />
        <button
          type="submit"
          className="shrink-0 bg-[#0062E0] text-white rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-[14px] font-medium hover:bg-[#004EB3] active:bg-[#003B86] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0062E0] cursor-pointer"
        >
          Hubungi Kami
        </button>
      </form>

      {/* Inline Feedback Message */}
      {status !== "idle" && (
        <div
          id="email-feedback"
          role="alert"
          aria-live="polite"
          className={`mt-2.5 text-xs sm:text-sm font-medium ${
            status === "error" ? "text-[#FF2244]" : "text-[#2D9A48]"
          }`}
        >
          {feedbackMessage}
        </div>
      )}

      {/* Subtext below form */}
      <p className="mt-3.5 text-xs sm:text-[13px] text-[#666666] font-normal text-center">
        Bergabung dengan 10++ Bisnis yang sudah berkembang denga Kami
      </p>
    </div>
  );
}
