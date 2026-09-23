export default function WebinarPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-16">
      <section className="flex w-full max-w-4xl items-center justify-center rounded-3xl border border-sky-100 bg-[#f5fbff] px-6 py-16 text-center shadow-[0_12px_30px_rgba(15,91,141,0.08)] sm:px-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f5b8d]">
            Webinar
          </p>

          <h1 className="animate-fade-in-out text-4xl font-black tracking-tight text-[#102f4b] sm:text-6xl lg:text-7xl">
            Next Webinar
            <span className="mt-3 block">Coming Soon</span>
          </h1>

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
    </main>
  );
}
