"use client";

import Link from "next/link";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import WhoCanJoin from "../components/WhoCanJoin";

export default function Home() {
  return (
    <>
      <div className="bg-slate-950 px-4 py-4 text-center">
        <div className="inline-block animate-pulse rounded-2xl border border-amber-300 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 px-6 py-3 text-slate-900 shadow-lg">
          <p className="text-sm font-black uppercase tracking-[0.16em] sm:text-base">
            14-Day Money-Back Guarantee
          </p>
          <p className="mt-1 text-sm font-semibold sm:text-base">
            Enrol with confidence. Your learning journey, your peace of mind.
          </p>
        </div>
      </div>
      <Hero />
      <section className="bg-[#f5fbff] px-6 py-12 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
            School Tuition
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#102f4b] sm:text-4xl">
            All Subjects for Standards 1 to 8
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            In addition to English classes, we teach all school subjects for
            students from Standard 1 through Standard 8.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-flex rounded-full bg-[#0f5b8d] px-7 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
          >
            Explore Classes
          </Link>
        </div>
      </section>
      <WhyChooseUs />
      <WhoCanJoin />

      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sky-100 bg-[#f5fbff] p-8 shadow-[0_12px_30px_rgba(15,91,141,0.08)] sm:p-10">
          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0f5b8d]" />
            <span>Live updates</span>
          </div>

          <div className="mt-5 flex min-h-[72px] items-center justify-center">
            <p className="text-xl font-semibold leading-8 text-[#102f4b] sm:text-2xl">
              Next event coming soon
            </p>
          </div>

          <a
            href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20participating%20in%20the%20next%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#0f5b8d] px-7 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
          >
            Click here to participate in the next one
          </a>
        </div>
      </section>

      <section className="bg-[#f5fbff] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
            Quick answers
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold text-[#102f4b] sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-3">
            {[
              {
                question: "Are classes held online?",
                answer:
                  "Yes. English Flight offers live online classes, so you can join from wherever you are.",
              },
              {
                question: "Do you offer school tuition?",
                answer:
                  "Yes. We teach all school subjects for students from Standard 1 through Standard 8.",
              },
              {
                question: "How can I ask about courses and schedules?",
                answer:
                  "Contact us by phone, email, or WhatsApp and we’ll help you find the right course details.",
              },
            ].map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#102f4b] marker:hidden">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl text-[#0f5b8d] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}