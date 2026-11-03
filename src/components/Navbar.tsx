"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto hidden w-fit items-center gap-2 rounded-full bg-neutral-950/40 px-4 py-3 backdrop-blur-md md:flex"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>

      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md"
            >
              <span className="text-lg font-bold text-white">Lewi</span>
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="text-white"
              >
                <Menu size={24} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-2xl bg-brand-400/60 p-4 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-bold text-white">Lewi</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}