import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-amber-400 font-semibold">
            Welcome Aboard
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-3">
            English Flight (Online Academy)
          </h1>

          <div className="w-28 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 text-xl text-white leading-8 max-w-3xl mx-auto">
            Helping students and professionals take off as confident English speakers
            through practical, interactive and 100% live online classes.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How This Flight Began
            </h2>

            <div className="w-20 h-1 bg-amber-400 mb-8 rounded-full"></div>

            <p className="text-black font-bold  leading-8 mb-5">
              Hi, My name is Nasir. I am the founder of English Flight (Online Academy). We believe English should be spoken,
              practiced and enjoyed—not just memorized.
            </p>

            <p className="text-black font-bold leading-8">
              Our classes focus on real conversations, confidence building,
              pronunciation and practical communication that students can use
              in everyday life.
            </p>

          </div>

          {/* Right */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Learners Choose This Flight
            </h2>

            <div className="w-20 h-1 bg-amber-400 mb-8 rounded-full"></div>

            <div className="space-y-5">

              {[
                "100% Live Online Flight Sessions",
                "TESOL Certified English Trainer",
                "Practical Speaking Practice",
                "Personal Flight Guidance",
                "Board from Anywhere",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">

                  <FaCheckCircle className="text-amber-500 text-xl" />

                  <p className="text-black font-bold text-lg">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="bg-slate-900 py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">
            Our Flight Mission
          </h2>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>

          <p className="mt-8 text-lg text-white leading-10">
            Our mission is to make Spoken English simple, practical and
            confidence-building so every learner can communicate naturally
            and reach new destinations in personal, academic and professional life.
          </p>

        </div>

      </section>

    </main>
  );
}