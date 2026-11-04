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
      
    </section>
  )
}