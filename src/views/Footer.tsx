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
    <footer id="contact" className="relative bg-zinc-900 pt-20 pb-8">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
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
