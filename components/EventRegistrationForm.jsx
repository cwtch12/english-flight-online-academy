"use client";

import { useState } from "react";

const paymentUrl = "https://rzp.io/rzp/3u8gWsi";

export default function EventRegistrationForm() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const email = formData.get("email").trim();
    const details = [
      "Soft Skills Masterclass Registration",
      `Name: ${name}`,
      `WhatsApp number: ${phone}`,
      email ? `Email: ${email}` : null,
      "Event: Part I – Personal Effectiveness",
      "Date: Tuesday, 10 November 2026",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/917588484882?text=${encodeURIComponent(details)}`;

    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="rounded-2xl border border-sky-100 bg-[#f5fbff] px-6 py-8 sm:px-8">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
          Step 1
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#102f4b] sm:text-3xl">
          Register &amp; Pay for the Masterclass
        </h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
          Enter your details. We’ll open WhatsApp with your registration
          message—tap <strong>Send</strong> there so English Flight receives it.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-6 grid max-w-xl gap-4"
      >
        <div>
          <label
            htmlFor="registration-name"
            className="mb-1 block text-sm font-semibold text-slate-800"
          >
            Full name
          </label>
          <input
            id="registration-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-[#0f5b8d] focus:ring-2 focus:ring-[#0f5b8d]/20"
          />
        </div>

        <div>
          <label
            htmlFor="registration-phone"
            className="mb-1 block text-sm font-semibold text-slate-800"
          >
            WhatsApp number
          </label>
          <input
            id="registration-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Include country code, e.g. +91"
            required
            minLength={8}
            maxLength={20}
            className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-[#0f5b8d] focus:ring-2 focus:ring-[#0f5b8d]/20"
          />
        </div>

        <div>
          <label
            htmlFor="registration-email"
            className="mb-1 block text-sm font-semibold text-slate-800"
          >
            Email address <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="registration-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-[#0f5b8d] focus:ring-2 focus:ring-[#0f5b8d]/20"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[#138a55] px-6 py-3 font-bold text-white transition hover:bg-[#0f7045] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#138a55]"
        >
          Send Registration on WhatsApp
        </button>
      </form>

      {whatsappUrl && (
        <div
          className="mx-auto mt-6 max-w-xl rounded-xl border border-emerald-200 bg-white p-5 text-center"
          aria-live="polite"
        >
          <p className="leading-7 text-slate-700">
            WhatsApp should open with your details. Tap <strong>Send</strong> to
            submit your registration, then return here for payment.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-semibold text-[#0f5b8d] underline underline-offset-4"
          >
            WhatsApp didn’t open? Continue to WhatsApp
          </a>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
            Step 2
          </p>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-14 items-center justify-center rounded-full bg-[#138a55] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#0f7045] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#138a55]"
          >
            Pay ₹199 &amp; Reserve Your Spot
          </a>
        </div>
      )}

      <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-slate-600">
        Your details are sent to English Flight only when you send the WhatsApp
        message. Your participation is confirmed after successful payment.
      </p>
    </section>
  );
}
