"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Users,
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
          <span className="text-white">Contact</span>
        </nav>
        <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Contact Us
        </h1>
        <p className="text-blue-200 text-xl max-w-2xl leading-relaxed">
          We&apos;d love to hear from you. Reach out with questions about enrollment,
          tours, cooperative membership, or anything else about UPNS.
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

// ─── Contact Main ─────────────────────────────────────────────────────────────
function ContactMain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div>
            <p className="font-body font-600 text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              Get in Touch
            </p>
            <h2 className="font-heading font-800 text-3xl sm:text-4xl mb-6 leading-tight" style={{ color: NAVY }}>
              We&apos;re Here to Help
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you have questions about our classrooms, want to schedule a tour, are curious
              about the cooperative model, or are ready to start the enrollment process — we&apos;re happy
              to talk. Rachel Graves and Ana Flores are our primary contacts and will respond promptly.
            </p>

            {/* Contact Details */}
            <div
              className="rounded-2xl p-6 text-white mb-6"
              style={{ background: `linear-gradient(135deg, #122850, #1B3A6B)` }}
            >
              <h3 className="font-heading font-700 text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">Address</div>
                    <div className="text-white text-sm">
                      3233 S Sepulveda Blvd<br />
                      Los Angeles, CA 90034
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:3103972735" className="text-white text-sm hover:text-blue-200 transition-colors">
                      310-397-2735
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:upns@ucla.edu" className="text-white text-sm hover:text-blue-200 transition-colors">
                      upns@ucla.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">Contacts</div>
                    <div className="text-white text-sm">
                      Rachel Graves<br />Ana Flores
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-1">Office Hours</div>
                    <div className="text-white text-sm">
                      Monday – Friday<br />
                      During school session<br />
                      <span className="text-blue-300 text-xs">Contact for current school hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              className="rounded-2xl overflow-hidden border-2 relative"
              style={{ borderColor: "#D0DAEA", backgroundColor: "#F4F7FC", height: "220px" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-md"
                  style={{ backgroundColor: NAVY }}
                >
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="font-heading font-700 text-base mb-1" style={{ color: NAVY }}>
                  3233 S Sepulveda Blvd
                </div>
                <div className="text-gray-500 text-sm mb-3">Los Angeles, CA 90034</div>
                <a
                  href="https://maps.google.com/?q=3233+S+Sepulveda+Blvd+Los+Angeles+CA+90034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: NAVY }}
                >
                  Open in Google Maps <ChevronRight className="w-3 h-3" />
                </a>
              </div>
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(#1B3A6B 1px, transparent 1px), linear-gradient(90deg, #1B3A6B 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            {/* University Village Note */}
            <div
              className="mt-4 rounded-xl p-4 border-l-4 text-sm"
              style={{ backgroundColor: "#EEF3FA", borderColor: NAVY }}
            >
              <p className="font-semibold mb-1" style={{ color: NAVY }}>University Village Child Care Complex</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                UPNS is located within the University Village area near UCLA. Parking is available on-site.
                We are accessible by public transit on S Sepulveda Blvd.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="font-heading font-700 text-2xl mb-2" style={{ color: NAVY }}>
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and we&apos;ll respond within 1–2 business days.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-heading font-700 text-xl mb-2" style={{ color: NAVY }}>
                  Message Sent!
                </h4>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Thank you for reaching out to UPNS. Rachel or Ana will be in touch
                  with you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700 placeholder-gray-400 transition-shadow"
                  />
                </div>

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
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-gray-700 bg-white transition-shadow"
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="enrollment">Enrollment Question</option>
                    <option value="member">Member / Co-op Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you? Feel free to ask about enrollment, our classrooms, the cooperative model, or anything else..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-gray-700 placeholder-gray-400 resize-none transition-shadow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: NAVY }}
                >
                  Send Message <Send className="w-4 h-4" />
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

// ─── Quick Links Strip ────────────────────────────────────────────────────────
function QuickLinks() {
  const links = [
    { emoji: "📋", label: "Apply for Enrollment", href: "/enrollment", desc: "Start the application process" },
    { emoji: "🏫", label: "View Classrooms", href: "/classrooms", desc: "Kitten, Kangaroo & Dolphin Rooms" },
    { emoji: "🤝", label: "Co-op Membership", href: "/members", desc: "Learn about participation" },
    { emoji: "ℹ️", label: "About UPNS", href: "/about", desc: "Our history & mission" },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-800 text-2xl mb-8 text-center" style={{ color: NAVY }}>
          Helpful Links
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-white rounded-2xl p-5 flex items-center gap-4 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="text-3xl flex-shrink-0">{link.emoji}</span>
              <div>
                <div className="font-heading font-700 text-sm" style={{ color: NAVY }}>{link.label}</div>
                <div className="text-xs text-gray-400">{link.desc}</div>
              </div>
              <ChevronRight className="w-4 h-4 ml-auto text-gray-300 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero />
      <ContactMain />
      <QuickLinks />
      <Footer />
    </main>
  );
}
