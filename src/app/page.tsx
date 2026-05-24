"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  ChevronRight,
  Globe,
  Camera,
  MessageCircle,
  BookOpen,
  Shield,
  Users,
  GraduationCap,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#1B3A6B";
const GOLD = "#F5A623";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 overflow-hidden"
      style={{ background: `linear-gradient(135deg, #122850 0%, #1B3A6B 50%, #2a5298 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-white">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border"
              style={{ backgroundColor: "rgba(245,166,35,0.15)", borderColor: "rgba(245,166,35,0.4)", color: GOLD }}
            >
              <Heart className="w-4 h-4" fill={GOLD} />
              Enrolling Now for 2025–2026
            </div>

            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 text-white">
              Hearts at{" "}
              <span style={{ color: GOLD }}>Play</span>
            </h1>

            <p className="font-heading font-600 text-xl text-blue-200 mb-4">
              University Parents Nursery School
            </p>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              A NAEYC-accredited cooperative preschool in Los Angeles where children
              ages 18 months to 4 years develop the whole child — social, emotional,
              physical, creative, and cognitive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/enrollment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-white shadow-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: GOLD }}
              >
                Apply Now
              </Link>
              <Link
                href="/classrooms"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all"
              >
                Explore Classrooms <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              {[
                { value: "3", label: "Classroom Programs" },
                { value: "10–15", label: "Children Per Class" },
                { value: "NAEYC", label: "Accredited" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-800 text-3xl" style={{ color: GOLD }}>
                    {s.value}
                  </div>
                  <div className="text-blue-200 text-xs leading-tight mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎨", label: "Creative Arts", bg: "#E8F4FD" },
                { emoji: "📚", label: "Early Literacy", bg: "#FEF9E7" },
                { emoji: "🌿", label: "Outdoor Learning", bg: "#EAFAF1" },
                { emoji: "🎵", label: "Music & Movement", bg: "#F5EEF8" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-6 flex flex-col items-center gap-3 shadow-lg"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="text-5xl">{item.emoji}</div>
                  <div className="font-heading font-700 text-sm text-center" style={{ color: NAVY }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-heading font-700 text-sm" style={{ color: NAVY }}>NAEYC Accredited</div>
                <div className="text-xs text-gray-500">Highest Quality Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="relative h-16 -mb-1">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: <Shield className="w-5 h-5" />, text: "NAEYC Accredited" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Certified Lead Teachers" },
    { icon: <Users className="w-5 h-5" />, text: "10–15 Children Per Class" },
    { icon: <Heart className="w-5 h-5" />, text: "Cooperative Community" },
  ];

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                style={{ backgroundColor: NAVY }}
              >
                {item.icon}
              </div>
              <span className="font-body font-600 text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Experienced Educators",
      desc: "Every classroom is led by certified early childhood professionals who are passionate about each child's individual growth and development.",
      accent: "#1B3A6B",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "NAEYC Accredited",
      desc: "We hold accreditation from the National Association for the Education of the Young Child — the gold standard in early childhood education quality.",
      accent: "#2a5298",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Whole Child Curriculum",
      desc: "Our play-based approach nurtures all five selves: social, emotional, physical, creative, and cognitive — helping children develop completely.",
      accent: "#F5A623",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Small Class Sizes",
      desc: "With only 10–15 children per classroom, every child receives the individual attention and meaningful relationships they deserve.",
      accent: "#1B3A6B",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Why Families Choose Us
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            The UPNS Difference
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            We combine heart, expertise, and joy to give every child the very
            best start in life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform"
                style={{ backgroundColor: f.accent }}
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

// ─── Classrooms ───────────────────────────────────────────────────────────────
function Classrooms() {
  const classrooms = [
    {
      title: "Kitten Room",
      age: "18 months – 2 years",
      desc: "Gentle, exploratory days in a warm home-like setting. Focused on sensory play, language development, early social skills, and loving independence.",
      tags: ["Sensory Play", "Language", "Social Skills"],
      emoji: "🐱",
      href: "/classrooms/kitten",
      accent: "#1B3A6B",
    },
    {
      title: "Kangaroo Room",
      age: "3 years",
      desc: "Expanding vocabulary, imaginative play, pre-literacy foundations, and cooperative activities that build confidence and curiosity.",
      tags: ["Pre-Literacy", "Imaginative Play", "Cooperative Play"],
      emoji: "🦘",
      href: "/classrooms/kangaroo",
      featured: true,
      accent: "#F5A623",
    },
    {
      title: "Dolphin Room",
      age: "4 years",
      desc: "Kindergarten preparation through project-based learning, advanced literacy, STEM foundations, and leadership opportunities.",
      tags: ["K-Ready Skills", "STEM Basics", "Leadership"],
      emoji: "🐬",
      href: "/classrooms/dolphin",
      accent: "#2a5298",
    },
  ];

  return (
    <section
      id="classrooms"
      className="py-24 relative"
      style={{ backgroundColor: "#F4F7FC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Our Classrooms
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            A Classroom for Every Stage
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Age-appropriate environments and curricula designed to meet children
            exactly where they are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classrooms.map((p) => (
            <div
              key={p.title}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 ${p.featured ? "ring-2 ring-amber-400 ring-offset-4" : ""}`}
            >
              {p.featured && (
                <div
                  className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full z-10"
                  style={{ backgroundColor: GOLD }}
                >
                  Most Popular
                </div>
              )}

              {/* Color header bar */}
              <div className="h-2 w-full" style={{ backgroundColor: p.accent }} />

              <div className="p-8">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 className="font-heading font-800 text-xl mb-1" style={{ color: NAVY }}>
                  {p.title}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: GOLD }}>
                  {p.age}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{ color: NAVY, borderColor: "#D0DAEA", backgroundColor: "#EEF3FA" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={p.href}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: p.accent }}
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/classrooms"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold border-2 transition-all hover:shadow-md"
            style={{ color: NAVY, borderColor: NAVY }}
          >
            View All Classrooms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── About / Philosophy ───────────────────────────────────────────────────────
