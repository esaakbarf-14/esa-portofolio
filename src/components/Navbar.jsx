import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Terminal as TerminalIcon,
  ChevronRight,
  Circle,
} from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Pendidikan", href: "#education" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Keahlian", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Sertifikat", href: "#certificates" },
  { name: "Bahasa", href: "#language" },
  { name: "Terminal", href: "#terminal" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    const offset = 90;

    window.scrollTo({
      top:
        target.getBoundingClientRect().top +
        window.scrollY -
        offset,
      behavior: "smooth",
    });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
      <div
        className={`
          pointer-events-auto mx-auto w-full px-4
          transition-all duration-300
          sm:px-6 lg:px-8
          ${scrolled ? "pt-3" : "pt-5"}
        `}
      >
        {/* NAVBAR */}
        <div
          className={`
            relative mx-auto flex items-center justify-between
            transition-all duration-300
            ${
              scrolled
                ? `
                  max-w-6xl
                  rounded-2xl
                  border border-white/[0.08]
                  bg-[#070b14]/90
                  px-4 py-2
                  shadow-lg
                  backdrop-blur-xl
                `
                : `
                  max-w-7xl
                  px-1 py-2
                `
            }
          `}
        >
          {/* TOP LINE */}
          {scrolled && (
            <div className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-accentBlue/40 to-transparent" />
          )}

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group relative z-10 flex shrink-0 items-center gap-3"
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                border border-accentBlue/25
                bg-accentBlue/[0.07]
                text-accentBlue
                transition-colors duration-200
                group-hover:border-accentBlue/50
                group-hover:bg-accentBlue/[0.12]
              "
            >
              <TerminalIcon size={17} strokeWidth={1.8} />
            </div>

            <div className="flex items-center">
              <span
                className="
                  font-heading text-base font-black
                  tracking-[0.2em]
                  text-lightText
                  transition-colors duration-200
                  group-hover:text-accentBlue
                  sm:text-lg
                "
              >
                ESA
              </span>

              <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-accentBlue" />
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="relative z-10 hidden md:block">
            <div
              className="
                flex items-center gap-0.5
                rounded-xl
                border border-white/[0.06]
                bg-white/[0.02]
                p-1
              "
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`
                      relative rounded-lg
                      px-3 py-1.5
                      font-mono text-[10px]
                      font-semibold tracking-wide
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-accentBlue"
                          : "text-mutedText hover:text-lightText"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        transition={{
                          duration: 0.15,
                        }}
                        className="
                          absolute inset-0
                          -z-10
                          rounded-lg
                          border border-accentBlue/15
                          bg-accentBlue/[0.08]
                        "
                      />
                    )}

                    {link.name}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              relative z-20 flex h-9 w-9
              items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/[0.04]
              text-mutedText
              transition-colors duration-200
              hover:border-accentBlue/30
              hover:text-accentBlue
              md:hidden
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.12 }}
              className="
                pointer-events-auto
                mx-auto mt-2 w-full max-w-6xl
                rounded-2xl
                border border-white/10
                bg-[#070b14]/95
                p-2
                shadow-xl
                backdrop-blur-xl
                md:hidden
              "
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="
                      group flex items-center
                      justify-between
                      rounded-xl
                      px-4 py-2.5
                      transition-colors duration-150
                      hover:bg-white/[0.05]
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Circle
                        size={5}
                        fill="currentColor"
                        className={`
                          transition-colors
                          ${
                            isActive
                              ? "text-accentBlue"
                              : "text-white/20 group-hover:text-accentBlue"
                          }
                        `}
                      />

                      <span
                        className={`
                          font-mono text-xs
                          transition-colors
                          ${
                            isActive
                              ? "text-accentBlue"
                              : "text-mutedText group-hover:text-lightText"
                          }
                        `}
                      >
                        {link.name}
                      </span>
                    </div>

                    <ChevronRight
                      size={14}
                      className="
                        text-mutedText/30
                        transition-all duration-150
                        group-hover:translate-x-1
                        group-hover:text-accentBlue
                        group-hover:opacity-100
                      "
                    />
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}