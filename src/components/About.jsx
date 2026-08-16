import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { User, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-accentYellow text-sm font-semibold tracking-wider">01 // ABOUT_ME</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-lightText mt-1">
            System Documentation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Documentation Terminal View */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-xl p-6 sm:p-8 border border-accentBlue/30 relative"
          >
            <div className="font-mono text-xs text-accentBlue mb-4 flex items-center gap-2">
              <User size={14} />
              <span>$ whoami --verbose</span>
            </div>

            <div className="space-y-4 font-sans text-mutedText text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-lightText font-semibold">{personalInfo.name}</strong> adalah {personalInfo.bio}
              </p>
            </div>

            {/* Structured Info Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 glass-card p-3 rounded border border-white/5">
                <GraduationCap className="text-accentYellow shrink-0" size={18} />
                <div>
                  <span className="text-mutedText block">Degree</span>
                  <span className="text-lightText font-medium">{personalInfo.education.degree}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 glass-card p-3 rounded border border-white/5">
                <Calendar className="text-accentBlue shrink-0" size={18} />
                <div>
                  <span className="text-mutedText block">Graduation</span>
                  <span className="text-lightText font-medium">{personalInfo.education.graduation}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 glass-card p-3 rounded border border-white/5">
                <MapPin className="text-accentYellow shrink-0" size={18} />
                <div>
                  <span className="text-mutedText block">Location</span>
                  <span className="text-lightText font-medium">{personalInfo.contact.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Statistics Counter */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-xl border border-accentBlue/20 text-center hover:border-accentYellow/50 transition-colors"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-accentYellow mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-mutedText">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}