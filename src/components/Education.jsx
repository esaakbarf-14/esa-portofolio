import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  ArrowUpRight,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { education } from "../data/portfolio";

/* =========================================================
   EDUCATION CARD
========================================================= */

function EducationCard({ edu, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative"
    >

      {/* =================================================
          TIMELINE CONNECTOR
      ================================================= */}

      {index !== education.length - 1 && (
        <div
          className="
            absolute
            left-[27px]
            top-[76px]
            hidden
            h-[calc(100%+24px)]
            w-px
            bg-gradient-to-b
            from-accentBlue/40
            via-accentBlue/10
            to-transparent
            transition-all
            duration-500
            md:block
          "
        />
      )}

      {/* =================================================
          TIMELINE NODE
      ================================================= */}

      <div
        className="
          absolute
          left-[17px]
          top-8
          z-20
          hidden
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border
          border-accentBlue/50
          bg-[#060913]
          shadow-[0_0_18px_rgba(59,130,246,0.35)]
          transition-all
          duration-300
          group-hover:border-accentBlue
          group-hover:shadow-[0_0_22px_rgba(59,130,246,0.65)]
          md:flex
        "
      >
        <div
          className="
            h-2
            w-2
            rounded-full
            bg-accentBlue
            shadow-[0_0_10px_rgba(59,130,246,0.9)]
            transition-all
            duration-300
            group-hover:scale-150
            group-hover:shadow-[0_0_14px_rgba(59,130,246,1)]
          "
        />
      </div>

      {/* =================================================
          CARD
      ================================================= */}

      <div
        className="
          relative
          ml-0
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#0a0f1d]/90
          backdrop-blur-sm
          transition-all
          duration-300

          md:ml-14

          group-hover:-translate-y-1
          group-hover:border-accentBlue/30
          group-hover:bg-[#0b1120]
          group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        "
      >

        {/* =================================================
            BACKGROUND BLUE GLOW
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

        {/* Stronger secondary glow */}

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

        <div className="relative p-6 sm:p-8">

          {/* =================================================
              TOP
          ================================================= */}

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-4">

              {/* =================================================
                  ICON
              ================================================= */}

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
                  border-accentBlue/25
                  bg-accentBlue/[0.08]
                  text-accentBlue
                  shadow-[0_0_25px_rgba(59,130,246,0.08)]
                  transition-all
                  duration-300

                  group-hover:border-accentBlue/50
                  group-hover:bg-accentBlue/15
                  group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                "
              >
                <GraduationCap
                  size={22}
                  strokeWidth={1.8}
                />

                {/* Blue indicator */}

                <div
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2
                    w-2
                    rounded-full
                    bg-accentBlue
                    shadow-[0_0_10px_rgba(59,130,246,0.9)]
                    transition-all
                    duration-300
                    group-hover:scale-125
                    group-hover:shadow-[0_0_14px_rgba(59,130,246,1)]
                  "
                />
              </div>

              {/* =================================================
                  META
              ================================================= */}

              <div>

                <div className="flex items-center gap-2">

                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-accentBlue
                    "
                  >
                    Academic
                  </span>

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-white/20
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-mutedText/50
                      transition-colors
                      duration-300
                      group-hover:text-accentBlue/40
                    "
                  >
                    0{index + 1}
                  </span>

                </div>

                <div className="mt-1.5 flex items-center gap-2">

                  <CalendarDays
                    size={13}
                    className="
                      text-accentYellow
                      transition-all
                      duration-300
                      group-hover:drop-shadow-[0_0_6px_rgba(234,179,8,0.5)]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-xs
                      font-medium
                      text-lightText/70
                    "
                  >
                    {edu.period}
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                ARROW
            ================================================= */}

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.02]
                text-white/20
                transition-all
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:border-accentBlue/30
                group-hover:bg-accentBlue/10
                group-hover:text-accentBlue
                group-hover:shadow-[0_0_16px_rgba(59,130,246,0.12)]
              "
            >
              <ArrowUpRight size={17} />
            </div>

          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-7 flex items-center gap-3">

            <div
              className="
                h-px
                flex-1
                bg-white/[0.06]
                transition-colors
                duration-300
                group-hover:bg-accentBlue/20
              "
            />

            <Sparkles
              size={12}
              className="
                text-accentBlue/40
                transition-all
                duration-300
                group-hover:text-accentBlue
                group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]
              "
            />

            <div
              className="
                h-px
                w-16
                bg-gradient-to-r
                from-accentBlue/20
                to-transparent
                transition-all
                duration-300
                group-hover:from-accentBlue/50
              "
            />

          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div>

            {/* School */}

            <h3
              className="
                max-w-3xl
                font-heading
                text-2xl
                font-black
                tracking-tight
                text-lightText
                transition-colors
                duration-300
                group-hover:text-accentBlue
                sm:text-3xl
              "
            >
              {edu.school}
              <span className="text-accentBlue">.</span>
            </h3>

            {/* Degree badge */}

            <div
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-accentYellow/20
                bg-accentYellow/[0.06]
                px-3
                py-1.5
                transition-all
                duration-300
                group-hover:border-accentYellow/30
                group-hover:bg-accentYellow/[0.08]
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-accentYellow
                  shadow-[0_0_7px_rgba(234,179,8,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-xs
                  font-semibold
                  text-accentYellow
                "
              >
                {edu.degree}
              </span>

            </div>

            {/* Description */}

            {edu.description && (
              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-7
                  text-mutedText
                  transition-colors
                  duration-300
                  group-hover:text-mutedText/90
                  sm:text-[15px]
                "
              >
                {edu.description}
              </p>
            )}

          </div>

          {/* =================================================
              BOTTOM
          ================================================= */}

          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.06]
              pt-5
              transition-colors
              duration-300
              group-hover:border-accentBlue/10
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Location */}

            {edu.location ? (

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-mutedText/60
                "
              >

                <MapPin
                  size={13}
                  className="
                    text-accentBlue/70
                    transition-all
                    duration-300
                    group-hover:text-accentBlue
                    group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]
                  "
                />

                <span>{edu.location}</span>

              </div>

            ) : (

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-mutedText/50
                "
              >

                <CheckCircle2
                  size={13}
                  className="
                    text-accentBlue/70
                    transition-all
                    duration-300
                    group-hover:text-accentBlue
                  "
                />

                <span>Academic Background</span>

              </div>

            )}

            {/* Status */}

            <div className="flex items-center gap-2">

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-accentBlue
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-accentBlue
                    shadow-[0_0_8px_rgba(59,130,246,0.8)]
                  "
                />

              </span>

              <span
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-accentBlue/70
                  transition-colors
                  duration-300
                  group-hover:text-accentBlue
                "
              >
                Education
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

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        z-10
        overflow-hidden
        py-24
        sm:py-32
      "
    >

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            HEADER
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
            duration: 0.5,
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
                bg-accentBlue/10
                text-accentBlue
                transition-all
                duration-300
                hover:border-accentBlue/40
                hover:bg-accentBlue/15
                hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]
              "
            >
              <GraduationCap
                size={20}
                strokeWidth={1.8}
              />
            </div>

            <span
              className="
                font-mono
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-accentBlue
              "
            >
              01 — Education
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
            Pendidikan
            <span className="text-accentBlue">.</span>
          </h2>

          <div className="mt-5 flex items-center gap-3">

            <div
              className="
                h-[2px]
                w-16
                bg-accentBlue
                shadow-[0_0_8px_rgba(59,130,246,0.35)]
              "
            />

            <div
              className="
                h-px
                w-24
                bg-accentBlue/20
              "
            />

          </div>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-mutedText
              sm:text-base
            "
          >
            Perjalanan akademik yang membentuk fondasi pengetahuan,
            keterampilan, dan ketertarikan saya dalam bidang teknologi
            informasi.
          </p>

        </motion.div>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative">

          {education?.map((edu, index) => (
            <div
              key={edu.id || index}
              className={index !== 0 ? "mt-6" : ""}
            >
              <EducationCard
                edu={edu}
                index={index}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}