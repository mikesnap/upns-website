import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Users, GraduationCap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dolphin Room (4yr) – UPNS Classrooms",
  description:
    "The UPNS Dolphin Room prepares 4-year-olds for kindergarten through project-based learning, advanced literacy, STEM foundations, and leadership.",
};

const NAVY = "#1B3A6B";
const GOLD = "#F5A623";
const ROOM_COLOR = "#2a5298";

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section
      className="relative pt-20"
      style={{ background: `linear-gradient(135deg, #122850 0%, #2a5298 60%, #1B3A6B 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <Link href="/classrooms" className="hover:text-white transition-colors">Classrooms</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-white">Dolphin Room</span>
        </nav>

        <div className="flex items-start gap-6">
          <div className="text-7xl hidden sm:block">🐬</div>
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-4"
              style={{ backgroundColor: GOLD }}
            >
              4 years
            </div>
            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              Dolphin Room
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
              Ready for tomorrow, thriving today — kindergarten preparation through
              joyful, project-based learning.
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
              Ready for Kindergarten and Beyond
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Dolphin Room is where four-year-olds discover what they are truly capable
              of. Confident, verbal, social, and brimming with ideas, they are ready for
              deeper learning — and our Dolphin Room meets them with exactly that.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Project-based learning anchors the Dolphin curriculum. Children pursue
              multi-week investigations into topics that captivate them — whether it&apos;s
              how bridges are built, where butterflies come from, or how a garden grows.
              These projects weave together literacy, math, science, art, and social studies
              in a way that feels organic and exciting.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Advanced literacy skills — recognizing sight words, writing their names and
              simple words, retelling stories with detail — are developed through daily
              reading and writing activities. STEM foundations are embedded throughout:
              measuring, predicting, building, coding concepts, and scientific thinking
              are part of every week.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Leadership and responsibility take on real meaning in the Dolphin Room. Children
              take turns as classroom helpers, lead circle-time portions, and mentor their
              own problem-solving — building the executive function and self-regulation skills
              that predict kindergarten success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a cooperative classroom, parent members are present and engaged, modeling
              real-world skills and deepening the community that makes UPNS so special.
            </p>
          </div>

          {/* Info card */}
          <div>
            <div
              className="rounded-2xl p-6 text-white sticky top-24"
              style={{ background: `linear-gradient(135deg, #122850, ${ROOM_COLOR})` }}
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
                    <div className="text-white font-semibold">4 years</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/enrollment"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: GOLD }}
                >
                  Enroll in Dolphin Room <ChevronRight className="w-4 h-4" />
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
    { time: "8:30 AM", activity: "Arrival & Morning Work", icon: "☀️", desc: "Journaling, reading, fine motor work — children settle in with purposeful independent activities." },
    { time: "9:00 AM", activity: "Morning Meeting", icon: "🗣️", desc: "Full-group gathering with calendar, news sharing, read-aloud, and launch of the day&apos;s investigations." },
    { time: "9:30 AM", activity: "Project Work & Centers", icon: "🔬", desc: "Deep learning time — literacy centers, math activities, science experiments, writing, and project research." },
    { time: "10:45 AM", activity: "Outdoor Play & PE", icon: "🌳", desc: "Structured games, free play, team activities, and gross motor challenges that build coordination and cooperation." },
    { time: "11:30 AM", activity: "Snack & Community Time", icon: "🍊", desc: "Family-style snack with rich conversation, news sharing, and building the Dolphin Room community." },
    { time: "11:50 AM", activity: "Creative Arts & Special Projects", icon: "🎨", desc: "Studio art, music, drama, or project presentations — children share their learning with the community." },
    { time: "12:20 PM", activity: "Closing Circle & Reflection", icon: "🌟", desc: "What did we learn today? Children reflect, share, and prepare for a strong send-off into the afternoon." },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Daily Routine
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            A Day in the Dolphin Room
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            A rich, purposeful day that blends structure with exploration and independence.
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
      emoji: "📖",
      title: "Advanced Literacy",
      desc: "Sight word recognition, phonics, writing name and simple words, retelling stories with detail, and a genuine love of reading.",
    },
    {
      emoji: "🔢",
      title: "Mathematical Thinking",
      desc: "Number sense, addition and subtraction concepts, measurement, geometry, and data — embedded in meaningful, real-world contexts.",
    },
    {
      emoji: "🔭",
      title: "STEM Foundations",
      desc: "Scientific method basics, engineering challenges, coding concepts, and hands-on experiments that build lifelong curiosity.",
    },
    {
      emoji: "📋",
      title: "Project-Based Learning",
      desc: "Multi-week investigations that integrate all subject areas around captivating real-world topics chosen by the class.",
    },
    {
      emoji: "👑",
      title: "Leadership & Responsibility",
      desc: "Classroom jobs, helping younger children, taking initiative, and practicing the executive function skills needed for kindergarten.",
    },
    {
      emoji: "🧩",
      title: "Critical Thinking",
      desc: "Problem-solving, asking why, evaluating ideas, and collaborating on challenges that require flexible, creative thinking.",
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
            The Dolphin Room curriculum is designed to build the knowledge, skills, and
            dispositions children need to thrive in kindergarten and beyond.
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

        {/* K-Ready callout */}
        <div
          className="mt-10 rounded-2xl p-8 text-white text-center"
          style={{ background: `linear-gradient(135deg, #122850, #2a5298)` }}
        >
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="font-heading font-800 text-2xl mb-3">Kindergarten Ready</h3>
          <p className="text-blue-100 max-w-xl mx-auto text-sm leading-relaxed">
            Dolphin Room graduates leave UPNS academically prepared, socially confident, and
            emotionally ready for the exciting journey ahead. Our alumni thrive in kindergartens
            throughout the Los Angeles area.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Teachers ─────────────────────────────────────────────────────────────────
function Teachers() {
  const teachers = [
    {
      initials: "JW",
      name: "Jennifer Williams",
      role: "Lead Teacher",
      credentials: "M.Ed. Curriculum & Instruction, ECE Specialist",
      bio: "Jennifer is a gifted project-based learning educator with 12 years of experience preparing four-year-olds for kindergarten success. Her Dolphin Room investigations are legendary at UPNS — children have studied everything from ocean ecosystems to how cities work. She holds an ECE specialist credential and is a National Board Certified Teacher.",
      avatarBg: "#1B3A6B",
    },
    {
      initials: "MT",
      name: "Michael Torres",
      role: "Assistant Teacher",
      credentials: "B.S. Child & Adolescent Development",
      bio: "Michael brings a background in STEM education and a contagious excitement for science and math to the Dolphin Room. He designs the weekly science experiments and engineering challenges that have children talking about school all weekend. His patience and humor make the Dolphin Room a place every child looks forward to each morning.",
      avatarBg: "#2a5298",
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
            Meet the Dolphin Room Teachers
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Highly credentialed educators with a passion for preparing children to
            leap confidently into kindergarten and beyond.
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
                <p className="text-gray-600 text-sm leading-relaxed">{t.bio}</p>
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
        <div className="text-5xl mb-4">🐬</div>
        <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4">
          Enroll in the Dolphin Room
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Set your four-year-old up for an extraordinary kindergarten experience.
          Apply today or contact us to schedule a visit.
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
export default function DolphinRoomPage() {
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
