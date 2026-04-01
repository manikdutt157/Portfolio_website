"use client";

import { ThemeToggle } from "./Helper/theme-toggle";
import LocalTime from "./Helper/timer";

export default function Navbar() {
  return (
    <nav className="w-full border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4">
        <LocalTime />
        <ThemeToggle />
      </div>
    </nav>
  );
}
