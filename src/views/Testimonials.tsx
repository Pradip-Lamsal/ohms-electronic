import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "Plant Manager, Tata Steel",
    quote:
      "Ohms Electronic delivered an automation system that reduced our downtime by 40%. Their engineering team is world-class and their support is unmatched.",
    initials: "RS",
  },
  {
    name: "Priya Nair",
    role: "CTO, GreenGrid Energy",
    quote:
      "We needed custom power distribution units for our solar farms. Ohms delivered on time, on budget, and the quality exceeded our expectations.",
    initials: "PN",
  },
  {
    name: "Amit Patel",
    role: "Director, Shree Electronics",
    quote:
      "Partnering with Ohms Electronic has been a game-changer. Their PCB assemblies are reliable and their turnaround time is the fastest in the industry.",
    initials: "AP",
  },
  {
    name: "Deepika Iyer",
    role: "Operations Head, MedTech Solutions",
    quote:
      "The smart monitoring system they built for our facility has given us real-time insights we never had before. Truly innovative work.",
    initials: "DI",
  },
  {
    name: "Vikram Singh",
    role: "CEO, BuildRight Infra",
    quote:
      "From the initial consultation to the final deployment, the team at Ohms was professional, responsive, and deeply knowledgeable. Highly recommend.",
    initials: "VS",
  },
  {
    name: "Kavitha Reddy",
    role: "Procurement Lead, BHEL",
    quote:
      "Quality and consistency — that's what Ohms Electronic brings to the table. Their control panels have been running flawlessly for over three years.",
    initials: "KR",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-zinc-50 py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Industry Leaders"
          description="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
