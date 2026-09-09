import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profileData } from "@/data/profile";

export function HeroPreview() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Background Watermark Typography inspired by Dribbble design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[80px] sm:text-[140px] md:text-[200px] lg:text-[240px] font-black tracking-tighter text-neutral-100 dark:text-neutral-900/30 uppercase leading-none z-0"
      >
        PORTFOLIO
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Mini Header / Status indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1 font-mono text-[11px] bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Research & Engineering</span>
            </Badge>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-neutral-400 dark:text-neutral-500">
            2024–2025 · Curated Work
          </span>
        </div>

        {/* Main Grid: Left Typography & Narrative + Right Device / Portrait Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting & Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-100/70 px-3.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-neutral-900 dark:text-neutral-100" />
              <span>Computer Engineering & Hadith Scholarship</span>
            </div>

            {/* Display Heading: "Hello" mimicking reference */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50">
                Hello<span className="text-neutral-400 dark:text-neutral-600">.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                — It&apos;s <span className="font-semibold text-neutral-950 dark:text-white underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">Basit Majeed</span>, student of Islamic Studies, Arabic & Computer Engineering.
              </p>
            </div>

            {/* Core Narrative / Bio */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              Dedicated to uniting analytical computing rigor with traditional Hadith criticism and classical Arabic philology. Passionate about software concepts, critical historical research, and precision writing.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl border border-neutral-200/80 bg-white/70 p-3.5 backdrop-blur-xs dark:border-neutral-800 dark:bg-neutral-900/60">
                <div className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-mono">
                  Dual
                </div>
                <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                  CS + Hadith
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200/80 bg-white/70 p-3.5 backdrop-blur-xs dark:border-neutral-800 dark:bg-neutral-900/60">
                <div className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-mono">
                  Arabic
                </div>
                <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Classical Philology
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200/80 bg-white/70 p-3.5 backdrop-blur-xs dark:border-neutral-800 dark:bg-neutral-900/60">
                <div className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 font-mono">
                  Writer
                </div>
                <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Research & Essays
                </div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/projects">
                <Button size="lg" className="gap-2 text-sm font-medium">
                  <span>View Projects</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="gap-2 text-sm font-medium">
                  <span>About My Journey</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Device Mockup with Portrait (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Background Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-neutral-200 to-neutral-100 opacity-60 blur-xl dark:from-neutral-800 dark:to-neutral-900 dark:opacity-40" />

              {/* Laptop / Editorial Frame Container */}
              <div className="relative rounded-3xl border border-neutral-200/90 bg-white p-3 shadow-xl dark:border-neutral-800 dark:bg-neutral-900/90 backdrop-blur-md">
                {/* Mockup Top Window Chrome */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-100 dark:border-neutral-800 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 tracking-wider">
                    basitmajeed.dev
                  </span>
                  <span className="h-2.5 w-2.5" />
                </div>

                {/* Portrait Image Container */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src="/images/basit-majeed.jpg"
                    alt="Basit Majeed — Student of Islamic Studies, Arabic & Computer Engineering"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top filter contrast-[1.02] hover:scale-102 transition-transform duration-700 ease-out"
                    priority
                  />

                  {/* Subtle Gradient Overlay at bottom of photo for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />

                  {/* Floating Identity Card inside photo */}
                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-md text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold tracking-tight">
                          Basit Majeed
                        </p>
                        <p className="text-[11px] text-neutral-300">
                          Researcher & Software Engineer
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                          <Code2 className="h-3.5 w-3.5 text-white" />
                        </span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                          <BookOpen className="h-3.5 w-3.5 text-white" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Frame Bar */}
                <div className="mt-3 flex items-center justify-between px-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                  <span className="font-mono">Classical Hadith & Arabic</span>
                  <span className="font-mono">Computer Engineering</span>
                </div>
              </div>

              {/* Floating Pill Accent 1: Top Right */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 shadow-md dark:border-neutral-700 dark:bg-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-100 animate-in fade-in zoom-in duration-300">
                <Code2 className="h-3.5 w-3.5 text-neutral-900 dark:text-neutral-100" />
                <span>Systems & Web</span>
              </div>

              {/* Floating Pill Accent 2: Bottom Left */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 shadow-md dark:border-neutral-700 dark:bg-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-100 animate-in fade-in zoom-in duration-300">
                <BookOpen className="h-3.5 w-3.5 text-neutral-900 dark:text-neutral-100" />
                <span>Hadith & Arabic Philology</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Micro-interaction */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <Link
            href="/about"
            className="group flex flex-col items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-200 transition-colors"
          >
            <span className="tracking-wider uppercase text-[10px]">Explore Background</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
