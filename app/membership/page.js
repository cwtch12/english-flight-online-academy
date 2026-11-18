const benefits = [
  {
    icon: "💬",
    title: "Post-course doubt support",
    description:
      "Have an English-related question after your course? Get guidance when doubts come up.",
  },
  {
    icon: "🎙️",
    title: "Speaking practice",
    description:
      "Join short 10–15-minute speaking drills to keep your fluency growing, subject to availability.",
  },
  {
    icon: "🌱",
    title: "Continued guidance",
    description:
      "Reinforce what you have learned and work on the areas where you would like to improve.",
  },
  {
    icon: "🤝",
    title: "Stay connected",
    description:
      "Keep in touch with English Flight and continue practising English beyond the classroom.",
  },
];

export const metadata = {
  title: "Membership | English Flight",
  description:
    "Continue your English learning journey with post-course guidance and practice support from English Flight.",
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-950 via-black to-zinc-900 px-4 py-12 text-stone-100 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden rounded-3xl border border-amber-500/40 bg-neutral-950 shadow-2xl shadow-black/60">
          <header className="border-b border-amber-400/25 bg-gradient-to-r from-black via-zinc-900 to-stone-950 px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              English Flight
            </p>
            <h1 className="mt-3 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
              Continued Learning Membership
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-stone-100 sm:text-xl">
              Your learning doesn&apos;t have to end when your course does.
            </p>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-stone-300">
              Continue getting guidance and practice support after completing
              your course, and keep building confidence in English.
            </p>
          </header>

          <div className="px-6 py-9 sm:px-10 sm:py-12">
            <h2 className="text-center text-xl font-bold text-amber-300 sm:text-2xl">
              Your membership benefits
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map(({ icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-zinc-800 via-neutral-900 to-stone-900 p-5 shadow-lg shadow-black/30 sm:p-6"
                >
                  <h3 className="flex items-center gap-3 text-lg font-bold text-stone-100">
                    <span aria-hidden="true" className="text-2xl">
                      {icon}
                    </span>
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-stone-300">{description}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-lg font-bold leading-8 text-amber-300 sm:text-xl">
              Keep learning, keep practising, and keep improving with English
              Flight! ✨
            </p>
            <div className="mt-7 text-center">
              <a
                href="https://wa.me/917588484882?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20the%20English%20Flight%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 px-7 py-3 font-bold text-neutral-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                Ask about membership
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
