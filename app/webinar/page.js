export default function WebinarPage() {
  return (
    <main className="min-h-[60vh] bg-white px-6 py-16">
      <section className="mx-auto w-full max-w-4xl rounded-3xl border border-sky-100 bg-[#f5fbff] px-6 py-12 text-center shadow-[0_12px_30px_rgba(15,91,141,0.08)] sm:px-10 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f5b8d]">
            Free Webinar
          </p>

          <h1 className="text-4xl font-black tracking-tight text-[#102f4b] sm:text-6xl">
            The Tension of Tenses
          </h1>

          <p className="text-xl font-semibold text-[#102f4b] sm:text-2xl">
            Why do we get so confused about tenses?
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Confused about <strong>I went, I have gone, I had gone</strong>?
            <br />
            Join us and understand tenses in a simple, practical way.
          </p>

          <div className="grid gap-4 rounded-2xl border border-sky-100 bg-white p-6 text-left text-lg text-slate-800 sm:grid-cols-3 sm:text-center">
            <p>
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#0f5b8d]">Date</span>
              <strong>Sunday, 27 September 2026</strong>
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#0f5b8d]">Time</span>
              <strong>2:00 PM – 2:45 PM</strong>
            </p>
            <p>
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#0f5b8d]">Trainer</span>
              <strong>Nasir</strong> (TESOL Certified)
            </p>
          </div>

          <p className="text-lg font-semibold text-[#102f4b]">English Flight (Online Academy)</p>

          <a
            href="https://wa.me/917588484882?text=JOIN%20%2B%20Your%20Name"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#0f5b8d] px-8 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
          >
            Enroll
          </a>
        </div>
      </section>
    </main>
  );
}
