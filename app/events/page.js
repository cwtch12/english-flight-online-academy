export const metadata = {
  title: "Events | English Flight",
  description: "Register for English Flight events and masterclasses.",
};

export default function EventsPage() {
  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-[#eaf4fb] to-[#fff9e9] px-4 py-12 text-[#12314f] sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-[#d9e5f2] bg-white p-5 shadow-[0_20px_55px_rgba(7,26,51,0.16)] sm:p-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f5b8d]">
            English Flight (Online Academy)
          </p>
          <h1 className="mt-4 text-3xl font-black text-[#102f4b] sm:text-5xl">
            Event Registration
          </h1>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#f6c343]" />
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Click below to open the event registration form.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdm3ligfecx3bEkG2euiOdcPq2Q20DFpYzzWHmnuopflNTyGQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#0f5b8d] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#0b466d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f5b8d]"
          >
            Register for the Event
          </a>
        </div>
      </section>
    </main>
  );
}
