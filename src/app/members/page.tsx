import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Member Responsibilities – UPNS Cooperative Community",
  description:
    "Learn what it means to be a member at UPNS cooperative preschool. Participation days, committee work, co-op meetings, and the deep rewards of being part of our community.",
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
          <span className="text-white">Members</span>
        </nav>
        <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Our Cooperative Community
        </h1>
        <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
          At UPNS, parents aren&apos;t just families — they&apos;re members. Here&apos;s what that
          means, what it requires, and why it&apos;s one of the most rewarding parts of the UPNS experience.
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

// ─── What is a Co-op ─────────────────────────────────────────────────────────
function WhatIsACoop() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              The Co-op Model
            </p>
            <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: NAVY }}>
              What Is a Cooperative Preschool?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A cooperative preschool is one where the families — not just the staff — run the school
              together. Parents are active members who participate in classroom life, take on committee
              roles, attend school meetings, and contribute to the physical upkeep of the school.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This model has deep roots in parent education. When you participate in your child&apos;s
              classroom, you&apos;re not just helping the teacher — you&apos;re learning alongside your child,
              understanding how they learn, and building the confidence to support their growth at home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The cooperative model also makes UPNS more affordable than many private preschools,
              because parent labor replaces a portion of what would otherwise be paid staff time. You
              invest your time in exchange for a richer, more connected school experience — and the
              whole community benefits.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "👨‍👩‍👧", text: "Parents are members, not customers" },
                { emoji: "💬", text: "Voice in school decisions" },
                { emoji: "💰", text: "More affordable tuition" },
                { emoji: "🤝", text: "Deep community bonds" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 p-3 rounded-xl border"
                  style={{ borderColor: "#D0DAEA", backgroundColor: "#F9FAFB" }}
                >
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl p-10 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, #122850, #2a5298)` }}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10 bg-white" />
            <p className="font-body text-blue-200 text-sm uppercase tracking-widest mb-4">The UPNS Difference</p>
            <h3 className="font-heading font-800 text-2xl text-white mb-4 leading-tight">
              &ldquo;When you join UPNS, you join a community that cares — for your child and for each other.&rdquo;
            </h3>
            <div className="h-0.5 w-12 mb-6" style={{ backgroundColor: GOLD }} />
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Many UPNS families say that the friendships formed during co-op participation become
              some of the most meaningful of their adult lives. There is something powerful about
              working side by side with other parents in a shared purpose.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "100%", label: "Parent involvement" },
                { value: "3", label: "Classrooms" },
                { value: "NAEYC", label: "Accredited quality" },
                { value: "LA", label: "Based community" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-3 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="font-heading font-800 text-xl" style={{ color: GOLD }}>{s.value}</div>
                  <div className="text-blue-200 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Member Responsibilities ──────────────────────────────────────────────────
function MemberResponsibilities() {
  const responsibilities = [
    {
      emoji: "👩‍🏫",
      title: "Classroom Participation Days",
      desc: "Each family is assigned participation days each month. On these days, you work in the classroom alongside the lead teacher — helping with activities, supporting individual children, and observing your own child in their element.",
      detail: "Typically 2–4 days per month",
    },
    {
      emoji: "📋",
      title: "Committee Work",
      desc: "Every family joins a school committee based on their interests and skills. Committees handle everything from library management and garden maintenance to fundraising, social events, and school communications.",
      detail: "Ongoing throughout the year",
    },
    {
      emoji: "🗣️",
      title: "Monthly Co-op Meetings",
      desc: "All member families attend monthly evening meetings where school business is discussed, decisions are made collectively, and the community stays connected. These are also wonderful opportunities for parent education.",
      detail: "Once per month, evenings",
    },
    {
      emoji: "🏫",
      title: "School Maintenance Workdays",
      desc: "Several times a year, the community gathers for school workdays — deep cleaning, yard care, painting, repairs, and other projects that keep UPNS looking and functioning beautifully. Families bring different skills and energy.",
      detail: "Several times per year",
    },
    {
      emoji: "📚",
      title: "Parent Education",
      desc: "UPNS values parent learning alongside children&apos;s learning. Workshops, guest speakers, and co-op meetings regularly feature opportunities to deepen your understanding of child development and cooperative living.",
      detail: "Integrated throughout the year",
    },
    {
      emoji: "🤝",
      title: "Supporting School Operations",
      desc: "From setting up for events to helping with enrollment open houses to assisting administrative tasks, member families contribute to the smooth operation of the whole school — not just their child&apos;s classroom.",
      detail: "As needed",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            What We Ask
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            Member Responsibilities
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            These responsibilities are the heartbeat of UPNS. They&apos;re what makes us a community
            rather than just a school.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsibilities.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{r.emoji}</div>
              <h3 className="font-heading font-700 text-lg mb-2" style={{ color: NAVY }}>{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.desc}</p>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#EEF3FA", color: NAVY }}
              >
                {r.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────
function Benefits() {
  const benefits = [
    {
      icon: "🔍",
      title: "Window Into Your Child&apos;s World",
      desc: "By participating in the classroom, you see your child in their element — how they play, who they connect with, what challenges and delights them. This knowledge transforms how you parent at home.",
    },
    {
      icon: "🏘️",
      title: "A Real Community",
      desc: "UPNS families often describe the co-op as the closest-knit community they&apos;ve ever been part of. The shared work creates real friendship and genuine mutual support.",
    },
    {
      icon: "💰",
      title: "Cost Savings",
      desc: "Because families contribute labor, UPNS tuition is typically more affordable than comparable private preschools. Your time investment translates directly to lower costs.",
    },
    {
      icon: "📣",
      title: "Voice in School Decisions",
      desc: "As a member, you have a vote in major school decisions. The cooperative is run democratically — you help shape the school your child attends.",
    },
    {
      icon: "🎓",
      title: "Parent Education",
      desc: "You will learn an enormous amount about child development, early education, and cooperative governance. UPNS parents become more confident, informed parents.",
    },
    {
      icon: "💞",
      title: "Lasting Friendships",
      desc: "The families you meet at UPNS often become lifelong friends. Shared purpose creates bonds that outlast the preschool years by decades.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Why It&apos;s Worth It
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            Benefits of Being a Member
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            The contributions you make come back to you — and your family — many times over.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-heading font-700 text-base mb-2" style={{ color: NAVY }}
                dangerouslySetInnerHTML={{ __html: b.title.replace(/&apos;/g, "'") }}
              />
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "How many days per month do I need to participate in the classroom?",
      a: "The number of participation days varies by classroom and is set at the beginning of each school year. Typically, families are assigned 2–4 participation days per month. We work with families to accommodate varying work schedules and always strive to find arrangements that work for everyone.",
    },
    {
      q: "What if I have a job and can&apos;t always come during school hours?",
      a: "We understand that many families have demanding work schedules. Committee work and other contributions can often be done outside of school hours — evenings or weekends. During the enrollment process, we discuss your schedule and find a participation arrangement that works. No family is turned away solely due to work constraints.",
    },
    {
      q: "Do I need teaching or childcare experience to participate in the classroom?",
      a: "Absolutely not! The lead teacher guides all classroom participation. Parents bring their own unique skills and perspectives — which children love. You will receive an orientation before your first participation day so you feel confident and comfortable.",
    },
    {
      q: "What happens if I can&apos;t fulfill my co-op duties one month?",
      a: "Life happens — we understand. If you&apos;re unable to fulfill a participation obligation, you&apos;ll work with the school to reschedule or find an alternative contribution. Open communication is key. We are a community, and we support each other through the inevitable challenges of life.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Common Questions
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: GOLD }}
                >
                  Q
                </div>
                <div>
                  <p className="font-heading font-700 text-base mb-3" style={{ color: NAVY }}>
                    {faq.q.replace(/&apos;/g, "'")}
                  </p>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" />
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a.replace(/&apos;/g, "'")}</p>
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

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section
      className="py-20 text-white text-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #122850, #2a5298)` }}
    >
      <div className="relative max-w-2xl mx-auto px-4">
        <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          UPNS is more than a school — it&apos;s a community built on shared love for children
          and commitment to each other. We&apos;d love to welcome your family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/enrollment"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-white shadow-xl hover:opacity-90 transition-all"
            style={{ backgroundColor: GOLD }}
          >
            Apply to Join <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MembersPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <WhatIsACoop />
      <MemberResponsibilities />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
