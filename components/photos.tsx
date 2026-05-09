"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { photoItems } from "@/data/common";

export function Photos({
  title = "Photos",
  sectionId = "photos",
}: {
  title?: string;
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
          A few moments and posts from LinkedIn.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 md:gap-5">
          {photoItems.map((item) => {
            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-lg border border-foreground/15 bg-background transition hover:border-foreground/35"
              >
                <div className="flex min-h-14 flex-col items-start gap-2 border-b border-foreground/10 px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                  {item.position ? (
                    <span className="max-w-full shrink-0 rounded-full border border-foreground/15 bg-foreground/5 px-2 py-1 text-[11px] leading-none text-foreground/75">
                      {item.position}
                    </span>
                  ) : null}
                </div>

                {item.embedUrl ? (
                  <div className="relative overflow-hidden bg-white">
                    <iframe
                      src={item.embedUrl}
                      title={`${item.title} LinkedIn post`}
                      className="pointer-events-none h-[360px] w-full border-0 sm:h-[420px]"
                      loading="lazy"
                      scrolling="no"
                      allowFullScreen
                    />
                    {item.postUrl ? (
                      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-end bg-gradient-to-t from-black/50 to-transparent p-3">
                        <a
                          href={item.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/30 bg-black/80 px-3 text-xs font-medium text-white backdrop-blur transition hover:bg-black sm:text-sm"
                        >
                          Open Post
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    ) : null}
                  </div>
                ) : item.postUrl ? (
                  <div className="relative flex min-h-36 items-center justify-center overflow-hidden bg-muted p-4 sm:min-h-40">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      className="object-cover opacity-25"
                    />
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <p className="text-xs font-medium text-foreground/70">
                        LinkedIn post available
                      </p>
                      <a
                        href={item.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-2 rounded-lg border border-foreground/20 bg-background/90 px-3 text-xs font-medium transition hover:bg-background sm:text-sm"
                      >
                        Open Post
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-40 w-full bg-muted sm:h-44">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

