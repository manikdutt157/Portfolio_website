"use client";

import { Mail } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="border-t border-zinc-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <p className="text-xs sm:text-sm text-zinc-500 text-center md:text-left">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4 sm:gap-5">
          {RESUME_DATA.contact.social.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label={link.name}
              >
                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </a>
            );
          })}
          <a
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
