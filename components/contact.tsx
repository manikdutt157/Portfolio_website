"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteProfile, socialLinks } from "@/data/common";

export function Contact() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const handleEmailClick = () => {
    if (!isEmailVisible) {
      setIsEmailVisible(true);
      return;
    }

    window.location.href = `mailto:${siteProfile.email}`;
  };

  return (
    <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border border-foreground/20">
          <Image
            src="/images/img_new.jpg"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Contact Links */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Let's Connect</h2>
            <p className="text-sm sm:text-base text-foreground/70">
              let's create something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <button
              type="button"
              onClick={handleEmailClick}
              className="flex w-full items-center gap-3 rounded-lg border border-foreground/20 bg-foreground/5 p-3 text-left transition-all hover:border-foreground/40 hover:bg-foreground/10 sm:p-4"
              aria-label={isEmailVisible ? "Open email app" : "Reveal email address"}
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground/60 font-medium">Email</p>
                <motion.p
                  initial={false}
                  animate={{
                    filter: isEmailVisible ? "blur(0px)" : "blur(5px)",
                    opacity: isEmailVisible ? 1 : 0.72,
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="select-none truncate text-sm sm:text-base"
                >
                  {siteProfile.email}
                </motion.p>
              </div>
            </button>

            {/* Social Links */}
            <div className="space-y-3 pt-4">
              <p className="text-xs text-foreground/60 font-medium">Follow</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-foreground/20 hover:border-foreground/40 bg-foreground/5 hover:bg-foreground/10 transition-all"
                      aria-label={link.name}
                      title={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
