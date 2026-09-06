import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

export default function FloatingDemoButton() {
  return (
    <Link
      href="https://wa.me/917588484882?text=Hello,%20I%20would%20like%20to%20book%20a%20FREE%20Demo%20Class."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free demo class"
      className="fixed bottom-3 right-3 z-[70] flex h-24 w-24 touch-manipulation items-center justify-center rounded-full border-4 border-white bg-[#f6c343] shadow-[0_14px_35px_rgba(15,53,87,0.32)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_18px_40px_rgba(15,53,87,0.42)] sm:bottom-5 sm:right-5 sm:h-28 sm:w-28 lg:bottom-8 lg:right-8 lg:h-36 lg:w-36 animate-floating"
    >
      <span className="absolute inset-1.5 flex flex-col items-center justify-center rounded-full border border-dashed border-[#0f3557]/55 text-center leading-none text-[#0f3557]">
        <FaPlaneDeparture className="mb-1 -rotate-12 text-sm sm:text-base lg:text-lg" aria-hidden="true" />
        <span className="text-[7px] font-black tracking-[0.18em] sm:text-[8px] lg:text-[10px]">
          DEMO BOARDING PASS
        </span>
        <span className="mt-1 text-[13px] font-black tracking-[0.08em] sm:text-[15px] lg:text-[19px]">
          FREE DEMO
        </span>
        <span className="mt-1 border-t border-[#0f3557]/40 pt-1 text-[6px] font-extrabold uppercase tracking-[0.24em] sm:text-[7px] lg:text-[9px]">
          GATE EF · CHECK IN
        </span>
      </span>
    </Link>
  );
}
