export const metadata = {
  title: "Soft Skills Masterclass | English Flight",
  description:
    "Join English Flight's 90-minute online Soft Skills Masterclass: Personal Effectiveness, on Sunday, 15 November 2026.",
};

export default function EventsPage() {
  return (
    <main className="min-h-[60vh] bg-[#071b33] px-4 py-12 text-white sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[#294563] bg-[#102a46] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.3)] sm:p-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            English Flight (Online Academy)
          </p>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Soft Skills Masterclass
          </h1>
          <p className="mt-3 text-lg font-bold text-white">
            Part I – Personal Effectiveness
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#f6c343]" />
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-white">
            How well do we understand, manage and present ourselves?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-8 text-white">
          <p className="text-base leading-7 sm:text-lg">
            Personal effectiveness begins with understanding ourselves,
            managing our emotions and taking responsibility for our actions.
            Whether we&apos;re students, working professionals, entrepreneurs or
            pursuing any other path, personal effectiveness plays an important
            role in all our lives.
          </p>

          <p className="text-base leading-7 sm:text-lg">
            Join us for a 90-minute interactive masterclass exploring six
            essential areas:
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <section className="rounded-2xl bg-[#173653] p-5">
              <h2 className="text-xl font-bold text-white">
                What We Will Explore
              </h2>
              <ol className="mt-4 list-inside list-decimal space-y-2 leading-7">
                <li>Self-awareness</li>
                <li>Self-confidence</li>
                <li>Emotional Intelligence</li>
                <li>Stress Management</li>
                <li>Positive Attitude &amp; Growth Mindset</li>
                <li>Self-discipline &amp; Personal Accountability</li>
              </ol>
              <p className="mt-4 leading-7">
                <strong>What to Expect:</strong> Practical insights, real-life
                examples and interactive activities.
              </p>
            </section>

            <section className="rounded-2xl bg-[#173653] p-5">
              <h2 className="text-xl font-bold text-white">
                Masterclass Details
              </h2>
              <ul className="mt-4 space-y-2 leading-7">
                <li><strong>Date:</strong> Sunday, 15 November 2026</li>
                <li><strong>Time:</strong> 11:30 AM – 1:00 PM</li>
                <li><strong>Duration:</strong> 90 Minutes</li>
                <li><strong>Mode:</strong> Live Online</li>
                <li><strong>Language:</strong> English &amp; Hindi (if required)</li>
                <li><strong>Participation Fee:</strong> ₹199</li>
              </ul>
            </section>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white">Trainer</h2>
            <p className="mt-2 leading-7">
              <strong>Nasir</strong>
              <br />
              TESOL-Certified English Trainer | Certified Soft Skills Life Coach
            </p>
          </section>

          <section className="rounded-2xl border border-[#294563] p-5">
            <h2 className="text-xl font-bold text-white">
              Registration Process
            </h2>
            <ol className="mt-4 list-inside list-decimal space-y-2 leading-7">
              <li>Click <strong>Pay Now</strong> and complete your payment of ₹199.</li>
              <li>Copy your <strong>UPI Transaction ID (UTR)</strong> from the payment confirmation.</li>
              <li>Fill in the registration form with your details and Transaction ID.</li>
              <li>Submit the form to complete your registration.</li>
            </ol>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://rzp.io/rzp/dWGgJEL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#13824b] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#0f6b3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#13824b]"
              >
                Pay Now
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm3ligfecx3bEkG2euiOdcPq2Q20DFpYzzWHmnuopflNTyGQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#0f5b8d] px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#0b466d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f5b8d]"
              >
                Registration Form
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">What&apos;s Next?</h2>
            <p className="mt-2 leading-7">
              Once your payment is verified, your registration will be
              confirmed. The <strong>Joining Link</strong> will be shared with
              you on your registered WhatsApp number or email address.
            </p>
          </section>

          <p className="text-center text-lg font-bold text-white">
            Let&apos;s learn, reflect and grow together!
          </p>
        </div>
      </section>
    </main>
  );
}
