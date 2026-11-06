"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "cn";

const skills = [
  {
    name: "HTML",
    description: "Crafting semantic, accessible HTML structures.",
    icon: { src: "/images/icon-html.svg", width: 35, height: 35 },
  },
  {
    name: "CSS",
    description: "Styling clean, responsive, and modern layouts.",
    icon: { src: "/images/icon-css.svg", width: 30, height: 35.2 },
  },
  {
    name: "JavaScript",
    description: "Building interactive, dynamic web experiences.",
    icon: { src: "/images/icon-js.svg", width: 44, height: 44 },
  },
  {
    name: "React",
    description: "Creating reusable, component-based interfaces.",
    icon: { src: "/images/icon-react.svg", width: 38, height: 34 },
  },
];

export default function Skill() {
  const listRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    setCanPrev(list.scrollLeft > 1);
    setCanNext(list.scrollLeft + list.clientWidth < list.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(updateArrows);
    observer.observe(list);
    return () => observer.disconnect();
  }, [updateArrows]);

  function scrollPage(direction: 1 | -1) {
    const list = listRef.current;
    list?.scrollBy({ left: direction * list.clientWidth });
  }

  const arrows = [
    { label: "Previous skills", Icon: ArrowLeft, enabled: canPrev, direction: -1 as const },
    { label: "Next skills", Icon: ArrowRight, enabled: canNext, direction: 1 as const },
  ];

  return (
    <section
      id="skill"
      className="flex flex-col items-center gap-6 bg-white bg-linear-to-b from-[#9E385E]/0 to-[#9E385E]/10 px-4 py-10 lg:gap-12 lg:px-30 lg:py-20"
    >
      <div className="flex max-w-211.75 flex-col gap-2 px-1 text-center text-neutral-950 lg:px-0">
        <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
          Code, Design, and Everything in Between
        </h2>
        <p className="text-sm font-medium leading-7 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
          These are the technologies that power my workflow and bring ideas to life.
        </p>
      </div>
      <div className="flex w-full max-w-230 flex-col items-center gap-8">
        <ul
          ref={listRef}
          onScroll={updateArrows}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] motion-safe:scroll-smooth lg:gap-5"
        >
          {skills.map((skill, index) => {
            const gold = index % 2 === 0;
            return (
              <li
                key={skill.name}
                className={cn(
                  "flex min-h-70.25 w-[calc((100%-16px)/2)] max-w-53.75 shrink-0 snap-start flex-col items-center gap-3 rounded-[100px] px-4 py-10 lg:w-53.75",
                  gold ? "bg-gold-100" : "border border-neutral-300 bg-neutral-25"
                )}
              >
                <div
                  className={cn(
                    "flex size-15 shrink-0 items-center justify-center rounded-full",
                    gold ? "bg-neutral-100 lg:bg-neutral-25" : "bg-neutral-100"
                  )}
                >
                  <Image src={skill.icon.src} alt="" width={skill.icon.width} height={skill.icon.height} />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-semibold leading-7.5 text-neutral-950">{skill.name}</h3>
                  <p className="text-sm leading-7 text-neutral-800 lg:text-base lg:leading-7.5">
                    {skill.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        {(canPrev || canNext) && (
          <div className="flex gap-3">
            {arrows.map(({ label, Icon, enabled, direction }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                aria-disabled={!enabled}
                onClick={() => scrollPage(direction)}
                className={cn(
                  "flex size-[45.33px] items-center justify-center rounded-full border border-neutral-300 outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-950",
                  enabled ? "text-neutral-950 hover:bg-neutral-100" : "cursor-not-allowed text-neutral-400"
                )}
              >
                <Icon size={24} strokeWidth={1.5} />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
