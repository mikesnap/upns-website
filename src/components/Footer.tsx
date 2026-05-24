import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight, Globe, Camera, MessageCircle } from "lucide-react";

const NAVY = "#1B3A6B";
const GOLD = "#F5A623";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Classrooms", href: "/classrooms" },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="font-heading font-800 text-white text-lg">UP</span>
              </div>
              <div>
                <div className="font-heading font-800 text-xl text-white">University Parents Nursery School</div>
                <div className="text-blue-300 text-xs uppercase tracking-widest">Hearts at Play</div>
              </div>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed max-w-xs mb-2">
              A cooperative preschool serving families since our founding. NAEYC-accredited
              and open to UCLA students, staff, faculty, and the general public.
            </p>
            <p className="text-blue-400 text-xs mb-5">
              Member: LACPPNS (Los Angeles Council of Parent Participation Nursery Schools)
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Globe className="w-4 h-4" />, label: "Website" },
                { icon: <Camera className="w-4 h-4" />, label: "Instagram" },
                { icon: <MessageCircle className="w-4 h-4" />, label: "Messages" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-700 text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-blue-300 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-700 text-white text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                3233 S Sepulveda Blvd,<br />Los Angeles, CA 90034
              </li>
              <li className="flex items-center gap-2 text-blue-300 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 opacity-60" />
                310-397-2735
              </li>
              <li className="flex items-center gap-2 text-blue-300 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 opacity-60" />
                upns@ucla.edu
              </li>
              <li className="flex items-start gap-2 text-blue-300 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                <span>Mon–Fri: School Hours<br /><span className="text-blue-400 text-xs">Contact for current schedule</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} University Parents Nursery School (UPNS). All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-blue-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