function About() {
  const pillars = [
    { icon: "❤️", label: "Social", desc: "Building friendships and community" },
    { icon: "🧠", label: "Emotional", desc: "Developing self-awareness and empathy" },
    { icon: "🏃", label: "Physical", desc: "Growing strong bodies and motor skills" },
    { icon: "🎨", label: "Creative", desc: "Expressing imagination and innovation" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-3xl p-10 text-white relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, #122850, #2a5298)` }}
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10 bg-white" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-10 bg-white" />

              <p className="font-body text-blue-200 text-sm uppercase tracking-widest mb-4">Our Mission</p>
              <h3 className="font-heading font-800 text-2xl sm:text-3xl text-white mb-6 leading-tight">
                &ldquo;Help children develop the whole child.&rdquo;
              </h3>
              <div className="h-0.5 w-12 mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-blue-100 leading-relaxed text-sm mb-6">
                At UPNS, we nurture five interconnected selves in every child:
                social, emotional, physical, creative, and cognitive. This holistic
                philosophy guides everything we do.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {["Social", "Emotional", "Physical", "Creative", "Cognitive"].map((s) => (
                  <div
                    key={s}
                    className="rounded-xl px-3 py-2 text-xs font-semibold text-white text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              Our Philosophy
            </p>
            <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: NAVY }}>
              We See the Whole Child
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              University Parents Nursery School believes the early years are the most
              formative in a child&apos;s life. Our holistic approach nurtures intellectual,
              emotional, social, and physical development in equal measure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We create a joyful, inclusive classroom community where children feel
              seen, heard, and empowered to take risks, ask questions, and celebrate
              each other&apos;s successes every single day. &ldquo;Hearts at Play&rdquo; isn&apos;t just our
              tagline — it&apos;s the spirit that lives in every UPNS classroom.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {pillars.map((v) => (
                <div
                  key={v.label}
                  className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
                  style={{ backgroundColor: "#F9FAFB" }}
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="font-heading font-700 text-sm mb-1" style={{ color: NAVY }}>{v.label}</div>
                  <div className="text-gray-500 text-xs">{v.desc}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white shadow hover:opacity-90 transition-all"
              style={{ backgroundColor: NAVY }}
            >
              Learn More About Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Cooperative Callout ──────────────────────────────────────────────────────
function CoopCallout() {
  return (
    <section className="py-16" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, #122850 0%, #1B3A6B 60%, #2a5298 100%)` }}
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10 bg-white" />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
              style={{ backgroundColor: "rgba(245,166,35,0.15)", borderColor: "rgba(245,166,35,0.5)", color: GOLD }}
            >
              <Users className="w-3.5 h-3.5" />
              Cooperative Model
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4 text-white leading-tight">
                  More Than a School —<br />
                  <span style={{ color: GOLD }}>A Community</span>
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  UPNS is a cooperative preschool, which means parents are active
                  members who help run the school. You&apos;re not just dropping your child
                  off — you&apos;re joining a warm community of families who share in the joy
                  of early childhood education.
                </p>
                <Link
                  href="/members"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
                >
                  Learn About Membership <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "👩‍🏫", title: "Parent Participation", desc: "Help in the classroom regularly" },
                  { icon: "🤝", title: "Community Meetings", desc: "Voice in school decisions" },
                  { icon: "🔧", title: "Committee Work", desc: "Contribute your skills" },
                  { icon: "💰", title: "Lower Tuition", desc: "Co-op model keeps costs down" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-heading font-700 text-sm text-white mb-1">{item.title}</div>
                    <div className="text-blue-300 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Mike T.",
      child: "Parents of Emma, Dolphin Room",
      quote:
        "UPNS has been the most wonderful experience for our family. Emma has blossomed into a confident, curious little girl. The teachers truly know each child as an individual, and the co-op community has become like a second family.",
      initials: "ST",
    },
    {
      name: "James & Linda C.",
      child: "Parents of Noah, Kangaroo Room",
      quote:
        "Being a co-op parent was something we were unsure about at first, but it turned out to be the best part. We get to see Noah's world firsthand, and the community of families we've met is incredible.",
      initials: "JC",
    },
    {
      name: "Priya M.",
      child: "Parent of Arya, Kitten Room",
      quote:
        "The Kitten Room was perfect for Arya's gentle transition into school. The teachers were so patient and nurturing. UPNS's cooperative model means I always know exactly what's happening in the classroom.",
      initials: "PM",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Family Stories
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            What Families Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: NAVY }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-700 text-sm" style={{ color: NAVY }}>{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.child}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
function Gallery() {
  const items = [
    { emoji: "🎨", label: "Art & Crafts", bg: "#FEF9E7", border: "#F9E4A0" },
    { emoji: "🌳", label: "Outdoor Play", bg: "#EAFAF1", border: "#A9DFBF" },
    { emoji: "📖", label: "Story Time", bg: "#EEF3FA", border: "#AEC6E8" },
    { emoji: "🎵", label: "Music & Movement", bg: "#F5EEF8", border: "#D7BDE2" },
    { emoji: "🔭", label: "Science Exploration", bg: "#EBF5FB", border: "#85C1E9" },
    { emoji: "🧁", label: "Cooking & Sensory", bg: "#FEF5EC", border: "#F5CBA7" },
  ];

  return (
    <section
      id="gallery"
      className="py-24"
      style={{ backgroundColor: "#F4F7FC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Life at UPNS
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            A Peek Inside Our Classrooms
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every day is filled with laughter, discovery, and creative joy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 border-2 hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
              style={{ backgroundColor: item.bg, borderColor: item.border }}
            >
              <div className="text-5xl sm:text-6xl">{item.emoji}</div>
              <div
                className="font-heading font-700 text-sm sm:text-base text-center px-4"
                style={{ color: NAVY }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Enrollment CTA Strip ─────────────────────────────────────────────────────
function EnrollmentStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="rounded-2xl p-10 border-2"
          style={{ borderColor: "#D0DAEA", backgroundColor: "#F4F7FC" }}
        >
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Join Our Community
          </p>
          <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-4" style={{ color: NAVY }}>
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Learn about enrollment at UPNS — from application to cooperative membership.
            We&apos;d love to welcome your family.
          </p>
          <Link
            href="/enrollment"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-white shadow-lg hover:opacity-90 transition-all"
            style={{ backgroundColor: NAVY }}
          >
            Learn About Enrollment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
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
          Ready to Schedule a Visit?
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Tours are available Monday through Friday. We&apos;d love to show you around
          and answer all your questions about UPNS and cooperative preschool.
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
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <Classrooms />
      <About />
      <CoopCallout />
      <Testimonials />
      <Gallery />
      <EnrollmentStrip />
      <CTABanner />
      <Footer />
    </main>
  );
}
