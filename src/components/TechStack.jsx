import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe2,
  Database,
  Workflow,
  Sparkles,
  Cpu,
  FileSpreadsheet,
} from "lucide-react";

import {
  FaPhp,
  FaJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiGoogleappsscript,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

import { techStack } from "../data/portfolio";

/* =========================================================
   CATEGORY ICON
========================================================= */

const categoryIcons = {
  Pemrograman: Code2,
  "Pengembangan Web": Globe2,
  "Basis Data": Database,
  "Data & Otomasi": Workflow,
};

/* =========================================================
   TECHNOLOGY ICON
========================================================= */

const techIcons = {
  php: FaPhp,
  "php native": FaPhp,
  javascript: FaJs,
  python: FaPython,
  vba: FileSpreadsheet,
  "excel vba": FileSpreadsheet,

  html: FaHtml5,
  css: FaCss3Alt,
  "html & css": FaHtml5,
  react: FaReact,
  laravel: SiLaravel,
  bootstrap: SiBootstrap,
  "tailwind css": SiTailwindcss,

  mysql: SiMysql,
  postgresql: SiPostgresql,
  "microsoft excel": FileSpreadsheet,
  excel: FileSpreadsheet,
  "google apps script": SiGoogleappsscript,

  git: FaGitAlt,
  nodejs: FaNodeJs,
  firebase: SiFirebase,
};

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ group, index }) {
  const CategoryIcon = categoryIcons[group.category] || Code2;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 18,
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
        duration: 0.35,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group relative h-full"
    >
      <div
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#080c15]/90
          backdrop-blur-sm
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-accentBlue/30
          hover:bg-[#0a101c]
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
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
            TOP ACCENT
        ================================================= */}

        <div
          className="
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

        <div className="relative flex flex-1 flex-col p-6 sm:p-7">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-4">

              {/* Category Icon */}

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
                <CategoryIcon size={21} />

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
                  Technical Skill
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
                  {group.category}
                </h3>

              </div>

            </div>

            {/* Number */}

            <span
              className="
                font-mono
                text-3xl
                font-bold
                leading-none
                text-white/[0.045]
                transition-colors
                duration-300
                group-hover:text-accentBlue/[0.15]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-6 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/[0.06]" />

            <div className="h-1 w-1 rounded-full bg-accentBlue/40" />

            <div className="h-px w-10 bg-accentBlue/20" />

          </div>

          {/* =================================================
              SKILLS
          ================================================= */}

          <div className="flex flex-wrap gap-2">

            {group.skills.map((skill, skillIndex) => {

              const skillName =
                typeof skill === "object"
                  ? skill.name
                  : skill;

              const skillDesc =
                typeof skill === "object"
                  ? skill.desc
                  : skill;

              const normalizedKey =
                skillName.toLowerCase().trim();

              const TechIcon =
                techIcons[normalizedKey] || null;

              return (
                <motion.span
                  key={skillIndex}
                  title={skillDesc}
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="
                    inline-flex
                    cursor-default
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-3
                    py-2
                    font-mono
                    text-[11px]
                    font-medium
                    text-lightText/75
                    transition-all
                    duration-200

                    hover:border-accentBlue/30
                    hover:bg-accentBlue/[0.07]
                    hover:text-lightText
                  "
                >

                  {TechIcon && (
                    <TechIcon
                      className="
                        shrink-0
                        text-sm
                        text-accentBlue/80
                        transition-colors
                        duration-200
                        group-hover:text-accentBlue
                      "
                    />
                  )}

                  <span>
                    {skillName}
                  </span>

                </motion.span>
              );
            })}

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div className="mt-auto pt-7">

            <div
              className="
                flex
                items-start
                gap-3
                border-t
                border-white/[0.06]
                pt-5
              "
            >

              <div
                className="
                  mt-0.5
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-accentYellow/20
                  bg-accentYellow/[0.06]
                  text-accentYellow
                "
              >
                <Sparkles size={12} />
              </div>

              <p
                className="
                  text-[11px]
                  leading-5
                  text-mutedText/70
                "
              >
                {group.skills[0]?.desc ||
                  "Keahlian teknis dan penguasaan tools."}
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM GLOW LINE
        ================================================= */}

        <div
          className="
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

export default function Skill() {

  const skills = techStack
    ? techStack.slice(0, 4)
    : [];

  return (
    <section
      id="skills"
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
            y: 18,
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
              <Cpu size={19} />
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
              03 — Technical Skills
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
            Keahlian Teknis
            <span className="text-accentBlue">.</span>
          </h2>

          <div
            className="
              mt-5
              h-px
              w-20
              bg-accentBlue/50
            "
          />

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
            Teknologi dan tools yang saya gunakan untuk
            membangun aplikasi web, mengelola data,
            serta mengembangkan solusi otomatisasi.
          </p>

        </motion.div>

        {/* =================================================
            SKILL GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
          "
        >

          {skills.map((group, index) => (
            <SkillCard
              key={group.category || index}
              group={group}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}