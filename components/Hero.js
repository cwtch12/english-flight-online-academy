import {
  FaCloud,
  FaMoon,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071a33] via-[#0f3557] to-[#164f73] py-12 lg:py-16">
      <div className="pointer-events-none absolute bottom-10 left-0 h-px w-2/3 border-t-2 border-dashed border-[#0f5b8d]/20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-6xl font-extrabold leading-none text-[#f6c343] md:text-7xl lg:text-8xl">
                100%
              </h2>

              <p className="mt-2 text-lg font-bold uppercase tracking-[8px] text-[#e39a08] md:text-xl">
                ONLINE CLASSES
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Take Off with Confident English
            </h1>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#f6c343] lg:mx-0"></div>

            <p className="mt-8 text-base leading-8 text-sky-100/85 md:text-lg">
              Board from anywhere and build confident English through live,
              interactive classes. Follow a clear flight plan, strengthen your
              communication, and reach your speaking goals step by step.
            </p>
          </div>

          <div className="relative h-[180px] sm:h-[230px] lg:h-[300px]">
            <FaMoon className="absolute right-[18%] top-4 text-4xl text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.45)] sm:text-5xl" />
            <span className="absolute left-[18%] top-5 text-xl text-[#f6c343]">✦</span>
            <span className="absolute left-[42%] top-14 text-sm text-white/80">✦</span>
            <span className="absolute right-[35%] top-4 text-xs text-[#f6c343]">✦</span>
            <span className="absolute bottom-16 left-[23%] text-sm text-white/75">✦</span>
            <span className="absolute bottom-5 right-[24%] text-xl text-[#f6c343]">✦</span>
            <FaCloud className="absolute left-[5%] top-8 text-5xl text-slate-200/25 sm:text-6xl" />
            <FaCloud className="absolute right-[3%] top-24 text-6xl text-slate-200/20 sm:text-7xl" />
            <FaCloud className="absolute bottom-2 left-[35%] text-5xl text-slate-200/20 sm:text-6xl" />
          </div>
        </div>
      </div>
    </section>
  );
}