"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume-data";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Centered background image with black sides */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/image2.gif')`,
          width: '100%',
          maxWidth: '1200px',
        }}
      />

      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full bg-gradient-to-b from-transparent to-black/80"
        style={{
          width: '100%',
          maxWidth: '1200px',
        }}
      />

      <div className="relative z-10 w-full min-h-[280px] sm:min-h-[340px] md:min-h-[400px] flex flex-col items-center sm:items-end justify-end px-3 sm:px-6 md:px-8 py-6 sm:py-10 md:py-6">
        {/* bottom area */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end w-full max-w-6xl mx-auto gap-6 sm:gap-4">
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-end">
            <div className="flex-1 text-center sm:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {RESUME_DATA.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs sm:text-sm md:text-base text-white/70 mt-1.5 sm:mt-2 line-clamp-2 sm:line-clamp-none"
              >
                ~ {RESUME_DATA.about}
              </motion.p>
            </div>

            {/* framed avatar */}
            <div className="relative w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[200px] flex-shrink-0">
              <div className="absolute right-0 bottom-0 sm:bottom-4 transform translate-y-3 sm:translate-y-6 bg-white p-0.5 sm:p-1 rounded-sm shadow-xl">
                <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] p-1 sm:p-1.5 bg-black overflow-hidden">
                  {RESUME_DATA.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
                      {RESUME_DATA.initials}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
