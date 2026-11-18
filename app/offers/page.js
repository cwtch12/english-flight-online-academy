import { FaWhatsapp } from "react-icons/fa";

const courses = [
  { name: "Basic English", price: "₹3,000" },
  { name: "Advanced English", price: "₹6,000" },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-sky-100 px-4 py-12 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-2xl shadow-sky-900/10 backdrop-blur">
          <div className="bg-gradient-to-r from-sky-900 via-blue-800 to-indigo-900 px-6 py-10 text-center text-white sm:px-10 sm:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Year-End Special
            </p>
            <h1 className="mt-3 text-3xl font-black sm:text-5xl">
              Make this the year you speak with confidence
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg">
              Take the next step in your English journey with a course that
              matches your goals.
            </p>
          </div>

          <div className="px-6 py-9 sm:px-10 sm:py-12">
            <div className="grid gap-5 sm:grid-cols-2">
              {courses.map(({ name, price }) => (
                <article
                  key={name}
                  className="rounded-2xl border border-sky-200 bg-gradient-to-br from-white to-sky-50 p-6 text-center shadow-lg shadow-sky-900/5 sm:p-8"
                >
                  <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">
                    {name}
                  </h2>
                  <p className="mt-5 text-4xl font-black text-blue-800 sm:text-5xl">
                    {price}
                  </p>
                  <p className="mt-2 font-semibold text-slate-500">per month</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-slate-600">
              Choose your level and get in touch to ask about enrolment and
              upcoming batches.
            </p>

            <div className="mt-6 text-center">
              <span className="inline-flex rounded-full border border-amber-300 bg-amber-100 px-5 py-2 text-sm font-bold text-amber-900 sm:text-base">
                Year-ending offer ends 31st December 2026
              </span>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20the%20Year%20Ending%20English%20course%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-7 py-4 text-lg font-bold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-800"
              >
                <FaWhatsapp className="text-2xl" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
