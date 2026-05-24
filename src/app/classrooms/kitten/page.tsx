import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Users, GraduationCap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kitten Room (18mo–2yr) – UPNS Classrooms",
  description:
    "The UPNS Kitten Room welcomes children 18 months to 2 years in a gentle, home-like setting. Sensory play, language development, and early social skills.",
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
          <Link href="/classrooms" className="hover:text-white transition-colors">Classrooms</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-white">Kitten Room</span>
        </nav>

        <div className="flex items-start gap-6">
          <div className="text-7xl hidden sm:block">🐱</div>
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-4"
              style={{ backgroundColor: GOLD }}
            >
              18 months – 2 years
            </div>
            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Kitten Room
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
              Gentle beginnings in a warm, home-like setting designed for our youngest explorers.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-12 -mb-1">
        <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Description ─────────────────────────────────────────────────────────────
function Description() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              About This Classroom
            </p>
            <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-6" style={{ color: NAVY }}>
              A Gentle Introduction to School Life
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Kitten Room is a haven for our youngest members — toddlers between 18 months
              and 2 years old who are taking their very first steps into the world of school.
              Everything about this classroom is designed to feel safe, familiar, and warm.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our home-like setting features soft textures, cozy corners, child-height shelves
              brimming with sensory materials, and plenty of space for both active exploration
              and quiet snuggles. We know that secure attachment is the foundation for all
              learning at this age, and our teachers work closely with families to create
              consistent, loving transitions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Language blossoms in the Kitten Room. Songs, fingerplays, simple picture books,
              and responsive conversations throughout the day help children build vocabulary
              and communication skills rapidly. Social milestones — first friendships, parallel
              play, gentle sharing — are nurtured with patience and joy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The cooperative model means a parent member is always present in the classroom,
              providing an extra set of warm and caring hands — and giving families a window
              into their child&apos;s school world.
            </p>
          </div>

          {/* Info card */}
          <div>
            <div
              className="rounded-2xl p-6 text-white sticky top-24"
              style={{ background: `linear-gradient(135deg, #122850, #1B3A6B)` }}
            >
              <h3 className="font-heading font-700 text-lg mb-4">Classroom Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider">Class Size</div>
                    <div className="text-white font-semibold">~10–12 children</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider">Lead Teacher</div>
                    <div className="text-white font-semibold">Certified Early Childhood Educator</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider">Age Range</div>
                    <div className="text-white font-semibold">18 months – 2 years</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/enrollment"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: GOLD }}
                >
                  Enroll in Kitten Room <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Daily Schedule ───────────────────────────────────────────────────────────
