import {
  FaBookOpen,
  FaBriefcase,
  FaComments,
  FaMicrophone,
  FaUsers,
  FaAward,
  FaStar,
} from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      title: "Premium Course",
      icon: <FaStar className="text-5xl text-amber-500" />,
      desc: "1-on-1 only, with personal attention, progress tracking and guidance. Fees vary by course.",
    },
    {
      title: "Spoken English for Children & Students",
      icon: <FaBookOpen className="text-5xl text-amber-400" />,
      desc: "Build confidence in everyday conversations, vocabulary and clear speaking.",
    },
    {
      title: "Spoken English for Working Professionals",
      icon: <FaBriefcase className="text-5xl text-amber-400" />,
      desc: "Improve workplace communication, fluency and confidence for professional settings.",
      featured: true,
    },
    {
      title: "Public Speaking & Presentation Skills",
      icon: <FaMicrophone className="text-5xl text-amber-400" />,
      desc: "Plan and deliver engaging presentations with confidence.",
    },
    {
      title: "US Accent Training",
      icon: <FaMicrophone className="text-5xl text-amber-400" />,
      desc: "Practice American pronunciation, intonation and rhythm for clearer speech.",
    },
    {
      title: "Business/Corporate English",
      icon: <FaComments className="text-5xl text-amber-400" />,
      desc: "Develop English for meetings, emails and professional communication.",
    },
    {
      title: "Soft Skills Training",
      icon: <FaUsers className="text-5xl text-amber-400" />,
      desc: "Strengthen interpersonal skills, confidence and workplace etiquette.",
    },
  ];

  return (
    <main className="bg-black text-amber-100">

      {/* Hero Section */}
      <section className="bg-black py-20 text-center">

        <h1 className="text-5xl font-bold text-amber-300">
          Explore Our Classes
        </h1>

        <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

        <p className="mt-6 text-lg text-amber-100 max-w-3xl mx-auto px-6">
          Explore spoken English, communication skills, and professional
          development classes. Live online participation is available.
        </p>

      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 text-center shadow-md transition-transform duration-200 hover:-translate-y-1 ${
                course.featured
                  ? "border-amber-400 bg-gradient-to-b from-amber-950 to-black shadow-amber-500/20 ring-2 ring-amber-400/70"
                  : "border-amber-800/60 bg-neutral-950"
              }`}
            >
              {course.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black shadow-md">
                  <FaAward className="text-[10px]" /> Popular Choice
                </span>
              )}

              <div className="flex justify-center mb-5">
                {course.icon}
              </div>

              <h2 className="text-xl font-bold text-amber-300">
                {course.title}
              </h2>

              <p className="mt-4 leading-7 text-amber-100/90">
                {course.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}