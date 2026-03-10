import Image from "next/image";

const FOOTER_LINKS = {
  Company: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Services: [
    { label: "Control Panels", href: "#projects" },
    { label: "Automation Systems", href: "#projects" },
    { label: "PCB Assembly", href: "#projects" },
    { label: "LED Solutions", href: "#projects" },
  ],
  Contact: [
    { label: "info.ohmsee@gmail.com", href: "mailto:info.ohmsee@gmail.com" },
    { label: "01-5916438", href: "tel:+977-01-5916438" },
    { label: "Kathmandu, Nepal", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-zinc-900 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8"
    >
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2">
              <Image
                src="/Logo/Logo.jpeg"
                alt="Ohms Electronic"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-white">
                Ohms<span className="text-emerald-400">Electronic</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Engineering the future of electronics — one circuit at a time.
              Trusted by businesses across Nepal since 2000.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-700 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Ohms Electronic. All rights
            reserved.
          </p>

          {/* Certifications — subtle inline badges */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <svg
                className="h-3.5 w-3.5 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              ISO 9001 : 2000
            </span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <svg
                className="h-3.5 w-3.5 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              DNV Certified
            </span>
          </div>
          <div className="flex gap-4">
            {/* Social placeholders */}
            {["LinkedIn", "Twitter", "Instagram"].map((social) => (
              <span
                key={social}
                className="text-xs text-zinc-400 transition-colors hover:text-emerald-400 cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
