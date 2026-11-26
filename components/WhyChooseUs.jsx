export default function WhyChooseUs() {
  const features = [
    { icon: "✈️", text: "Less Grammar, Less Theory, No Memorising Rules – More Practical Learning!" },
    { icon: "🤝", text: "No Judgement – Speak freely without feeling judged." },
    { icon: "🎓", text: "Certified Trainer." },
    { icon: "🎁", text: "Free Online 1-on-1 Demo before enrolment." },
    { icon: "👥", text: "Individual & Group Classes (subject to availability)." },
    { icon: "🌍", text: "Learn Online from Anywhere." },
    { icon: "🔄", text: "Membership Option – Continued support after course completion." },
    { icon: "💳", text: "Flexible Instalment Payments." },
    { icon: "🛡️", text: "14-Day Money-Back Guarantee on Courses." },
  ];

  return (
    <section className="bg-gradient-to-br from-[#071a33] via-[#0f3557] to-[#164f73] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          💡 Why Choose English Flight?
        </h2>
        <div className="mx-auto mb-12 mt-6 h-1 w-24 rounded-full bg-[#f6c343]" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-start gap-4 rounded-2xl border border-white/15 bg-[#071a33]/35 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#f6c343]/60 hover:bg-[#071a33]/55"
            >
              <span aria-hidden="true" className="shrink-0 text-2xl">
                {feature.icon}
              </span>
              <p className="text-base font-semibold leading-7 text-white">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}