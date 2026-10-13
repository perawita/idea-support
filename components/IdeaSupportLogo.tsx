import React from "react";

interface IdeaSupportLogoProps {
  variant?: "white" | "primary" | "dark";
  showText?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  standalone?: boolean;
}

export default function IdeaSupportLogo({
  variant = "white",
  showText = true,
  className = "",
  size = "md",
  standalone = false,
}: IdeaSupportLogoProps) {
  const isWhite = variant === "white";
  const textColor = isWhite
    ? "text-white"
    : variant === "primary"
    ? "text-[#0062E0]"
    : "text-[#171717]";

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
    xl: "w-28 h-28 sm:w-36 sm:h-36",
    "2xl": "w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl tracking-tight",
    xl: "text-3xl tracking-tight",
    "2xl": "text-4xl tracking-tight",
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Monogram Mark: Circle with 'is' logo */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {isWhite ? (
            <>
              {/* Outer circle for high contrast navbar badge if needed or clean transparent */}
              {!standalone && <circle cx="50" cy="50" r="46" fill="#0062E0" />}
              {/* i letter: dot + stem */}
              <circle cx="34" cy="32" r="6" fill="#FFFFFF" />
              <rect x="28" y="44" width="12" height="28" rx="6" fill="#FFFFFF" />

              {/* s letter with upward arrow at top-right */}
              {/* Arrow head */}
              <path
                d="M60 25H77V42L70 35L57 48L51 42L64 29L60 25Z"
                fill="#FFFFFF"
              />
              {/* S curves */}
              <path
                d="M52 46C55 42 61 40 68 44C74 48 74 54 70 59L55 64C49 66 48 70 52 74C56 77 65 77 71 72"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          ) : (
            <>
              {/* Primary Blue Version */}
              {!standalone && <circle cx="50" cy="50" r="46" fill="#FFFFFF" />}
              {/* i letter: dot + stem */}
              <circle cx="34" cy="32" r="6" fill="#0062E0" />
              <rect x="28" y="44" width="12" height="28" rx="6" fill="#0062E0" />

              {/* s letter with upward arrow at top-right */}
              <path
                d="M60 25H77V42L70 35L57 48L51 42L64 29L60 25Z"
                fill="#0062E0"
              />
              <path
                d="M52 46C55 42 61 40 68 44C74 48 74 54 70 59L55 64C49 66 48 70 52 74C56 77 65 77 71 72"
                stroke="#0062E0"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </svg>
      </div>

      {showText && (
        <span
          className={`font-bold font-sans ${textColor} ${textSizes[size]} leading-none`}
        >
          idea<span className="opacity-90 font-medium">.support</span>
        </span>
      )}
    </div>
  );
}
