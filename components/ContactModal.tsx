"use client";

import React, { useState, useEffect } from "react";
import IdeaSupportLogo from "./IdeaSupportLogo";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  category?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  serviceTitle = "Layanan Digital",
  category = "Website",
}: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Idea.support, saya tertarik untuk konsultasi mengenai ${serviceTitle} (${category}). Mohon info proses dan estimasi kerja sama.`
  );
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D0E3F8] relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Tutup modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-2 mb-4">
          <IdeaSupportLogo variant="primary" size="sm" showText={false} />
          <span className="text-xs font-semibold text-[#0062E0] bg-[#EDF5FE] px-3 py-1 rounded-full border border-[#D0E3F8]">
            {category}
          </span>
        </div>

        <h3 id="contact-modal-title" className="text-2xl font-bold text-slate-900 mb-2">
          Konsultasi {serviceTitle}
        </h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Hubungi tim Idea.support untuk berdiskusi langsung mengenai kebutuhan fitur, konsep, dan jadwal proyek Anda.
        </p>

        {submitted ? (
          <div className="bg-[#E3F5E7] border border-[#B9E7C3] rounded-2xl p-5 text-center text-[#164D24]">
            <p className="font-semibold text-base mb-1">Pesan Berhasil Dikirim!</p>
            <p className="text-xs">Tim kami akan segera menghubungi Anda melalui email dalam 1x24 jam.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nama / Nama Perusahaan
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi (PT Maju Bersama)"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0062E0] focus:ring-2 focus:ring-[#0062E0]/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Alamat Email Aktif
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0062E0] focus:ring-2 focus:ring-[#0062E0]/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Catatan Singkat Kebutuhan
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Jelaskan gambaran proyek atau fitur yang diinginkan..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0062E0] focus:ring-2 focus:ring-[#0062E0]/20 outline-none resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#0062E0] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#004eb3] transition-colors shadow-sm text-center"
              >
                Kirim Pengajuan
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 py-3 px-5 rounded-full font-semibold text-sm transition-colors text-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.743.966 1.202.664.592 1.224.776 1.397.863.173.086.274.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.563.173.086.289.13.332.202.043.072.043.419-.101.824z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
