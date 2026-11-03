"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Definisi Fitur dan Paket per Kategori
interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanDetail {
  categorySubtitle: string;
  title: string;
  durationBadge: string;
  originalPrice: string;
  discountBadge: string;
  price: string;
  priceNote: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  featuresTitle: string;
  features: PlanFeature[];
  footerServer: string;
  footerSla: string;
}

interface CategoryPlans {
  [key: string]: {
    starter: PlanDetail;
    growth: PlanDetail;
    scale: PlanDetail;
  };
}

// Data Paket untuk masing-masing Kategori
const categoryPlansData: CategoryPlans = {
  "landing-page": {
    starter: {
      categorySubtitle: "LANDING PAGE",
      title: "Starter",
      durationBadge: "Hingga 3 section • 3-5 hari kerja",
      originalPrice: "Rp 1.490.000",
      discountBadge: "Hemat 25%",
      price: "Rp 1.100.000",
      priceNote: "Gratis domain (.com) & hosting tahun pertama",
      description: "Cocok untuk validasi ide, UMKM pemula, dan promosi 1 produk terstruktur.",
      ctaText: "Pilih Paket Starter",
      ctaLink: "/kontak",
      featuresTitle: "SPESIFIKASI PAKET:",
      features: [
        { text: "Source code dimiliki sepenuhnya", included: true },
        { text: "Responsive mobile & desktop", included: true },
        { text: "SEO on-page dasar & OpenGraph", included: true },
        { text: "Form kontak & tombol WhatsApp langsung", included: true },
        { text: "SSL & Cloudflare Security", included: true },
        { text: "Garansi bug & maintenance 30 hari", included: true },
        { text: "Integrasi Meta / TikTok Pixel iklan", included: false },
        { text: "A/B Testing variasi copywriting", included: false },
        { text: "CRM & Webhook otomatis", included: false },
      ],
      footerServer: "Server: Cloudflare Edge",
      footerSla: "SLA 99.9%",
    },
    growth: {
      categorySubtitle: "LANDING PAGE",
      title: "Growth",
      durationBadge: "Hingga 6 section • 4-7 hari kerja",
      originalPrice: "Rp 2.490.000",
      discountBadge: "Hemat 20%",
      price: "Rp 1.990.000",
      priceNote: "Gratis domain (.com) & hosting premium 1 tahun",
      description: "Dirancang khusus untuk kampanye iklan Google/Meta Ads berkonversi tinggi.",
      ctaText: "Mulai dengan Growth",
      ctaLink: "/kontak",
      isPopular: true,
      featuresTitle: "SEMUA FITUR STARTER, DITAMBAH:",
      features: [
        { text: "Hingga 6 section berorientasi konversi penjualan", included: true },
        { text: "Integrasi Facebook Pixel, Google Analytics 4 & TikTok API", included: true },
        { text: "Lead form otomatis forward ke WhatsApp & Email/Sheets", included: true },
        { text: "Modul FAQ accordion & social proof testimoni", included: true },
        { text: "Speed optimization (PageSpeed 90+)", included: true },
        { text: "Garansi & optimasi performa 60 hari", included: true },
        { text: "Multi-Bahasa (Bilingual ID/EN)", included: false },
      ],
      footerServer: "Engine: Next.js + Tailwind",
      footerSla: "Garansi 100% Puas",
    },
    scale: {
      categorySubtitle: "LANDING PAGE",
      title: "Scale",
      durationBadge: "Hingga 10 section • 7-10 hari kerja",
      originalPrice: "Rp 3.800.000",
      discountBadge: "Hemat 22%",
      price: "Rp 2.950.000",
      priceNote: "Gratis domain (.com) & cloud hosting performa tinggi",
      description: "Solusi landing page komprehensif untuk produk bernilai tinggi & integrasi CRM.",
      ctaText: "Konsultasi Scale",
      ctaLink: "/kontak",
      featuresTitle: "SEMUA FITUR GROWTH, DITAMBAH:",
      features: [
        { text: "Multi-CTA + Halaman Thank You konversi terpisah", included: true },
        { text: "Integrasi Webhook CRM (HubSpot, Notion, Zapier)", included: true },
        { text: "Smart pop-up penawaran & countdown timer diskon", included: true },
        { text: "Dukungan multi-bahasa (ID & EN ready)", included: true },
        { text: "A/B Testing headline & variasi layout", included: true },
        { text: "Dedicated Project Manager & Prioritas Support 90 hari", included: true },
      ],
      footerServer: "High-Performance Cloud Architecture",
      footerSla: "On-Call Support",
    },
  },
  "company-profile": {
    starter: {
      categorySubtitle: "COMPANY PROFILE",
      title: "Starter",
      durationBadge: "Hingga 5 halaman · 4-7 hari kerja",
      originalPrice: "Rp 2.800.000",
      discountBadge: "Hemat 25%",
      price: "Rp 2.100.000",
      priceNote: "Gratis domain (.com) & hosting tahun pertama",
      description: "Cocok untuk bisnis kecil & UMKM yang ingin hadir secara profesional di dunia digital.",
      ctaText: "Pilih Paket Starter",
      ctaLink: "/kontak",
      featuresTitle: "FITUR UTAMA PAKET:",
      features: [
        { text: "Source code dimiliki sepenuhnya", included: true },
        { text: "Responsive mobile & desktop", included: true },
        { text: "SEO on-page dasar", included: true },
        { text: "Pendaftaran ke Google (Search Console + sitemap)", included: true },
        { text: "Email bisnis @namadomain (2 akun)", included: true },
        { text: "Form kontak & WhatsApp button", included: true },
        { text: "SSL & basic security", included: true },
        { text: "Blog / artikel dinamis (panel admin)", included: false },
        { text: "Galeri portfolio dinamis", included: false },
        { text: "Google Maps Business setup", included: false },
        { text: "Google Analytics setup", included: false },
        { text: "Google Ads pixel setup", included: false },
      ],
      footerServer: "Server: Cloudflare Edge",
      footerSla: "SLA 99.9%",
    },
    growth: {
      categorySubtitle: "COMPANY PROFILE",
      title: "Growth",
      durationBadge: "Hingga 8 halaman · 7-14 hari kerja",
      originalPrice: "Rp 3.900.000",
      discountBadge: "Hemat 25%",
      price: "Rp 2.900.000",
      priceNote: "Gratis domain (.com) & hosting tahun pertama",
      description: "Untuk bisnis yang ingin kelola konten sendiri — panel admin, training, dan marketing digital terintegrasi.",
      ctaText: "Mulai dengan Growth",
      ctaLink: "/kontak",
      isPopular: true,
      featuresTitle: "SEMUA FITUR STARTER, DITAMBAH:",
      features: [
        { text: "Semua fitur Paket Starter", included: true },
        { text: "Blog / artikel dinamis (panel admin)", included: true },
        { text: "Galeri portfolio dinamis", included: true },
        { text: "Training panel admin (1 sesi online)", included: true },
        { text: "Email bisnis @namadomain (hingga 5 akun)", included: true },
        { text: "SEO on-page + meta & sitemap", included: true },
        { text: "Google Analytics setup", included: true },
        { text: "Google Maps Business setup", included: true },
        { text: "Live chat widget integration", included: true },
        { text: "Speed optimization (PageSpeed 85+)", included: true },
        { text: "Free maintenance 1 bulan", included: true },
        { text: "Google Ads pixel setup", included: false },
      ],
      footerServer: "Database: PostgreSQL + Headless CMS",
      footerSla: "Garansi 100% Puas",
    },
    scale: {
      categorySubtitle: "COMPANY PROFILE",
      title: "Scale",
      durationBadge: "Hingga 12 halaman · 7-14 hari kerja",
      originalPrice: "Rp 5.500.000",
      discountBadge: "Hemat 24%",
      price: "Rp 4.200.000",
      priceNote: "Gratis domain (.com) & hosting tahun pertama",
      description: "Solusi lengkap untuk perusahaan besar yang membutuhkan website premium & performa tinggi.",
      ctaText: "Konsultasi Scale",
      ctaLink: "/kontak",
      featuresTitle: "SEMUA FITUR GROWTH, DITAMBAH:",
      features: [
        { text: "Semua fitur Paket Growth", included: true },
        { text: "Google Ads pixel & conversion tracking", included: true },
        { text: "Gratis jasa setup 1 campaign Google Ads", included: true },
        { text: "Multi-bahasa (ID & EN)", included: true },
        { text: "Email bisnis @namadomain (hingga 10 akun)", included: true },
        { text: "Backup otomatis mingguan", included: true },
        { text: "Prioritas support 30 hari", included: true },
        { text: "Free maintenance 3 bulan", included: true },
      ],
      footerServer: "Enterprise Infrastructure Ready",
      footerSla: "24/7 Dedicated Support",
    },
  },
  "web-saas": {
    starter: {
      categorySubtitle: "WEB APP / SAAS",
      title: "MVP Starter",
      durationBadge: "3-5 fitur inti • 2-3 minggu",
      originalPrice: "Rp 5.000.000",
      discountBadge: "Hemat 20%",
      price: "Rp 3.900.000",
      priceNote: "Termasuk deployment cloud & setup database",
      description: "Membangun prototipe dan Minimum Viable Product (MVP) fungsional untuk validasi pengguna.",
      ctaText: "Rancang Web App",
      ctaLink: "/kontak",
      featuresTitle: "SPESIFIKASI TEKNIS:",
      features: [
        { text: "Otentikasi pengguna (Login, Register, Role-based)", included: true },
        { text: "CRUD database lengkap & REST API terstruktur", included: true },
        { text: "Dashboard admin responsive & intuitive", included: true },
        { text: "Full hak milik repositori Git & arsitektur kode", included: true },
        { text: "Setup PostgreSQL / Supabase backend", included: true },
        { text: "Payment gateway payment midtrans", included: false },
        { text: "Integrasi webhook pihak ketiga", included: false },
      ],
      footerServer: "Modern Stack: Next.js + PostgreSQL",
      footerSla: "SLA 99.9%",
    },
    growth: {
      categorySubtitle: "WEB APP / SAAS",
      title: "Scale Platform",
      durationBadge: "Sistem Lengkap • 3-5 minggu",
      originalPrice: "Rp 8.500.000",
      discountBadge: "Hemat 24%",
      price: "Rp 6.500.000",
      priceNote: "Arsitektur cloud skalabel siap ribuan pengguna",
      description: "Sistem aplikasi web interaktif dengan integrasi pembayaran otomatis, email transactional, & analytics.",
      ctaText: "Bangun Scale App",
      ctaLink: "/kontak",
      isPopular: true,
      featuresTitle: "SEMUA FITUR STARTER, DITAMBAH:",
      features: [
        { text: "Integrasi Payment Gateway (Midtrans / Xendit / QRIS)", included: true },
        { text: "Email notifikasi transaksional otomatis (Resend)", included: true },
        { text: "Manajemen subscription & recurring billing", included: true },
        { text: "Export data CSV/Excel & laporan statistik visual", included: true },
        { text: "Integrasi Webhook eksternal", included: true },
        { text: "Garansi audit keamanan kode 60 hari", included: true },
      ],
      footerServer: "Scalable Container / Serverless",
      footerSla: "Garansi Puas & Deployment Ready",
    },
    scale: {
      categorySubtitle: "WEB APP / SAAS",
      title: "Custom Enterprise",
      durationBadge: "Sesuai Scope • Timeline Fleksibel",
      originalPrice: "Rp 15.000.000",
      discountBadge: "Hemat 20%",
      price: "Rp 11.900.000",
      priceNote: "Arsitektur enterprise kustom sesuai kebutuhan",
      description: "Untuk perusahaan yang memerlukan sistem enterprise kompleks, multi-tenant, dan kepatuhan data ketat.",
      ctaText: "Diskusi Arsitektur",
      ctaLink: "/kontak",
      featuresTitle: "SEMUA FITUR GROWTH, DITAMBAH:",
      features: [
        { text: "Arsitektur Multi-tenant SaaS", included: true },
        { text: "Microservices & integrasi ERP eksternal", included: true },
        { text: "Role Permission granular bertingkat", included: true },
        { text: "Dukungan multi-server load balancing & CDN cache", included: true },
        { text: "SLA Dedicated Engineer pendamping peluncuran", included: true },
      ],
      footerServer: "High Availability Cloud Cluster",
      footerSla: "24/7 Dedicated Support",
    },
  },
  "mobile-app": {
    starter: {
      categorySubtitle: "APLIKASI MOBILE",
      title: "Mobile MVP",
      durationBadge: "Android APK • 2-3 minggu",
      originalPrice: "Rp 4.500.000",
      discountBadge: "Hemat 22%",
      price: "Rp 3.500.000",
      priceNote: "Termasuk source code & bantuan rilis APK",
      description: "Aplikasi mobile fungsional untuk prototipe bisnis atau penggunaan operasional internal.",
      ctaText: "Mulai Mobile MVP",
      ctaLink: "/kontak",
      featuresTitle: "FITUR PAKET MOBILE:",
      features: [
        { text: "Framework React Native / Flutter", included: true },
        { text: "Tampilan modern & smooth performance", included: true },
        { text: "Login & integrasi API backend", included: true },
        { text: "Pemberitahuan push lokal", included: true },
        { text: "100% kepemilikan source code aplikasi", included: true },
        { text: "Rilis ke Google Play Store & Apple App Store", included: false },
        { text: "In-app payment & subscription", included: false },
      ],
      footerServer: "Cross-Platform Framework",
      footerSla: "Garansi 30 Hari",
    },
    growth: {
      categorySubtitle: "APLIKASI MOBILE",
      title: "Play Store Ready",
      durationBadge: "Android & iOS • 3-5 minggu",
      originalPrice: "Rp 7.800.000",
      discountBadge: "Hemat 24%",
      price: "Rp 5.900.000",
      priceNote: "Bantuan publikasi hingga live di store",
      description: "Aplikasi mobile lengkap siap dipublikasikan ke Google Play Store dan App Store iOS.",
      ctaText: "Pilih Play Store Ready",
      ctaLink: "/kontak",
      isPopular: true,
      featuresTitle: "SEMUA FITUR STARTER, DITAMBAH:",
      features: [
        { text: "Bantuan setup & publikasi ke Google Play Store", included: true },
        { text: "Integrasi Push Notification Cloud (FCM)", included: true },
        { text: "Fitur kamera, lokasi GPS, dan upload gambar", included: true },
        { text: "Offline mode data caching", included: true },
        { text: "Integrasi payment gateway QRIS / VA", included: true },
        { text: "Garansi rilis & bug fix 60 hari", included: true },
      ],
      footerServer: "Cloud API Backend Integration",
      footerSla: "Garansi Approved Store",
    },
    scale: {
      categorySubtitle: "APLIKASI MOBILE",
      title: "Full Ecosystem",
      durationBadge: "App + Backend + Web • 6+ minggu",
      originalPrice: "Rp 14.000.000",
      discountBadge: "Hemat 25%",
      price: "Rp 10.500.000",
      priceNote: "Paket lengkap Mobile App + Web Admin Dashboard",
      description: "Ekosistem digital lengkap: aplikasi mobile untuk pelanggan, dashboard admin web untuk operasional.",
      ctaText: "Konsultasi Ekosistem",
      ctaLink: "/kontak",
      featuresTitle: "SEMUA FITUR GROWTH, DITAMBAH:",
      features: [
        { text: "Aplikasi Customer (Android & iOS)", included: true },
        { text: "Aplikasi Driver / Merchant / Staff khusus", included: true },
        { text: "Web Dashboard admin monitoring realtime", included: true },
        { text: "Realtime tracking GPS map & chat interaktif", included: true },
        { text: "Support prioritas & pemeliharaan server 90 hari", included: true },
      ],
      footerServer: "Microservices Cloud Architecture",
      footerSla: "Dedicated Project Manager",
    },
  },
  "booking": {
    starter: {
      categorySubtitle: "SISTEM BOOKING",
      title: "Basic Schedule",
      durationBadge: "Hingga 5 layanan • 5-7 hari kerja",
      originalPrice: "Rp 2.500.000",
      discountBadge: "Hemat 20%",
      price: "Rp 1.990.000",
      priceNote: "Gratis domain (.com) & hosting 1 tahun",
      description: "Cocok untuk klinik, salon, fotografer, konsultan, dan layanan reservasi per jam.",
      ctaText: "Pilih Basic Schedule",
      ctaLink: "/kontak",
      featuresTitle: "FITUR RESERVASI:",
      features: [
        { text: "Pilihan tanggal & jam slot reservasi otomatis", included: true },
        { text: "Notifikasi konfirmasi booking via WhatsApp", included: true },
        { text: "Panel jadwal reservasi untuk pemilik bisnis", included: true },
        { text: "Desain responsive mobile & desktop", included: true },
        { text: "Sinkronisasi Google Calendar", included: false },
        { text: "Pembayaran DP otomatis saat booking", included: false },
      ],
      footerServer: "Realtime Slot Availability",
      footerSla: "SLA 99.9%",
    },
    growth: {
      categorySubtitle: "SISTEM BOOKING",
      title: "Automated Booking",
      durationBadge: "Unlimited Layanan • 7-14 hari kerja",
      originalPrice: "Rp 4.200.000",
      discountBadge: "Hemat 24%",
      price: "Rp 3.190.000",
      priceNote: "Sistem reservasi otomatis tanpa admin manual",
      description: "Reservasi mandiri pelanggan dengan pembayaran DP online langsung dan reminder otomatis.",
      ctaText: "Pilih Automated Booking",
      ctaLink: "/kontak",
      isPopular: true,
      featuresTitle: "SEMUA FITUR STARTER, DITAMBAH:",
      features: [
        { text: "Pembayaran DP / Lunas otomatis via QRIS & Transfer", included: true },
        { text: "Sinkronisasi otomatis dengan Google Calendar staf", included: true },
        { text: "Reminder WhatsApp H-1 sebelum jadwal reservasi", included: true },
        { text: "Multi-staff & pengaturan jam kerja berbeda", included: true },
        { text: "Pengaturan kuota maksimal per slot waktu", included: true },
      ],
      footerServer: "Automated Webhook & Cron Sync",
      footerSla: "Garansi 100% Puas",
    },
    scale: {
      categorySubtitle: "SISTEM BOOKING",
      title: "Multi-Branch Booking",
      durationBadge: "Multi-Cabang • 2-3 minggu",
      originalPrice: "Rp 6.800.000",
      discountBadge: "Hemat 24%",
      price: "Rp 5.150.000",
      priceNote: "Solusi booking untuk bisnis waralaba/multi cabang",
      description: "Pengelolaan booking terpusat untuk berbagai lokasi cabang, divisi, dan ratusan staf.",
      ctaText: "Konsultasi Multi-Cabang",
      ctaLink: "/kontak",
      featuresTitle: "SEMUA FITUR GROWTH, DITAMBAH:",
      features: [
        { text: "Dukungan multi-lokasi / cabang cabang", included: true },
        { text: "Dashboard kontrol terpusat untuk Owner & Manajer Cabang", included: true },
        { text: "Laporan okupansi & pendapatan per staf/cabang", included: true },
        { text: "Integrasi POS / Kasir eksternal", included: true },
        { text: "Prioritas support & garansi 90 hari", included: true },
      ],
      footerServer: "Enterprise Multi-Branch Database",
      footerSla: "On-Call Support",
    },
  },
  "ecommerce": {
    starter: {
      categorySubtitle: "E-COMMERCE",
      title: "Toko Online Starter",
      durationBadge: "Hingga 30 produk • 5-8 hari kerja",
      originalPrice: "Rp 2.900.000",
      discountBadge: "Hemat 21%",
      price: "Rp 2.290.000",
      priceNote: "Gratis domain (.com) & hosting toko online",
      description: "Katalog produk rapi dengan checkout langsung mengarah ke chat WhatsApp penjual.",
      ctaText: "Pilih Toko Starter",
      ctaLink: "/kontak",
      featuresTitle: "FITUR TOKO ONLINE:",
      features: [
        { text: "Katalog produk dengan varian ukuran & warna", included: true },
        { text: "Keranjang belanja sederhana & tombol Order WhatsApp", included: true },
        { text: "Panel admin upload & kelola produk mudah", included: true },
        { text: "SEO halaman produk & integrasi media sosial", included: true },
        { text: "Hitung ongkir otomatis JNE, J&T, SiCepat", included: false },
        { text: "Payment gateway payment otomatis", included: false },
      ],
      footerServer: "Fast Image CDN Delivery",
      footerSla: "SLA 99.9%",
    },
    growth: {
      categorySubtitle: "E-COMMERCE",
      title: "Toko Otomatis Pro",
      durationBadge: "Unlimited Produk • 10-15 hari kerja",
      originalPrice: "Rp 4.800.000",
      discountBadge: "Hemat 25%",
      price: "Rp 3.590.000",
      priceNote: "Otomatisasi ongkir kurir & pembayaran instan",
      description: "Toko online mandiri: hitung ongkir otomatis seluruh Indonesia dan terima pembayaran QRIS/VA otomatis.",
      ctaText: "Mulai Toko Otomatis",
      ctaLink: "/kontak",
      isPopular: true,
      featuresTitle: "SEMUA FITUR STARTER, DITAMBAH:",
      features: [
        { text: "Kalkulator ongkos kirim real-time (JNE, SiCepat, J&T, dll)", included: true },
        { text: "Payment Gateway otomatis (QRIS, VA Bank, E-Wallet)", included: true },
        { text: "Cek resi pelacakan pengiriman di dalam website", included: true },
        { text: "Fitur kupon diskon & voucher promo flash sale", included: true },
        { text: "Notifikasi invoice otomatis ke email & WhatsApp pembeli", included: true },
        { text: "Garansi maintenance & pendampingan 60 hari", included: true },
      ],
      footerServer: "Cloud Logistics & Payment Engine",
      footerSla: "Garansi 100% Puas",
    },
    scale: {
      categorySubtitle: "E-COMMERCE",
      title: "Brand Flagship Store",
      durationBadge: "Skala Besar • 3-4 minggu",
      originalPrice: "Rp 8.500.000",
      discountBadge: "Hemat 24%",
      price: "Rp 6.450.000",
      priceNote: "Standar e-commerce brand nasional",
      description: "Toko online performa tinggi untuk brand DTC, integrasi inventori gudang, dan sistem membership poin.",
      ctaText: "Konsultasi Flagship Store",
      ctaLink: "/kontak",
      featuresTitle: "SEMUA FITUR GROWTH, DITAMBAH:",
      features: [
        { text: "Sistem Membership, Poin Reward, & Tier Pelanggan", included: true },
        { text: "Integrasi Manajemen Stok Multi-Warehouse / Gudang", included: true },
        { text: "Arsitektur Headless Next.js (Load time super cepat < 1s)", included: true },
        { text: "Sinkronisasi marketplace (Shopee / Tokopedia API)", included: true },
        { text: "Dedicated Project Manager & Support 24/7", included: true },
      ],
      footerServer: "High-Traffic Scalable Cluster",
      footerSla: "24/7 Priority Support",
    },
  },
};

