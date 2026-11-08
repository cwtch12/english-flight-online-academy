export const metadata = {
  title: "Soft Skills Masterclass | English Flight",
  description:
    "Join English Flight's live online Soft Skills Masterclass: Part I – Personal Effectiveness, on 10 November 2026.",
};

const learningOutcomes = [
  {
    title: "Self-awareness",
    description: "Understand your strengths, weaknesses and behaviour.",
  },
  {
    title: "Self-confidence",
    description: "Build confidence in your abilities and decisions.",
  },
  {
    title: "Emotional intelligence",
    description: "Recognise and manage your emotions effectively.",
  },
  {
    title: "Stress management",
    description: "Handle pressure and challenging situations constructively.",
  },
  {
    title: "Positive attitude",
    description: "Develop a growth mindset and a solution-oriented approach.",
  },
  {
    title: "Self-discipline",
    description: "Strengthen personal accountability and consistency.",
  },
];

const eventDetails = [
  { label: "Date", value: "Tuesday, 10 November 2026" },
  { label: "Time", value: "11:00 AM – 12:30 PM" },
  { label: "Duration", value: "90 minutes" },
  { label: "Mode", value: "Live online" },
  { label: "Platform", value: "Webinar.gg" },
  { label: "Participation fee", value: "₹199" },
];

export default function EventsPage() {
  return (
    <main className="bg-gradient-to-b from-[#eaf4fb] to-[#fff9e9] px-4 py-10 text-[#12314f] sm:px-6 sm:py-16">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#d9e5f2] bg-white shadow-[0_20px_55px_rgba(7,26,51,0.16)]">
        <header className="bg-gradient-to-br from-[#071a33] via-[#0f3557] to-[#164f73] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f6c343] sm:text-base">
            English Flight (Online Academy) presents
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-5xl">
            Soft Skills Masterclass
          </h1>
          <p className="mt-3 text-xl font-bold text-sky-100 sm:text-2xl">
            Part I – Personal Effectiveness
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#f6c343]" />
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-sky-100">
            Invest in yourself. Develop the skills that help you grow.
          </p>
        </header>

        <div className="space-y-10 px-6 py-8 sm:px-10 sm:py-12">
          <section className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Soft skills play an important role in how we understand
              ourselves, manage our emotions, respond to challenges and
              interact with others. This interactive masterclass will help you
              develop greater self-awareness, confidence and personal
              effectiveness through practical insights, real-life examples and
              engaging activities.
            </p>
          </section>

          <section>
            <h2 className="text-center text-2xl font-bold text-[#102f4b] sm:text-3xl">
              What You Will Learn
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {learningOutcomes.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-sky-100 bg-[#f5fbff] p-5"
                >
                  <h3 className="font-bold text-[#0f5b8d]">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#f3dfaa] bg-[#fffaf0] p-6 sm:p-8">
            <h2 className="text-center text-2xl font-bold text-[#102f4b] sm:text-3xl">
              Masterclass Details
            </h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {eventDetails.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <dt className="text-sm font-bold uppercase tracking-wide text-[#a66b00]">
                    {label}
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-800">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-[#102f4b] sm:text-3xl">
              Who Should Attend?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
              Students, working professionals and anyone interested in
              improving self-management, confidence and personal effectiveness.
            </p>
          </section>

          <section className="rounded-2xl bg-[#f5fbff] px-6 py-8 text-center sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
              Your Trainer
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#102f4b]">Nasir</h2>
            <p className="mt-2 leading-7 text-slate-700">
              TESOL-Certified English Trainer
              <span className="mx-2 hidden sm:inline" aria-hidden="true">
                |
              </span>
              <br className="sm:hidden" />
              Certified Soft Skills Life Coach
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-[#102f4b] sm:text-3xl">
              Reserve Your Spot
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
              Take the opportunity to invest in your personal growth. Complete
              your ₹199 payment online to confirm your participation.
            </p>
            <a
              href="https://rzp.io/rzp/3u8gWsi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-[#138a55] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#0f7045] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#138a55]"
            >
              Pay ₹199 &amp; Reserve Your Spot
            </a>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600">
              After successful payment, your Webinar Joining Link will be
              shared on your registered WhatsApp number or email address.
              Participation is confirmed only after successful payment.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
