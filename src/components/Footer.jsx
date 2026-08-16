import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const linkedinUrl =
    'https://www.linkedin.com/in/esa-akbar-febrian-124194395/';

  const email = 'eaaakbarfebrian14@gmail.com';

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-[#060913]">

      {/* Top Accent */}
      <div className="relative h-px w-full overflow-hidden bg-white/[0.03]">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            inset-y-0
            left-0
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-blue-400/50
            to-transparent
          "
        />
      </div>

      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[250px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Tech Credit */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-mutedText/40">
            <Code2
              size={13}
              className="text-blue-400/60"
            />

            <span>React.js</span>

            <span className="text-white/10">/</span>

            <span>Framer Motion</span>

            <span className="text-white/10">/</span>

            <span>Tailwind CSS</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2">

            {/* LinkedIn */}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex
                h-10
                items-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-3.5
                text-mutedText
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-blue-400/[0.08]
                hover:text-blue-300
              "
            >
              <FaLinkedin size={15} />

              <span className="text-xs">
                LinkedIn
              </span>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex
                h-10
                items-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-3.5
                text-mutedText
                transition-all
                duration-300
                hover:border-yellow-400/30
                hover:bg-yellow-400/[0.08]
                hover:text-yellow-300
              "
            >
              <Mail size={15} />

              <span className="text-xs">
                Email
              </span>
            </motion.a>

            {/* Back To Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-mutedText
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-blue-400/[0.08]
                hover:text-blue-300
              "
              aria-label="Back to top"
            >
              <ArrowUp
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </motion.button>

          </div>
        </div>

        {/* Separator */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Copyright */}
        <div className="flex items-center justify-center">
          <span className="font-mono text-[10px] text-mutedText/30">
            © 2026 · All rights reserved.
          </span>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="h-px w-full bg-white/[0.03]" />

    </footer>
  );
}