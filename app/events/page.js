export const metadata = {
  title: "Events | English Flight",
  description: "Updates on upcoming English Flight masterclasses and events.",
};

export default function EventsPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-[#eaf4fb] to-[#fff9e9] px-4 py-16 text-[#12314f] sm:px-6">
      <section className="w-full max-w-2xl rounded-3xl border border-[#d9e5f2] bg-white px-6 py-14 text-center shadow-[0_20px_55px_rgba(7,26,51,0.16)] sm:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f5b8d]">
          English Flight (Online Academy)
        </p>
        <h1 className="mt-4 text-3xl font-black text-[#102f4b] sm:text-5xl">
          Masterclass Coming Soon
        </h1>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#f6c343]" />
        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-600">
          We’re preparing our next masterclass. Please check back soon for
          details.
        </p>
      </section>
    </main>
  );
}
