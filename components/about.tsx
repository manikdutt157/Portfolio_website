"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function About() {
  return (
    <>
    <section id="about" className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-2 sm:space-y-3"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">About</h2>
        <p className="text-sm sm:text-base md:text-base text-foreground/70 leading-relaxed">
          {RESUME_DATA.summary}
        </p>
      </motion.div>

      {/* More About Me Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10 text-xs sm:text-sm font-medium"
        >
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          More About Me
        </motion.a>
      </motion.div>
    </section>

    </>
  );
}

