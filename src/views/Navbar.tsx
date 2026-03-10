"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled
          ? "w-[92%] max-w-5xl rounded-full border border-zinc-200 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "w-[92%] max-w-5xl rounded-full border border-zinc-200/50 bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <Image
            src="/Logo/Logo.jpeg"
            alt="Ohms Electronic"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-zinc-900 hidden sm:inline">
            Ohms<span className="text-emerald-600">Electrical</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+977-01-5916438"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-100"
            aria-label="Call us"
          >
            <svg
              className="h-4 w-4 animate-ring"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </a>
          <Button href="#contact" className="text-xs px-5 py-2">
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-zinc-700 transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-zinc-700 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-zinc-700 transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 pb-5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-full px-6 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs px-5 py-2 mt-2"
            >
              <svg
                className="h-4 w-4 animate-ring"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              Contact Us
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