function Schedule() {
  const items = [
    { time: "8:30 AM", activity: "Morning Arrival & Free Play", icon: "☀️", desc: "Children settle in, greet friends, and explore open play areas at their own pace." },
    { time: "9:00 AM", activity: "Circle Time", icon: "🎵", desc: "Songs, fingerplays, simple stories, and a gentle group greeting to start the day together." },
    { time: "9:30 AM", activity: "Sensory & Exploration Centers", icon: "🧪", desc: "Water table, sand play, playdough, art materials, and manipulatives — all child-led discovery." },
    { time: "10:30 AM", activity: "Outdoor Play", icon: "🌳", desc: "Gross motor play in our outdoor space: climbing, running, balls, and nature exploration." },
    { time: "11:00 AM", activity: "Snack Time", icon: "🍇", desc: "A nutritious snack served family-style, practicing self-help skills and table conversation." },
    { time: "11:20 AM", activity: "Read-Aloud & Language Play", icon: "📖", desc: "Picture books, puppet shows, and language-rich songs to build vocabulary and a love of stories." },
    { time: "11:45 AM", activity: "Closing Circle & Goodbye", icon: "🤗", desc: "A calming goodbye routine with songs and hugs to close the school day warmly." },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Daily Routine
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            A Day in the Kitten Room
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Consistent, predictable routines give toddlers a sense of security. They know
            what&apos;s coming next — and can relax into exploration.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={item.time}
              className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: i % 2 === 0 ? "#EEF3FA" : "#FEF9E7" }}
              >
                {item.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-body font-600 text-xs uppercase tracking-wider" style={{ color: GOLD }}>
                    {item.time}
                  </span>
                  <h4 className="font-heading font-700 text-base" style={{ color: NAVY }}>
                    {item.activity}
                  </h4>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Learning Focus ───────────────────────────────────────────────────────────
function LearningFocus() {
  const areas = [
    {
      emoji: "🗣️",
      title: "Language Development",
      desc: "Building vocabulary through songs, books, narration, and responsive conversation with teachers and peers.",
    },
    {
      emoji: "🤲",
      title: "Sensory Exploration",
      desc: "Water, sand, playdough, and varied textures stimulate neural connections and satisfy the toddler need to touch and discover.",
    },
    {
      emoji: "🧍",
      title: "Gross Motor Skills",
      desc: "Climbing, running, balancing, and outdoor play develop coordination, strength, and body awareness.",
    },
    {
      emoji: "✏️",
      title: "Fine Motor Development",
      desc: "Pinching, pouring, threading, and mark-making build the small-muscle skills needed for future writing and self-care.",
    },
    {
      emoji: "🧸",
      title: "Early Social Skills",
      desc: "Parallel play, gentle sharing, turn-taking, and the first friendships lay the groundwork for a lifetime of relationships.",
    },
    {
      emoji: "🌙",
      title: "Emotional Security",
      desc: "Secure attachment to caring adults, consistent routines, and empathetic responses build resilience and emotional intelligence.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            What Children Learn
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            Learning Focus Areas
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            In the Kitten Room, every activity — even free play — is purposeful and tied to
            developmental goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <div className="text-4xl mb-4">{a.emoji}</div>
              <h3 className="font-heading font-700 text-base mb-2" style={{ color: NAVY }}>{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Teachers ─────────────────────────────────────────────────────────────────
function Teachers() {
  const teachers = [
    {
      initials: "SJ",
      name: "Sarah Johnson",
      role: "Lead Teacher",
      credentials: "M.A. Early Childhood Education",
      bio: "Sarah brings over 10 years of infant-toddler experience to the Kitten Room. Her gentle, relationship-based approach creates the secure attachments that young toddlers need to thrive. She is a certified Infant Mental Health specialist and a passionate advocate for play-based learning.",
      avatarBg: "#1B3A6B",
    },
    {
      initials: "ML",
      name: "Maria Lopez",
      role: "Assistant Teacher",
      credentials: "B.A. Child Development",
      bio: "Maria&apos;s warmth and patience make every child in the Kitten Room feel seen and cherished. Bilingual in English and Spanish, she enriches the classroom with music, language, and a deep love for the toddler years. She has been part of the UPNS family for 5 years.",
      avatarBg: "#F5A623",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Your Child&apos;s Team
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            Meet the Kitten Room Teachers
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Our teachers are the heart of the Kitten Room — experienced, caring professionals
            who know and love every child as an individual.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Photo area */}
              <div
                className="h-48 flex items-center justify-center"
                style={{ backgroundColor: "#F4F7FC" }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-heading font-800 shadow-lg"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.initials}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading font-800 text-xl mb-1" style={{ color: NAVY }}>
                  {t.name}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: GOLD }}>
                  {t.role}
                </p>
                <p className="text-xs text-gray-400 mb-4">{t.credentials}</p>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t.bio }}
                />
              </div>
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
        <div className="text-5xl mb-4">🐱</div>
        <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4">
          Enroll in the Kitten Room
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Give your toddler the warmest possible start. Apply today or contact us to
          schedule a visit to the Kitten Room.
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
            href="/classrooms"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all"
          >
            View All Classrooms
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KittenRoomPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <Description />
      <Schedule />
      <LearningFocus />
      <Teachers />
      <CTA />
      <Footer />
    </main>
  );
}
