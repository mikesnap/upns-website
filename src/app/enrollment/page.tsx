"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Send,
  CheckCircle,
  Mail,
  Phone,
  Users,
  Heart,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <span className="text-white">Enrollment</span>
        </nav>
        <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Enrollment
        </h1>
        <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
          We&apos;d love to welcome your family to UPNS. Here&apos;s everything you need to know
          about joining our cooperative community.
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

// ─── Is UPNS Right for Your Family ───────────────────────────────────────────
function RightFit() {
  const points = [
    {
      emoji: "🤝",
      title: "You Want an Active Role",
      desc: "As a co-op, UPNS requires parent participation in the classroom and school operations. If you want to be genuinely involved in your child&apos;s education, this is your place.",
    },
    {
      emoji: "🌐",
      title: "UCLA Affiliation — or Not",
      desc: "UPNS was founded to serve the UCLA community, but we are open to all families regardless of UCLA connection. Everyone is warmly welcome.",
    },
    {
      emoji: "🏅",
      title: "Quality is Your Priority",
      desc: "NAEYC accreditation means our program meets the highest standards in curriculum, teaching, health, safety, and family engagement.",
    },
    {
      emoji: "🏘️",
      title: "Community Matters to You",
      desc: "UPNS families form deep, lasting bonds. The cooperative model creates a level of connection you simply don&apos;t find in traditional preschools.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            Is It a Good Fit?
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            Is UPNS Right for Your Family?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            UPNS is a wonderful school for families who are ready to be part of something
            larger than just dropping off and picking up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-heading font-700 text-base mb-2" style={{ color: NAVY }}>{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How to Apply ─────────────────────────────────────────────────────────────
function HowToApply() {
  const steps = [
    {
      number: "01",
      title: "Attend an Info Session",
      desc: "Come to one of our open information sessions to learn about UPNS, ask questions, and get a feel for our cooperative community. Sessions are held monthly — contact us to RSVP.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      number: "02",
      title: "Submit an Application",
      desc: "Complete the enrollment application below with information about your family and child. Tell us about your child&apos;s age, interests, and which classroom you&apos;re interested in.",
      icon: <Send className="w-6 h-6 text-white" />,
    },
    {
      number: "03",
      title: "Interview & Campus Tour",
      desc: "We&apos;ll invite you for a personal meeting with our director or teachers and a tour of the classrooms. This is a chance to ask questions and for us to get to know your family.",
      icon: <Heart className="w-6 h-6 text-white" />,
    },
    {
      number: "04",
      title: "Receive an Enrollment Offer",
      desc: "If there is space available and it&apos;s a good fit for all, we will extend a formal enrollment offer. Offers are typically made within 1–2 weeks of your interview.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
    },
    {
      number: "05",
      title: "Complete Cooperative Membership",
      desc: "Finalize enrollment paperwork, pay initial fees, attend a parent orientation, and complete your cooperative membership agreement. Welcome to the UPNS family!",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
            The Process
          </p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-4" style={{ color: NAVY }}>
            How to Apply
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Joining UPNS is a five-step process. We want to make sure the school and your
            family are a great match — because you&apos;re joining a community, not just enrolling
            in a class.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:shadow-lg transition-all">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ backgroundColor: NAVY }}
                >
                  {step.icon}
                </div>
                <div
                  className="font-heading font-900 text-3xl mb-2 opacity-10"
                  style={{ color: NAVY }}
                >
                  {step.number}
                </div>
                <h3 className="font-heading font-700 text-base mb-3" style={{ color: NAVY }}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 w-4 h-0.5 items-center z-10" style={{ backgroundColor: GOLD }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cooperative Commitment ───────────────────────────────────────────────────
function CoopCommitment() {
  const duties = [
    { icon: "👩‍🏫", title: "Classroom Participation Days", desc: "Each family commits to a set number of participation days per month, assisting the lead teacher in the classroom." },
    { icon: "🔧", title: "Committee Assignments", desc: "Every family joins a committee — whether it&apos;s fundraising, garden maintenance, library organization, or event planning." },
    { icon: "📋", title: "Monthly Co-op Meetings", desc: "Attendance at monthly parent meetings keeps everyone connected, informed, and part of school decision-making." },
    { icon: "🏫", title: "School Maintenance Tasks", desc: "Periodic school workdays help keep UPNS beautiful and fully functioning — from deep cleaning to yard care." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              What&apos;s Expected
            </p>
            <h2 className="font-heading font-800 text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: NAVY }}>
              The Cooperative Commitment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Joining UPNS means becoming a member of our cooperative — and that means contributing
              your time and energy to the school. This is what makes UPNS special: parents aren&apos;t
              outsiders to their child&apos;s education, they are part of it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Most families find that co-op participation — while a genuine time commitment — becomes
              one of the most rewarding parts of the UPNS experience. You&apos;ll build real friendships,
              see your child thrive in real time, and contribute to a school you&apos;re genuinely proud of.
            </p>

            <div
              className="rounded-2xl p-6 border-l-4"
              style={{ backgroundColor: "#EEF3FA", borderColor: NAVY }}
            >
              <p className="font-heading font-700 text-base mb-2" style={{ color: NAVY }}>
                A Note on Commitment
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The specific number of participation days and committee assignments varies by
                classroom and family circumstances. Details will be discussed during your
                enrollment interview. We are understanding of varied schedules and always
                work to find arrangements that work for every family.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {duties.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
                style={{ backgroundColor: "#F9FAFB" }}
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-heading font-700 text-sm mb-2" style={{ color: NAVY }}>{d.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Application Form ─────────────────────────────────────────────────────────
function ApplicationForm() {
  const [formData, setFormData] = useState({
    parent1Name: "",
    parent2Name: "",
    email: "",
    phone: "",
    childName: "",
    childDob: "",
    program: "",
    referral: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Panel */}
          <div>
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              Questions?
            </p>
            <h2 className="font-heading font-800 text-3xl mb-6 leading-tight" style={{ color: NAVY }}>
              Contact Our Enrollment Team
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Rachel Graves and Ana Flores are happy to answer any questions about enrollment,
              the cooperative model, or which classroom might be the best fit for your child.
            </p>

            <div
              className="rounded-2xl p-6 text-white mb-6"
              style={{ background: `linear-gradient(135deg, #122850, #1B3A6B)` }}
            >
              <h3 className="font-heading font-700 text-base mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="mailto:upns@ucla.edu" className="text-blue-100 hover:text-white transition-colors">
                    upns@ucla.edu
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href="tel:3103972735" className="text-blue-100 hover:text-white transition-colors">
                    310-397-2735
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div className="text-blue-100">
                    <div>Rachel Graves</div>
                    <div>Ana Flores</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { emoji: "🐱", name: "Kitten Room", age: "18mo – 2yr" },
                { emoji: "🦘", name: "Kangaroo Room", age: "3 years" },
                { emoji: "🐬", name: "Dolphin Room", age: "4 years" },
              ].map((room) => (
                <Link
                  key={room.name}
                  href={`/classrooms/${room.name.split(" ")[0].toLowerCase()}`}
                  className="flex items-center gap-3 p-3 rounded-xl border hover:shadow-sm transition-all"
                  style={{ borderColor: "#D0DAEA", backgroundColor: "white" }}
                >
                  <span className="text-2xl">{room.emoji}</span>
                  <div>
                    <div className="font-heading font-700 text-sm" style={{ color: NAVY }}>{room.name}</div>
                    <div className="text-xs text-gray-400">{room.age}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="font-heading font-700 text-2xl mb-2" style={{ color: NAVY }}>
              Enrollment Application
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below to begin the enrollment process. We&apos;ll be in touch within 2 business days.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-heading font-700 text-xl mb-2" style={{ color: NAVY }}>
                  Application Received!
                </h4>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Thank you for your interest in UPNS. Rachel or Ana will reach out to you
                  within 2 business days to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Parent / Guardian 1 Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.parent1Name}
                      onChange={(e) => setFormData({ ...formData, parent1Name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-400 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Parent / Guardian 2 Name</label>
                    <input
                      type="text"
                      value={formData.parent2Name}
                      onChange={(e) => setFormData({ ...formData, parent2Name: e.target.value })}
                      placeholder="John Smith (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-400 transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-400 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(310) 555-0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-400 transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Child&apos;s Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="Child's first name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-400 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Child&apos;s Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.childDob}
                      onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Program Interested In *</label>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-gray-700 bg-white transition-shadow"
                    >
                      <option value="">Select a classroom...</option>
                      <option value="kitten">Kitten Room (18mo – 2yr)</option>
                      <option value="kangaroo">Kangaroo Room (3 years)</option>
                      <option value="dolphin">Dolphin Room (4 years)</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">How Did You Hear About Us?</label>
                    <select
                      value={formData.referral}
                      onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-gray-700 bg-white transition-shadow"
                    >
                      <option value="">Select one...</option>
                      <option value="ucla">UCLA (student/staff/faculty)</option>
                      <option value="friend">Friend or Family Referral</option>
                      <option value="search">Internet Search</option>
                      <option value="lacppns">LACPPNS / Other Co-op</option>
                      <option value="social">Social Media</option>
                      <option value="drive">Drove By / Neighborhood</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Questions</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your child and any questions you have about UPNS or the cooperative model..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-gray-700 placeholder-gray-400 resize-none transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: NAVY }}
                >
                  Submit Application <Send className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Your information is never shared outside UPNS.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EnrollmentPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <RightFit />
      <HowToApply />
      <CoopCommitment />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
