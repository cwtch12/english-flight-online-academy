import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#102f4b] text-white">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/garden-flowers.svg"
          alt="Night sky background"
          fill
          className="object-cover"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent"></div>
      </div>

      <div className="relative mx-auto max-w-full px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-[2rem] border border-sky-100/15 bg-[#0b2740]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full bg-[#f6c343]/15 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c343] shadow-sm shadow-[#f6c343]/10">
                Your English Destination
              </span>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                A clear runway for your English journey
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Follow a practical route where every lesson builds confidence, every conversation adds altitude, and every learner moves closer to fluent English.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-sky-100/15 bg-[#123b5c]/70 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.35)] sm:p-8">
              <div className="space-y-5">
                <div className="rounded-3xl border border-white/10 bg-[#0b2740]/80 p-5 shadow-inner">
                  <div className="flex items-center gap-3 text-[#f6c343]">
                    <FaPhoneAlt className="text-xl" />
                    <span className="text-sm uppercase tracking-[0.18em] text-sky-100">Call us</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">+91 97020 30454</p>
                </div>

                <a
                  href="https://wa.me/917588484882?text=Hello,%20I%20would%20like%20to%20book%20a%20FREE%20Demo%20Class."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-3xl border border-white/10 bg-[#0b2740]/80 p-5 shadow-inner transition hover:bg-[#163f5e]"
                >
                  <div className="flex flex-col gap-3 text-[#f6c343] sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <FaWhatsapp className="text-xl" />
                      <span className="text-sm uppercase tracking-[0.18em] text-sky-100">WhatsApp</span>
                    </div>
                    <span className="text-sm text-slate-400">Tap to message</span>
                  </div>
                  <p className="mt-3 break-words text-lg font-semibold text-white">
                    +91 75884 84882
                  </p>
                </a>



                <div className="rounded-3xl border border-white/10 bg-[#0b2740]/80 p-5 shadow-inner">
                  <div className="flex items-center gap-3 text-[#f6c343]">
                    <FaEnvelope className="text-xl" />
                    <span className="text-sm uppercase tracking-[0.18em] text-sky-100">Email</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">speakandshine@eloquentenglishacademy.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400 sm:mt-12">
            © 2026 English Flight (Online Academy). All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
