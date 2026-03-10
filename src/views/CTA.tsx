import Button from "@/components/Button";

export default function CTA() {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 p-8 sm:p-12 md:p-16 lg:p-20">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl hidden md:block" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-4xl lg:text-5xl">
              Ready to Build Something{" "}
              <span className="text-emerald-200">Extraordinary</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100/80">
              Whether you need a custom control panel, a smart automation
              system, or a full-scale electronic deployment — we&apos;re here to
              make it happen.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="#contact">
                Start Your Project
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button href="tel:+977-01-5916438" variant="outline">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
