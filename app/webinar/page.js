export default function WebinarPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-16 text-center">
      <div className="max-w-3xl rounded-3xl border border-sky-100 bg-[#f5fbff] p-8 shadow-[0_12px_30px_rgba(15,91,141,0.08)] sm:p-10">
        <p className="text-xl font-semibold leading-8 text-[#102f4b] sm:text-2xl">
          We organize free English-learning webinars twice or more every month.
        </p>
        <a
          href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20participating%20in%20the%20next%20free%20webinar."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full bg-[#0f5b8d] px-7 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
        >
          Interested to participate in the next one
        </a>
      </div>
    </main>
  );
}
