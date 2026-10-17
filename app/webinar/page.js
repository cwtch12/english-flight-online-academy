export default function WebinarPage() {
  return (
    <main className="min-h-[60vh] bg-[#eef7ff] px-6 py-12 text-[#12314f] sm:py-16">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-[0_16px_48px_rgba(15,91,141,0.12)]">
        <header className="bg-[#0b5ea8] px-6 py-8 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-100 sm:text-base">
            Free Online Webinar
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            English Flight
          </h1>
          <p className="mt-2 text-lg font-semibold text-sky-100">Online Academy</p>
        </header>

        <div className="space-y-7 px-6 py-8 sm:px-10 sm:py-10">
          <section className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0b5ea8]">Topic</p>
            <h2 className="mt-2 text-2xl font-black leading-snug sm:text-3xl">
              Vocabulary Building &amp; Ask Anything About Spoken English
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Want to improve your vocabulary or have questions about spoken English? Join us for a practical session and get your questions answered!
            </p>
          </section>

          <dl className="grid gap-4 border-y border-sky-100 py-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#0b5ea8]">Date</dt>
              <dd className="mt-1 text-lg font-semibold">Sunday, 18 October 2026</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#0b5ea8]">Time</dt>
              <dd className="mt-1 text-lg font-semibold">12:00 PM – 12:45 PM</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#0b5ea8]">Trainer</dt>
              <dd className="mt-1 text-lg font-semibold">Nasir (TESOL Certified)</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#0b5ea8]">Platform</dt>
              <dd className="mt-1 text-lg font-semibold">Google Meet</dd>
              <p className="mt-1 text-sm text-slate-600">Meeting link shared 2 hours before the webinar.</p>
            </div>
          </dl>

          <section className="text-center">
            <p className="text-lg font-bold">Interested in participating?</p>
            <p className="mt-1 text-slate-700">WhatsApp 7588484882 and send JOIN + Your Name</p>
            <a
              href="https://wa.me/917588484882?text=JOIN%20%2B%20Your%20Name"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-[#138a55] px-7 py-3 font-bold text-white transition hover:bg-[#0f7045]"
            >
              Join via WhatsApp
            </a>
          </section>

          <footer className="text-center text-sm text-slate-600">
            <p>
              Visit <a className="font-semibold text-[#0b5ea8] underline underline-offset-2" href="https://www.englishflight.online">www.englishflight.online</a> to know more.
            </p>
            <p className="mt-4 font-bold text-[#0b5ea8]">Learn • Practise • Ask • Improve</p>
          </footer>
        </div>
      </article>
    </main>
  );
}
