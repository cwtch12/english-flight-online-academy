import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-widest font-semibold">
            Check In With Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Let&apos;s Plan Your English Takeoff
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-8">
            Have questions about your English flight plan?
            Contact us today. Our team is one phone call or WhatsApp
            message away.
          </p>

          <a
            href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20joining%20English%20Flight%20(Online%20Academy).%20Please%20share%20the%20course%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Check In on WhatsApp
          </a>

        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="w-72 h-72 bg-slate-900 rounded-full flex items-center justify-center shadow-2xl">

              <FaHeadset className="text-white text-9xl" />

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Flight Desk Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="text-2xl text-amber-500 mt-1" />

                <div>
                  <h3 className="font-semibold text-lg">
                    Call the Flight Desk
                  </h3>

                  <a
                    href="tel:+919702030454"
                    className="text-gray-600 hover:text-black"
                  >
                    +91 97020 30454
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaWhatsapp className="text-2xl text-green-600 mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    WhatsApp Check-In
                  </h3>

                  <a
                    href="https://wa.me/917588484882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    +91 75884 84882
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaEnvelope className="text-2xl text-red-500 mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <a
                    href="mailto:speakandshine@eloquentenglishacademy.in"
                    className="text-gray-600 hover:text-black"
                  >
                   speakandshine@eloquentenglishacademy.in
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaGlobe className="text-2xl text-blue-600 mt-1" />

                <div>

                  <h3 className="font-semibold text-lg">
                    Your Online Departure Gate
                  </h3>

                  <p className="text-gray-600">
                    Board from anywhere in India or around the world.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}