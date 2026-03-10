import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const PROJECTS = [
  {
    image: "/Images/image1.jpeg",
    title: "Industrial Control Panels",
    desc: "Custom-built panels for factory automation systems with PLC integration and remote monitoring capabilities.",
  },
  {
    image: "/Images/image2.jpeg",
    title: "Power Distribution Units",
    desc: "High-efficiency PDUs engineered for commercial buildings and data centers with surge protection.",
  },
  {
    image: "/Images/image3.jpeg",
    title: "Smart Automation Systems",
    desc: "IoT-enabled automation solutions for smart homes, offices, and industrial facilities.",
  },
  {
    image: "/Images/image4.jpeg",
    title: "LED Lighting Solutions",
    desc: "Energy-efficient LED driver circuits and intelligent lighting systems for large-scale deployments.",
  },
  {
    image: "/Images/image5.jpeg",
    title: "PCB Design & Assembly",
    desc: "End-to-end PCB design, prototyping, and mass manufacturing with precision SMT assembly.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-white via-emerald-50/30 to-white py-24 sm:py-32"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Our Work"
          title="What We Build"
          description="From concept to deployment — we deliver end-to-end electronic solutions that power industries across Nepal."
        />

        {/* Bento-style grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 ? "h-72 sm:h-full" : "h-52"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
