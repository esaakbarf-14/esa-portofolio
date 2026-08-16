import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import { experiences } from "../data/portfolio";

/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({ exp, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group relative md:pl-10"
    >
      {/* =================================================
          TIMELINE NODE
      ================================================= */}

      <div
        className="
          absolute
          left-[7px]
          top-8
          z-20
          hidden
          h-[15px]
          w-[15px]
          items-center
          justify-center
          rounded-full
          border
          border-accentBlue/40
          bg-[#060913]
          md:flex
          transition-all
          duration-300
          group-hover:border-accentBlue
          group-hover:shadow-[0_0_14px_rgba(59,130,246,0.45)]
        "
      >
        <div
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-accentBlue
            transition-all
            duration-300
            group-hover:scale-[1.7]
            group-hover:shadow-[0_0_10px_rgba(59,130,246,0.9)]
          "
        />
      </div>

      {/* =================================================
          CARD
      ================================================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.07]
          bg-[#0a0f1d]/50
          backdrop-blur-sm
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-accentBlue/30
          group-hover:bg-[#0c1220]/70
          group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
        "
      >

        {/* =================================================
            SUBTLE BACKGROUND GLOW
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
            SECONDARY SOFT GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-64
            w-64
            rounded-full
            bg-accentBlue/[0.035]
            blur-3xl
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* =================================================
            TOP ACCENT LINE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
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

        <div className="relative p-5 sm:p-6">

          {/* =================================================
              TOP
          ================================================= */}

          <div className="flex items-start justify-between gap-5">

            <div className="flex min-w-0 items-start gap-4">

              {/* Number */}

              <div className="hidden shrink-0 pt-1 sm:block">

                <span
                  className="
                    font-mono
                    text-3xl
                    font-bold
                    leading-none
                    tracking-tight
                    text-white/[0.07]
                    transition-all
                    duration-300
                    group-hover:text-accentBlue/20
                    group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.25)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Main Info */}

              <div className="min-w-0">

                <h3
                  className="
                    font-heading
                    text-lg
                    font-bold
                    leading-tight
                    tracking-tight
                    text-lightText
                    transition-colors
                    duration-300
                    group-hover:text-accentBlue
                    sm:text-xl
                  "
                >
                  {exp.role}
                </h3>

                {exp.company && (
                  <div className="mt-2 flex items-center gap-2">

                    <Building2
                      size={13}
                      className="
                        shrink-0
                        text-accentYellow/80
                        transition-all
                        duration-300
                        group-hover:text-accentYellow
                      "
                    />

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-accentYellow/90
                      "
                    >
                      {exp.company}
                    </p>

                  </div>
                )}

              </div>

            </div>

            {/* Arrow */}

            <ArrowUpRight
              size={18}
              className="
                shrink-0
                text-white/15
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-accentBlue
                group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]
              "
            />

          </div>

          {/* =================================================
              PERIOD
          ================================================= */}

          <div className="mt-5">

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-accentBlue/15
                bg-accentBlue/[0.05]
                px-3
                py-1.5
                font-mono
                text-[10px]
                font-semibold
                tracking-wide
                text-accentBlue/90
                transition-all
                duration-300
                group-hover:border-accentBlue/30
                group-hover:bg-accentBlue/[0.08]
                group-hover:shadow-[0_0_14px_rgba(59,130,246,0.08)]
              "
            >
              <CalendarDays size={12} />
              {exp.period}
            </span>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div className="mt-5 max-w-4xl">

            <p
              className="
                text-sm
                leading-7
                text-mutedText
                transition-colors
                duration-300
                group-hover:text-mutedText/90
                sm:text-[15px]
              "
            >
              {exp.description}
            </p>

          </div>

          {/* =================================================
              HIGHLIGHTS
          ================================================= */}

          {exp.highlights?.length > 0 && (
            <div className="mt-6">

              {/* Heading */}

              <div className="mb-4 flex items-center gap-3">

                <span
                  className="
                    shrink-0
                    font-mono
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Kontribusi
                </span>

                <div className="h-px flex-1 bg-white/[0.06]" />

              </div>

              {/* Items */}

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                {exp.highlights.map((item, highlightIndex) => (

                  <div
                    key={highlightIndex}
                    className="
                      group/item
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-white/[0.045]
                      bg-white/[0.015]
                      px-3.5
                      py-3
                      transition-all
                      duration-200

                      hover:border-accentBlue/30
                      hover:bg-accentBlue/[0.035]
                      hover:shadow-[0_0_18px_rgba(59,130,246,0.06)]
                    "
                  >

                    <div
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-accentBlue/10
                        bg-accentBlue/[0.08]
                        transition-all
                        duration-200
                        group-hover/item:border-accentBlue/25
                        group-hover/item:bg-accentBlue/[0.12]
                      "
                    >

                      <CheckCircle2
                        size={12}
                        className="
                          text-accentBlue/80
                          transition-all
                          duration-200
                          group-hover/item:text-accentBlue
                        "
                      />

                    </div>

                    <span
                      className="
                        text-xs
                        leading-5
                        text-lightText/65
                        transition-colors
                        duration-200
                        group-hover/item:text-lightText/80
                        sm:text-[13px]
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          )}

          {/* =================================================
              BOTTOM
          ================================================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-white/[0.05]
              pt-4
            "
          >

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/20
                transition-colors
                duration-300
                group-hover:text-accentBlue/40
              "
            >
              Professional Experience
            </span>

            <div className="flex items-center gap-2">

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-accentBlue/50
                  transition-all
                  duration-300
                  group-hover:scale-150
                  group-hover:bg-accentBlue
                  group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  text-white/20
                  transition-colors
                  duration-300
                  group-hover:text-accentBlue/50
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM GLOW LINE
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

export default function Experience() {
  return (
    <section
      id="experience"
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
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="mb-10 sm:mb-12"
        >

          {/* Label */}

          <div className="mb-5 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-accentBlue/20
                bg-accentBlue/[0.06]
                text-accentBlue
              "
            >
              <Briefcase size={19} />
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
              04 — Experience
            </span>

          </div>

          {/* Title */}

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
            Pengalaman Kerja
            <span className="text-accentBlue">.</span>
          </h2>

          {/* Accent Line */}

          <div
            className="
              mt-5
              h-px
              w-20
              bg-accentBlue/50
            "
          />

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-mutedText
              sm:text-base
            "
          >
            Ringkasan peran profesional dalam menangani alur data,
            membangun aplikasi web, dan mengembangkan solusi digital
            untuk mendukung kebutuhan operasional.
          </p>

        </motion.div>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative">

          {/* Timeline Line */}

          <div
            className="
              absolute
              bottom-0
              left-[14px]
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-accentBlue/40
              via-white/[0.08]
              to-transparent
              md:block
            "
          />

          {/* Experience Cards */}

          <div className="space-y-5">

            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id || index}
                exp={exp}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}