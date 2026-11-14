import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const courseDetails = {
  "basic-english": {
    title: "Basic English",
    description: "Perfect for beginners who want to build confidence in speaking English.",
    features: [
      "Foundational vocabulary and grammar",
      "Daily conversational practice",
      "Confidence-building speaking sessions",
    ],
  },
  "intermediate-english": {
    title: "Intermediate English",
    description: "Improve fluency, vocabulary and everyday communication.",
    features: [
      "Practical conversation skills",
      "Advanced vocabulary building",
      "Real-life speaking practice",
    ],
  },
  "advanced-english": {
    title: "Advanced English",
    description: "Develop advanced speaking, pronunciation and confidence.",
    features: [
      "Pronunciation refinement",
      "Fluent sentence formation",
      "Advanced communication techniques",
    ],
  },
  "business-corporate-english": {
    title: "Business / Corporate English",
    description: "Professional English for meetings, emails and workplace communication.",
    features: [
      "Corporate vocabulary and etiquette",
      "Email and report writing practice",
      "Presentation and meeting skills",
    ],
  },
  "communication-skills": {
    title: "Communication Skills",
    description: "Build strong verbal and interpersonal communication skills.",
    features: [
      "Clear speaking practice",
      "Active listening techniques",
      "Personal confidence building",
    ],
  },
  "us-accent-training": {
    title: "US Accent Training",
    description: "Master clear American pronunciation, intonation and rhythm for natural-sounding speech.",
    features: [
      "American vowel and consonant practice",
      "Natural rhythm and stress patterns",
      "Pronunciation coaching for confident speaking",
    ],
  },
  "public-speaking": {
    title: "Public Speaking",
    description: "Overcome stage fear and deliver powerful speeches with confidence.",
    features: [
      "Speech structure and delivery",
      "Confidence in presentations",
      "Audience engagement techniques",
    ],
  },
  "interview-skills": {
    title: "Interview Skills",
    description: "Prepare for HR and professional interviews with confidence.",
    features: [
      "Common interview question practice",
      "Professional communication tips",
      "Mock interview rehearsals",
    ],
  },
  "soft-skills": {
    title: "Soft Skills",
    description: "Develop confidence, personality and workplace etiquette.",
    features: [
      "Emotional intelligence",
      "Team communication skills",
      "Presentation and body language",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(courseDetails).map((slug) => ({ slug }));
}

export default function CourseDetailPage({ params }) {
  const course = courseDetails[params.slug];

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-teal-300 hover:text-white"
        >
          <FaArrowLeft /> Back to Courses
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-900 p-10 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            {course.description}
          </p>

          <div className="space-y-4">
            {course.features.map((feature, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-800 p-5">
                <p className="text-base text-slate-100">{feature}</p>
              </div>
            ))}
          </div>

          {params.slug === "soft-skills" && (
            <a
              href="https://rzp.io/rzp/jtQYgmEp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-teal-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
            >
              Pay for the Soft Skills Masterclass
            </a>
          )}

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-sky-500 p-8 text-slate-950">
            <h2 className="text-2xl font-bold mb-3">Course Overview</h2>
            <p className="leading-8">
              This course is designed to help you build practical English skills
              with live sessions, expert guidance, and real communication practice.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
