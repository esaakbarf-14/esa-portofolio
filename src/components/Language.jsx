import React from "react";
import { motion } from "framer-motion";
import { languages } from "../data/portfolio";
import {
  Languages as LangIcon,
  MessageCircle,
} from "lucide-react";

/* =========================================================
   LANGUAGE CARD
========================================================= */

function LanguageCard({ lang, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative h-full"
    >
      {/* =================================================
          CARD
      ================================================= */}

      <div
        className="
          relative
          flex
          h-full
          min-h-[235px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#080c15]/90
          p-6
          backdrop-blur-sm
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-accentBlue/30
          group-hover:bg-[#0a101c]
          group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]

          sm:p-7
        "
      >

        {/* =================================================
            SUBTLE BACKGROUND GLOW
            SAMA SEPERTI SKILL CARD
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-accentBlue/10
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* =================================================
            TOP ACCENT LINE
            BIRU + ANIMASI SAAT HOVER
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-[2px]
            w-0
            bg-gradient-to-r
            from-accentBlue
            via-sky-400
            to-transparent
            transition-all
            duration-500
            group-hover:w-full
          "
        />

        {/* =================================================
            SUBTLE GRID
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative flex flex-1 flex-col">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="relative flex items-start justify-between gap-4">

            <div className="flex items-center gap-4">

              {/* =================================================
                  ICON + GLOW
              ================================================= */}

              <div className="relative">

                {/* Icon Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-accentBlue/20
                    blur-lg
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Icon Box */}

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-accentBlue/20
                    bg-accentBlue/[0.07]
                    text-accentBlue
                    transition-all
                    duration-300

                    group-hover:border-accentBlue/40
                    group-hover:bg-accentBlue/10
                    group-hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]
                  "
                >
                  <LangIcon
                    size={21}
                    strokeWidth={1.7}
                  />

                  {/* Small Blue Indicator */}

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      h-2
                      w-2
                      rounded-full
                      bg-accentBlue
                      opacity-0
                      shadow-[0_0_10px_rgba(59,130,246,0.8)]
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

              </div>

              {/* =================================================
                  LANGUAGE INFO
              ================================================= */}

              <div>

                <p
                  className="
                    mb-1
                    font-mono
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-accentBlue/60
                  "
                >
                  Language
                </p>

                <h3
                  className="
                    font-heading
                    text-lg
                    font-bold
                    tracking-tight
                    text-lightText
                    transition-colors
                    duration-300
                    group-hover:text-accentBlue
                    sm:text-xl
                  "
                >
                  {lang.name}
                </h3>

                <span
                  className="
                    mt-0.5
                    block
                    font-mono
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-accentBlue/80
                  "
                >
                  {lang.level}
                </span>

              </div>

            </div>

            {/* =================================================
                PERCENTAGE
            ================================================= */}

            <div className="flex flex-col items-end">

              <span
                className="
                  font-mono
                  text-lg
                  font-bold
                  text-accentBlue
                  transition-all
                  duration-300
                  group-hover:text-sky-400
                  group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.45)]
                "
              >
                {lang.proficiency}%
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-widest
                  text-mutedText/40
                "
              >
                Proficiency
              </span>

            </div>

          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-6 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/[0.06]" />

            <div
              className="
                h-1
                w-1
                rounded-full
                bg-accentBlue/40
                shadow-[0_0_6px_rgba(59,130,246,0.4)]
              "
            />

            <div className="h-px w-10 bg-accentBlue/20" />

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {lang.description && (
            <p
              className="
                relative
                max-w-xl
                text-xs
                leading-6
                text-mutedText
                sm:text-sm
              "
            >
              {lang.description}
            </p>
          )}

          {/* =================================================
              COMMUNICATION LEVEL
          ================================================= */}

          <div className="relative mt-auto pt-7">

            <div className="mb-2.5 flex items-center justify-between">

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-mutedText/40
                "
              >
                Communication Level
              </span>

              <span
                className="
                  font-mono
                  text-[10px]
                  text-accentBlue/70
                "
              >
                {lang.proficiency}/100
              </span>

            </div>

            {/* =================================================
                PROGRESS TRACK
            ================================================= */}

            <div
              className="
                relative
                h-2
                overflow-hidden
                rounded-full
                border
                border-accentBlue/[0.12]
                bg-white/[0.035]
              "
            >

              {/* =================================================
                  BLUE PROGRESS
              ================================================= */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${lang.proficiency}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08 + 0.15,
                  ease: "easeOut",
                }}
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-accentBlue
                  via-sky-400
                  to-accentBlue
                  shadow-[0_0_10px_rgba(59,130,246,0.35)]
                "
              >

                {/* =================================================
                    BLUE ANIMATED HIGHLIGHT
                    BUKAN PUTIH
                ================================================= */}

                <motion.div
                  animate={{
                    x: ["-100%", "300%"],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-1/3
                    bg-gradient-to-r
                    from-transparent
                    via-sky-300/70
                    to-transparent
                    blur-[1px]
                  "
                />

              </motion.div>

            </div>

          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div
            className="
              relative
              mt-5
              flex
              items-center
              gap-2
              border-t
              border-white/[0.06]
              pt-4
            "
          >

            <MessageCircle
              size={13}
              className="
                text-accentBlue/70
                transition-all
                duration-300
                group-hover:text-accentBlue
                group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]
              "
            />

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-wider
                text-mutedText/50
              "
            >
              Verbal & Written Communication
            </span>

          </div>

        </div>

        {/* =================================================
            BOTTOM GLOW LINE
            SAMA SEPERTI SKILL CARD
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-accentBlue
            opacity-0
            shadow-[0_0_12px_rgba(59,130,246,0.8)]
            transition-all
            duration-500
            group-hover:w-1/2
            group-hover:opacity-100
          "
        />

      </div>

    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Language() {
  return (
    <section
      id="language"
      className="
        relative
        z-10
        overflow-hidden
        py-24
        sm:py-32
      "
    >

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="mb-14 sm:mb-18"
        >

          <div className="mb-5 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-accentBlue/20
                bg-accentBlue/[0.06]
                text-accentBlue
              "
            >
              <LangIcon size={20} />
            </div>

            <span
              className="
                font-mono
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-accentBlue
              "
            >
              07 — Languages
            </span>

          </div>

          <h2
            className="
              font-heading
              text-4xl
              font-black
              tracking-tight
              text-lightText
              sm:text-5xl
              lg:text-6xl
            "
          >
            Bahasa
            <span className="text-accentBlue">.</span>
          </h2>

          <div
            className="
              mt-5
              h-px
              w-24
              bg-gradient-to-r
              from-accentBlue
              to-transparent
            "
          />

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-mutedText
              sm:text-base
            "
          >
            Kemampuan bahasa yang mendukung komunikasi profesional,
            dokumentasi teknis, dan kolaborasi dalam lingkungan kerja.
          </p>

        </motion.div>

        {/* =================================================
            LANGUAGE GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
          "
        >

          {languages.map((lang, index) => (
            <LanguageCard
              key={lang.name || index}
              lang={lang}
              index={index}
            />
          ))}

        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-8 flex items-center gap-3"
        >

          <div className="h-px flex-1 bg-white/[0.05]" />

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-mutedText/30
            "
          >
            Communication & Continuous Learning
          </span>

          <div className="h-px flex-1 bg-white/[0.05]" />

        </motion.div>

      </div>

    </section>
  );
}