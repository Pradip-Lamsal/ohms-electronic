"use client";

import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";

/* ── Animated grid background ──────────────────────── */
const GRID_COLS = 20;
const GRID_ROWS = 12;
const COLORS = [
  "bg-emerald-500/20",
  "bg-emerald-600/15",
  "bg-zinc-900/10",
  "bg-zinc-800/8",
  "bg-white",
  "bg-emerald-400/12",
];

function AnimatedGrid() {
  const [cells, setCells] = useState<string[]>(() =>
    Array(GRID_COLS * GRID_ROWS).fill("bg-zinc-100/60"),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCells((prev) => {
        const next = [...prev];
        const count = 3 + Math.floor(Math.random() * 4);
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * next.length);
          next[idx] = COLORS[Math.floor(Math.random() * COLORS.length)];
        }
        // Fade some back
        for (let i = 0; i < 2; i++) {
          const idx = Math.floor(Math.random() * next.length);
          next[idx] = "bg-zinc-100/60";
        }
        return next;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
      }}
    >
      {cells.map((color, i) => (
        <div
          key={i}
          className={`${color} border border-zinc-200/30 transition-colors duration-1000 ease-in-out`}
        />
      ))}
    </div>
  );
}

/* ── Animated counter hook ─────────────────────────── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ── Stat card with slide-up animation ─────────────── */
function Stat({
  end,
  suffix,
  label,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCounter(end);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`rounded-xl border border-zinc-200/60 bg-white/80 px-4 py-5 backdrop-blur-sm shadow-sm transition-all duration-700 ease-out sm:rounded-2xl sm:px-6 sm:py-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div ref={ref}>
        <p className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          {count}
          <span className="text-emerald-600">{suffix}</span>
        </p>
        <p className="mt-1 text-xs font-medium tracking-wide text-zinc-400 uppercase sm:mt-2 sm:text-sm">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ── Hero section ──────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-zinc-50 pt-20 pb-12 sm:pt-24 sm:pb-20"
    >
      {/* Animated grid background */}
      <AnimatedGrid />

      {/* Center fade overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] from-white/90 via-white/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Powering Nepal&apos;s
          <br />
          <span className="text-emerald-600">Electronic</span> Infrastructure
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
          We design, manufacture, and deploy cutting-edge electronic systems —
          from industrial control panels to smart automation solutions.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <Button href="#projects">Explore Our Work</Button>
          <Button href="#about" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-full max-w-3xl bg-linear-to-r from-transparent via-zinc-200 to-transparent sm:mt-20" />

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-6">
          <Stat end={25} suffix="+" label="Years" delay={0} />
          <Stat end={500} suffix="+" label="Projects" delay={150} />
          <Stat end={100} suffix="+" label="Clients" delay={300} />
          <Stat end={24} suffix="/7" label="Support" delay={450} />
        </div>
      </div>
    </section>
  );
}
