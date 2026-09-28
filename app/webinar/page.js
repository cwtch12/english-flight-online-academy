export default function WebinarPage() {
  return (
    <main className="min-h-[60vh] bg-[radial-gradient(circle_at_top,_#fff7d6,_#ffffff_50%)] px-6 py-16">
      <section className="mx-auto w-full max-w-5xl rounded-[32px] border border-[#f7d66b] bg-gradient-to-br from-[#0f2d52] via-[#123d6a] to-[#0a2340] px-6 py-12 text-center shadow-[0_20px_45px_rgba(11,38,62,0.22)] sm:px-10 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-black uppercase tracking-[0.30em] text-[#ffd76a] animate-pulse">
            We conduct multiple Free Online Webinars every month.
          </p>

          <p className="text-2xl font-black text-white sm:text-4xl animate-pulse">
            Click here to participate in the next one
          </p>

          <a
            href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20participating%20in%20the%20next%20free%20webinar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex animate-pulse rounded-full bg-gradient-to-r from-[#f6c343] via-[#ffb703] to-[#f59e0b] px-9 py-3 text-lg font-black text-[#0f172a] shadow-[0_10px_22px_rgba(246,195,67,0.5)] transition hover:scale-[1.02] hover:shadow-[0_14px_28px_rgba(246,195,67,0.65)]"
          >
            Click here
          </a>
        </div>
      </section>
    </main>
  );
}
