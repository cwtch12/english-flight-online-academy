import { FaWhatsapp } from "react-icons/fa";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            <span className="text-amber-400">Priority Boarding</span>
            <br />
            <span className="text-blue-400">ENGLISH FLIGHT</span>
            <span className="text-amber-400"> OFFER</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            Take Off with Confident English
          </p>

          <div className="mt-4 h-1 w-32 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full mx-auto"></div>
        </div>

        {/* Priority boarding offer */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-slate-800/80 p-8 md:p-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            ✈️ Priority Boarding Offer
          </h2>

          <p className="text-center text-lg text-gray-300 mb-10">
            Board before <span className="text-amber-300 font-semibold">30th September 2026</span> to enjoy these special monthly course prices.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Basic Course */}
            <div className="rounded-3xl border border-blue-400/30 bg-blue-500/10 p-8 text-center hover:scale-105 transition duration-300">

              <div className="text-6xl mb-5">👥</div>

              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                Basic Course
              </h3>

              <p className="text-6xl font-extrabold text-white mb-5">
                ₹3,000
              </p>

              <p className="text-gray-300 leading-7">
                Per month
              </p>

            </div>

            {/* Advanced Course */}
            <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-8 text-center hover:scale-105 transition duration-300">

              <div className="text-6xl mb-5">🎓</div>

              <h3 className="text-2xl font-bold text-amber-300 mb-4">
                Advanced Course
              </h3>

              <p className="text-6xl font-extrabold text-white mb-5">
                ₹6,000
              </p>

              <p className="text-gray-300 leading-7">
                Per month
              </p>

            </div>

          </div>

          <div className="mt-10 rounded-2xl border border-amber-400/30 bg-slate-900/60 p-6 text-center">

            <h3 className="text-2xl font-bold text-amber-300 mb-3">
              Offer Eligibility
            </h3>

            <p className="text-lg text-gray-200">
              📅 For students enrolling before 30th September 2026
            </p>

            <p className="mt-3 text-gray-300">
              Basic Course: ₹3,000 per month • Advanced Course: ₹6,000 per month
            </p>

          </div>

        </div>

        {/* Why Choose Our Courses */}
        <div className="mb-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-white/10 rounded-3xl p-8 md:p-12">

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why Choose Our Flight Routes?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-300 leading-8">
                🎓 <strong>TESOL Certified Trainer</strong> – Learn from Nasir
                Shaikh, a certified professional with proven expertise in
                English communication and teaching.
              </p>
            </div>

            <div>
              <p className="text-gray-300 leading-8">
                ⚡ <strong>100% Live Interactive Classes</strong> – Learn through
                engaging sessions with immediate feedback.
              </p>
            </div>

            <div>
              <p className="text-gray-300 leading-8">
                🌍 <strong>Board from Anywhere</strong> – Attend classes online
                from your home airport.
              </p>
            </div>

            <div>
              <p className="text-gray-300 leading-8">
                💪 <strong>Build Confidence</strong> – Improve your fluency,
                pronunciation and communication skills.
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reserve Your Seat Today!
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Priority boarding prices are available for learners enrolling before 30th September 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/917588484882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-600 hover:to-emerald-700 transition duration-300 text-lg"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp: 75884 84882
            </a>

            <a
              href="tel:+917020030454"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-600 hover:to-blue-700 transition duration-300 text-lg"
            >
              📞 Call: +91 97020 30454
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}