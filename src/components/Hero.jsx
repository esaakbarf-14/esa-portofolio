import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Download,
  ArrowRight,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import BorderGlow from "./BorderGlow";

export default function Hero() {
  const roles = personalInfo.roles || [
    "Web Developer",
    "Mahasiswa Teknik Informatika",
    "Staf Administrasi & IT Sekolah",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(
          currentRole.substring(0, displayedText.length + 1)
        );
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(
          currentRole.substring(0, displayedText.length - 1)
        );
      } else if (
        !isDeleting &&
        displayedText.length === currentRole.length
      ) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden z-10"
    >
      {/* ========================================= */}
      {/* BACKGROUND AMBIENT GLOW */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-accentBlue/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

          {/* ========================================= */}
          {/* LEFT — INTRO CONTENT */}
          {/* ========================================= */}

          <div className="w-full lg:w-7/12 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* ========================================= */}
            {/* BADGE */}
            {/* ========================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0f1d] border border-accentBlue/30 font-mono text-xs text-accentYellow"
            >
              <Terminal
                size={14}
                className="text-accentBlue"
              />

              <span>HALO, SAYA</span>
            </motion.div>

            {/* ========================================= */}
            {/* NAME */}
            {/* ========================================= */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-lightText text-center lg:text-left"
            >
              ESA AKBAR
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-blue-400 to-accentYellow drop-shadow-sm">
                FEBRIAN
              </span>
            </motion.h1>

            {/* ========================================= */}
            {/* FOTO PROFIL MOBILE */}
            {/* ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="block lg:hidden my-3 w-full flex justify-center"
            >
              <div className="w-full max-w-[260px] sm:max-w-[290px]">
                <BorderGlow
                  backgroundColor="#0a0f1d"
                  borderRadius={20}
                  glowRadius={40}
                  glowIntensity={1}
                  colors={[
                    "#3b82f6",
                    "#60a5fa",
                    "#eab308",
                  ]}
                >
                  <div className="p-3">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-darkBg">

                      <img
                        src={
                          personalInfo.avatar ||
                          "/profile.jpg"
                        }
                        alt={personalInfo.name}
                        loading="eager"
                        className="h-full w-full object-cover object-top"
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </motion.div>

            {/* ========================================= */}
            {/* TYPING ROLES */}
            {/* ========================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="min-h-[32px] flex items-center justify-center lg:justify-start font-mono text-base sm:text-xl text-accentYellow pt-1"
            >
              <span className="text-mutedText mr-2">
                &gt;
              </span>

              <span>{displayedText}</span>

              <span className="ml-1 text-accentBlue animate-pulse">
                |
              </span>
            </motion.div>

            {/* ========================================= */}
            {/* BIO */}
            {/* ========================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="max-w-2xl text-sm sm:text-base lg:text-[17px] leading-relaxed text-mutedText text-justify sm:text-center lg:text-left"
            >
              {personalInfo.bio}
            </motion.p>

            {/* ========================================= */}
            {/* ACTION BUTTONS */}
            {/* ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 w-full"
            >

              {/* PROJECT BUTTON */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accentBlue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accentBlue/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-accentBlue/30"
              >
                <span>Lihat Project</span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              {/* CV BUTTON */}
              <a
                href={
                  personalInfo.cvUrl ||
                  "/documents/CV=ESA-AKBAR-FEBRIAN.pdf"
                }
                download="CV_Esa_Akbar_Febrian.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0f1d] px-6 py-3.5 text-sm font-semibold text-lightText transition-all duration-200 hover:border-accentBlue/40 hover:text-accentBlue hover:scale-[1.02]"
              >
                <Download size={16} />

                <span>Download CV</span>
              </a>
            </motion.div>

            {/* ========================================= */}
            {/* SOCIAL LINKS */}
            {/* ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
            >

              {/* ======================================= */}
              {/* GITHUB */}
              {/* ======================================= */}

              <a
                href="https://github.com/esaakbarf-14"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Esa Akbar"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#0a0f1d] px-4 py-2.5 font-mono text-xs font-medium text-mutedText transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-lightText"
              >

                {/* GitHub SVG */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[17px] w-[17px] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.24c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>

                <span>GitHub</span>

                <ArrowRight
                  size={12}
                  className="opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              {/* ======================================= */}
              {/* LINKEDIN */}
              {/* ======================================= */}

              <a
                href="https://www.linkedin.com/in/esa-akbar-febrian-124194395/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Esa Akbar"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#0a0f1d] px-4 py-2.5 font-mono text-xs font-medium text-mutedText transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-lightText"
              >

                {/* LinkedIn SVG */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[17px] w-[17px] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>

                <span>LinkedIn</span>

                <ArrowRight
                  size={12}
                  className="opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </motion.div>
          </div>

          {/* ========================================= */}
          {/* RIGHT — PROFILE CARD DESKTOP */}
          {/* ========================================= */}

          <div className="hidden lg:flex lg:w-5/12 justify-end">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="w-full max-w-[340px]"
            >
              <BorderGlow
                backgroundColor="#0a0f1d"
                borderRadius={24}
                glowRadius={50}
                glowIntensity={1}
                colors={[
                  "#3b82f6",
                  "#60a5fa",
                  "#eab308",
                ]}
              >
                <div className="p-4 sm:p-5">

                  {/* Profile Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-darkBg">

                    <img
                      src={
                        personalInfo.avatar ||
                        "/profile.jpg"
                      }
                      alt={personalInfo.name}
                      loading="eager"
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Profile Info */}
                  <div className="relative mt-4 text-center">

                    <h2 className="font-heading text-xl font-bold tracking-tight text-lightText">
                      {personalInfo.name}
                    </h2>

                    <div className="mt-2 flex items-center justify-center gap-2">

                      <span className="h-px w-5 bg-accentBlue/40" />

                      <span className="font-mono text-xs font-semibold tracking-wider text-accentYellow uppercase">
                        Web Developer
                      </span>

                      <span className="h-px w-5 bg-accentBlue/40" />

                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
