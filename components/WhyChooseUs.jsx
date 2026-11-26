export default function WhyChooseUs() {
  const groups = [
    {
      title: "1. Practical Learning & Guidance",
      features: [
        {
          icon: "✈️",
          text: "Less Grammar, Less Theory, No Memorising Rules – More Practical Learning!",
        },
        {
          icon: "🎓",
          text: "Certified Trainer",
          details: ["TESOL", "Soft Skills", "Public Speaking and Facilitator"],
        },
        {
          icon: "🎁",
          text: "Free Online 1-on-1 Demo before enrolment.",
        },
      ],
    },
    {
      title: "2. Learning That Fits You",
      features: [
        {
          icon: "👔",
          text: "Special Course for Working Professionals",
        },
        {
          icon: "👥",
          text: "Individual & Group Classes (subject to availability).",
        },
        {
          icon: "🌍",
          text: "Learn Online from Anywhere.",
        },
      ],
    },
    {
      title: "3. Flexibility & Ongoing Support",
      features: [
        {
          icon: "💳",
          text: "Flexible Instalment Payments.",
        },
        {
          icon: "🔄",
          text: "Membership Option – Continued support after course completion.",
        },
        {
          icon: "🛡️",
          text: "14-Day Money-Back Guarantee on Courses.",
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
        <p className="mt-3 text-center text-sm text-sky-100/80 sm:text-base">
          Practical learning, personal guidance, and flexible options.
        </p>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#f6c343]" />

        <div className="mt-10 rounded-3xl border border-white/15 bg-[#071a33]/30 p-5 shadow-lg sm:p-8">
          {groups.map((group, index) => (
            <section
              key={group.title}
              className={
                index < groups.length - 1
                  ? "mb-7 border-b border-white/15 pb-7"
                  : ""
              }
            >
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.12em] text-[#f6c343]">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                {group.features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-start gap-3"
                  >
                    <span aria-hidden="true" className="shrink-0 text-2xl">
                      {feature.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-6 text-white sm:text-base">
                        {feature.text}
                      </p>
                      {feature.details && (
                        <p className="mt-1 text-xs leading-5 text-sky-100/75">
                          {feature.details.join(", ")}
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
