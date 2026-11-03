"use client";

import React, { useState, useEffect } from "react";
import IdeaSupportLogo from "./IdeaSupportLogo";

const WA_NUMBER = "6285770037803";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  category?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  serviceTitle = "Gratis",
  category = "Konsultasi",
}: ContactModalProps) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [serviceType, setServiceType] = useState("Website Company Profile");
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

  const getWaUrl = () => {
    let msg = `Halo IDEA.support, saya ingin konsultasi gratis mengenai proyek digital.\n`;
    if (name) msg += `• Nama: ${name}\n`;
    if (emailOrPhone) msg += `• Kontak: ${emailOrPhone}\n`;
    msg += `• Layanan: ${serviceType || serviceTitle}\n`;
    if (note) msg += `• Kebutuhan: ${note}\n`;
    msg += `Mohon info jadwal dan rekomendasi solusinya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const modalHeading =
    serviceTitle === "Gratis" ? "Konsultasi Gratis" : `Konsultasi ${serviceTitle}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D0E3F8] relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top Eyebrow Badge */}
        <div className="flex items-center gap-2 mb-3">
          <IdeaSupportLogo variant="primary" size="sm" showText={false} />
          <span className="text-[11px] font-bold text-[#004CD3] bg-[#EDF5FE] px-3 py-1 rounded-full border border-[#D0E3F8] uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h3 id="contact-modal-title" className="text-2xl font-bold text-slate-900 mb-2">
          {modalHeading}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
          Diskusikan kebutuhan website atau aplikasi Anda bersama tim IDEA.support. Kami siap memberikan saran teknis, estimasi waktu, dan solusi terbaik tanpa biaya.
        </p>

        {submitted ? (
          <div className="bg-[#E3F5E7] border border-[#B9E7C3] rounded-2xl p-6 text-center text-[#164D24]">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-bold text-base mb-1">Permintaan Konsultasi Diterima!</p>
            <p className="text-xs text-emerald-800">
              Tim IDEA.support akan segera menghubungi Anda dalam waktu 1x24 jam kerja.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Nama Lengkap / Perusahaan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Ryan Putrawan (PT Maju Bersama)"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#004CD3] focus:ring-2 focus:ring-[#004CD3]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                WhatsApp / Email Aktif <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="0812-xxxx-xxxx atau nama@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#004CD3] focus:ring-2 focus:ring-[#004CD3]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Layanan yang Diminati
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#004CD3] focus:ring-2 focus:ring-[#004CD3]/20 outline-none transition-all bg-white"
              >
                <option value="Website Landing Page">Website Landing Page</option>
                <option value="Website Company Profile">Website Company Profile</option>
                <option value="Website E-Commerce">Website E-Commerce</option>
                <option value="Website Sistem Booking">Website Sistem Booking</option>
                <option value="Web App / SaaS">Web App &amp; SaaS</option>
                <option value="Aplikasi Mobile (Android / iOS)">Aplikasi Mobile</option>
                <option value="Website Custom Sistem">Website Custom Sistem</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Ceritakan Kebutuhan Proyek Anda
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Misal: Saya ingin membuat website booking lapangan futsal dengan sistem pembayaran otomatis..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#004CD3] focus:ring-2 focus:ring-[#004CD3]/20 outline-none resize-none transition-all"
              />
            </div>

            {/* Action Buttons: WhatsApp First + Direct Submit */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-5 rounded-full font-semibold text-sm transition-colors shadow-sm text-center"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.45 0.743.966 1.202.664.592 1.224.776 1.397.863.173.086.274.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.563.173.086.289.13.332.202.043.072.043.419-.101.824z" />
                </svg>
                Konsultasi WhatsApp
              </a>

              <button
                type="submit"
                className="bg-[#004CD3] hover:bg-[#003BAA] text-white py-3 px-5 rounded-full font-semibold text-sm transition-colors shadow-sm text-center cursor-pointer"
              >
                Kirim Form
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
