import Link from "next/link";

export const metadata = {
  title: "Membership | English Flight",
  description: "Learn more about English Flight membership.",
};

export default function MembershipPage() {
  return (
    <main className="flex min-h-[50vh] items-center justify-center bg-[#f5fbff] px-4 py-16 text-center">
      <section className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f5b8d]">
          English Flight
        </p>
        <h1 className="mt-3 text-4xl font-bold text-[#102f4b] sm:text-5xl">
          Membership
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Membership information is coming soon. Contact us to learn about
          current options.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-[#0f5b8d] px-7 py-3 font-semibold text-white transition hover:bg-[#0b466d]"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
