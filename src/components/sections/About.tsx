import { Fragment } from "react";

const cards = [
  {
    emoji: "⚙️",
    title: "COMPONENT-BASED DEVELOPMENT",
    description: "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    emoji: "🎨",
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    description: "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    emoji: "📱",
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    description: "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="px-4 py-10 lg:px-30 lg:py-20">
        <h2 className="mx-auto max-w-223 text-center text-[28px] font-medium leading-9.5 tracking-[-0.03em] text-neutral-950 lg:text-4xl lg:leading-11 lg:tracking-[-0.02em]">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-brand-300">clean</span>,{" "}
          <span className="text-brand-300">responsive code</span> that blends creativity 🎨 with usability 🌟.
        </h2>
      </div>
      <div className="flex flex-col gap-4 px-4 py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-30 lg:py-20">
        {cards.map((card, index) => (
          <Fragment key={card.title}>
            <article className="flex flex-col gap-3 lg:min-w-0 lg:flex-1 lg:gap-4">
              <div className="flex size-12 items-center justify-center rounded-full border border-neutral-300 lg:size-15.75 lg:border-[1.31px]">
                <span aria-hidden="true" className="text-2xl font-bold leading-7 lg:text-[32px] lg:leading-9">
                  {card.emoji}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-neutral-950">
                <h3 className="text-lg font-bold leading-8 lg:text-2xl lg:leading-9">{card.title}</h3>
                <p className="text-sm leading-7 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
                  {card.description}
                </p>
              </div>
            </article>
            {index > 0 && <div className="border-t border-neutral-300 lg:hidden" />}
            {index < cards.length - 1 && (
              <div className="hidden h-44 w-px shrink-0 bg-neutral-300 lg:block" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
