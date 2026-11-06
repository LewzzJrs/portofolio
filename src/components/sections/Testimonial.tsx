"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "cn";

const testimonials = [
  {
    name: "Ester",
    role: "Exo Worship Team",
    quote: "Really helpful for the entire team.",
  },
  {
    name: "Chyntia",
    role: "Exo Worship Team",
    quote: "So cool! Now we have our own platform for music.",
  },
  {
    name: "Putri",
    role: "MaropoChord User",
    quote: "This is seriously cool!",
  },
];

const stars = [1, 2, 3, 4, 5];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const arrows = [
    { label: "Previous testimonial", Icon: ArrowLeft, target: active - 1 },
    { label: "Next testimonial", Icon: ArrowRight, target: active + 1 },
  ];

  return (
    <section id="testimonial" className="bg-white px-5 py-10 lg:px-30 lg:py-20">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:gap-12">
        <div className="mx-auto flex max-w-211.75 flex-col gap-2 text-center text-neutral-950">
          <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
            What They Say About Working With Me
          </h2>
          <p className="text-sm font-medium leading-7 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
            Real words from the teammates and users of the projects I’ve built.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 lg:gap-20.75">
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="absolute inset-x-5.25 -bottom-5 h-6.25 rounded-[12px] bg-brand-300/20 lg:inset-x-25 lg:-bottom-10.75 lg:h-14 lg:rounded-[16px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-1.75 -bottom-2.75 h-7.75 rounded-[12px] bg-[#d4a0b3] lg:inset-x-12.5 lg:-bottom-5.25 lg:h-14 lg:rounded-[16px]"
            />
            <ul
              aria-live="polite"
              className="relative grid rounded-[16px] bg-brand-300 p-6 text-neutral-25 lg:rounded-[24px] lg:px-10 lg:py-8"
            >
              {testimonials.map((testimonial, index) => (
                <li
                  key={testimonial.name}
                  className={cn(
                    "col-start-1 row-start-1 flex flex-col items-center justify-center gap-8 text-center tracking-[-0.03em] motion-safe:transition-[opacity,visibility] motion-safe:duration-300",
                    index !== active && "invisible opacity-0"
                  )}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-1">
                      {stars.map((star) => (
                        <Image key={star} src="/images/icon-star.svg" alt="" width={24} height={24} />
                      ))}
                    </div>
                    <blockquote className="text-lg font-semibold leading-8 lg:text-2xl lg:leading-9">
                      “{testimonial.quote}”
                    </blockquote>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-16 items-center justify-center rounded-full bg-gold-100 text-2xl font-bold text-neutral-950"
                    >
                      {testimonial.name[0]}
                    </span>
                    <div>
                      <p className="text-lg font-semibold leading-8">{testimonial.name}</p>
                      <p className="text-base font-medium leading-7.5">{testimonial.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3">
            {arrows.map(({ label, Icon, target }) => {
              const enabled = target >= 0 && target < testimonials.length;
              return (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  aria-disabled={!enabled}
                  onClick={() => enabled && setActive(target)}
                  className={cn(
                    "flex size-[45.33px] items-center justify-center rounded-full border border-neutral-300 outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-neutral-950",
                    enabled ? "text-neutral-950 hover:bg-neutral-100" : "cursor-not-allowed text-neutral-400"
                  )}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
