import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import {
  ExternalLink,
  Code2,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
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
      className="group relative flex h-full"
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#080c15]/95
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-accentBlue/30
          hover:bg-[#0a101c]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        "
      >

        {/* =================================================
            TOP ACCENT LINE
        ================================================= */}

        <div
          className="
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
            IMAGE
        ================================================= */}

        {project.image ? (
          <div
            className="
              relative
              h-52
              w-full
              overflow-hidden
              border-b
              border-white/[0.07]
              bg-[#060a12]
            "
          >

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#080c15]
                via-[#080c15]/20
                to-transparent
              "
            />

            {/* Hover Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-accentBlue/[0.03]
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Project Number */}

            <div
              className="
                absolute
                left-4
                top-4
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-black/40
                px-2.5
                py-1.5
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-accentBlue
                  shadow-[0_0_8px_rgba(59,130,246,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  tracking-wider
                  text-white/70
                "
              >
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Preview Icon */}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-black/40
                  text-white/60
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300

                  hover:border-accentBlue/40
                  hover:bg-accentBlue/10
                  hover:text-accentBlue

                  group-hover:opacity-100
                "
              >
                <ArrowUpRight size={16} />
              </a>
            )}

          </div>
        ) : (

          /* =================================================
             FALLBACK
          ================================================= */

          <div
            className="
              relative
              flex
              h-52
              w-full
              items-center
              justify-center
              border-b
              border-white/[0.07]
              bg-gradient-to-br
              from-[#0b1220]
              to-[#060a12]
            "
          >
            <Code2
              size={42}
              strokeWidth={1}
              className="text-accentBlue/20"
            />

            <span
              className="
                absolute
                left-4
                top-4
                font-mono
                text-[10px]
                font-semibold
                tracking-wider
                text-white/30
              "
            >
              PROJECT {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="flex flex-1 flex-col p-6">

          {/* Title */}

          <div className="flex items-start justify-between gap-4">

            <h3
              className="
                font-heading
                text-xl
                font-bold
                leading-tight
                tracking-tight
                text-lightText
                transition-colors
                duration-300
                group-hover:text-accentBlue
                sm:text-[21px]
              "
            >
              {project.title}
            </h3>

            <Layers3
              size={17}
              className="
                mt-1
                shrink-0
                text-white/15
                transition-colors
                duration-300
                group-hover:text-accentBlue/60
              "
            />

          </div>

          {/* Description */}

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-mutedText
            "
          >
            {project.description}
          </p>

          {/* =================================================
              TAGS
          ================================================= */}

          {project.tags?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">

              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="
                    rounded-md
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-2.5
                    py-1.5
                    font-mono
                    text-[10px]
                    font-medium
                    text-lightText/60
                    transition-all
                    duration-200

                    group-hover:border-accentBlue/20
                    group-hover:text-lightText/75
                  "
                >
                  {tag}
                </span>
              ))}

            </div>
          )}

          {/* =================================================
              BOTTOM ACTION
          ================================================= */}

          <div className="mt-auto pt-6">

            <div className="mb-4 h-px bg-white/[0.06]" />

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-mono
                  text-xs
                  font-semibold
                  text-accentBlue
                  transition-all
                  duration-200
                  hover:gap-3
                  hover:text-accentBlue/80
                "
              >
                <span>Live Preview</span>

                <ExternalLink size={14} />
              </a>
            ) : (
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-mono
                  text-xs
                  font-medium
                  text-white/25
                "
              >
                <Code2 size={14} />

                Project Showcase
              </span>
            )}

          </div>

        </div>

        {/* =================================================
            BOTTOM GLOW
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

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = showAll
    ? projects
    : projects?.slice(0, 6);

  return (
    <section
      id="projects"
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
              <Code2 size={19} />
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
              05 — Selected Projects
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
            Projects
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
            Kumpulan proyek sistem informasi, otomatisasi
            alur kerja, dan aplikasi web interaktif yang
            merepresentasikan pengalaman dan kemampuan teknis saya.
          </p>

        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {featuredProjects?.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}

        </div>

        {/* =================================================
            SHOW ALL BUTTON
        ================================================= */}

        {projects?.length > 6 && (
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
              duration: 0.4,
            }}
            className="mt-12 flex justify-center"
          >

            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.09]
                bg-[#080c15]
                px-5
                py-3
                font-mono
                text-xs
                font-semibold
                text-lightText/70
                transition-all
                duration-300

                hover:border-accentBlue/30
                hover:bg-accentBlue/[0.05]
                hover:text-accentBlue
              "
            >

              <span>
                {showAll
                  ? "Tampilkan Lebih Sedikit"
                  : "Lihat Semua Proyek"}
              </span>

              <ArrowUpRight
                size={15}
                className={`
                  transition-transform
                  duration-300
                  ${
                    showAll
                      ? "rotate-180"
                      : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }
                `}
              />

            </button>

          </motion.div>
        )}

      </div>

    </section>
  );
}