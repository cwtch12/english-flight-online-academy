import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

export default function FloatingDemoButton() {
  return (
    <Link
      href="https://wa.me/917588484882?text=Hello,%20I%20would%20like%20to%20book%20a%20FREE%20Demo%20Class."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free demo class"
      className="group fixed bottom-4 right-4 z-[70] flex h-24 w-24 touch-manipulation items-center justify-center rounded-full bg-transparent transition-all duration-300 hover:scale-105 active:scale-95 sm:bottom-5 sm:right-5 sm:h-28 sm:w-28 lg:bottom-8 lg:right-8 lg:h-36 lg:w-36 animate-floating"
    >
      <span className="absolute inset-0 rounded-full border border-sky-200/80 bg-white/30 backdrop-blur-sm opacity-80 group-hover:opacity-100" />
      <span className="absolute inset-[-8px] rounded-full border border-[#f4c24b]/60 opacity-70" />

      <span className="relative flex h-[82%] w-[82%] flex-col items-center justify-center overflow-hidden rounded-full border border-white/80 bg-[linear-gradient(135deg,#ffe9a5_0%,#f9d24b_30%,#f0b52a_60%,#e79728_100%)] text-center text-[#0f3557] shadow-[0_18px_34px_rgba(15,53,87,0.25)] ring-4 ring-white/80">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_55%)]" />
        <span className="absolute inset-x-2 bottom-1.5 h-2 rounded-full bg-[#0f3557]/10 blur-md" />

        <span className="relative flex flex-col items-center justify-center leading-none">
          <FaPlaneDeparture className="mb-1 -rotate-12 text-base sm:text-lg lg:text-2xl" aria-hidden="true" />
          <span className="text-[6px] font-black uppercase tracking-[0.22em] sm:text-[7px] lg:text-[8px]">
            FREE DEMO
          </span>
          <span className="mt-1 text-[11px] font-black tracking-[0.12em] sm:text-[13px] lg:text-[17px]">
            BOOK NOW
          </span>
          <span className="mt-1 border-t border-[#0f3557]/40 pt-1 text-[5px] font-extrabold uppercase tracking-[0.24em] sm:text-[6px] lg:text-[7px]">
            WhatsApp
          </span>
        </span>
      </span>
    </Link>
  );
}
