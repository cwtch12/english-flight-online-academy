import {
  FaUserGraduate,
  FaBriefcase,
  FaSearch,
  FaBuilding,
  FaHome,
  FaGlobe,
} from "react-icons/fa";

export default function WhoCanJoin() {
  const learners = [
    {
      icon: <FaUserGraduate className="text-4xl text-[#0f5b8d]" />,
      title: "School & College Students",
    },
    {
      icon: <FaBriefcase className="text-4xl text-[#0f5b8d]" />,
      title: "Working Professionals",
    },
    {
      icon: <FaSearch className="text-4xl text-[#0f5b8d]" />,
      title: "Job Seekers",
    },
    {
      icon: <FaBuilding className="text-4xl text-[#0f5b8d]" />,
      title: "Business Owners",
    },
    {
      icon: <FaHome className="text-4xl text-[#0f5b8d]" />,
      title: "Homemakers",
    },
    {
      icon: <FaGlobe className="text-4xl text-[#0f5b8d]" />,
      title: "Anyone Who Wants to Speak English",
    },
  ];

  return (
    <section className="bg-[#102f4b] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Who Is This Course For?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
            Our 100% live online Spoken English classes are designed for
            learners from every background who want to speak English
            confidently in real-life situations.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {learners.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-sky-100/70 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}