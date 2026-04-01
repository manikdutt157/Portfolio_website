"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function SocialLinks() {
  return (
    <section id="contact" className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-10"
        >
          {/* Email */}
          {RESUME_DATA.contact.email && (
            <motion.a
              variants={itemVariants}
              href={`mailto:${RESUME_DATA.contact.email}`}
              aria-label="Send Email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-2xl text-xs sm:text-base border border-foreground/20 bg-foreground/5 backdrop-blur hover:bg-foreground/10 transition-all whitespace-nowrap"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-medium hidden sm:inline">Email Me</span>
              <span className="font-medium sm:hidden">Email</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-50 group-hover:opacity-80 transition-opacity flex-shrink-0" />
            </motion.a>
          )}

          {/* Social Links */}
          {RESUME_DATA.contact.social.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                variants={itemVariants}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-6 py-3 rounded-2xl border border-foreground/20 bg-foreground/5 backdrop-blur hover:bg-foreground/10 transition-all"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{social.name}</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-80 transition-opacity" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
