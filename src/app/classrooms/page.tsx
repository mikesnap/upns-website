import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Users, BookOpen, GraduationCap, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Classrooms – UPNS Preschool",
  description:
    "Explore UPNS's three classrooms: Kitten Room (18mo–2yr), Kangaroo Room (3yr), and Dolphin Room (4yr). Small class sizes, certified teachers, NAEYC curriculum.",
};

const NAVY = "#1B3A6B";
const GOLD = "#F5A623";

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section
      className="relative pt-20"
      style={{ background: `linear-gradient(135deg, #122850 0%, #1B3A6B 60%, #2a5298 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-white">Classrooms</span>
        </nav>
        <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Our Classrooms
        </h1>
        <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
          Three thoughtfully designed classrooms, each tailored to the unique developmental
          needs of children at every stage.
        </p>
      </div>
      <div className="relative h-12 -mb-1">
        <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Classroom Cards ──────────────────────────────────────────────────────────
function ClassroomCards() {
  const rooms = [
    {
      emoji: "🐱",
      name: "Kitten Room",
      age: "18 months – 2 years",
      size: "~10–12 children",
      accent: NAVY,
      href: "/classrooms/kitten",
      description:
        "The Kitten Room is a gentle, nurturing haven designed especially for our youngest learners. In a warm, home-like environment, toddlers take their first steps into the world of school through sensory play, language-rich activities, and loving social connections.",
      highlights: [
        "Sensory exploration tables",
        "Language-rich read-alouds",
        "Early social skill building",
        "Fine and gross motor play",
        "Comfortable rest spaces",
      ],
      tagline: "Gentle beginnings, big discoveries",
    },
    {
      emoji: "🦘",
      name: "Kangaroo Room",
      age: "3 years",
      size: "~12–15 children",
      accent: "#2563EB",
      href: "/classrooms/kangaroo",
      description:
        "Three-year-olds are natural explorers, and the Kangaroo Room is built for their boundless curiosity. Children expand their vocabulary, engage in imaginative play, begin pre-literacy foundations, and develop the cooperative skills that will serve them throughout their lives.",
      highlights: [
        "Imaginative play centers",
        "Pre-literacy & phonemic awareness",
        "Expanding vocabulary activities",
        "Cooperative games",
        "Creative art projects",
      ],
      tagline: "Curious minds, growing hearts",
      featured: true,
    },
    {
      emoji: "🐬",
      name: "Dolphin Room",
      age: "4 years",
      size: "~12–15 children",
      accent: "#2a5298",
      href: "/classrooms/dolphin",
      description:
        "The Dolphin Room prepares four-year-olds for kindergarten through project-based learning, advanced literacy skills, STEM exploration, and leadership opportunities. Children graduate from UPNS ready — and excited — for their next adventure.",
      highlights: [
        "Kindergarten readiness focus",
        "Project-based learning",
        "Early STEM foundations",
        "Advanced literacy & writing",
        "Leadership & responsibility",
      ],
      tagline: "Ready for tomorrow, thriving today",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Choose Your Classroom
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            A Perfect Fit for Every Stage
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Each classroom at UPNS is designed around the developmental milestones and
            learning needs specific to that age group.
          </p>
        </div>

        <div className="space-y-8">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 ${room.featured ? "ring-2 ring-blue-400 ring-offset-4" : ""}`}
            >
              <div className="h-2 w-full" style={{ backgroundColor: room.accent }} />
              <div className={`grid md:grid-cols-5 gap-0 ${i % 2 === 1 ? "" : ""}`}>
                {/* Left accent panel */}
                <div
                  className="md:col-span-2 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${room.accent}, #122850)` }}
                >
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 bg-white" />
                  <div className="text-7xl mb-4">{room.emoji}</div>
                  <h3 className="font-heading font-800 text-3xl text-white mb-2">{room.name}</h3>
                  <p className="text-blue-200 font-semibold mb-2">{room.age}</p>
                  <p className="text-blue-300 text-sm mb-4">Class size: {room.size}</p>
                  <p className="text-blue-200 text-sm italic">&ldquo;{room.tagline}&rdquo;</p>
                </div>

                {/* Right content panel */}
                <div className="md:col-span-3 p-8 md:p-12 bg-white flex flex-col justify-center">
                  <p className="text-gray-600 leading-relaxed mb-6">{room.description}</p>

                  <div className="mb-6">
                    <h4 className="font-heading font-700 text-sm uppercase tracking-wider mb-3" style={{ color: NAVY }}>
                      Classroom Highlights
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {room.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={room.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: room.accent }}
                    >
                      Learn More About {room.name} <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/enrollment"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2 transition-all hover:shadow-sm"
                      style={{ color: NAVY, borderColor: "#D0DAEA" }}
                    >
                      Apply for This Room
                    </Link>
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

// ─── What Makes Classrooms Special ────────────────────────────────────────────
function ClassroomSpecial() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Small Class Sizes",
      desc: "With only 10–15 children per room, teachers can give every child personalized attention and build real relationships that support growth.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Qualified Teachers",
      desc: "Every classroom is led by a certified early childhood educator with deep expertise in child development, supported by participating parent members.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "NAEYC Curriculum",
      desc: "Our curriculum meets NAEYC standards for developmentally appropriate practice — meaning we always meet children where they are, not where we want them to be.",
    },
    {
      icon: <Sun className="w-6 h-6 text-white" />,
      title: "Indoor & Outdoor Learning",
      desc: "Rich indoor environments plus dedicated outdoor play time give children the full spectrum of learning — structured and exploratory, calm and active.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Our Approach
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            What Makes Our Classrooms Special
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every UPNS classroom shares core qualities that set us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm"
                style={{ backgroundColor: NAVY }}
              >
                {f.icon}
              </div>
              <h3 className="font-heading font-700 text-lg mb-3" style={{ color: NAVY }}>
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section
      className="py-20 text-white text-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #122850, #2a5298)` }}
    >
      <div className="relative max-w-2xl mx-auto px-4">
        <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4">
          Ready to Find the Right Room?
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Visit us to see our classrooms in person and meet our teachers.
          We&apos;re happy to help you find the best fit for your child.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/enrollment"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-white shadow-xl hover:opacity-90 transition-all"
            style={{ backgroundColor: GOLD }}
          >
            Apply Now <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all"
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ClassroomsPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <ClassroomCards />
      <ClassroomSpecial />
      <CTA />
      <Footer />
    </main>
  );
}
