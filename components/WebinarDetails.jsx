export default function WebinarDetails() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-3xl border border-orange-300/80 bg-gradient-to-br from-[#FF9933] via-white to-[#138808] p-8 text-center shadow-[0_0_35px_rgba(255,153,51,0.25)] sm:p-10">
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(19,136,8,0.35),_transparent_62%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
            Free Flight Briefing
          </span>
          <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            India 🇮🇳
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          ✈️ <span className="text-orange-600">FREE FLIGHT BRIEFING</span> ✈️
        </h1>

        <p className="mt-4 text-xl font-semibold text-slate-900">
          By: <span className="text-orange-700">English Flight (Online Academy)</span>
        </p>

        <p className="mt-2 text-lg text-slate-800">
          👨‍🏫 <strong>Trainer:</strong> Nasir <span className="text-slate-600">(TESOL Certified)</span>
        </p>

        <p className="mt-4 text-lg text-slate-800">
          🎯 <strong>Topic:</strong> <span className="font-bold text-slate-900">Speak Confidently Using 6 Tenses</span>
        </p>

        <p className="mt-6 text-xl font-semibold text-slate-900">
          Learn to use the most useful tenses naturally while speaking English and stay on course in every conversation.
        </p>

        <div className="mt-6 space-y-2 text-lg text-slate-800">
          <p>📅 <strong>Today, 6 September 2026</strong></p>
          <p>⏰ <strong>2:00 PM – 2:45 PM</strong></p>
        </div>

        <div className="mt-7 space-y-4">
          <p className="text-lg font-semibold text-slate-900">📩 How to Join:</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/917588484882?text=JOIN%20%2B%20Your%20Name"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md animate-pulse bg-gradient-to-r from-[#FF9933] via-[#FFB11A] to-[#138808] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_22px_rgba(19,136,8,0.22),0_0_20px_rgba(255,153,51,0.6)] transition hover:scale-[1.02] hover:animate-none"
            >
              Enroll via WhatsApp
            </a>
          </div>
        </div>

          <p className="mt-7 text-lg font-bold text-orange-700">✨ Don’t miss your takeoff!</p>
      </div>
    </section>
  );
}