// Kategori Jenis Layanan Nav Tabs
const serviceTabs = [
  {
    id: "landing-page",
    label: "Landing Page",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    id: "company-profile",
    label: "Company Profile",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "web-saas",
    label: "Web App / SaaS",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "mobile-app",
    label: "Aplikasi Mobile",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <line x1="11" y1="18" x2="13" y2="18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "booking",
    label: "Sistem Booking",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

export default function LayananPage() {
  const [selectedTab, setSelectedTab] = useState("company-profile");
  const [pricingModel, setPricingModel] = useState<"project" | "retainer">("project");
  
  // Accordion FAQ states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const activeCategoryPlans = categoryPlansData[selectedTab] || categoryPlansData["company-profile"];

  const faqs = [
    {
      q: "Bisa bayar bertahap (sistem termin/DP)?",
      a: "Tentu saja! Kami menerapkan sistem pembayaran fleksibel 3 termin: 40% DP awal, 30% setelah progres desain & staging siap, dan 30% pelunasan setelah revisi tuntas serta sebelum handover.",
    },
    {
      q: "Bagaimana jika kami membutuhkan revisi desain?",
      a: "Semua paket kami berikan garansi revisi desain fleksibel sampai Anda puas dengan konsep & fungsinya sebelum masuk tahap deployment produksi.",
    },
    {
      q: "Apakah source code sepenuhnya menjadi hak milik klien?",
      a: "100% Ya! Akses repositori GitHub/GitLab, file aset Figma, aset visual, dan database diserahkan penuh kepada Anda tanpa vendor lock-in.",
    },
    {
      q: "Bagaimana jika kami sudah memiliki domain dan hosting sendiri?",
      a: "Sangat bisa. Tim kami akan bantu setup dan integrasikan konfigurasi DNS, SSL, serta deploy langsung ke server/hosting pilihan Anda.",
    },
  ];

  // Handler untuk memilih kategori layanan dan scroll ke pricing
  const handleSelectService = (serviceId: string) => {
    setSelectedTab(serviceId);
    const targetElement = document.getElementById("paket-harga-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 6 Layanan Cards Data
  const serviceCards = [
    {
      id: "landing-page",
      title: "Landing Page",
      description:
        "Website satu halaman yang dirancang untuk memperkenalkan produk, layanan, atau bisnis dengan tampilan menarik dan fokus meningkatkan konversi.",
      features: [
        "Desain modern dan responsif",
        "Informasi produk atau layanan",
        "Tombol WhatsApp / Call to Action",
        "Optimasi tampilan mobile",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
      ),
    },
    {
      id: "company-profile",
      title: "Company Profile",
      description:
        "Website profesional untuk memperkenalkan perusahaan, membangun kredibilitas, dan memberikan informasi bisnis kepada calon pelanggan.",
      features: [
        "Profil dan tentang perusahaan",
        "Visi dan misi",
        "Layanan dan portofolio",
        "Kontak dan informasi perusahaan",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "web-saas",
      title: "Web App / SaaS",
      description:
        "Aplikasi berbasis web untuk membantu mengelola aktivitas bisnis, data, pengguna, dan berbagai proses operasional secara digital.",
      features: [
        "Login dan manajemen pengguna",
        "Dashboard interaktif",
        "Pengelolaan data",
        "Sistem admin dan laporan",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      id: "mobile-app",
      title: "Aplikasi Mobile",
      description:
        "Aplikasi Android dan iOS yang dirancang untuk memberikan pengalaman digital praktis dan mudah diakses melalui smartphone.",
      features: [
        "UI/UX modern",
        "Fitur sesuai kebutuhan bisnis",
        "Integrasi API",
        "Pengalaman pengguna responsif",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="6" y="2" width="12" height="20" rx="2.5" />
          <line x1="11" y1="18" x2="13" y2="18" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "booking",
      title: "Sistem Booking",
      description:
        "Sistem pemesanan online yang memudahkan pelanggan melakukan reservasi dan membantu bisnis mengelola jadwal secara terorganisir.",
      features: [
        "Pemesanan online",
        "Manajemen jadwal",
        "Status reservasi",
        "Dashboard pengelolaan booking",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
          <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description:
        "Website toko online untuk membantu bisnis menjual produk secara digital dengan sistem transaksi dan pengelolaan pesanan.",
      features: [
        "Katalog produk",
        "Keranjang belanja",
        "Checkout dan pembayaran",
        "Manajemen pesanan",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent selection:bg-[#004CD3] selection:text-white">
      {/* Top Navbar */}
      <Navbar activePage="Layanan" />

      {/* Main Content */}
      <main className="flex-1 pb-0">
        {/* SECTION INFORMASI LAYANAN (LIGHT CARDS) */}
        <section aria-label="Informasi Layanan" className="max-w-[1298px] mx-auto px-4 sm:px-6 min-[1340px]:px-0 pt-8 sm:pt-12 md:pt-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">[</span>
              <span className="text-[#004CD3] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                LAYANAN KAMI
              </span>
              <span className="text-[#38BDF8] font-bold text-lg sm:text-xl leading-none">]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Solusi Digital untuk Setiap Kebutuhan Bisnis
            </h2>
            <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Mulai dari website sederhana hingga sistem digital yang kompleks. Temukan layanan yang sesuai dengan kebutuhan bisnis dan ide Anda.
            </p>
          </div>

          {/* 6 Cards Grid (3 Kolom Desktop, 2 Kolom Tablet, 1 Kolom Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {serviceCards.map((service) => {
              const isSelected = selectedTab === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`group relative overflow-hidden bg-white rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-blue-600/15 cursor-pointer ${
                    isSelected
                      ? "border-[#004CD3] shadow-lg ring-2 ring-[#004CD3]/25"
                      : "border-[#D0E3F8]/90 hover:border-[#004CD3]/70 shadow-xs"
                  }`}
                >
                  {/* Kilauan Cahaya Shimmer Menyapu saat Hover */}
                  <div className="card-shimmer" />

                  {/* Efek Garis Aksen Atas yang Melebar Halus */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                      isSelected
                        ? "bg-[#004CD3] opacity-100"
                        : "bg-[#004CD3] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  <div>
                    {/* Icon Box with Smooth Scale & Dynamic Elevation */}
                    <div className="w-12 h-12 rounded-2xl bg-[#EDF5FE] border border-[#CBDFF5]/60 flex items-center justify-center mb-5 group-hover:bg-[#004CD3] group-hover:border-[#004CD3] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md group-hover:shadow-blue-600/30 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors duration-200">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title dengan Animasi Warna */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004CD3] transition-colors duration-200 mb-2.5">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="border-t border-slate-100 pt-5 mb-5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                        FITUR UTAMA:
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 group/item">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CD3] group-hover/item:scale-150 group-hover/item:bg-[#003B86] transition-transform duration-200 shrink-0" />
                            <span className="group-hover/item:text-slate-900 group-hover/item:translate-x-0.5 transition-all duration-150">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Action dengan Animated Pill Button Appearance */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#004CD3] group-hover:text-[#003B86]">
                    <span className="tracking-tight group-hover:font-bold transition-all">Lihat Paket &amp; Estimasi Harga</span>
                    <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#004CD3] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <span className="text-xs leading-none group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTAINER DARK THEME UNTUK DETAIL PRICING & FITUR (FULL WIDTH SCREEN DENGAN TEKSTUR GRID + DOTS) */}
        <div
          id="paket-harga-section"
          className="w-full mt-20 text-white py-16 sm:py-20 lg:py-24 border-y border-slate-800/80 relative"
          style={{
            backgroundColor: "#0d1527",
            backgroundImage: `
              radial-gradient(circle at 16px 16px, rgba(147, 197, 253, 0.065) 1.8px, transparent 0),
              linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px, 96px 96px, 96px 96px",
          }}
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 1. Category Bar Pills */}
            <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none">
              <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#121c33]/90 rounded-full border border-slate-700/60 shadow-inner">
                {serviceTabs.map((tab) => {
                  const isActive = selectedTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0052cc] text-white shadow-lg shadow-blue-600/40 font-semibold"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span className={isActive ? "text-white" : "text-slate-400"}>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Billing Toggle / Sub-tabs */}
            <div className="flex items-center justify-center gap-2 mt-6 mb-10">
              <div className="inline-flex items-center bg-[#121c33]/90 p-1.5 rounded-full border border-slate-700/60">
                <button
                  onClick={() => setPricingModel("project")}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    pricingModel === "project"
                      ? "bg-[#0052cc] text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Project-Based
                </button>
                <button
                  onClick={() => setPricingModel("retainer")}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    pricingModel === "retainer"
                      ? "bg-[#0052cc] text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>Monthly Retainer</span>
                  <span className="bg-blue-900/80 text-blue-300 text-[10px] px-1.5 py-0.5 rounded font-bold">
                    HEMAT 20%
                  </span>
                </button>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-300 bg-[#121c33]/90 px-3.5 py-1.5 rounded-full border border-slate-700/60">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Promo Kuartal Ini
              </span>
            </div>

            {/* 3. Three Pricing Cards (Dinamis Sesuai Kategori yang Dipilih) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              
              {/* CARD 1: STARTER */}
              {(() => {
                const plan = activeCategoryPlans.starter;
                return (
                  <div className="bg-[#111c38]/70 rounded-[28px] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div>
                      {/* Eyebrow */}
                      <div className="text-[11px] font-semibold text-[#60A5FA] tracking-wider uppercase mb-1.5">
                        {plan.categorySubtitle}
                      </div>

                      {/* Title & Duration */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
                        <span className="text-xs text-slate-300 font-normal">
                          {plan.durationBadge}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-base sm:text-lg font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {plan.price.replace("Rp ", "")}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300/90 italic mt-1 font-light">
                          {plan.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed min-h-[44px] mb-5">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full border-t border-slate-700/60 mb-5" />

                      {/* Features List */}
                      <ul className="space-y-3 text-xs sm:text-[13px] mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            {feat.included ? (
                              <span className="text-[#38BDF8] font-bold text-sm shrink-0">✓</span>
                            ) : (
                              <span className="text-slate-400 font-semibold text-sm shrink-0">✕</span>
                            )}
                            <span className={feat.included ? "text-slate-200" : "text-slate-400"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-800">
                      <Link
                        href={plan.ctaLink}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-all"
                      >
                        <span>{plan.ctaText}</span>
                        <span>→</span>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{plan.footerServer}</span>
                        <span className="text-blue-400 font-semibold">• {plan.footerSla}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* CARD 2: GROWTH (HIGHLIGHTED / POPULAR) */}
              {(() => {
                const plan = activeCategoryPlans.growth;
                return (
                  <div className="bg-[#0f214d] rounded-[28px] border-2 border-[#0062E0] p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl shadow-blue-900/50 scale-[1.02] transform transition-all duration-300 hover:scale-[1.03]">
                    {/* Badge Rekomendasi (Paling Populer) */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-md shadow-amber-500/30 border border-amber-200/80">
                        <svg className="w-3 h-3 text-slate-950 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span>PALING POPULER &amp; DIREKOMENDASIKAN</span>
                      </div>
                    </div>

                    <div>
                      {/* Eyebrow */}
                      <div className="text-[11px] font-semibold text-[#93C5FD] tracking-wider uppercase mb-1.5 mt-2 sm:mt-0">
                        {plan.categorySubtitle}
                      </div>

                      {/* Title & Duration */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
                        <span className="text-xs text-blue-200 font-normal">
                          {plan.durationBadge}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-base sm:text-lg font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {plan.price.replace("Rp ", "")}
                          </span>
                        </div>
                        <p className="text-xs text-blue-200/90 italic mt-1 font-light">
                          {plan.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed min-h-[44px] mb-5">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full border-t border-blue-900/60 mb-5" />

                      {/* Features List */}
                      <ul className="space-y-3 text-xs sm:text-[13px] mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            {feat.included ? (
                              <span className="text-[#38BDF8] font-bold text-sm shrink-0">✓</span>
                            ) : (
                              <span className="text-blue-300/40 font-semibold text-sm shrink-0">✕</span>
                            )}
                            <span className={feat.included ? "text-blue-50" : "text-blue-300/40"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-blue-900/60">
                      <Link
                        href={plan.ctaLink}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0062E0] hover:bg-[#004EB3] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/40 transition-all"
                      >
                        <span>{plan.ctaText}</span>
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-blue-300">
                        <span>{plan.footerServer}</span>
                        <span className="text-amber-300 font-semibold">• {plan.footerSla}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* CARD 3: SCALE & ENTERPRISE */}
              {(() => {
                const plan = activeCategoryPlans.scale;
                return (
                  <div className="bg-[#111c38]/70 rounded-[28px] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                    <div>
                      {/* Eyebrow */}
                      <div className="text-[11px] font-semibold text-[#60A5FA] tracking-wider uppercase mb-1.5">
                        {plan.categorySubtitle}
                      </div>

                      {/* Title & Duration */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
                        <span className="text-xs text-slate-300 font-normal">
                          {plan.durationBadge}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-1 text-white">
                          <span className="text-base sm:text-lg font-bold">Rp</span>
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            {plan.price.replace("Rp ", "")}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300/90 italic mt-1 font-light">
                          {plan.priceNote}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed min-h-[44px] mb-5">
                        {plan.description}
                      </p>

                      {/* Divider */}
                      <div className="w-full border-t border-slate-700/60 mb-5" />

                      {/* Features List */}
                      <ul className="space-y-3 text-xs sm:text-[13px] mb-6">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            {feat.included ? (
                              <span className="text-[#38BDF8] font-bold text-sm shrink-0">✓</span>
                            ) : (
                              <span className="text-slate-400 font-semibold text-sm shrink-0">✕</span>
                            )}
                            <span className={feat.included ? "text-slate-200" : "text-slate-400"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-800">
                      <Link
                        href={plan.ctaLink}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-all"
                      >
                        <span>{plan.ctaText}</span>
                        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{plan.footerServer}</span>
                        <span className="text-blue-400 font-semibold">• {plan.footerSla}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* 4. Section: Semua Paket Sudah Termasuk Standar Industri */}
            <div className="mt-20 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">
                DIPERCAYA 120+ STARTUP, BRAND FMCG, DAN AGENSI DIGITAL
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
                Semua Paket Sudah Termasuk Standar Industri idea.support
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
                {/* Feature 1 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">Zero Vendor Lock-In</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Akses repositori Git penuh, file aset Figma, dan kredensial hosting sepenuhnya diserahkan kepada Anda.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">Arsitektur Scalable</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dibangun di atas fondasi kode bersih yang siap ditingkatkan kapan saja menjadi web app atau platform SaaS.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0l13-13a2.828 2.828 0 00-4-4L3 17" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">Desain Eksklusif</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Tanpa template pasaran atau tema WordPress lambat. Dirancang unik sesuai brand guide Anda.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">Dukungan Teknis Langsung</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Komunikasi via grup WhatsApp langsung dengan Lead Developer, bukan perantara bot tiket support lambat.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Pertanyaan Umum (FAQ) */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
                Pertanyaan Umum (FAQ)
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-medium text-xs sm:text-sm text-slate-200 hover:text-white cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 ml-4">
                        {openFaq === idx ? "▲" : "▼"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Banner Bawah: Butuh Spesifikasi Khusus di Luar Paket Ini? */}
            <div className="mt-16 bg-gradient-to-r from-blue-950 via-[#004CD3]/30 to-blue-950 border border-blue-600/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  KUSTOM & SKALA BESAR
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Butuh Spesifikasi Khusus di Luar Paket Ini?
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Diskusikan kebutuhan arsitektur microservices, integrasi API enterprise, atau tim dedicated engineer dengan Tech Lead kami.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-semibold rounded-full shadow transition-all"
                >
                  <svg className="w-4 h-4 text-[#004CD3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Jadwalkan Diskusi Gratis</span>
                </Link>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center px-5 py-2.5 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-full transition-all"
                >
                  Lihat Portofolio
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
