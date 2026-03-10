interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-12 sm:mb-20 ${isCenter ? "text-center" : "text-left"}`}
    >
      {/* Large watermark text */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-4 select-none whitespace-nowrap text-[4rem] font-black uppercase leading-none tracking-widest sm:-top-6 sm:text-[8rem] lg:text-[10rem] ${
          dark ? "text-white/5" : "text-emerald-800/6"
        } ${isCenter ? "left-1/2 -translate-x-1/2" : "left-0"}`}
      >
        {label}
      </span>

      {/* Content */}
      <div
        className={`relative ${isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      >
        <h2
          className={`text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
            dark ? "text-white" : "text-zinc-900"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg ${
              dark ? "text-emerald-100/70" : "text-zinc-500"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
