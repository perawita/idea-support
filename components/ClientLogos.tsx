import React from "react";

export function PertaminaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 shrink-0 whitespace-nowrap py-1 ${className}`}>
      {/* Pertamina 3-shape mark: Blue, Green, Red curved parallelograms */}
      <svg
        className="h-7 sm:h-8 w-auto aspect-[1.1/1] shrink-0"
        viewBox="0 0 44 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top-left: Blue */}
        <path
          d="M13.5 4.5C14.2 3.3 15.6 2.5 17 2.5H25.5C27.3 2.5 28.5 4.2 27.8 5.9L22.5 18.5C21.8 19.7 20.4 20.5 19 20.5H10.5C8.7 20.5 7.5 18.8 8.2 17.1L13.5 4.5Z"
          fill="#0066B2"
        />
        {/* Top-right: Green */}
        <path
          d="M26.5 10.5C27.2 9.3 28.6 8.5 30 8.5H38.5C40.3 8.5 41.5 10.2 40.8 11.9L35.5 24.5C34.8 25.7 33.4 26.5 32 26.5H23.5C21.7 26.5 20.5 24.8 21.2 23.1L26.5 10.5Z"
          fill="#00A651"
        />
        {/* Bottom: Red */}
        <path
          d="M6.5 21.5C7.2 20.3 8.6 19.5 10 19.5H23.5C25.3 19.5 26.5 21.2 25.8 22.9L21 34.5C20.3 35.7 18.9 36.5 17.5 36.5H4C2.2 36.5 1 34.8 1.7 33.1L6.5 21.5Z"
          fill="#ED1C24"
        />
      </svg>
      <span className="font-extrabold tracking-wider text-[#1C2C42] text-lg sm:text-xl font-sans shrink-0 whitespace-nowrap leading-none">
        PERTAMINA
      </span>
    </div>
  );
}

export function AquamanPoolsLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 shrink-0 whitespace-nowrap py-1 ${className}`}>
      {/* Aquaman wave / pool monogram */}
      <svg
        className="h-7 sm:h-8 w-auto aspect-[1.1/1] shrink-0"
        viewBox="0 0 40 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 24C10 20 14 26 20 22C26 18 30 24 34 20"
          stroke="#0062E0"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M6 16C10 12 14 18 20 14C26 10 30 16 34 12"
          stroke="#004EB3"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M10 8C13 5 17 9 20 6C23 3 27 7 30 4"
          stroke="#66A9F2"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
        <span className="font-black text-[#0B2545] text-base sm:text-lg tracking-wider leading-none shrink-0 whitespace-nowrap">
          AQUAMAN
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold text-[#0B2545]/80 tracking-[0.2em] leading-tight mt-0.5 shrink-0 whitespace-nowrap">
          POOLS LLC
        </span>
      </div>
    </div>
  );
}

export function SuperEpicLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 whitespace-nowrap py-1 px-1.5 ${className}`}>
      {/* Super Epic iconic comic style yellow badge sticker with 3D black shadow */}
      <div className="relative transform -rotate-2 select-none">
        <div className="bg-[#FFE100] border-[2px] sm:border-[2.5px] border-black rounded-lg px-2 sm:px-2.5 py-0.5 shadow-[2.5px_2.5px_0px_#000000] flex flex-col items-center justify-center leading-none">
          <span className="font-black tracking-tight text-black text-xs sm:text-[13px] uppercase font-sans whitespace-nowrap">
            SUPER
          </span>
          <span className="font-black tracking-wide text-black text-xs sm:text-[13px] uppercase font-sans -mt-0.5 whitespace-nowrap">
            EPIC
          </span>
        </div>
      </div>
    </div>
  );
}

export interface ClientLogosProps {
  speed?: string;
  className?: string;
}

export default function ClientLogos({
  speed = "28s",
  className = "",
}: ClientLogosProps) {
  // Base sequence of client logos maintaining exact original order
  const logos = [
    { id: "pertamina-1", component: <PertaminaLogo /> },
    { id: "aquaman-1", component: <AquamanPoolsLogo /> },
    { id: "super-epic-1", component: <SuperEpicLogo /> },
    { id: "aquaman-2", component: <AquamanPoolsLogo /> },
    { id: "pertamina-2", component: <PertaminaLogo /> },
    { id: "aquaman-3", component: <AquamanPoolsLogo /> },
    { id: "super-epic-2", component: <SuperEpicLogo /> },
    { id: "aquaman-4", component: <AquamanPoolsLogo /> },
  ];

  return (
    <section
      id="klien"
      aria-label="Logo Klien Idea.support"
      className={`w-full py-6 sm:py-8 overflow-hidden ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Subtle gradient edge masks for smooth fade in/out */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-[#DAE5F6] via-[#DAE5F6]/80 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-[#DAE5F6] via-[#DAE5F6]/80 to-transparent z-10"
        />

        {/* Marquee Track Container */}
        <div
          className="client-logo-marquee-container relative w-full overflow-hidden py-2.5 sm:py-3"
          style={{ "--client-logo-speed": speed } as React.CSSProperties}
        >
          <div className="client-logo-marquee flex items-center opacity-90 transition-opacity hover:opacity-100">
            {/* Track 1: Original Track (Read by Screen Readers) */}
            <div className="flex items-center shrink-0 justify-around gap-8 sm:gap-12 md:gap-16 lg:gap-20 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
              {logos.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center shrink-0 px-2 transition-transform duration-200 hover:scale-105"
                >
                  {item.component}
                </div>
              ))}
            </div>

            {/* Track 2: Duplicate Track for seamless infinite loop (Hidden from Screen Readers) */}
            <div
              aria-hidden="true"
              className="flex items-center shrink-0 justify-around gap-8 sm:gap-12 md:gap-16 lg:gap-20 pr-8 sm:pr-12 md:pr-16 lg:pr-20"
            >
              {logos.map((item) => (
                <div
                  key={`dup-${item.id}`}
                  className="flex items-center justify-center shrink-0 px-2 transition-transform duration-200 hover:scale-105"
                >
                  {item.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
