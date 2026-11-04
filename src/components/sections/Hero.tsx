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
  { src: "/images/icon-js.svg", alt: "JavaScript" },
  { src: "/images/icon-css.svg", alt: "CSS" },
  { src: "/images/icon-html.svg", alt: "HTML" },
  { src: "/images/icon-react.svg", alt: "React" },
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
          <Image key={icon.alt} src={icon.src} alt={icon.alt} width={40} height={40} />
        ))}
      </motion.div>
      
    </section>
  )
}