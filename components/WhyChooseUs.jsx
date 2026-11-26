export default function WhyChooseUs() {
  const groups = [
    {
      title: "1. Comfort & confidence",
      features: [
        {
          icon: "✈️",
          title: "Practical Learning",
          description:
            "Less Grammar, Less Theory, No Memorising Rules – More Practical Learning!",
        },
        {
          icon: "🤝",
          title: "No Judgement",
          description: "Speak freely without feeling judged.",
        },
        {
          icon: "📷",
          title: "Camera Optional",
          description: "Your comfort matters.",
        },
      ],
    },
    {
      title: "2. Trust & opportunity",
      features: [
        {
          icon: "🎁",
          title: "Free Online 1-on-1 Demo",
          description: "Before enrolment.",
        },
        {
          icon: "🎓",
          title: "Certified Trainer",
          description: "TESOL, Soft Skills, Public Speaking and Facilitator",
        },
        {
          icon: "👔",
          title: "Special Course",
          description: "For working professionals.",
        },
      ],
    },
    {
      title: "3. Flexibility & value",
      features: [
        {
          icon: "👥",
          title: "Individual & Group Classes",
          description: "Subject to availability.",
        },
        {
          icon: "🌍",
          title: "Learn Online from Anywhere",
        },
        {
          icon: "💳",
          title: "Flexible Instalments",
        },
      ],
    },
    {
      title: "4. Long-term assurance",
      features: [
        {
          icon: "🔄",
          title: "Membership Option",
          description: "Continued support after course completion.",
        },
        {
          icon: "🛡️",
          title: "7-Day Money-Back Guarantee",
          description: "On courses.",
        },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#071a33] via-[#0f3557] to-[#164f73] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          💡 Why Choose English Flight?
        </h2>
        <p className="mt-3 text-center text-base text-sky-100/80 sm:text-lg">
          Practical learning, personal guidance, and flexible options.
        </p>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#f6c343]" />

        <div className="mt-10 rounded-3xl border border-white/15 bg-[#071a33]/30 p-6 shadow-lg sm:p-10">
          {groups.map((group, index) => (
            <section
              key={group.title}
              className={
                index < groups.length - 1
                  ? "mb-7 border-b border-white/15 pb-7"
                  : ""
              }
            >
              <h3 className="mb-6 text-lg font-bold tracking-[0.08em] text-[#f6c343] sm:text-xl">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3"
                  >
                    <span aria-hidden="true" className="shrink-0 text-3xl">
                      {feature.icon}
                    </span>
                    <div>
                      <p className="text-lg font-semibold leading-7 text-white sm:text-xl">
                        {feature.title}
                      </p>
                      {feature.description && (
                        <p className="mt-1 text-base leading-6 text-sky-100/85 sm:text-lg">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
