"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const NAVY = "#1B3A6B";
const GOLD = "#F5A623";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classrooms", href: "/classrooms" },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm"
              style={{ backgroundColor: NAVY }}
            >
              <span className="text-white font-heading font-900 text-lg tracking-tight">UP</span>
            </div>
            <div>
              <div className="font-heading font-800 text-xl leading-tight" style={{ color: NAVY }}>
                UPNS
              </div>
              <div className="text-xs font-body text-gray-500 leading-tight tracking-wide uppercase">
                Preschool
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-[#1B3A6B] transition-colors relative group"
              >
                {l.label}
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all"
                  style={{
                    backgroundColor: GOLD,
                    transform: isActive(l.href) ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/enrollment"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-md text-white font-semibold text-sm shadow hover:shadow-md hover:opacity-90 transition-all"
              style={{ backgroundColor: GOLD }}
            >
              Apply Now <ChevronRight className="w-4 h-4" />
            </Link>
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 font-semibold rounded-md transition-colors"
                style={{
                  color: isActive(l.href) ? NAVY : "#374151",
                  backgroundColor: isActive(l.href) ? "#EEF3FA" : "transparent",
                }}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/enrollment"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-md text-white font-semibold text-sm"
                style={{ backgroundColor: GOLD }}
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
