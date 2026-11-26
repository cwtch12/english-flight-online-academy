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
      icon: <FaBookOpen className="text-5xl text-teal-700" />,
      desc: "Build confidence in everyday conversations, vocabulary and clear speaking.",
    },
    {
      title: "Spoken English for Working Professionals",
      icon: <FaBriefcase className="text-5xl text-teal-700" />,
      desc: "Improve workplace communication, fluency and confidence for professional settings.",
    },
    {
      title: "Public Speaking & Presentation Skills",
      icon: <FaMicrophone className="text-5xl text-teal-700" />,
      desc: "Plan and deliver engaging presentations with confidence.",
    },
    {
      title: "US Accent Training",
      icon: <FaMicrophone className="text-5xl text-amber-500" />,
      desc: "Practice American pronunciation, intonation and rhythm for clearer speech.",
      featured: true,
    },
    {
      title: "Business/Corporate English",
      icon: <FaComments className="text-5xl text-teal-700" />,
      desc: "Develop English for meetings, emails and professional communication.",
    },
    {
      title: "Soft Skills Training",
      icon: <FaUsers className="text-5xl text-teal-700" />,
      desc: "Strengthen interpersonal skills, confidence and workplace etiquette.",
    },
  ];

  return (
    <main className="bg-teal-50">

      {/* Hero Section */}
      <section className="bg-teal-800 py-20 text-center">

        <h1 className="text-5xl font-bold text-white">
          Explore Our Classes
        </h1>

        <div className="w-24 h-1 bg-teal-300 mx-auto mt-5 rounded-full"></div>

        <p className="mt-6 text-lg text-white max-w-3xl mx-auto px-6">
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
                  ? "border-amber-400 bg-gradient-to-b from-amber-50 to-white shadow-amber-200/60 ring-2 ring-amber-200"
                  : "border-teal-100 bg-white"
              }`}
            >
              {course.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  <FaAward className="text-[10px]" /> Featured
                </span>
              )}

              <div className="flex justify-center mb-5">
                {course.icon}
              </div>

              <h2 className={`text-xl font-bold ${course.featured ? "text-amber-700" : "text-slate-900"}`}>
                {course.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {course.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}