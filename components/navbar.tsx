"use client";

import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { ThemeToggle } from "./Helper/theme-toggle";
import LocalTime from "./Helper/timer";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/70 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          <LocalTime />
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-lg border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition text-sm font-medium"
            >
              <ImageIcon className="w-4 h-4" />
              Gallery
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
