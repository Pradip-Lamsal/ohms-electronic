import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
    title: "R&D Driven",
    desc: "In-house research team continuously innovating to deliver state-of-the-art solutions.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
        />
      </svg>
    ),
    title: "Precision Engineering",
    desc: "Every product undergoes rigorous quality checks to ensure peak performance and longevity.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
    title: "Client-Centric",
    desc: "We work closely with every client to tailor solutions that fit their exact requirements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-950 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-12 lg:px-16">
        <SectionHeading
          label="Who We Are"
          title="Engineering Excellence Since 2000"
          description="Ohms Electronic is a premier electronics manufacturing company based in Nepal, specializing in industrial-grade electronic systems, automation panels, and smart infrastructure solutions."
          dark
        />

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Image side — constrained */}
          <div className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-700/40 shadow-2xl shadow-black/20">
              <Image
                src="/Images/image1.jpeg"
                alt="Ohms Electronic work"
                width={380}
                height={285}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-950/40 to-transparent" />
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-emerald-100/80 sm:text-base">
              From humble beginnings to becoming one of the most trusted names
              in electronic manufacturing, we&apos;ve built our reputation on
              quality, innovation, and unwavering commitment to our clients. Our
              state-of-the-art facility is equipped with the latest tools and
              technology to deliver world-class products.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-emerald-700/30 bg-emerald-800/40 p-3.5 backdrop-blur-sm md:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-emerald-200/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
