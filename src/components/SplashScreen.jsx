import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Sparkles, Code2 } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  // Counter 0% sampai 100% (Durasi ~2.8 detik)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 300); // Jeda sebentar saat 100% lalu masuk
          return 100;
        }
        return prev + 1; // Naik bertahap agar tidak terlalu cepat
      });
    }, 25); // 25ms x 100 step = ~2.5 detik + delay 300ms = 2.8s

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.03, 
        filter: 'blur(10px)',
        pointerEvents: 'none' // 👈 Mencegah splash screen nempel/menghalangi Hero saat exit
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050B12] text-lightText font-mono overflow-hidden select-none"
    >
      {/* Background Grid Pattern Subtle */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Ambient Glow Background Effects */}
      <div className="absolute w-[500px] h-[500px] bg-accentBlue/25 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute w-[350px] h-[350px] bg-accentYellow/15 rounded-full blur-[120px] pointer-events-none -bottom-10 -right-10" />

      {/* Center Animated Frame */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Glow Outer Ring & Logo Icon */}
        <div className="relative group flex items-center justify-center">
          {/* Rotating Outer Glow Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-accentBlue via-accentYellow to-accentBlue opacity-75 blur-md"
          />

          {/* Main Icon Box */}
          <div className="relative p-5 rounded-2xl bg-[#061A2B]/90 border border-accentBlue/50 shadow-2xl backdrop-blur-xl flex items-center justify-center">
            <Terminal size={48} className="text-accentYellow animate-pulse" />
            <Sparkles size={18} className="text-accentBlue absolute -top-1 -right-1 animate-bounce" />
            <Cpu size={14} className="text-emerald-400 absolute -bottom-1 -left-1" />
          </div>
        </div>

        {/* Console Text Status */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentBlue/10 border border-accentBlue/30 text-accentBlue text-xs">
            <Code2 size={13} />
            <span className="tracking-widest uppercase font-semibold">LOADING SYSTEM</span>
          </div>

          {/* Animated Dynamic Subtitle */}
          <div className="h-6 flex items-center justify-center text-sm sm:text-base text-mutedText">
            <span>
              &gt; {
                progress < 35 
                  ? 'Initializing core modules...' 
                  : progress < 75 
                  ? 'Injecting user interfaces...' 
                  : 'Preparing developer console...'
              }
            </span>
            <span className="animate-pulse text-accentYellow font-bold ml-1">|</span>
          </div>
        </div>

        {/* Glowing Progress Bar Container */}
        <div className="w-64 sm:w-80 space-y-2">
          <div className="relative w-full h-2 bg-secondaryNavy/80 rounded-full overflow-hidden border border-white/10 p-0.5 shadow-inner">
            {/* Glowing Bar Fill */}
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-accentBlue via-blue-400 to-accentYellow rounded-full relative shadow-[0_0_15px_#0878B8]"
            >
              {/* Leading Light Indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
            </motion.div>
          </div>

          {/* Percentage Indicator */}
          <div className="flex justify-between items-center text-[11px] text-mutedText tracking-wider font-mono">
            <span>STATUS: {progress === 100 ? 'SYSTEM READY' : 'LOADING'}</span>
            <span className="text-accentYellow font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}