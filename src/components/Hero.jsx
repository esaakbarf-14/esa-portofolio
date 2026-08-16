import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import BorderGlow from "./BorderGlow"; // Menggunakan komponen BorderGlow manual lokal

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
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden z-10">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-accentBlue/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* LEFT — INTRO CONTENT */}
          <div className="w-full lg:w-7/12 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Badge Halo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0f1d] border border-accentBlue/30 font-mono text-xs text-accentYellow"
            >
              <Terminal size={14} className="text-accentBlue" />
              <span>HALO, SAYA</span>
            </motion.div>

            {/* Nama Kamu */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-lightText text-center lg:text-left"
            >
              ESA AKBAR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-blue-400 to-accentYellow drop-shadow-sm">
                FEBRIAN
              </span>
            </motion.h1>

            {/* ================================================= */}
            {/* FOTO PROFIL MOBILE (Dengan BorderGlow Interactive) */}
            {/* ================================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="block lg:hidden my-3 w-full flex justify-center"
            >
              <div className="w-full max-w-[260px] sm:max-w-[290px]">
                <BorderGlow
                  backgroundColor="#0a0f1d"
                  borderRadius={20}
                  glowRadius={40}
                  glowIntensity={1}
                  colors={['#3b82f6', '#60a5fa', '#eab308']}
                >
                  <div className="p-3">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-darkBg">
                      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#0a0f1d]/80 px-2.5 py-1 backdrop-blur-md font-mono text-[10px] text-emerald-400">
                        
                      </div>

                      <img
                        src={personalInfo.avatar || "/profile.jpg"}
                        alt={personalInfo.name}
                        loading="eager"
                        className="h-full w-full object-cover object-top"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </motion.div>

            {/* Typing Roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-h-[32px] flex items-center justify-center lg:justify-start font-mono text-base sm:text-xl text-accentYellow pt-1"
            >
              <span className="text-mutedText mr-2">&gt;</span>
              <span>{displayedText}</span>
              <span className="ml-1 text-accentBlue animate-pulse">|</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-sm sm:text-base lg:text-[17px] leading-relaxed text-mutedText text-justify sm:text-center lg:text-left"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 w-full"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accentBlue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accentBlue/20 transition-transform duration-200 hover:scale-[1.02]"
              >
                <span>Lihat Project</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.cvUrl || "/documents/CV=ESA-AKBAR-FEBRIAN.pdf"}
                download="CV_Esa_Akbar_Febrian.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0f1d] px-6 py-3.5 text-sm font-semibold text-lightText transition-all duration-200 hover:border-accentBlue/40 hover:text-accentBlue hover:scale-[1.02]"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* KARTU PROFIL DESKTOP (Dengan BorderGlow Interactive) */}
          {/* ================================================= */}
          <div className="hidden lg:flex lg:w-5/12 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[340px]"
            >
              <BorderGlow
                backgroundColor="#0a0f1d"
                borderRadius={24}
                glowRadius={50}
                glowIntensity={1}
                colors={['#3b82f6', '#60a5fa', '#eab308']}
              >
                <div className="p-4 sm:p-5">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-darkBg">
                    
                  

                    <img
                      src={personalInfo.avatar || "/profile.jpg"}
                      alt={personalInfo.name}
                      loading="eager"
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
                  </div>

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