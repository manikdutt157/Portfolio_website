import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/HOC/Provider";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A modern portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jetbrainsMono.variable}>
      <body className="min-h-screen relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* aesthetic background color spots */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-[340px] w-[340px] rounded-full bg-gradient-to-br from-fuchsia-500/25 via-purple-500/15 to-cyan-400/10 blur-3xl" />
            <div className="absolute top-[20%] -right-28 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-emerald-400/15 via-sky-500/15 to-indigo-500/15 blur-3xl" />
            <div className="absolute -bottom-32 left-[25%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-amber-400/10 via-rose-500/15 to-violet-500/10 blur-3xl" />
          </div>

          <Navbar />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}


