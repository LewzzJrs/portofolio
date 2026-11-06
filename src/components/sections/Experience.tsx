import Image from "next/image";
import { Reveal } from "@/components/Motion";

const experiences = [
  {
    company: "MaropoChord",
    logo: { src: "/images/logo-maropochord.svg", width: 252, height: 80 },
    period: "2026 - Present",
    role: "Founder & Developer",
    description:
      "A public chord site for pop, worship, Indonesian regional, Western and children’s songs, with 114 songs live. Grown out of the Exo Worship codebase and opened up: key changes, capo, number chords, guitar and piano diagrams, and setlists. Next.js 16 and Supabase with ChordSheetJS for transposition, PDF export and import, and a service worker that keeps opened pages readable offline.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-950 px-5 py-10 md:px-10 lg:px-16 xl:px-30 lg:py-20">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:gap-12">
        <Reveal className="flex flex-col gap-2 text-neutral-25 lg:flex-row lg:justify-between" from="left">
          <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] md:text-[34px] md:leading-11.5 lg:w-91.25 lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
            Experiences That <span className="text-gold-100">Shaped Me</span>!
          </h2>
          <p className="text-sm font-semibold leading-7 lg:w-91.5 lg:text-lg lg:leading-8 lg:tracking-[-0.03em]">
            From startups to side projects, every step has been a chance to learn, build, and level
            up.
          </p>
        </Reveal>
        <hr className="border-neutral-800" />
        <Reveal from="right" delay={0.15}>
          <ul className="flex flex-col gap-4 lg:gap-8">
            {experiences.map((experience) => (
              <li
                key={experience.company}
                className="flex flex-col gap-4 not-last:border-b not-last:border-neutral-800 not-last:pb-4 lg:flex-row lg:justify-between lg:gap-6 lg:not-last:pb-8"
              >
                <div className="flex flex-col gap-1 lg:w-44.5 lg:shrink-0">
                  <p className="text-sm font-medium leading-7 text-neutral-400">
                    {experience.period}
                  </p>
                  <h3 className="text-base font-bold leading-7.5 tracking-[-0.02em] text-neutral-25 lg:text-xl lg:leading-8.5 lg:tracking-normal">
                    {experience.role}
                  </h3>
                </div>
                <div className="h-17.75 w-[121.7px] shrink-0 rounded-[16px] border border-neutral-800 p-[5px] lg:h-28 lg:w-48 lg:p-2">
                  <div className="flex size-full items-center justify-center rounded-[10px] border border-neutral-800 lg:rounded-[16px]">
                    <Image
                      src={experience.logo.src}
                      alt={experience.company}
                      width={experience.logo.width}
                      height={experience.logo.height}
                      className="h-auto w-[81px] lg:w-32"
                    />
                  </div>
                </div>
                <p className="text-sm leading-7 text-neutral-400 lg:min-w-0 lg:max-w-128.25 lg:flex-1 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
                  {experience.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
