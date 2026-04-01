"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ProjList } from "@/data/project";

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Projects</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
          Selected work demonstrating engineering depth and product thinking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
          {ProjList.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group border rounded-xl bg-background hover:border-foreground/40 transition overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-40 sm:h-44 bg-muted">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-semibold text-muted-foreground">
                    {project.title[0]}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-5 space-y-3">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {(project.technologies || []).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full border border-foreground/15 bg-foreground/5 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-foreground/20 hover:border-foreground/35 transition text-xs sm:text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
