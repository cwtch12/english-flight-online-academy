import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | English Flight (Online Academy)",
  description:
    "Learn how English Flight (Online Academy) handles personal information when you contact us or use our website.",
};

const sections = [
  {
    title: "Information you share with us",
    paragraphs: [
      "This website does not currently have account registration or contact forms. If you contact us by phone, email, or WhatsApp, you may choose to share details such as your name, contact information, learning goals, or a student's class level.",
      "Please avoid sending sensitive personal information unless it is necessary for your enquiry.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use information you choose to provide to respond to questions, discuss courses and class availability, and coordinate enrolment or learning support.",
    ],
  },
  {
    title: "When information is shared",
    paragraphs: [
      "We do not sell your personal information. When you choose to contact us through a third-party service such as WhatsApp or email, that service will process your information under its own privacy terms. We may also share information when required by law.",
    ],
  },
  {
    title: "Children's information",
    paragraphs: [
      "Our school tuition includes students in Standards 1 to 8. Parents or guardians should contact us and share a child's information on their behalf. We use information about a student only to respond to the enquiry or support their classes.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep enquiry information only for as long as it is reasonably needed to respond, manage the learning relationship, or meet legal obligations. We take reasonable care when handling information, but no method of electronic communication or storage can be guaranteed completely secure.",
    ],
  },
  {
    title: "Your choices and questions",
    paragraphs: [
      "You can ask us to update or delete information you have shared, subject to any legal or operational requirements. Contact us if you have a privacy question or request.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f5fbff]">
      <section className="bg-gradient-to-br from-[#071a33] via-[#0f3557] to-[#164f73] px-6 py-16 text-center sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f6c343]">
          English Flight (Online Academy)
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-sky-100/85">
          Your privacy matters to us. This page explains how we handle
          information you choose to share with us.
        </p>
        <p className="mt-4 text-sm text-sky-100/70">
          Last updated: November 4, 2026
        </p>
      </section>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {sections.map(({ title, paragraphs }) => (
            <section
              key={title}
              className="rounded-2xl border border-sky-100 bg-white p-6 shadow-[0_12px_30px_rgba(15,91,141,0.06)] sm:p-8"
            >
              <h2 className="text-xl font-bold text-[#102f4b]">{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-7 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-2xl bg-[#102f4b] p-6 text-white sm:p-8">
            <h2 className="text-xl font-bold">Contact us</h2>
            <p className="mt-3 leading-7 text-sky-100">
              For privacy-related questions, reach us at{" "}
              <a
                href="mailto:nasir.sattar.nasir@gmail.com"
                className="font-semibold underline underline-offset-4 hover:text-[#f6c343]"
              >
                nasir.sattar.nasir@gmail.com
              </a>{" "}
              or call +91 97020 30454.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-[#f6c343] px-5 py-2.5 font-semibold text-[#102f4b] transition hover:bg-amber-300"
            >
              Contact the Flight Desk
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
