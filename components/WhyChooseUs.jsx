export default function WhyChooseUs() {
  const features = [
    { icon: "✈️", text: "Less Grammar, Less Theory, No Memorising Rules – More Practical Learning!" },
    { icon: "🤝", text: "No Judgement – Speak freely without feeling judged." },
    { icon: "📷", text: "Camera Optional – Your comfort matters." },
    { icon: "🎁", text: "Free Online 1-on-1 Demo before enrolment." },
    { icon: "👥", text: "Individual & Group Classes (subject to availability)." },
    { icon: "🌍", text: "Learn Online from Anywhere." },
    { icon: "🔄", text: "Membership Option – Continued support after course completion." },
    { icon: "💳", text: "Flexible Instalment Payments." },
    { icon: "🛡️", text: "14-Day Money-Back Guarantee on Courses." },
  ];

  return (
    <section className="bg-[#f5fbff] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#102f4b] md:text-4xl">
          💡 Why Choose English Flight?
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-start gap-4 rounded-2xl border border-[#b9e2f4] bg-white p-6 shadow-[0_12px_30px_rgba(15,91,141,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,91,141,0.16)]"
            >
              <span aria-hidden="true" className="shrink-0 text-2xl">
                {feature.icon}
              </span>
              <p className="text-base font-semibold leading-7 text-[#102f4b]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}