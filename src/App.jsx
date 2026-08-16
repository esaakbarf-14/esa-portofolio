import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParallaxBackground from './components/ParallaxBackground';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Education from './components/Education'; // <-- Diperbaiki (di-import dengan nama Education)
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TerminalSection from './components/Terminal';
import Certificates from './components/Certificates';
import Language from './components/Language';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 1. Splash Screen dengan AnimatePresence */}
      <AnimatePresence mode="wait">
        {loading && (
          <SplashScreen key="splash" onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Layout (Baru dirender & dimunculkan setelah Splash Screen HILANG TOTAL) */}
      {!loading && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-darkBg text-lightText relative font-sans selection:bg-accentYellow selection:text-darkBg"
        >
          {/* Interactive Utilities */}
          <CustomCursor />
          <ScrollProgress />
          <ParallaxBackground />

          {/* Main Layout Sections */}
          <Navbar />
          <main>
            <Hero />
            <Education />
            <Experience />
            <TechStack />
            <Projects />
            <Certificates />
            <Language />
            <TerminalSection />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}