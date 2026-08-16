import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import {
  Terminal as TerminalIcon,
  Play,
  CornerDownLeft,
  Sparkles,
  Circle,
} from "lucide-react";

export default function Terminal() {
  const [inputVal, setInputVal] = useState("");

  const [history, setHistory] = useState([
    {
      command: "welcome",
      output:
        'Interactive shell initialized. Type "help" to see available commands.',
      isSystem: true,
    },
  ]);

  const inputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  /* =========================================================
     COMMANDS
  ========================================================= */

  const availableCommands = {
    whoami: personalInfo.name,

    role: personalInfo.roles
      ? personalInfo.roles.join(" | ")
      : "Web Developer",

    education: `${
      personalInfo.education?.degree || "S1 Teknik Informatika"
    } — ${
      personalInfo.education?.institution ||
      "Pelita Bangsa University"
    }`,

    stack:
      "PHP, Laravel, React, Python, MySQL, Google Apps Script, Tailwind CSS",

    status: "AVAILABLE FOR NEW OPPORTUNITIES",

    contact: `Email: ${
      personalInfo.contact?.email || "-"
    } | Phone: ${
      personalInfo.contact?.phone || "-"
    }`,

    clear: "CLEAR_TERMINAL",

    help:
      "Available commands: whoami, role, education, stack, status, contact, clear, help",
  };

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  /* =========================================================
     COMMAND HANDLER
  ========================================================= */

  const handleCommandSubmit = (cmdToRun) => {
    const trimmedCmd = cmdToRun.trim().toLowerCase();

    if (!trimmedCmd) return;

    if (trimmedCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let response = availableCommands[trimmedCmd];

    if (!response) {
      response = `Command not found: "${trimmedCmd}". Type "help" for a list of available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmedCmd,
        output: response,
        isSystem: false,
      },
    ]);

    setInputVal("");
  };

  /* =========================================================
     ENTER KEY
  ========================================================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      handleCommandSubmit(inputVal);
    }
  };

  /* =========================================================
     FOCUS TERMINAL
  ========================================================= */

  const handleTerminalClick = () => {
    if (window.getSelection().toString().length === 0) {
      inputRef.current?.focus();
    }
  };

  /* =========================================================
     QUICK COMMANDS
  ========================================================= */

  const quickCommands = [
    "whoami",
    "role",
    "education",
    "stack",
    "status",
    "contact",
    "clear",
  ];

  return (
    <section
      id="terminal"
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

          {/* LABEL */}

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
                transition-all
                duration-300
              "
            >
              <TerminalIcon size={19} />
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
              08 — Interactive Terminal
            </span>

          </div>

          {/* TITLE */}

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
            Interactive Terminal
            <span className="text-accentBlue">.</span>
          </h2>

          {/* ACCENT */}

          <div
            className="
              mt-5
              h-px
              w-20
              bg-accentBlue/50
            "
          />

          {/* DESCRIPTION */}

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
            Eksplorasi profil, keahlian, pengalaman, dan informasi
            kontak melalui terminal interaktif sederhana.
          </p>

        </motion.div>

        {/* =================================================
            TERMINAL WRAPPER
        ================================================= */}

        <motion.div
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
            duration: 0.45,
            ease: "easeOut",
          }}
          onClick={handleTerminalClick}
          className="
            group
            relative
            cursor-text
          "
        >

          {/* =================================================
              OUTER GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-1
              rounded-[22px]
              bg-accentBlue/[0.06]
              opacity-0
              blur-2xl
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* =================================================
              TERMINAL FRAME
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#080c15]/95
              shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              backdrop-blur-xl
              transition-all
              duration-300

              group-hover:border-accentBlue/25
            "
          >

            {/* TOP ACCENT */}

            <div
              className="
                absolute
                left-0
                top-0
                z-30
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
                TERMINAL HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.07]
                bg-white/[0.025]
                px-5
                py-4
                select-none
                sm:px-6
              "
            >

              {/* LEFT */}

              <div className="flex items-center gap-4">

                {/* Window Buttons */}

                <div className="flex items-center gap-1.5">

                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-rose-400/70
                    "
                  />

                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-amber-400/70
                    "
                  />

                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-400/70
                    "
                  />

                </div>

                {/* Terminal Identity */}

                <div className="flex items-center gap-2">

                  <TerminalIcon
                    size={14}
                    className="text-accentBlue"
                  />

                  <span
                    className="
                      font-mono
                      text-[11px]
                      font-semibold
                      tracking-wide
                      text-lightText/70
                    "
                  >
                    esa@portfolio
                  </span>

                  <span className="text-white/20">
                    /
                  </span>

                  <span
                    className="
                      font-mono
                      text-[11px]
                      text-mutedText/50
                    "
                  >
                    bash
                  </span>

                </div>

              </div>

              {/* RIGHT */}

              <div className="hidden items-center gap-2 sm:flex">

                <Circle
                  size={7}
                  fill="currentColor"
                  className="text-emerald-400/70"
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-mutedText/40
                  "
                >
                  Active
                </span>

              </div>

            </div>

            {/* =================================================
                QUICK COMMANDS
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                border-b
                border-white/[0.06]
                bg-[#070b13]
                px-4
                py-3
                sm:px-5
              "
            >

              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    handleCommandSubmit(cmd);
                  }}
                  className="
                    group/command
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-2.5
                    py-1.5
                    font-mono
                    text-[10px]
                    font-medium
                    text-mutedText/70
                    transition-all
                    duration-200

                    hover:border-accentBlue/25
                    hover:bg-accentBlue/[0.07]
                    hover:text-lightText

                    active:scale-95
                  "
                >

                  <Play
                    size={9}
                    className="
                      text-accentBlue/60
                      transition-colors
                      duration-200
                      group-hover/command:text-accentBlue
                    "
                  />

                  <span>
                    {cmd}
                  </span>

                </button>
              ))}

            </div>

            {/* =================================================
                TERMINAL BODY
            ================================================= */}

            <div
              ref={scrollContainerRef}
              className="
                relative
                h-[350px]
                overflow-y-auto
                bg-[#050810]
                px-5
                py-6
                font-mono
                text-[12px]
                leading-6
                sm:h-[370px]
                sm:px-6
              "
            >

              {/* Background Grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.018]
                "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage:
                    "linear-gradient(to bottom, black, transparent 90%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent 90%)",
                }}
              />

              {/* Ambient Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-72
                  w-72
                  rounded-full
                  bg-accentBlue/[0.035]
                  blur-3xl
                "
              />

              {/* TERMINAL CONTENT */}

              <div className="relative space-y-5">

                {/* System Welcome */}

                {history.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="space-y-2"
                  >

                    {!item.isSystem && (
                      <div className="flex flex-wrap items-center gap-2">

                        <span className="text-accentBlue">
                          esa@portfolio
                        </span>

                        <span className="text-white/20">
                          :
                        </span>

                        <span className="text-accentBlue/60">
                          ~
                        </span>

                        <span className="text-white/20">
                          $
                        </span>

                        <span className="text-lightText/85">
                          {item.command}
                        </span>

                      </div>
                    )}

                    <div
                      className={`
                        ml-1
                        border-l
                        pl-4
                        ${
                          item.isSystem
                            ? "border-accentYellow/40 text-accentYellow/70"
                            : "border-accentBlue/30 text-emerald-400/80"
                        }
                      `}
                    >
                      {item.output}
                    </div>

                  </motion.div>
                ))}

                {/* =================================================
                    ACTIVE INPUT
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    pt-1
                  "
                >

                  <span
                    className="
                      shrink-0
                      text-accentBlue
                    "
                  >
                    esa@portfolio
                  </span>

                  <span className="text-white/20">
                    :
                  </span>

                  <span className="text-accentBlue/60">
                    ~
                  </span>

                  <span className="text-white/20">
                    $
                  </span>

                  <div className="relative flex min-w-0 flex-1 items-center">

                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) =>
                        setInputVal(e.target.value)
                      }
                      onKeyDown={handleKeyDown}
                      spellCheck={false}
                      autoComplete="off"
                      className="
                        w-full
                        border-none
                        bg-transparent
                        p-0
                        font-mono
                        text-[12px]
                        text-lightText
                        outline-none
                        ring-0
                        placeholder:text-white/20
                        focus:border-none
                        focus:outline-none
                        focus:ring-0
                      "
                      placeholder="type a command..."
                    />

                  </div>

                  <CornerDownLeft
                    size={13}
                    className="
                      shrink-0
                      text-mutedText/30
                    "
                  />

                </div>

              </div>

            </div>

            {/* =================================================
                TERMINAL FOOTER
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-white/[0.06]
                bg-white/[0.015]
                px-5
                py-3
                sm:px-6
              "
            >

              <div className="flex items-center gap-2">

                <Sparkles
                  size={12}
                  className="text-accentBlue/60"
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-mutedText/35
                  "
                >
                  Interactive Portfolio Shell
                </span>

              </div>

              <span
                className="
                  font-mono
                  text-[9px]
                  text-mutedText/25
                "
              >
                v1.0.0
              </span>

            </div>

            {/* BOTTOM GLOW */}

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
                shadow-[0_0_15px_rgba(59,130,246,0.8)]
                transition-all
                duration-500
                group-hover:w-1/2
                group-hover:opacity-100
              "
            />

          </div>

        </motion.div>

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
            duration: 0.4,
            delay: 0.2,
          }}
          className="mt-8 flex items-center gap-3"
        >

          <div className="h-px flex-1 bg-white/[0.05]" />

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-mutedText/30
            "
          >
            Explore • Execute • Discover
          </span>

          <div className="h-px flex-1 bg-white/[0.05]" />

        </motion.div>

      </div>
    </section>
  );
}