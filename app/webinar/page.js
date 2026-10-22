export default function WebinarPage() {
  return (
    <main className="min-h-[60vh] bg-[#eef7ff] px-6 py-12 text-[#12314f] sm:py-16">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-[0_16px_48px_rgba(15,91,141,0.12)]">
        <header className="bg-[#0b5ea8] px-6 py-8 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-100 sm:text-base">
            Free Online Webinars
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            Next Webinar Coming Soon
          </h1>
          <p className="mt-2 text-lg font-semibold text-sky-100">Online Academy</p>
        </header>

        <div className="space-y-7 px-6 py-8 sm:px-10 sm:py-10">
          <section className="text-center">
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Our next free online webinar is coming soon. Check back for details
              and join us to learn, practise, and ask your questions.
            </p>
          </section>

          <section className="text-center">
            <p className="text-lg font-bold">Want to participate?</p>
            <a
              href="https://wa.me/917588484882?text=JOIN%20%2B%20Your%20Name"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-[#138a55] px-7 py-3 font-bold text-white transition hover:bg-[#0f7045]"
            >
              Click here to participate
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
