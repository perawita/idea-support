import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "info" | "warning" | "danger" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-white text-[#1e293b] border-[#D0E3F8]",
    success: "bg-[#E3F5E7] text-[#164D24] border-[#B9E7C3]",
    info: "bg-[#F0EAFA] text-[#321B56] border-[#D9C9F3]",
    warning: "bg-[#FFEDD9] text-[#663600] border-[#FFD3A3]",
    danger: "bg-[#FFE0E3] text-[#660E1C] border-[#FFB0B8]",
    neutral: "bg-white text-[#333333] border-[#E0E0E0]",
  };

  const dotStyles = {
    primary: "bg-[#0062E0] ring-[#D0E3F8]",
    success: "bg-[#38C15A] ring-[#B9E7C3]",
    info: "bg-[#7C43D8] ring-[#D9C9F3]",
    warning: "bg-[#FF8800] ring-[#FFD3A3]",
    danger: "bg-[#FF2244] ring-[#FFB0B8]",
    neutral: "bg-[#666666] ring-[#CCCCCC]",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 sm:px-5 py-1.5 text-xs sm:text-[13.5px]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border shadow-[0_2px_10px_rgba(0,98,224,0.06)] font-medium ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-2.5 h-2.5 rounded-full ring-4 shrink-0 ${dotStyles[variant]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}
