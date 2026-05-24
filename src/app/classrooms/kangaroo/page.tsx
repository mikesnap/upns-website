import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Users, GraduationCap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kangaroo Room (3yr) – UPNS Classrooms",
  description:
    "The UPNS Kangaroo Room serves 3-year-olds with imaginative play, pre-literacy foundations, cooperative activities, and expanding vocabulary.",
};

const NAVY = "#1B3A6B";
const GOLD = "#F5A623";
const ROOM_COLOR = "#2563EB";

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section
      className="relative pt-20"
      style={{ background: `linear-gradient(135deg, #1e3a8a 0%, #2563EB 60%, #3b82f6 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <Link href="/classrooms" className="hover:text-white transition-colors">Classrooms</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-white">Kangaroo Room</span>
        </nav>

        <div className="flex items-start gap-6">
          <div className="text-7xl hidden sm:block">🦘</div>
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-4"
              style={{ backgroundColor: GOLD }}
            >
              3 years
            </div>
            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Kangaroo Room
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl leading-relaxed">
              Curious minds and growing hearts — a vibrant space for three-year-old explorers.
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
              Where Imagination Takes the Lead
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Three-year-olds are natural explorers — full of questions, stories, and an
              irresistible drive to figure out how the world works. The Kangaroo Room is
              designed to channel that energy into rich learning experiences that feel
              like pure play.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vocabulary explodes in the Kangaroo Room. Through daily read-alouds, conversation-rich
              circle times, dramatic play, and a word-rich environment, children build the language
              foundation that will power their literacy journey for years to come. Pre-literacy
              skills — phonemic awareness, letter recognition, story sense — are woven naturally
              into joyful activities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cooperative play takes on new depth at age three. Children begin to negotiate,
              collaborate, and build together in ways that were not possible before. Our teachers
              guide these social interactions with skill and patience, turning every disagreement
              into a learning opportunity and every collaboration into a celebration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a cooperative classroom, parent members participate regularly, enriching the
              program with their presence and keeping families deeply connected to their
              child&apos;s learning life.
            </p>
          </div>

          {/* Info card */}
          <div>
            <div
              className="rounded-2xl p-6 text-white sticky top-24"
              style={{ background: `linear-gradient(135deg, #1e3a8a, ${ROOM_COLOR})` }}
            >
              <h3 className="font-heading font-700 text-lg mb-4">Classroom Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider">Class Size</div>
                    <div className="text-white font-semibold">~12–15 children</div>
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
                    <div className="text-white font-semibold">3 years</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/enrollment"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: GOLD }}
                >
                  Enroll in Kangaroo Room <ChevronRight className="w-4 h-4" />
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
    { time: "8:30 AM", activity: "Arrival & Welcome Centers", icon: "☀️", desc: "Open play areas invite children to ease into the day with puzzles, blocks, books, and art." },
    { time: "9:00 AM", activity: "Morning Circle", icon: "🎵", desc: "Songs, calendar, weather, sharing, and a lively group story to build language and community." },
    { time: "9:30 AM", activity: "Learning Centers", icon: "📚", desc: "Literacy, math, science, and dramatic play centers with teacher-guided activities and open exploration." },
    { time: "10:30 AM", activity: "Outdoor Play", icon: "🌳", desc: "Active play, obstacle courses, nature exploration, and group games that build motor skills and friendships." },
    { time: "11:15 AM", activity: "Snack & Social Time", icon: "🍎", desc: "A relaxed family-style snack with conversation, building vocabulary and social skills naturally." },
    { time: "11:40 AM", activity: "Creative Expression", icon: "🎨", desc: "Art, music, drama, or special projects — a chance for children to express their unique voice." },
    { time: "12:00 PM", activity: "Story & Closing Circle", icon: "📖", desc: "A calming read-aloud, songs, and warm goodbyes to close the day with intention." },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Daily Routine
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            A Day in the Kangaroo Room
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Structured enough for security, flexible enough for wonder.
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
      emoji: "📝",
      title: "Pre-Literacy Skills",
      desc: "Phonemic awareness, letter recognition, story comprehension, and a deep love for books and language.",
    },
    {
      emoji: "🎭",
      title: "Imaginative & Dramatic Play",
      desc: "Dress-up, puppet shows, housekeeping, and role-play build narrative thinking, vocabulary, and empathy.",
    },
    {
      emoji: "🤝",
      title: "Cooperative Play",
      desc: "Negotiating, collaborating, problem-solving with peers — the social skills that underpin all learning.",
    },
    {
      emoji: "🔢",
      title: "Early Math Concepts",
      desc: "Counting, sorting, patterns, shapes, and measurement embedded in play-based activities.",
    },
    {
      emoji: "🌍",
      title: "Science & Discovery",
      desc: "Simple experiments, nature observation, and hands-on exploration feed the three-year-old hunger for answers.",
    },
    {
      emoji: "🎶",
      title: "Music & Movement",
      desc: "Rhythm, singing, dancing, and instrument exploration build phonological awareness and joyful self-expression.",
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
            The Kangaroo Room curriculum is designed around the remarkable capabilities
            of three-year-old minds.
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
      initials: "EC",
      name: "Emily Chen",
      role: "Lead Teacher",
      credentials: "M.A. Early Childhood Education",
      bio: "Emily is a master of the three-year-old mind — endlessly curious herself, she meets children&apos;s questions with enthusiasm and guided discovery. With 8 years in the Kangaroo Room, she has an extraordinary gift for building language-rich environments and nurturing children&apos;s natural storytelling instincts.",
      avatarBg: "#1B3A6B",
    },
    {
      initials: "DP",
      name: "David Park",
      role: "Assistant Teacher",
      credentials: "B.A. Human Development",
      bio: "David&apos;s background in music and movement brings an extra dimension to the Kangaroo Room. He leads daily music and movement sessions and has a talent for turning transitions and routines into joyful moments. Children in his care feel confident, engaged, and deeply valued.",
      avatarBg: "#2563EB",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Your Child&apos;s Team
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            Meet the Kangaroo Room Teachers
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Passionate educators who understand three-year-olds inside and out — and love
            every minute of it.
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
                style={{ backgroundColor: "#EEF3FA" }}
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
      style={{ background: `linear-gradient(135deg, #1e3a8a, #3b82f6)` }}
    >
      <div className="relative max-w-2xl mx-auto px-4">
        <div className="text-5xl mb-4">🦘</div>
        <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4">
          Enroll in the Kangaroo Room
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Help your three-year-old leap into learning. Apply today or contact us
          to schedule a visit.
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
export default function KangarooRoomPage() {
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
