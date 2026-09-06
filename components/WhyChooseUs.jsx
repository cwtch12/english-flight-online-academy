import {
  FaUserGraduate,
  FaComments,
  FaLaptop,
  FaCertificate,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCertificate size={30} className="text-blue-600" />,
      title: "TESOL Certified Trainer",
      description:
        "Fly with a qualified trainer who brings practical teaching experience.",
    },
    {
      icon: <FaComments size={30} className="text-blue-600" />,
      title: "Practical Learning",
      description:
        "Practice real conversations instead of memorizing grammar rules.",
    },
    {
      icon: <FaUserGraduate size={30} className="text-blue-600" />,
      title: "Small Batches",
      description:
        "Personal guidance so every learner can stay on course.",
    },
    {
      icon: <FaLaptop size={30} className="text-blue-600" />,
      title: "100% Live Online Classes",
      description:
        "Join live interactive classes from your home airport.",
    },
  ];

  return (
    <section className="bg-[#f5fbff] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="mb-12 text-center text-3xl font-bold text-[#102f4b] md:text-4xl">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#b9e2f4] bg-white p-6 text-center shadow-[0_12px_30px_rgba(15,91,141,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,91,141,0.16)]"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}