import React from "react";

export function DompuLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap py-1 ${className}`}>
      <img
        src="/assets/clients/dompu-logo.png"
        alt="Pemerintah Kabupaten Dompu"
        className="h-8 sm:h-9 w-auto object-contain shrink-0"
      />
      <div className="flex flex-col text-left leading-tight shrink-0 whitespace-nowrap">
        <span className="font-bold text-[9px] sm:text-[10px] tracking-wider text-slate-500 uppercase font-sans">
          PEMKAB
        </span>
        <span className="font-extrabold tracking-tight text-[#1E3A8A] text-base sm:text-lg font-sans leading-none">
          DOMPU
        </span>
      </div>
    </div>
  );
}

export function LawyerLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 whitespace-nowrap py-1 ${className}`}>
      <img
        src="/assets/clients/lawyer-shield.png"
        alt="Lawyer"
        className="h-8 sm:h-9 w-auto object-contain shrink-0"
      />
    </div>
  );
}

export function QuickTopUpLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 shrink-0 whitespace-nowrap py-1 ${className}`}>
      <img
        src="/assets/clients/quick-topup-transparent.png"
        alt="Quick TopUp"
        className="h-8 sm:h-9 w-auto object-contain shrink-0"
      />
    </div>
  );
}

export function RaevelLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 shrink-0 whitespace-nowrap py-1 ${className}`}>
      <img
        src="/assets/clients/raevel-logo.png"
        alt="Raevel"
        className="h-7 sm:h-8 w-auto object-contain shrink-0"
      />
      <span className="font-extrabold tracking-tight text-[#7C3AED] text-lg sm:text-xl font-sans shrink-0 whitespace-nowrap leading-none">
        Raevel
      </span>
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
  const logos = [
    { id: "dompu-1", component: <DompuLogo /> },
    { id: "lawyer-1", component: <LawyerLogo /> },
    { id: "quick-topup-1", component: <QuickTopUpLogo /> },
    { id: "raevel-1", component: <RaevelLogo /> },
    { id: "dompu-2", component: <DompuLogo /> },
    { id: "lawyer-2", component: <LawyerLogo /> },
    { id: "quick-topup-2", component: <QuickTopUpLogo /> },
    { id: "raevel-2", component: <RaevelLogo /> },
    { id: "dompu-3", component: <DompuLogo /> },
    { id: "lawyer-3", component: <LawyerLogo /> },
    { id: "quick-topup-3", component: <QuickTopUpLogo /> },
    { id: "raevel-3", component: <RaevelLogo /> },
  ];

  return (
    <section
      id="klien"
      aria-label="Logo Klien Idea.support"
      className={`w-full py-4 sm:py-6 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-0">

        {/* Label DIPERCAYA OLEH */}
        <div className="shrink-0 pl-4 sm:pl-8 lg:pl-16 pr-5 sm:pr-6 flex items-center">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#0062E0] uppercase whitespace-nowrap">
            DIPERCAYA OLEH
          </span>
        </div>

        {/* Separator vertikal */}
        <div className="shrink-0 w-px h-8 bg-gray-300 mr-4 sm:mr-6" aria-hidden="true" />

        {/* Marquee wrapper with true alpha fade mask */}
        <div
          className="flex-1 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]"
        >
          <div
            className="client-logo-marquee-container relative w-full overflow-hidden py-2 sm:py-3"
            style={{ "--client-logo-speed": speed } as React.CSSProperties}
          >
            <div className="client-logo-marquee flex items-center">
              {/* Track 1 */}
              <div className="flex items-center shrink-0 gap-0">
                {logos.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center shrink-0"
                  >
                    <div className="px-6 sm:px-8 flex items-center justify-center transition-transform duration-200 hover:scale-105">
                      {item.component}
                    </div>
                    <div className="w-px h-6 bg-gray-200 shrink-0" aria-hidden="true" />
                  </div>
                ))}
              </div>
              {/* Track 2 (duplicate for seamless loop) */}
              <div className="flex items-center shrink-0 gap-0" aria-hidden="true">
                {logos.map((item) => (
                  <div
                    key={`dup-${item.id}`}
                    className="flex items-center shrink-0"
                  >
                    <div className="px-6 sm:px-8 flex items-center justify-center transition-transform duration-200 hover:scale-105">
                      {item.component}
                    </div>
                    <div className="w-px h-6 bg-gray-200 shrink-0" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
