"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import WhoCanJoin from "../components/WhoCanJoin";

const rotatingHighlights = [
  "Free English webinars every month",
  "Priority Boarding offer till 30 Sept 2026",
  "Live interactive classes with expert trainers",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % rotatingHighlights.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <WhoCanJoin />

      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sky-100 bg-[#f5fbff] p-8 shadow-[0_12px_30px_rgba(15,91,141,0.08)] sm:p-10">
          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0f5b8d]" />
            <span>Live updates</span>
          </div>

          <div className="mt-5 flex min-h-[72px] items-center justify-center">
            <p
              key={activeIndex}
              className="animate-fade-slide text-xl font-semibold leading-8 text-[#102f4b] sm:text-2xl"
            >
              {rotatingHighlights[activeIndex]}
            </p>
          </div>

          <a
            href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20participating%20in%20the%20next%20free%20webinar."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#0f5b8d] px-7 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
          >
            Interested in the next Free Webinar - Click here
          </a>
        </div>
      </section>
    </>
  );
}