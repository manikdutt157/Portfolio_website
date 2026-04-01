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
            <div
              key={project.id}
              className="border rounded-lg bg-background hover:border-foreground/40 transition"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-36 sm:h-44 bg-muted">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-semibold text-muted-foreground">
                    {project.title[0]}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                {/* <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs px-2 py-1 border rounded-md text-muted-foreground">
                      {project.status}
                    </span>
                  )}
                </div> */}

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {(project.technologies || []).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 sm:py-1 bg-muted rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </a>
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Source Code</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
