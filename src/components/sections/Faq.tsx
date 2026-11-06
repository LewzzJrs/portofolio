"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "cn";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I’m open to freelance or remote opportunities — especially those focused on building intuitive and responsive user interfaces.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely! I specialize in translating design files into pixel-perfect, responsive frontend code with clean structure and component-based architecture.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Definitely! I enjoy working in cross-functional teams and have experience integrating frontend with various backend systems and APIs.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "I’m open to hearing about full-time opportunities that align with my values and growth as a frontend developer. Feel free to reach out!",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-neutral-100 px-4 py-10 lg:px-30 lg:py-20">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:gap-12">
        <div className="mx-auto flex max-w-211.75 flex-col gap-2 text-center text-neutral-950">
          <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
            Let’s Clear Things Up
          </h2>
          <p className="text-sm leading-7 lg:text-base lg:font-medium lg:leading-7.5 lg:tracking-[-0.03em]">
            I’ve answered a few questions that usually come up when working with a frontend
            developer like me.
          </p>
        </div>
        <ul className="flex flex-col gap-5">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const Icon = open ? Minus : Plus;
            return (
              <li
                key={faq.question}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-3 not-last:border-b not-last:border-neutral-300 not-last:pb-5 lg:grid-cols-[auto_minmax(0,47.5625rem)_auto] lg:justify-between"
              >
                <h3 className="col-span-3 grid grid-cols-subgrid">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="col-span-3 grid grid-cols-subgrid items-start rounded-[8px] text-left text-lg font-semibold leading-8 tracking-[-0.03em] text-neutral-950 outline-offset-4 focus-visible:outline-2 focus-visible:outline-neutral-950 lg:items-center lg:text-2xl lg:leading-9"
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{faq.question}</span>
                    <span
                      className={cn(
                        "flex size-8 items-center justify-center rounded-full transition-colors lg:size-12",
                        open
                          ? "bg-brand-300 text-white"
                          : "border border-neutral-300 bg-white text-neutral-950"
                      )}
                    >
                      <Icon className="size-[16.7px] lg:size-6" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={cn(
                    "col-start-2 grid motion-safe:transition-[grid-template-rows,visibility] motion-safe:duration-300",
                    open ? "grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                  )}
                >
                  <p className="overflow-hidden text-sm font-medium leading-7 text-neutral-700 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
                    <span className="block pt-2 lg:pt-0">{faq.answer}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
