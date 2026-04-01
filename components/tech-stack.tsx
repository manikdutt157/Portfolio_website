"use client";

import { motion } from "framer-motion";
import { allSkills } from "@/data/skills";
import Image from "next/image";

export function TechStack() {
  return (
    <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
          Tech Stack
        </h2>
        <p className="text-xs sm:text-sm text-foreground/70 mb-4 sm:mb-8">
          This list grows faster than my GitHub stars — and I kinda like that.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
          {allSkills.map((skill, itemIndex) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: itemIndex * 0.05,
              }}
              className="flex flex-col items-center gap-1.5 sm:gap-2 group"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Image
                  src={skill.icon_url}
                  alt={skill.title}
                  width={64}
                  height={64}
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs font-medium text-center text-foreground/80 w-12 sm:w-16">
                {skill.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


