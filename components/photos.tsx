"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PHOTO_ITEMS } from "@/data/photos";

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
      className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
          {PHOTO_ITEMS.map((item) => {
            const CardTag: React.ElementType = item.postUrl ? "a" : "div";
            const cardProps = item.postUrl
              ? {
                  href: item.postUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardTag
                key={item.id}
                {...cardProps}
                className={[
                  "border rounded-lg bg-background hover:border-foreground/40 transition overflow-hidden block",
                  item.postUrl ? "cursor-pointer" : "",
                ].join(" ")}
              >
                <div className="relative w-full h-44 sm:h-48 bg-muted">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm sm:text-base font-semibold leading-snug">
                      {item.title}
                    </h3>
                    {item.postUrl ? (
                      <span className="inline-flex items-center gap-1 text-xs text-primary">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </span>
                    ) : null}
                  </div>

                  {item.description ? (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  ) : null}

                  {item.date ? (
                    <p className="text-xs text-foreground/60">{item.date}</p>
                  ) : null}
                </div>
              </CardTag>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

