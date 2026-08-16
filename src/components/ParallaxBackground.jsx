import React, { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ParallaxBackground() {
  // =====================================================
  // MOUSE PARALLAX
  // =====================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 35,
    damping: 22,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 35,
    damping: 22,
    mass: 0.5,
  });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (event) => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const x =
          (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
          (event.clientY / window.innerHeight - 0.5) * 2;

        mouseX.set(x);
        mouseY.set(y);

        ticking = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);


  // =====================================================
  // PARTICLES
  // =====================================================

  const particles = useMemo(
    () => [
      // BLUE
      {
        id: 1,
        x: '8%',
        y: '12%',
        size: 3,
        color: '#60a5fa',
        duration: 4,
        delay: 0,
        distance: 35,
      },
      {
        id: 2,
        x: '22%',
        y: '30%',
        size: 2,
        color: '#3b82f6',
        duration: 5,
        delay: 1,
        distance: 45,
      },
      {
        id: 3,
        x: '12%',
        y: '62%',
        size: 2,
        color: '#38bdf8',
        duration: 4.5,
        delay: 0.5,
        distance: 30,
      },
      {
        id: 4,
        x: '34%',
        y: '18%',
        size: 2,
        color: '#60a5fa',
        duration: 6,
        delay: 2,
        distance: 50,
      },
      {
        id: 5,
        x: '46%',
        y: '78%',
        size: 3,
        color: '#3b82f6',
        duration: 5,
        delay: 1.5,
        distance: 40,
      },
      {
        id: 6,
        x: '72%',
        y: '15%',
        size: 2,
        color: '#38bdf8',
        duration: 4,
        delay: 0.8,
        distance: 35,
      },
      {
        id: 7,
        x: '88%',
        y: '52%',
        size: 3,
        color: '#60a5fa',
        duration: 6,
        delay: 2,
        distance: 45,
      },
      {
        id: 8,
        x: '68%',
        y: '82%',
        size: 2,
        color: '#3b82f6',
        duration: 4.5,
        delay: 1,
        distance: 30,
      },

      // YELLOW
      {
        id: 9,
        x: '84%',
        y: '24%',
        size: 3,
        color: '#facc15',
        duration: 5,
        delay: 0.5,
        distance: 40,
      },
      {
        id: 10,
        x: '76%',
        y: '40%',
        size: 2,
        color: '#fde047',
        duration: 4,
        delay: 1.5,
        distance: 35,
      },
      {
        id: 11,
        x: '28%',
        y: '72%',
        size: 3,
        color: '#facc15',
        duration: 6,
        delay: 2,
        distance: 50,
      },
      {
        id: 12,
        x: '54%',
        y: '14%',
        size: 2,
        color: '#fde047',
        duration: 5,
        delay: 0.2,
        distance: 30,
      },

      // CYAN
      {
        id: 13,
        x: '5%',
        y: '46%',
        size: 2,
        color: '#22d3ee',
        duration: 5,
        delay: 1,
        distance: 35,
      },
      {
        id: 14,
        x: '92%',
        y: '72%',
        size: 2,
        color: '#22d3ee',
        duration: 4,
        delay: 2,
        distance: 30,
      },
      {
        id: 15,
        x: '42%',
        y: '42%',
        size: 2,
        color: '#67e8f9',
        duration: 6,
        delay: 0.5,
        distance: 45,
      },

      // WHITE / SMALL STARS
      {
        id: 16,
        x: '38%',
        y: '86%',
        size: 1.5,
        color: '#ffffff',
        duration: 3.5,
        delay: 1,
        distance: 25,
      },
      {
        id: 17,
        x: '61%',
        y: '62%',
        size: 1.5,
        color: '#ffffff',
        duration: 4,
        delay: 2,
        distance: 20,
      },
      {
        id: 18,
        x: '58%',
        y: '32%',
        size: 1.5,
        color: '#dbeafe',
        duration: 3,
        delay: 0.3,
        distance: 25,
      },
      {
        id: 19,
        x: '18%',
        y: '88%',
        size: 1.5,
        color: '#fef3c7',
        duration: 4.5,
        delay: 1.8,
        distance: 30,
      },
      {
        id: 20,
        x: '94%',
        y: '12%',
        size: 1.5,
        color: '#ffffff',
        duration: 3.5,
        delay: 0.8,
        distance: 20,
      },
    ],
    []
  );


  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#060913]">

      {/* =====================================================
          BASE
      ===================================================== */}

      <div className="absolute inset-0 bg-[#060913]" />

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(15,23,42,0.9),rgba(6,9,19,0.95)_55%,#060913_100%)]
        "
      />


      {/* =====================================================
          BLUE AMBIENT GLOW
      ===================================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.18, 0.36, 0.18],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          -top-[18%]
          -left-[12%]
          w-[650px]
          h-[650px]
          rounded-full
          bg-blue-600/25
          blur-[120px]
          will-change-transform
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[3%]
          left-[4%]
          w-[250px]
          h-[250px]
          rounded-full
          bg-blue-500/30
          blur-[70px]
          will-change-transform
        "
      />


      {/* =====================================================
          YELLOW AMBIENT GLOW
      ===================================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="
          absolute
          top-[28%]
          -right-[15%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-yellow-500/15
          blur-[130px]
          will-change-transform
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.04, 0.16, 0.04],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="
          absolute
          top-[38%]
          right-[3%]
          w-[220px]
          h-[220px]
          rounded-full
          bg-yellow-400/20
          blur-[65px]
          will-change-transform
        "
      />


      {/* =====================================================
          CENTER LIGHT
      ===================================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.02, 0.10, 0.02],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[22%]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
          will-change-transform
        "
      />


      {/* =====================================================
          PARTICLE FIELD
      ===================================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute inset-0 will-change-transform"
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              top: particle.y,
              left: particle.x,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `
                0 0 6px ${particle.color},
                0 0 14px ${particle.color}
              `,
            }}
            animate={{
              y: [
                0,
                -particle.distance,
                particle.distance * 0.35,
                0,
              ],
              x: [
                0,
                particle.distance * 0.25,
                -particle.distance * 0.15,
                0,
              ],
              opacity: [0.15, 1, 0.4, 0.15],
              scale: [0.7, 1.35, 0.9, 0.7],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full"
          />
        ))}
      </motion.div>


      {/* =====================================================
          ORBITING LIGHTS
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          absolute
          left-1/2
          top-[35%]
          w-[500px]
          h-[300px]
          -translate-x-1/2
          rounded-full
          border border-blue-400/[0.04]
        "
      >
        <div
          className="
            absolute
            -top-1
            left-1/2
            w-2
            h-2
            -translate-x-1/2
            rounded-full
            bg-blue-400
            shadow-[0_0_12px_4px_rgba(59,130,246,0.7)]
          "
        />
      </motion.div>


      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          absolute
          left-1/2
          top-[38%]
          w-[700px]
          h-[420px]
          -translate-x-1/2
          rounded-full
          border border-yellow-400/[0.025]
        "
      >
        <div
          className="
            absolute
            top-1/2
            -right-1
            w-2
            h-2
            rounded-full
            bg-yellow-400
            shadow-[0_0_12px_4px_rgba(234,179,8,0.65)]
          "
        />
      </motion.div>


      {/* =====================================================
          MOVING GRID
      ===================================================== */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          -inset-[50px]
          opacity-[0.035]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          will-change-transform
        "
        style={{
          maskImage:
            'radial-gradient(ellipse at center,black 25%,transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center,black 25%,transparent 90%)',
        }}
      />


      {/* =====================================================
          SCANNING LIGHT
      ===================================================== */}

      <motion.div
        animate={{
          y: ['-120%', '220%'],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          absolute
          left-0
          w-full
          h-[220px]
          bg-gradient-to-b
          from-transparent
          via-blue-400/[0.04]
          to-transparent
        "
      />


      {/* =====================================================
          HORIZONTAL LIGHT STREAK
      ===================================================== */}

      <motion.div
        animate={{
          x: ['-120%', '120%'],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="
          absolute
          top-[45%]
          h-px
          w-[500px]
          bg-gradient-to-r
          from-transparent
          via-blue-400/20
          to-transparent
        "
      />


      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(3,6,14,0.35)_60%,rgba(3,6,14,0.88)_100%)]
        "
      />

    </div>
  );
}