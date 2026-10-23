"use client";

import React, { useRef, useState } from "react";

interface ImageUploadProps {
  label: string;
  value: string | null;
  onChange: (value: string) => void;
  helperText?: string;
  shape?: "square" | "circle" | "banner";
}

export default function ImageUpload({
  label,
  value,
  onChange,
  helperText = "Format: JPG, PNG, WebP (maks. 2MB)",
  shape = "square",
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFile = (file: File) => {
    setErrorMsg(null);
    if (!file.type.startsWith("image/")) {
      setErrorMsg("Hanya file gambar yang diperbolehkan!");
      return;
    }

    // Maksimal 2MB
    if (file.size > 2 * 1024 * 1024) {
      setErrorMsg("Ukuran file terlalu besar! Maksimal 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleRemove = () => {
    onChange("");
    setErrorMsg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const previewRadius =
    shape === "circle" ? "rounded-full" : shape === "banner" ? "rounded-xl aspect-video" : "rounded-xl";

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-700">
        {label}
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp, image/svg+xml"
        onChange={onFileChange}
        className="hidden"
      />

      {value ? (
        <div className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-2xl">
          <div
            className={`w-16 h-16 bg-white border border-slate-200 overflow-hidden flex items-center justify-center shrink-0 shadow-xs ${previewRadius}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 truncate">
              Foto terpilih
            </p>
            <p className="text-[11px] text-emerald-600 font-medium">
              ✓ Siap disimpan ke database
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Ganti Foto
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="px-2.5 py-1 text-[11px] font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center p-5 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
            isDragging
              ? "border-blue-500 bg-blue-50/50"
              : "border-slate-200 hover:border-blue-400 hover:bg-slate-50/60"
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 shadow-xs">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs font-semibold text-slate-700">
            <span className="text-blue-600 hover:underline">Klik untuk upload foto</span> atau seret file ke sini
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">{helperText}</p>
        </div>
      )}

      {errorMsg && (
        <p className="text-[11px] text-rose-600 font-medium">{errorMsg}</p>
      )}
    </div>
  );
}
