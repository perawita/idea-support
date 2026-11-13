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
  const isPrimary = variant === "primary";

  // Size configurations
  const circleSizes = {
    sm: "w-8 h-8 p-1.5",
    md: "w-10 h-10 sm:w-11 sm:h-11 p-2",
    lg: "w-12 h-12 p-2.5",
    xl: "w-28 h-28 p-5",
    "2xl": "w-44 h-44 p-8",
  };

  const textHeights = {
    sm: "h-4",
    md: "h-5 sm:h-[22px]",
    lg: "h-6 sm:h-7",
    xl: "h-12",
    "2xl": "h-16",
  };

  const circleBg = isWhite
    ? "bg-[#003B86]"
    : isPrimary
    ? "bg-[#D0E3F8]"
    : "bg-[#E0E0E0]";

  const maskColor = isPrimary ? "#004CD3" : "#171717";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Monogram Badge using official assets/idea-support-icon.png mark */}
      <div
        className={`relative ${circleSizes[size]} ${
          standalone ? "bg-transparent" : circleBg
        } rounded-full flex items-center justify-center shrink-0 shadow-xs`}
      >
        {isWhite ? (
          <img
            src="/idea-support-mark.png"
            alt="Idea Support Mark"
            className="w-full h-full object-contain"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              backgroundColor: maskColor,
              WebkitMaskImage: "url(/idea-support-mark.png)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url(/idea-support-mark.png)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        )}
      </div>

      {/* Official Typography from assets/idea-support-icon.png */}
      {showText && (
        <div className="flex items-center shrink-0">
          {isWhite ? (
            <img
              src="/idea-support-text.png"
              alt="idea.support"
              className={`${textHeights[size]} w-auto object-contain`}
            />
          ) : (
            <div
              className={`${textHeights[size]} w-28 sm:w-32`}
              style={{
                backgroundColor: maskColor,
                WebkitMaskImage: "url(/idea-support-text.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskImage: "url(/idea-support-text.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
