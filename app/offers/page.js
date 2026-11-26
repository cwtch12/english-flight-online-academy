import { FaWhatsapp } from "react-icons/fa";

const courses = [
  {
    name: "Basic English",
    originalPrice: "₹5,000",
    price: "₹4,000",
    cardColor:
      "border-amber-500/40 bg-gradient-to-br from-zinc-800 via-neutral-900 to-stone-900",
  },
  {
    name: "Advanced English",
    originalPrice: "₹10,000",
    price: "₹8,000",
    cardColor:
      "border-amber-400/60 bg-gradient-to-br from-stone-800 via-neutral-900 to-zinc-900",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-950 via-black to-zinc-900 px-4 py-12 text-stone-100 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-3xl border border-amber-500/40 bg-neutral-950 shadow-2xl shadow-black/60">
          <div className="border-b border-amber-400/25 bg-gradient-to-r from-black via-zinc-900 to-stone-950 px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              Year-End Special
            </p>
            <h1 className="mt-3 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
              Make this the year you speak with confidence
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
              Take the next step in your English journey with a course that
              matches your goals.
            </p>
            <p className="mt-4 text-base font-bold text-amber-300 sm:text-lg">
              Special Course for Working Professionals
            </p>
          </div>

          <div className="px-6 py-9 sm:px-10 sm:py-12">
            <div className="grid gap-5 sm:grid-cols-2">
              {courses.map(({ name, originalPrice, price, cardColor }) => (
                <article
                  key={name}
                  className={`rounded-2xl border p-6 text-center shadow-lg shadow-black/30 sm:p-8 ${cardColor}`}
                >
                  <h2 className="text-xl font-extrabold text-stone-100 sm:text-2xl">
                    {name}
                  </h2>
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <del className="text-xl font-bold text-stone-400 decoration-red-400 decoration-2 sm:text-2xl">
                      {originalPrice}
                    </del>
                    <p className="text-4xl font-black text-amber-300 sm:text-5xl">
                      {price}
                    </p>
                  </div>
                  <p className="mt-2 font-semibold text-stone-400">per month</p>
                  <p className="mt-3 text-sm font-semibold text-amber-200">
                    (7-day money-back guarantee)
                  </p>
                  <p className="mt-4 font-semibold text-stone-200">
                    1-on-1 classes
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Max group of 3 students (subject to availability)
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-stone-300">
              Choose your level and get in touch to ask about enrolment and
              upcoming batches.
            </p>

            <div className="mt-6 text-center">
              <span className="inline-flex rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-2 text-sm font-bold text-amber-300 sm:text-base">
                Year-ending offer ends 31st December 2026
              </span>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20the%20Year%20Ending%20English%20course%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 px-7 py-4 text-lg font-bold text-neutral-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                <FaWhatsapp className="text-2xl text-neutral-950" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
