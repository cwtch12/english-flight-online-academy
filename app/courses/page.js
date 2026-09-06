import {
  FaBookOpen,
  FaChartLine,
  FaStar,
  FaBriefcase,
  FaComments,
  FaMicrophone,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      title: "Basic English",
      slug: "basic-english",
      icon: <FaBookOpen className="text-5xl text-teal-700" />,
      desc: "Perfect for beginners who want to start speaking English confidently.",
    },
    {
      title: "Intermediate English",
      slug: "intermediate-english",
      icon: <FaChartLine className="text-5xl text-teal-700" />,
      desc: "Improve fluency, vocabulary and everyday communication.",
    },
    {
      title: "Advanced English",
      slug: "advanced-english",
      icon: <FaStar className="text-5xl text-teal-700" />,
      desc: "Develop advanced speaking, pronunciation and confidence.",
    },
    {
      title: "Business / Corporate English",
      slug: "business-corporate-english",
      icon: <FaBriefcase className="text-5xl text-teal-700" />,
      desc: "Professional English for meetings, emails and workplace communication.",
    },
    {
      title: "Communication Skills",
      slug: "communication-skills",
      icon: <FaComments className="text-5xl text-teal-700" />,
      desc: "Build strong verbal and interpersonal communication skills.",
    },
    {
      title: "Public Speaking",
      slug: "public-speaking",
      icon: <FaMicrophone className="text-5xl text-teal-700" />,
      desc: "Overcome stage fear and deliver powerful speeches with confidence.",
    },
    {
      title: "Interview Skills",
      slug: "interview-skills",
      icon: <FaUserTie className="text-5xl text-teal-700" />,
      desc: "Prepare for HR and professional interviews with confidence.",
    },
    {
      title: "Soft Skills",
      slug: "soft-skills",
      icon: <FaUsers className="text-5xl text-teal-700" />,
      desc: "Develop confidence, personality and workplace etiquette.",
    },
  ];

  return (
    <main className="bg-teal-50">

      {/* Hero Section */}
      <section className="bg-teal-800 py-20 text-center">

        <h1 className="text-5xl font-bold text-white">
          Choose Your English Flight
        </h1>

        <div className="w-24 h-1 bg-teal-300 mx-auto mt-5 rounded-full"></div>

        <p className="mt-6 text-lg text-white max-w-3xl mx-auto px-6">
          Choose a live online route designed to improve your English,
          communication skills and confidence.
        </p>

      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-2xl border border-teal-100 bg-white p-8 text-center shadow-md"
            >
              <div className="flex justify-center mb-5">
                {course.icon}
              </div>

              <h2 className="text-xl font-bold text-slate-900">
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