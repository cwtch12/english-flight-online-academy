export const metadata = {
  title: "Juniors | English Flight",
  description: "Explore English Flight programs for juniors.",
};

export default function JuniorsPage() {
  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-[#eaf4fb] to-[#fff9e9] px-4 py-12 text-[#12314f] sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-[#d9e5f2] bg-white p-6 shadow-[0_20px_55px_rgba(7,26,51,0.16)] sm:p-10">
        <h1 className="text-center text-3xl font-black text-[#102f4b] sm:text-5xl">
          Juniors
        </h1>

        <div className="mt-8 rounded-2xl bg-[#f4f9fd] p-5 sm:p-8">
          <h2 className="text-center text-2xl font-black leading-tight text-[#102f4b] sm:text-3xl">
            🚀 HOW TO START SPEAKING IN ENGLISH?
          </h2>
          <p className="mt-4 text-center text-lg font-bold text-[#0f5b8d] sm:text-xl">
            Special English Speaking Session for Juniors (Ages 7–14)
          </p>
          <p className="mt-4 text-center leading-7">
            An engaging one-hour session introducing children to practical
            spoken English.
          </p>

          <div className="mt-7">
            <h3 className="text-lg font-bold text-[#102f4b]">
              What will we cover?
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>Get Rid of the Habit of Translating</li>
              <li>Start Thinking in English</li>
              <li>Build Simple Sentences with Confidence</li>
              <li>Express Ideas in Everyday English</li>
            </ul>
          </div>

          <dl className="mt-7 grid gap-3 rounded-xl bg-white p-5 sm:grid-cols-2">
            <div>
              <dt className="font-bold">📅 Date</dt>
              <dd>Saturday, 14 November 2026</dd>
            </div>
            <div>
              <dt className="font-bold">🕚 Time</dt>
              <dd>11:00 AM – 12:00 PM</dd>
            </div>
            <div>
              <dt className="font-bold">💻 Mode</dt>
              <dd>Live Online</dd>
            </div>
            <div>
              <dt className="font-bold">💰 Participation Fee</dt>
              <dd>₹100</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
