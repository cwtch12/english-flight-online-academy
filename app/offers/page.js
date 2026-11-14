import { FaWhatsapp } from "react-icons/fa";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-[#102f4b] px-4 py-10 text-white sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <section className="overflow-hidden rounded-3xl border border-sky-300/40 bg-[#102f4b] text-center shadow-2xl shadow-black/40">
          <div className="bg-gradient-to-r from-sky-300 via-cyan-100 to-sky-300 px-6 py-8 text-slate-950 sm:py-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em]">
              Year Ending Offer
            </p>
            <h1 className="mt-2 text-3xl font-black sm:text-5xl">
              Special Course Fee
            </h1>
            <p className="mt-3 text-5xl font-black sm:text-6xl">₹2,000</p>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-lg leading-8 text-sky-100">
              Choose a programme and build your confidence with English Flight.
              Join live online from wherever you are.
            </p>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
              {["Basic Spoken English", "Public Speaking", "Soft Skills"].map(
                (programme) => (
                  <div
                    key={programme}
                    className="rounded-2xl border border-sky-100/20 bg-white/5 px-5 py-6 text-center font-bold text-white"
                  >
                    {programme}
                  </div>
                ),
              )}
            </div>

            <p className="mt-7 font-semibold text-sky-200">
              Minimum 4 students per batch
            </p>
            <p className="mt-3 text-sky-100">
              Offer ends on <strong className="text-white">31st December 2026</strong>
            </p>

            <a
              href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20the%20Year%20Ending%20Offer."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-7 py-4 text-lg font-bold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <FaWhatsapp className="text-2xl" />
              Enquire on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
