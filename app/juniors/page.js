export const metadata = {
  title: "Juniors | English Flight",
  description: "Explore English Flight programs for juniors.",
};

export default function JuniorsPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#b9edff_0%,#e6f9ff_42%,#c5ed9c_42%,#a9dc78_100%)] px-4 py-10 text-[#24324a] sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_22px_60px_rgba(38,86,59,0.2)]">
        <header className="relative overflow-hidden bg-[#82dcff] px-6 pb-0 pt-9 text-center sm:px-12 sm:pt-12">
          <div className="absolute right-6 top-5 text-4xl sm:right-12 sm:top-8 sm:text-5xl" aria-hidden="true">☀️</div>
          <p className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-wide text-[#17628a] shadow-sm">
            English playground
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-[#173b5b] sm:text-5xl">
            How to Start Speaking in English?
          </h1>
          <p className="mt-3 text-xl font-black text-[#17628a] sm:text-2xl">
            Part I · Juniors ages 7–14
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-[#24466a] sm:text-lg">
            Ready, set, speak! Join a fun one-hour session to practise everyday
            English, build confidence and share your ideas.
          </p>

          <div className="relative mt-8 h-32 overflow-hidden rounded-t-[2rem] bg-[#5fc34e] sm:h-40">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-[#79d961]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,transparent_49.7%,white_49.7%,white_50.3%,transparent_50.3%),linear-gradient(0deg,transparent_48%,white_48%,white_49%,transparent_49%)]" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/70 sm:h-20 sm:w-20" />
            <div className="absolute bottom-0 left-1/2 h-10 w-28 -translate-x-1/2 rounded-t-xl border-4 border-b-0 border-white/90 sm:h-14 sm:w-40" />
            <div className="absolute bottom-4 right-[18%] rotate-[-18deg] text-5xl drop-shadow-md sm:bottom-5 sm:text-6xl" aria-hidden="true">⚽</div>
            <span className="absolute bottom-2 left-5 text-2xl sm:left-10 sm:text-3xl" aria-hidden="true">🏁</span>
          </div>
        </header>

        <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-black text-[#243c68] sm:text-3xl">
              <span aria-hidden="true">📚</span> Today&apos;s Challenges
            </h2>
            <p className="mt-2 text-[#596782]">Four fun skills to practise:</p>
            <ul className="mt-5 space-y-3">
              {[
                ["01", "Get rid of the habit of translating", "bg-[#f0eaff]", "bg-[#8564d8]"],
                ["02", "Start thinking in English", "bg-[#e4f7ff]", "bg-[#34a6d4]"],
                ["03", "Build simple sentences with confidence", "bg-[#fff0d9]", "bg-[#e69a32]"],
                ["04", "Express ideas in everyday English", "bg-[#e8f8e5]", "bg-[#58a94c]"],
              ].map(([number, topic, color, badgeColor]) => (
                <li
                  key={number}
                  className={`flex items-center gap-3 rounded-2xl ${color} p-4 font-bold leading-6 text-[#293955]`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${badgeColor} text-sm font-black text-white`}>
                    {number}
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border-2 border-[#dceebd] bg-[#f4fbe9] p-5 sm:p-6">
            <h2 className="text-2xl font-black text-[#315b32]">
              📍 Game Day Details
            </h2>
            <dl className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white p-4">
                <dt className="font-bold text-[#596782]">📅 Date</dt>
                <dd className="mt-1 font-extrabold text-[#243c68]">Saturday, 14 November 2026</dd>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <dt className="font-bold text-[#596782]">🕚 Time</dt>
                <dd className="mt-1 font-extrabold text-[#243c68]">11:00 AM – 12:00 PM</dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#e1f6ee] p-4">
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

        <section className="mx-6 mb-8 rounded-3xl border-2 border-[#f4d28a] bg-[#fff9e8] p-5 sm:mx-10 sm:p-8">
          <h2 className="text-2xl font-black text-[#664b1d] sm:text-3xl">
            🎟️ Join the Team
          </h2>
          <ol className="mt-5 list-inside list-decimal space-y-3 leading-7 text-[#293955]">
            <li>Click <strong>Pay Now</strong> and pay the participation fee of ₹100.</li>
            <li>Copy your <strong>UPI Transaction ID (UTR)</strong> from the payment confirmation.</li>
            <li>Fill in the registration form with your details and Transaction ID.</li>
            <li>Submit the form to complete your registration.</li>
            <li>
              The fee is non-refundable. If the session is cancelled, you may
              choose a refund or attend the next session of the same part at no
              additional cost.
            </li>
          </ol>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://rzp.io/rzp/OdXfrTM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-[#16834a] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#0f6b3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#13824b] sm:w-auto"
            >
              ⚽ Pay Now
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4ob0hXKPdkv_zYAc34gbjEBA7kEFz2UnaFkfKCNEcX8k1bg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-[#0f5b8d] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#0b466d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f5b8d] sm:w-auto"
            >
              📝 Registration Form
            </a>
          </div>
          <p className="mt-6 text-center leading-7 text-[#293955]">
            Once your payment is verified, your registration will be confirmed.
            The joining link will be shared with you on your registered
            WhatsApp number or email address.
          </p>
        </section>

        <p className="bg-[#e5f5d5] px-6 py-4 text-center font-black text-[#315b32]">
          🏆 Practise, play and let your English score!
        </p>
      </section>
    </main>
  );
}
