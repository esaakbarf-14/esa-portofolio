import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <Send className="w-8 h-8 text-indigo-500" />
        <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-neutral-400 text-lg">
            Feel free to reach out if you want to collaborate on a project or just want to connect!
          </p>

          <div className="space-y-4">
            {personalInfo?.email && (
              <div className="flex items-center gap-4 text-neutral-300">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo?.phone && (
              <div className="flex items-center gap-4 text-neutral-300">
                <Phone className="w-5 h-5 text-indigo-500" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo?.location && (
              <div className="flex items-center gap-4 text-neutral-300">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-4">
            {personalInfo?.socials?.github && (
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {personalInfo?.socials?.linkedin && (
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
            {personalInfo?.socials?.instagram && (
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}