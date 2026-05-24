import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About UPNS – University Parents Nursery School",
  description:
    "Learn about UPNS — a NAEYC-accredited cooperative preschool in Los Angeles affiliated with UCLA, open to all families. Our mission: help children develop the whole child.",
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <span className="text-white">About</span>
        </nav>
        <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          About UPNS
        </h1>
        <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
          A cooperative preschool where families come together to nurture the whole child —
          body, mind, heart, and spirit.
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

// ─── Who We Are ───────────────────────────────────────────────────────────────
function WhoWeAre() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              Who We Are
            </p>
            <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: NAVY }}>
              A Cooperative Community Built on Participation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              University Parents Nursery School (UPNS) is a cooperative preschool located
              in Los Angeles, California. As a cooperative, parents are not merely customers
              — they are active members of the school community. Each enrolled family
              participates in classroom life, committee work, and school operations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              UPNS has a longstanding affiliation with UCLA, originally founded to serve
              the university community. Today, we warmly welcome families from the broader
              Los Angeles community — UCLA students, staff, and faculty, as well as families
              with no UCLA connection at all.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are proud members of the{" "}
              <span className="font-semibold" style={{ color: NAVY }}>
                Los Angeles Council of Parent Participation Nursery Schools (LACPPNS)
              </span>
              , a network of cooperative preschools dedicated to excellence in early childhood education.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "UCLA-Affiliated",
                "Open to All Families",
                "LACPPNS Member",
                "Los Angeles, CA",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-semibold border"
                  style={{ color: NAVY, borderColor: "#D0DAEA", backgroundColor: "#EEF3FA" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl p-10 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, #122850, #2a5298)` }}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10 bg-white" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-10 bg-white" />
            <p className="font-body text-blue-200 text-sm uppercase tracking-widest mb-4">Our Location</p>
            <h3 className="font-heading font-800 text-2xl text-white mb-4">Visit Us</h3>
            <div className="space-y-3 text-blue-100 text-sm mb-6">
              <p>3233 S Sepulveda Blvd<br />Los Angeles, CA 90034</p>
              <p>Phone: 310-397-2735</p>
              <p>Email: upns@ucla.edu</p>
            </div>
            <p className="text-blue-200 text-sm mb-6">
              Located in the University Village area, our school offers a welcoming campus
              with both indoor and outdoor learning spaces.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm border border-white/30 hover:bg-white/10 transition-all text-white"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mission / Five Selves ────────────────────────────────────────────────────
function Mission() {
  const fiveSelves = [
    {
      emoji: "❤️",
      title: "Social Self",
      desc: "Children learn to form friendships, navigate group dynamics, share, take turns, and become caring members of a community.",
      bg: "#FEF2F2",
      border: "#FECACA",
    },
    {
      emoji: "🧠",
      title: "Emotional Self",
      desc: "We help children recognize and express their feelings, develop empathy, build resilience, and regulate emotions in healthy ways.",
      bg: "#FFF7ED",
      border: "#FED7AA",
    },
    {
      emoji: "🏃",
      title: "Physical Self",
      desc: "Gross and fine motor development, outdoor play, body awareness, and healthy habits are woven into every day at UPNS.",
      bg: "#F0FDF4",
      border: "#BBF7D0",
    },
    {
      emoji: "🎨",
      title: "Creative Self",
      desc: "Art, music, dramatic play, and open-ended materials give children space to imagine, invent, and express their unique voices.",
      bg: "#F5F3FF",
      border: "#DDD6FE",
    },
    {
      emoji: "🔬",
      title: "Cognitive Self",
      desc: "Curiosity-driven exploration, early literacy, mathematics, science discovery, and problem-solving build the foundation for a lifelong love of learning.",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Our Mission
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-6" style={{ color: NAVY }}>
            Helping Children Develop the Whole Child
          </h2>
          <div
            className="inline-block rounded-2xl px-8 py-4 text-white text-lg font-semibold mb-6"
            style={{ backgroundColor: NAVY }}
          >
            &ldquo;Help children develop the whole child.&rdquo;
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            UPNS is guided by a holistic mission that recognizes five interconnected dimensions
            of a child&apos;s development. Everything we do — from classroom design to curriculum
            planning to daily routines — is shaped by this five-selves philosophy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fiveSelves.map((self) => (
            <div
              key={self.title}
              className="rounded-2xl p-6 border-2 hover:shadow-lg transition-all"
              style={{ backgroundColor: self.bg, borderColor: self.border }}
            >
              <div className="text-4xl mb-4">{self.emoji}</div>
              <h3 className="font-heading font-700 text-lg mb-3" style={{ color: NAVY }}>
                {self.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{self.desc}</p>
            </div>
          ))}

          {/* Quote card filling 6th spot on lg */}
          <div
            className="rounded-2xl p-6 text-white sm:col-span-2 lg:col-span-1 flex flex-col justify-center"
            style={{ background: `linear-gradient(135deg, #122850, #1B3A6B)` }}
          >
            <div className="text-4xl mb-4">💫</div>
            <p className="font-heading font-700 text-lg mb-2">Hearts at Play</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              When children are free to play, explore, and connect — their hearts
              and minds bloom together. That&apos;s the spirit of UPNS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Accreditation ────────────────────────────────────────────────────────────
function Accreditation() {
  const creds = [
    {
      emoji: "🏅",
      name: "NAEYC Accreditation",
      fullName: "National Association for the Education of the Young Child",
      desc: "NAEYC accreditation is the gold standard in early childhood education. It means UPNS meets rigorous standards in curriculum, teaching, health, safety, community relationships, and program management. Fewer than 10% of U.S. preschools earn this distinction.",
      accent: NAVY,
    },
    {
      emoji: "🌐",
      name: "LACPPNS Member",
      fullName: "Los Angeles Council of Parent Participation Nursery Schools",
      desc: "LACPPNS is a network of cooperative preschools throughout Los Angeles County. Membership connects UPNS to a broader community of educators, families, and advocates who share our commitment to parent-participation education and child development excellence.",
      accent: "#2a5298",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Our Credentials
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            Accreditation & Memberships
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            UPNS holds the highest standards in early childhood education and is part
            of respected organizations that uphold quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {creds.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <div className="text-5xl mb-5">{c.emoji}</div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                style={{ backgroundColor: c.accent }}
              >
                {c.name}
              </div>
              <h3 className="font-heading font-700 text-base mb-3" style={{ color: NAVY }}>
                {c.fullName}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>

              <div className="mt-5 flex items-center gap-2 text-sm" style={{ color: c.accent }}>
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Verified Member / Accredited School</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── History ──────────────────────────────────────────────────────────────────
function History() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Our Story
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            Our History
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <p className="text-gray-600 leading-relaxed mb-5 text-lg">
            University Parents Nursery School was founded as a cooperative preschool
            to serve families connected to the University of California, Los Angeles.
            From the beginning, UPNS has been rooted in the belief that when parents
            actively participate in their children&apos;s education, the entire community benefits.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            The cooperative model — where parents contribute their time, skills, and energy
            to the school — creates an unusually close-knit community. Over the decades,
            UPNS has welcomed hundreds of families, graduated generations of children who
            are now confident learners, and built a legacy of joyful early education.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Today, UPNS serves children from ages 18 months to 4 years in three
            thoughtfully designed classrooms: the Kitten Room, the Kangaroo Room, and
            the Dolphin Room. While our original connection to UCLA remains, we proudly
            welcome all families from the greater Los Angeles community.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The tagline &ldquo;Hearts at Play&rdquo; captures what UPNS has always been about:
            a place where children&apos;s hearts are engaged, their imaginations run free,
            and the whole community grows together.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { emoji: "🎓", text: "Generations of UPNS graduates" },
              { emoji: "👨‍👩‍👧", text: "Hundreds of member families" },
              { emoji: "🏫", text: "3 classrooms, one community" },
            ].map((item) => (
              <div
                key={item.text}
                className="rounded-xl p-4 text-center border"
                style={{ borderColor: "#D0DAEA", backgroundColor: "#F4F7FC" }}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-xs font-semibold text-gray-600">{item.text}</div>
              </div>
            ))}
          </div>
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-white" />
      </div>
      <div className="relative max-w-2xl mx-auto px-4">
        <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4">
          Come See Our Classrooms
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          The best way to experience UPNS is to visit in person. We invite you to
          explore our three classrooms and meet our teachers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/classrooms"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-white shadow-xl hover:opacity-90 transition-all"
            style={{ backgroundColor: GOLD }}
          >
            Explore Classrooms <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all"
          >
            Schedule a Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <WhoWeAre />
      <Mission />
      <Accreditation />
      <History />
      <CTA />
      <Footer />
    </main>
  );
}
