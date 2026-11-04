"use client"

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="home" className="relative h-256 overflow-hidden bg-[#A53860]/94">
      <div className="relative mx-auto h-full w-360">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-30 top-[107.57px] flex flex-col items-center gap-[21.78px] rounded-full border-[1.36px] border-brand-300 px-[21.78px] py-[32.67px]"
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
        <div>
          <motion.span
            initial={{ opacity: 0, y: -20 }}  
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute z-10 left-[313.8px] top-52 h-35.5 w-50.5 rotate-[-12.34deg] font-bonheur text-[113.23px] leading-[141.54px] tracking-[-0.02em] text-white"
          >
            Junior
          </motion.span>

          <h1>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute left-97.75 top-64.75 block h-57 w-164.5 text-center font-anton text-[187.76px] font-normal uppercase leading-57 tracking-[-0.02em] text-gold-100"
            >
              Frontend
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-98.25 top-113 block h-51.25 w-163.5 text-center font-anton text-[168.82px] font-normal uppercase leading-51.25 tracking-[-0.02em] text-gold-100 [-webkit-text-stroke:1px_#F3B64C]"
            >
              Developer
            </motion.span>
          </h1>
        </div >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute left-155.75 top-56.75 flex items-center gap-1.5 rounded-full bg-brand-400 px-4 py-1"
        >
          <span className="size-4 rounded-full bg-[#E26190]" />
          <span className="font-sans text-base font-semibold leading-7.5 text-white">
            Available for Hire
          </span>
        </motion.div>
        <Image 
          src="/images/lewi.png"
          alt="Lewi Maropo"
          width={610}
          height={735}
          priority
          className="absolute left-103.75 top-72.25"
        />
      </div>
    </section>  
  )
}