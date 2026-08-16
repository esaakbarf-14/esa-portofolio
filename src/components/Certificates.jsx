import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const certificates = [
  {
    title: "Intro to Software Engineering",
    issuer: "RevoU",
    category: "Software Engineering",
  },
  {
    title: "Excel Untuk Karier",
    issuer: "Jobstreet",
    category: "Data Analysis",
  },
  {
    title: "Database Foundations",
    issuer: "Oracle Academy",
    category: "Database",
  },
  {
    title: "Database Design",
    issuer: "Oracle Academy",
    category: "Database",
  },
];

/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertificateCard({ cert, index }) {
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
      {/* =================================================
          SUBTLE BLUE BACKGROUND GLOW
          Sama seperti SkillCard
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
          CARD
      ================================================= */}

      <div
        className="
          relative
          flex
          h-full
          min-h-[285px]
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
        "
      >
        {/* =================================================
            TOP ACCENT
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

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="relative flex items-start justify-between gap-4">
          {/* Certificate Icon */}

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
            <Award
              size={22}
              strokeWidth={1.7}
            />

            {/* Small active indicator */}

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
            CATEGORY
        ================================================= */}

        <div className="relative">
          <span
            className="
              inline-flex
              items-center
              rounded-lg
              border
              border-accentBlue/20
              bg-accentBlue/[0.06]
              px-2.5
              py-1.5
              font-mono
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-accentBlue
              transition-all
              duration-300

              group-hover:border-accentBlue/30
              group-hover:bg-accentBlue/[0.08]
            "
          >
            {cert.category}
          </span>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative mt-4">
          <h3
            className="
              font-heading
              text-lg
              font-bold
              leading-snug
              tracking-tight
              text-lightText
              transition-colors
              duration-300
              group-hover:text-accentBlue
            "
          >
            {cert.title}
          </h3>

          <p className="mt-2 text-sm text-mutedText/80">
            {cert.issuer}
          </p>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="relative mt-auto pt-6">
          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-white/[0.06]
              pt-4
            "
          >
            {/* Verified */}

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={14}
                className="
                  text-accentBlue/80
                  transition-colors
                  duration-300
                  group-hover:text-accentBlue
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-accentBlue/60
                  transition-colors
                  duration-300
                  group-hover:text-accentBlue
                "
              >
                Verified
              </span>
            </div>

            {/* External Link */}

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.07]
                bg-white/[0.02]
                text-white/30
                transition-all
                duration-300

                group-hover:border-accentBlue/30
                group-hover:bg-accentBlue/10
                group-hover:text-accentBlue
                group-hover:shadow-[0_0_15px_rgba(59,130,246,0.12)]
              "
            >
              <ExternalLink size={14} />
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

export default function Certificates() {
  return (
    <section
      id="certificates"
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
              <Award size={19} />
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
              06 — Credentials
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
            Sertifikat
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
            Sertifikasi dan pelatihan yang mendukung kompetensi
            saya dalam software engineering, pengolahan data,
            dan pengelolaan basis data.
          </p>
        </motion.div>

        {/* =================================================
            CERTIFICATE GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {certificates.map((cert, index) => (
            <CertificateCard
              key={`${cert.title}-${index}`}
              cert={cert}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            FOOT NOTE
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
            delay: 0.3,
          }}
          className="mt-8 flex items-center gap-3"
        >
          <CheckCircle2
            size={14}
            className="
              text-accentBlue/70
              transition-colors
              duration-300
            "
          />

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-mutedText/30
            "
          >
            Continuous learning & professional development
          </span>

          <div className="h-px flex-1 bg-white/[0.05]" />
        </motion.div>
      </div>
    </section>
  );
}