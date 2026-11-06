"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";

type Project = {
  title: string;
  category: string;
  image: string;
  url?: string;
};

const projects: Project[] = [
  {
    title: "Exo Worship Library",
    category: "Worship Team · Chord Library",
    image: "/images/work/exo-worship.webp",
    url: "https://exo-worship.vercel.app/",
  },
  {
    title: "MaropoChord",
    category: "Chords · Public Library",
    image: "/images/work/maropochord.webp",
    url: "https://maropo-chord.vercel.app/",
  },
  {
    title: "Crypto Dashboard",
    category: "Crypto · Market Dashboard",
    image: "/images/work/crypto-dashboard.webp",
    url: "https://crypto-dashboard-rho-two.vercel.app/",
  },
  {
    title: "Stock Dashboard",
    category: "Stocks · Market Dashboard",
    image: "/images/work/stock-dashboard.webp",
    url: "https://stock-dashboard-eight-sandy.vercel.app/",
  },
  {
    title: "Movie Explorer",
    category: "Films · TMDB API",
    image: "/images/work/movie-explorer.webp",
    url: "https://movie-explorer-jade-tau.vercel.app/",
  },
  {
    title: "Foody",
    category: "Food Ordering · Restaurant App",
    image: "/images/work/foody.webp",
  },
  {
    title: "Sociality",
    category: "Social Media · Photo Sharing",
    image: "/images/work/sociality.webp",
    url: "https://sociality-sand.vercel.app/",
  },
];

const featuredCount = 3;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, featuredCount);

  return (
    <section id="projects" className="bg-white px-4 py-10 lg:px-30 lg:py-20">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 text-neutral-950 lg:max-w-171.5">
            <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
              Design to Code Accuracy
            </h2>
            <p className="text-sm font-medium leading-7 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
              I translated design mockups into pixel-perfect, responsive components, ensuring a
              smooth user experience across all devices.
            </p>
          </div>
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="project-list"
            onClick={() => setShowAll((current) => !current)}
            className="flex h-14 w-full items-center justify-between gap-2 rounded-full border border-neutral-300 py-2 pl-4 pr-2 text-base font-semibold leading-7.5 text-neutral-950 outline-offset-2 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-neutral-950 lg:w-39 lg:shrink-0"
          >
            {showAll ? "Show Less" : "See All"}
            <span className="flex size-9 items-center justify-center rounded-full bg-neutral-950 text-white">
              <ArrowRight
                size={20}
                strokeWidth={1.67}
                className={cn("motion-safe:transition-transform", showAll && "-rotate-90")}
              />
            </span>
          </button>
        </div>
        <ul id="project-list" className="grid gap-5 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li key={project.title} className="group relative flex flex-col">
              <div className="relative rounded-[20px] bg-neutral-100 p-4">
                <div className="relative aspect-square">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 355px, calc(100vw - 64px)"
                    className="rounded-[8px] object-cover"
                  />
                </div>
                {index < featuredCount && (
                  <>
                    <Image
                      src="/images/ribbon-fold.svg"
                      alt=""
                      width={10}
                      height={17}
                      className="absolute -left-2.25 top-10"
                    />
                    <span className="absolute -left-2.25 top-7 h-5.25 rounded-r-full bg-gold-100 pl-1.75 pr-3 text-xs font-semibold leading-5.25 tracking-[-0.03em] text-neutral-950">
                      Best Portfolio
                    </span>
                  </>
                )}
              </div>
              <div className="flex flex-1 items-center gap-6 rounded-[20px] bg-neutral-100 p-4">
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <h3 className="text-base font-bold leading-7.5 tracking-[-0.02em] text-neutral-950 lg:text-lg lg:leading-8 lg:tracking-normal">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="outline-none after:absolute after:inset-0 after:rounded-[20px] after:outline-offset-2 focus-visible:after:outline-2 focus-visible:after:outline-neutral-950"
                      >
                        {project.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <hr className="border-neutral-300" />
                  <p className="text-xs font-medium leading-6 text-neutral-600 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
                    {project.category}
                  </p>
                </div>
                {project.url && (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-300 text-white transition-colors group-hover:bg-brand-400">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
