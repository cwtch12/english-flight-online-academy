export default function WebinarPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl border border-sky-100 bg-[#f5fbff] p-8 shadow-[0_12px_30px_rgba(15,91,141,0.08)] sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f5b8d]">
          🎤 Free Online Webinar 🎤
        </p>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102f4b] sm:text-4xl">
          ✈️ English Flight (Online Academy)
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            🎯 <strong className="text-slate-900">Topic:</strong> Simple Tricks for Confident English
          </p>
          <p>Join us and discover simple, practical tricks to improve your everyday English.</p>
          <div className="space-y-1">
            <p>📅 <strong className="text-slate-900">This Friday, Sept 11th</strong></p>
            <p>⏰ <strong className="text-slate-900">7:30 PM – 8:15 PM</strong></p>
          </div>
          <p>💻 <strong className="text-slate-900">Live on Google Meet</strong></p>
          <p>🔗 Meeting link will be shared on Friday.</p>
        </div>

        <div className="mt-8 border-t border-sky-100 pt-6">
          <h2 className="text-xl font-bold text-[#102f4b]">📩 If you want to participate:</h2>
          <div className="mt-5">
            <a
              href="https://wa.me/917588484882?text=Name%20-%20Join%20Webinar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-[#0f5b8d] px-8 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
            >
              Enroll
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-lg font-bold text-[#0f5b8d]">
          ✨ Learn • Practise • Improve • Speak Confidently
        </p>
        <p className="mt-2 text-center font-semibold text-[#102f4b]">Your Flight to Better English Starts Here. ✈️</p>
      </section>
    </main>
  );
}
