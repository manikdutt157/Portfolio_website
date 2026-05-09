"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectList } from "@/data/common";
import { Footer } from "./footer";

type ProjectsProps = {
  limit?: number;
  showMoreButton?: boolean;
  title?: string;
  sectionId?: string;
};

export function Projects({
  limit,
  showMoreButton = false,
  title = "Projects",
  sectionId = "projects",
}: ProjectsProps) {
  const visibleProjects = typeof limit === "number" ? projectList.slice(0, limit) : projectList;

  return (
    <section id={sectionId} className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
          Ideas built into real solutions.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 md:gap-6">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group overflow-hidden rounded-xl border bg-background transition hover:border-foreground/40"
            >
              {/* Thumbnail */}
              <div className="relative h-36 w-full bg-muted sm:h-44">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-semibold text-muted-foreground">
                    {project.name[0]}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-sm font-semibold leading-snug text-white sm:text-lg">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 p-3.5 sm:p-5">
                <p className="line-clamp-4 text-xs leading-relaxed text-muted-foreground sm:line-clamp-3 sm:text-sm">
                  {project.bio}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-foreground/20 px-3 text-xs font-medium transition hover:border-foreground/35 sm:text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {showMoreButton ? (
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-foreground/20 bg-foreground/5 px-4 text-sm font-medium transition hover:bg-foreground/10"
            >
              More Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </motion.div>
      <Footer />
    </section>
  );
}
