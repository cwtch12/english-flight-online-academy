export const metadata = {
  title: "Juniors | English Flight",
  description: "Explore English Flight programs for juniors.",
};

export default function JuniorsPage() {
  return (
    <main className="overflow-hidden bg-[#fff9e8] px-4 py-10 text-[#24324a] sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_18px_50px_rgba(58,74,114,0.16)]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#70d6ff] via-[#8be0d0] to-[#c6f27d] px-6 py-10 text-center sm:px-12 sm:py-14">
          <span aria-hidden="true" className="absolute left-5 top-4 text-4xl sm:left-10 sm:top-8 sm:text-5xl">⭐</span>
          <span aria-hidden="true" className="absolute bottom-5 right-6 text-4xl sm:bottom-8 sm:right-12 sm:text-5xl">🌈</span>
          <p className="inline-flex rounded-full border-2 border-white/80 bg-white/80 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#24466a] shadow-sm">
            Hey, Juniors!
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight text-[#173b5b] sm:text-5xl">
            🚀 How to Start Speaking in English?
          </h1>
          <p className="mt-4 text-lg font-extrabold text-[#24466a] sm:text-2xl">
            A special English-speaking session for ages 7–14
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-7 text-[#24466a] sm:text-lg">
            Get ready to think, speak and share your ideas in English! Join us
            for a fun, one-hour introduction to practical spoken English.
          </p>
        </div>

        <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-black text-[#243c68] sm:text-3xl">
              <span aria-hidden="true">🎨</span> What will we learn?
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                ["🧠", "Get rid of the habit of translating", "bg-[#f0eaff]"],
                ["💭", "Start thinking in English", "bg-[#e4f7ff]"],
                ["🗣️", "Build simple sentences with confidence", "bg-[#fff0d9]"],
                ["✨", "Express ideas in everyday English", "bg-[#e8f8e5]"],
              ].map(([emoji, topic, color]) => (
                <li
                  key={topic}
                  className={`flex items-center gap-3 rounded-2xl ${color} p-4 font-bold leading-6 text-[#293955]`}
                >
                  <span className="text-2xl" aria-hidden="true">{emoji}</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-[#f4f7ff] p-5 sm:p-6">
            <h2 className="text-2xl font-black text-[#243c68]">
              📌 Session Details
            </h2>
            <dl className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white p-4">
                <dt className="font-bold text-[#596782]">📅 Date</dt>
                <dd className="mt-1 font-extrabold text-[#243c68]">Saturday, 14 November 2026</dd>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <dt className="font-bold text-[#596782]">🕚 Time</dt>
                <dd className="mt-1 font-extrabold text-[#243c68]">11:00 AM – 12:00 PM</dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#dcf8ed] p-4">
                  <dt className="font-bold text-[#3d665d]">💻 Mode</dt>
                  <dd className="mt-1 font-extrabold text-[#234f46]">Live Online</dd>
                </div>
                <div className="rounded-2xl bg-[#fff0c9] p-4">
                  <dt className="font-bold text-[#755a27]">🎟️ Fee</dt>
                  <dd className="mt-1 text-xl font-black text-[#60450f]">₹100</dd>
                </div>
              </div>
            </dl>
          </section>
        </div>
        <p className="bg-[#fff0d9] px-6 py-4 text-center font-bold text-[#715329]">
          🌟 Come along, have fun and let your English shine! 🌟
        </p>
      </section>
    </main>
  );
}
