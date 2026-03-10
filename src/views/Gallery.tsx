"use client";

import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  { src: "/Images/image1.jpeg", alt: "Project showcase 1" },
  { src: "/Images/image2.jpeg", alt: "Project showcase 2" },
  { src: "/gallery/img1.jpeg", alt: "Gallery showcase 1" },
  { src: "/Images/image3.jpeg", alt: "Project showcase 3" },
  { src: "/gallery/img2.jpeg", alt: "Gallery showcase 2" },
  { src: "/Images/image4.jpeg", alt: "Project showcase 4" },
  { src: "/gallery/img3.jpeg", alt: "Gallery showcase 3" },
  { src: "/Images/image5.jpeg", alt: "Project showcase 5" },
  { src: "/gallery/img4.jpeg", alt: "Gallery showcase 4" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="gallery" className="relative bg-white py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Gallery"
          title="A Glimpse Into Our Work"
          description="Explore our facility, products, and the craftsmanship that goes into every project we deliver."
        />

        {/* Masonry-style grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {IMAGES.map((img, i) => {
            const hiddenOnMobile = !showAll && i >= 3;
            return (
              <button
                key={img.src}
                onClick={() => setSelected(i)}
                className={`group relative mb-4 block w-full overflow-hidden rounded-2xl border border-zinc-200 transition-all duration-500 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 ${
                  i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                } ${hiddenOnMobile ? "hidden sm:block" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-sm">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      View
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* View More / View Less — mobile only */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium text-zinc-600 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-600"
          >
            {showAll ? "View Less" : "View More"}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[85vh] max-w-4xl w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={IMAGES[selected].src}
                alt={IMAGES[selected].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md backdrop-blur-sm transition-colors hover:bg-emerald-50 hover:text-emerald-600"
              aria-label="Close"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Prev / Next */}
            <button
              onClick={() =>
                setSelected((selected - 1 + IMAGES.length) % IMAGES.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md backdrop-blur-sm transition-colors hover:bg-emerald-50 hover:text-emerald-600"
              aria-label="Previous"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setSelected((selected + 1) % IMAGES.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md backdrop-blur-sm transition-colors hover:bg-emerald-50 hover:text-emerald-600"
              aria-label="Next"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-600 shadow-md backdrop-blur-sm">
              {selected + 1} / {IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
