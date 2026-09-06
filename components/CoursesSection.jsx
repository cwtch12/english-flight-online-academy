import { useState } from "react";

export default function CoursesSection() {
  const courses = [
    {
      title: "Basic Spoken English",
      duration: "2 Months",
      description:
        "Perfect for beginners who want to build confidence in speaking English.",
    },
    {
      title: "Advanced Spoken English",
      duration: "2 Months",
      description:
        "Improve fluency, pronunciation, vocabulary, and communication skills.",
    },
    {
      title: "Business English",
      duration: "1 Month",
      description:
        "Designed for professionals who want to communicate effectively at work.",
    },
  ];

  const [flipped, setFlipped] = useState(Array(courses.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((value, idx) => (idx === index ? !value : value))
    );
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Courses
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Tap a course card to flip it and read a short explanation on the back.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => toggleFlip(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleFlip(index);
                }
              }}
              className={`flip-card cursor-pointer rounded-3xl shadow-xl border border-slate-700 bg-slate-950 p-1 transition hover:-translate-y-1 focus-within:-translate-y-1 ${
                flipped[index] ? "is-flipped" : ""
              }`}
            >
              <div
                className="flip-card-inner relative h-full rounded-3xl overflow-hidden bg-slate-900"
                style={{
                  transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="flip-card-front absolute inset-0 flex flex-col justify-between rounded-3xl border border-slate-700 bg-slate-950 p-6"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {course.title}
                    </h3>
                    <p className="font-medium text-amber-400 mb-4">
                      Duration: {course.duration}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    Tap to see what&apos;s included.
                  </p>
                </div>

                <div
                  className="flip-card-back absolute inset-0 rounded-3xl border border-slate-700 bg-slate-900 p-6 flex flex-col justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-amber-300">
                      What&apos;s included
                    </h3>
                    <p className="text-sm leading-7 text-gray-300">
                      {course.description}
                    </p>
                  </div>
                  <div className="mt-6 space-y-2 text-sm text-slate-400">
                    <p>• Live speaking practice</p>
                    <p>• Real-time trainer feedback</p>
                    <p>• Practical speaking sessions</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}