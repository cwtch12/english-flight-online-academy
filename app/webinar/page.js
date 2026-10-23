export default function WebinarPage() {
  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-[#eaf4fb] to-[#fff9e9] px-6 py-12 text-[#12314f] sm:py-16">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#d9e5f2] bg-white shadow-[0_20px_55px_rgba(7,26,51,0.16)]">
        <header className="bg-gradient-to-br from-[#071a33] via-[#0f3557] to-[#164f73] px-6 py-8 text-center text-white sm:px-10 sm:py-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c343] sm:text-base">
            Free Online Webinar
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            Think Fast, Speak Smart!
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#f6c343]" />
          <p className="mt-4 text-lg font-semibold text-sky-100 sm:text-xl">
            Respond spontaneously in English—without translating every sentence.
          </p>
        </header>

        <div className="space-y-7 px-6 py-8 sm:px-10 sm:py-10">
          <section>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-slate-700 sm:text-lg">
              Learn practical techniques to think faster, respond naturally, and
              speak English with greater confidence.
            </p>

            <div className="mt-7 grid gap-4 rounded-xl border border-[#f3dfaa] bg-[#fffaf0] p-5 text-center sm:grid-cols-3 sm:p-6">
              <p className="text-slate-700">
                <span className="block text-sm font-bold uppercase tracking-wide text-[#a66b00]">
                  Date
                </span>
                <strong className="mt-1 block">Sunday, 25 October 2026</strong>
              </p>
              <p className="text-slate-700">
                <span className="block text-sm font-bold uppercase tracking-wide text-[#a66b00]">
                  Time
                </span>
                <strong className="mt-1 block">2:00 PM – 2:30 PM</strong>
              </p>
              <p className="text-slate-700">
                <span className="block text-sm font-bold uppercase tracking-wide text-[#a66b00]">
                  Trainer
                </span>
                <strong className="mt-1 block">Nasir</strong>
                TESOL Certified
              </p>
            </div>

            <p className="mt-5 text-center text-slate-700">
              Online via <strong>Google Meet</strong>. The meeting link will be
              shared 2 hours before the webinar.
            </p>
          </section>

          <section className="text-center">
            <p className="text-lg font-bold">Interested in participating?</p>
            <p className="mt-1 text-slate-700">
              Send <strong>JOIN + Your Name</strong> on WhatsApp.
            </p>
            <a
              href="https://wa.me/917588484882?text=JOIN%20%2B%20Your%20Name"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-[#138a55] px-7 py-3 font-bold text-white transition hover:bg-[#0f7045]"
            >
              Join on WhatsApp
            </a>
          </section>

          <footer className="text-center text-sm font-bold text-[#0f5b8d]">
            English Flight (Online Academy)
          </footer>
        </div>
      </article>
    </main>
  );
}
