"use client"

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3", label: "Project Delivered" },
  { value: "50", label: "Clients Worldwide" },
];

const techIcons = [
  { src: "/images/icon-js.svg", alt: "JavaScript", width: 50.91807556152344, height: 50.91807556152344 },
  { src: "/images/icon-css.svg", alt: "CSS", width: 34.71712112426758, height: 40.7548828125 },
  { src: "/images/icon-html.svg", alt: "HTML", width: 40.503013610839844, height: 40.503013610839844 },
  { src: "/images/icon-react.svg", alt: "React", width: 43.974700927734375, height: 39.34578323364258 },
];

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="relative h-257 overflow-hidden max-[374px]:zoom-[0.92] max-[359px]:zoom-[0.81] lg:h-256 lg:max-[1279px]:zoom-[0.8]">
        <Image
          src="/images/waves.png"
          alt=""
          width={2138}
          height={1069}
          priority
          className="absolute left-1/2 -top-px max-w-none -translate-x-1/2 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#A53860]/94" />
        <div className="relative left-1/2 h-257 w-98.25 -translate-x-1/2 lg:h-full lg:w-360">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-30 top-[107.57px] hidden flex-col items-center gap-[21.78px] rounded-full border-[1.36px] border-brand-300 px-[21.78px] py-[32.67px] lg:flex"
          >
            {techIcons.map((icon) => (
              <div
                key={icon.alt}
                className="flex size-[69.43px] items-center justify-center rounded-full border-[1.36px] border-brand-300 p-[11.57px]"
              >
                <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} className="object-contain" />
              </div>
            ))}
          </motion.div>
          <Image
            src="/images/star-1.svg"
            alt=""
            width={166}
            height={166}
            className="absolute left-76 top-98.75 hidden lg:block"
          />
          <Image
            src="/images/star-2.svg"
            alt=""
            width={166}
            height={166}
            className="absolute left-[871.05px] top-[736.16px] hidden lg:block"
          />
          <div>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute z-30 left-[24.29px] top-[635.45px] h-20.25 w-29 rotate-[-12.34deg] font-bonheur text-[64.59px] leading-[80.73px] tracking-[-0.02em] text-white lg:left-[313.8px] lg:top-52 lg:h-35.5 lg:w-50.5 lg:text-[113.23px] lg:leading-[141.54px]"
            >
              Junior
            </motion.span>

            <h1>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute left-4.5 top-163 block h-31.5 w-89.25 text-center font-anton text-[102px] font-normal uppercase leading-[125.15px] tracking-[-0.02em] text-gold-100 lg:left-97.75 lg:top-64.75 lg:h-57 lg:w-164.5 lg:text-[187.76px] lg:leading-57"
              >
                Frontend
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-4.5 top-189.5 block h-28.25 w-89.25 text-center font-anton text-[92px] font-normal uppercase leading-[112.53px] tracking-[-0.02em] text-gold-100 [-webkit-text-stroke:1px_#F3B64C] lg:left-98.25 lg:top-113 lg:h-51.25 lg:w-163.5 lg:text-[168.82px] lg:leading-51.25 lg:[-webkit-text-stroke:0px]"
              >
                Developer
              </motion.span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute z-30 left-31 top-138.75 flex items-center gap-1.5 rounded-full border border-brand-300 bg-brand-400 px-4 py-1 lg:left-155.75 lg:top-56.75"
          >
            <span className="size-2 rounded-full bg-[#E26190] lg:size-4" />
            <span className="font-sans text-xs font-semibold leading-6 tracking-[-0.03em] text-white lg:text-base lg:leading-7.5 lg:tracking-normal">
              Available for Hire
            </span>
          </motion.div>
          <Image
            src="/images/lewi.png"
            alt="Lewi Maropo"
            width={610}
            height={735}
            priority
            className="absolute z-10 left-4.75 top-144 h-auto w-93.75 lg:left-103.75 lg:top-72.25 lg:w-152.5"
          />
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20 left-4.5 top-189.5 block h-28.25 w-89.25 text-center font-anton text-[92px] font-normal uppercase leading-[112.53px] tracking-[-0.02em] text-transparent [-webkit-text-stroke:1px_#F3B64C] lg:left-98.25 lg:top-113 lg:h-51.25 lg:w-163.5 lg:text-[168.82px] lg:leading-51.25"
          >
            Developer
          </motion.span>
          <div className="absolute z-30 left-4 top-22 flex w-90.25 flex-col gap-6 lg:contents">
            <div className="flex w-full flex-col gap-2 lg:absolute lg:z-30 lg:left-30 lg:top-153.5 lg:w-112.75 lg:gap-3.5">
              <div className="flex size-12 items-center justify-center rounded-full border border-brand-300 px-1.25 py-0.5 lg:size-15.75 lg:border-[1.31px] lg:px-[6.56px] lg:py-[2.63px]">
                <Image
                  src="/images/microphone.svg"
                  alt=""
                  width={18.38}
                  height={26.25}
                  className="h-5 w-3.5 lg:h-[26.25px] lg:w-[18.38px]"
                />
              </div>
              <h2 className="font-sans text-base font-bold leading-7.5 tracking-[-0.02em] text-white lg:text-xl lg:leading-8.5 lg:tracking-normal">
                Hi, I&apos;m Lewi Maropo
              </h2>
              <p className="font-sans text-sm font-medium leading-7 text-white lg:text-lg lg:leading-8">
                a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.
              </p>
            </div>
            <div className="flex w-full flex-col gap-5 lg:absolute lg:left-274.5 lg:top-59.25 lg:w-55.5">
              <div className="grid grid-cols-3 gap-y-5 lg:flex lg:flex-col">
                {stats.map((stat, index) => (
                  <Fragment key={stat.label}>
                    <div className="flex flex-col gap-0.75">
                      <p className="font-sans text-[32px] font-bold leading-10.5 tracking-[-0.02em] text-white lg:text-5xl lg:leading-15">
                        {stat.value}
                      </p>
                      <p className="font-sans text-xs font-semibold leading-6 tracking-[-0.03em] text-white lg:text-base lg:leading-7.5 lg:tracking-normal">
                        {stat.label}
                      </p>
                    </div>
                    {index % 2 === 0 && (
                      <div className="mx-auto w-px bg-brand-300 lg:hidden" />
                    )}
                    {index < stats.length - 1 && (
                      <div className="hidden w-full border-t border-brand-300 lg:block" />
                    )}
                  </Fragment>
                ))}
              </div>
              <a
                href="#contact"
                className="group flex h-12 w-full items-center gap-2 rounded-full bg-gold-100 py-2 pr-2 pl-4 transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:h-14"
              >
                <span className="flex-1 font-sans text-sm font-semibold leading-7 text-neutral-950 lg:text-base lg:leading-7.5">
                  Contact Me
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-neutral-950 p-2">
                  <ArrowRight
                    size={20}
                    className="text-neutral-25 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="absolute z-30 left-34.5 top-245 -m-2.5 rounded-full p-2.5 font-sans text-xs font-semibold leading-6 tracking-[-0.03em] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:left-161.5 lg:top-238.5 lg:text-base lg:leading-7.5 lg:tracking-normal"
          >
            <span className="flex items-center gap-0.5 rounded-full border border-brand-300 bg-brand-400 px-3">
              Scroll Down
              <span className="flex size-5 items-center justify-center lg:size-6">
                <Image src="/images/mouse.svg" alt="" width={14} height={20} className="h-4 w-auto lg:h-5" />
              </span>
            </span>
          </a>
        </div>
      </section>
    </MotionConfig>
    )
}
