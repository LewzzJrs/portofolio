import Image from "next/image";
import { cn } from "cn";

const columns = [
  {
    title: "With Me",
    highlighted: true,
    icon: "/images/icon-check.svg",
    items: [
      "React Expert",
      "Precise Website Implementation",
      "TypeScript Proficiency",
      "Clean, Maintainable Code",
      "Responsive Website Development",
      "Performance Optimization",
      "UI Design Proficiency (Figma)",
    ],
  },
  {
    title: "Another Talent",
    highlighted: false,
    icon: "/images/icon-close.svg",
    items: [
      "Basic React Knowledge",
      "Inconsistent Design Translation",
      "Little to No TypeScript Knowledge",
      "Unstructured Code",
      "Inconsistent Responsiveness",
      "Slow and Heavy Websites",
      "No Design Skills",
    ],
  },
];

export default function Standout() {
  return (
    <section className="bg-white px-4 py-10 lg:px-30 lg:py-20">
      <div className="mx-auto flex max-w-300 flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-2 text-center text-neutral-950">
          <h2 className="text-[28px] font-bold leading-9.5 tracking-[-0.02em] lg:text-[40px] lg:leading-14 lg:tracking-[-0.03em]">
            More Than Just Code
          </h2>
          <p className="text-sm font-medium leading-7 lg:text-base lg:leading-7.5 lg:tracking-[-0.03em]">
            I care about design, performance, and user experience all in one.
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          {columns.map((column) => (
            <div
              key={column.title}
              className={cn(
                "flex flex-col gap-6 rounded-[16px] px-4 py-8 text-neutral-950 lg:min-w-0 lg:flex-1 lg:gap-8 lg:p-8",
                column.highlighted ? "bg-gold-100" : "bg-white ring-1 ring-inset ring-neutral-300"
              )}
            >
              <div className="flex flex-col items-center gap-3 lg:gap-6">
                <h3
                  className={cn(
                    "text-lg leading-8",
                    column.highlighted ? "font-bold" : "font-semibold tracking-[-0.03em]"
                  )}
                >
                  {column.title}
                </h3>
                {column.highlighted ? (
                  <div className="relative size-20 overflow-hidden rounded-full bg-brand-300 lg:size-25">
                    <Image
                      src="/images/lewi.png"
                      alt="Lewi Maropo"
                      width={87}
                      height={104}
                      className="absolute left-1/2 top-[5.8px] h-auto w-[65.3px] max-w-none -translate-x-1/2 lg:top-[7.7px] lg:w-[86.3px]"
                    />
                  </div>
                ) : (
                  <div className="flex size-20 items-center justify-center rounded-full bg-neutral-300 lg:size-25">
                    <Image
                      src="/images/icon-profile.svg"
                      alt=""
                      width={60}
                      height={60}
                      className="size-[45.4px] lg:size-15"
                    />
                  </div>
                )}
              </div>
              <ul className="flex flex-col gap-3 lg:gap-6">
                {column.items.map((item) => (
                  <li key={item} className="flex items-center justify-center gap-3">
                    <Image src={column.icon} alt="" width={24} height={24} className="shrink-0" />
                    <span className="text-center text-base font-semibold leading-7.5 lg:text-lg lg:leading-8 lg:tracking-[-0.03em]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
