import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-[#102f4b] px-4 py-10 text-white sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-8 text-3xl font-bold text-amber-300 sm:text-4xl">
          Festive Offer
        </h1>

        <Image
          src="/festive-offer.png"
          alt="English Flight festive offer: flat ₹2,000 special course fee for Basic Spoken English, Public Speaking, and Soft Skills. Minimum four students per batch. Offer ends November 15, 2026."
          width={768}
          height={1152}
          priority
          className="mx-auto h-auto w-full max-w-[640px] rounded-2xl shadow-2xl shadow-black/40"
        />

        <a
          href="https://wa.me/917588484882?text=Hello,%20I%20am%20interested%20in%20the%20Festive%20Offer."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-7 py-4 text-lg font-bold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <FaWhatsapp className="text-2xl" />
          Enquire on WhatsApp
        </a>
      </div>
    </main>
  );
}
