"use client";

import Link from "next/link";
import { ThemeToggle } from "./Helper/theme-toggle";
import LocalTime from "./Helper/timer";
import { navLinks } from "@/data/common";

export default function Navbar() {
  const galleryLink = navLinks.find((link) => link.url === "/gallery");

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-8xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 py-3 sm:gap-4 sm:py-4">
          <div className="shrink-0">
            <LocalTime />
          </div>
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            {galleryLink ? (
              <Link
                href={galleryLink.url}
                className="inline-flex h-8 items-center whitespace-nowrap rounded-lg px-2.5 text-xs text-foreground/70 transition hover:bg-foreground/10 hover:text-foreground md:hidden"
              >
                {galleryLink.Label}
              </Link>
            ) : null}

            <div className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="inline-flex h-9 items-center whitespace-nowrap rounded-lg px-3 text-sm text-foreground/70 transition hover:bg-foreground/10 hover:text-foreground"
                >
                  {link.Label}
                </Link>
              ))}
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
