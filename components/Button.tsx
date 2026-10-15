import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "primary-dark" | "secondary" | "danger" | "success" | "outline";
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "medium" | "bold";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  weight = "medium",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";

  const disabledStyles =
    "bg-[#E0E0E0] text-[#999999] cursor-not-allowed pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 sm:py-3 text-sm sm:text-[14px]",
    lg: "px-8 py-3.5 text-base",
  };

  const weightStyles = {
    regular: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-[#0062E0] text-white hover:bg-[#004EB3] active:bg-[#003B86] focus-visible:ring-[#0062E0]",
    "primary-dark":
      "bg-[#004EB3] text-white hover:bg-[#003B86] active:bg-[#00275A] focus-visible:ring-[#004EB3]",
    secondary:
      "bg-[#D0E3F8] text-[#004EB3] hover:bg-[#99C7F7] focus-visible:ring-[#0062E0]",
    success:
      "bg-[#38C15A] text-white hover:bg-[#2D9A48] focus-visible:ring-[#38C15A]",
    danger:
      "bg-[#FF2244] text-white hover:bg-[#CC1D37] focus-visible:ring-[#FF2244]",
    outline:
      "border border-[#0062E0] text-[#0062E0] bg-transparent hover:bg-[#D0E3F8]/30 focus-visible:ring-[#0062E0]",
  };

  const activeVariant = variantStyles[variant ?? "primary"];

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${weightStyles[weight]} ${
        disabled ? disabledStyles : activeVariant
      } ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
