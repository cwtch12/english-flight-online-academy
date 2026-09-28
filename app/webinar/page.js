export default function WebinarPage() {
  return (
    <main className="min-h-[60vh] bg-[#eef7ff] px-6 py-16" style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
      <style>{`
        @keyframes fadeBlink {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.35;
            transform: translateY(-1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-blink {
          animation: fadeBlink 1.6s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <p className="fade-blink text-base font-black uppercase tracking-[0.18em] text-[#0b5ea8] sm:text-lg">
          We conduct multiple Free Online Webinars every month.
        </p>

        <p className="fade-blink mt-6 text-2xl font-black leading-snug text-[#12314f] sm:text-4xl">
          Click here to participate in the next one
        </p>

        <a
          href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20participating%20in%20the%20next%20free%20webinar."
          target="_blank"
          rel="noopener noreferrer"
          className="fade-blink mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ffdd57] via-[#ffc93c] to-[#f4a300] px-8 py-3 text-base font-black text-[#0f172a] transition hover:scale-[1.02] sm:text-lg"
        >
          Click here
        </a>
      </div>
    </main>
  );
}
