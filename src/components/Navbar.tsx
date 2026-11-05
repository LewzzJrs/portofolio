"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "cn";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const focusable =
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0].href);
  const restoreFocus = useRef(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.1, 0.5, 0.9], rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      restoreFocus.current = true;
      setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    restoreFocus.current = true;
    setOpen(false);
  }

  return (
    <MotionConfig reducedMotion="user">
      <header className="fixed inset-x-0 top-8 z-50 px-4">
        <motion.nav
          aria-label="Main"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto hidden h-12 w-fit items-center gap-6 rounded-full bg-black/20 px-6 backdrop-blur-2xl md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "page" : undefined}
              className={cn(
                "rounded-full p-2 text-base leading-7.5 font-medium tracking-[-0.03em] transition-colors hover:text-gold-100",
                focusable,
                active === link.href ? "text-gold-100" : "text-white"
              )}
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
                  ref={(node) => {
                    if (node && restoreFocus.current) {
                      node.focus();
                      restoreFocus.current = false;
                    }
                  }}
                  type="button"
                  aria-label="Open menu"
                  aria-expanded={false}
                  onClick={() => setOpen(true)}
                  className={cn("-m-2.5 rounded-lg p-2.5 text-white", focusable)}
                >
                  <Menu size={24} />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                id="mobile-menu"
                ref={(node) => {
                  node?.focus();
                }}
                tabIndex={-1}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl bg-brand-400/60 p-4 outline-none backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-white">Lewi</span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    aria-expanded={true}
                    aria-controls="mobile-menu"
                    onClick={closeMenu}
                    className={cn("-m-2.5 rounded-lg p-2.5 text-white", focusable)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav aria-label="Main">
                  <ul className="flex flex-col gap-1">
                    {links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={closeMenu}
                          aria-current={active === link.href ? "page" : undefined}
                          className={cn(
                            "block rounded-lg py-2.5 text-base font-medium transition-colors",
                            focusable,
                            active === link.href ? "text-gold-100" : "text-white"
                          )}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </MotionConfig>
  );
}
