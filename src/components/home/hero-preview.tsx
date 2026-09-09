import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Code2, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroPreview() {
  return (
    <section className="relative overflow-hidden pt-6 pb-20 sm:pt-10 sm:pb-28">
      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 select-none text-[80px] sm:text-[140px] md:text-[200px] lg:text-[250px] font-black tracking-tighter text-neutral-100 dark:text-neutral-900/30 uppercase leading-none z-0"
      >
        PORTFOLIO
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="gap-2 px-3.5 py-1 font-mono text-[11px] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-neutral-200/80 dark:border-neutral-800"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Available for Engineering &amp; Academic Research
              </span>
            </Badge>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-neutral-400 dark:text-neutral-500">
            <span>Vol. 2024–2025</span>
            <span>·</span>
            <span>Scholarly &amp; Technical Portfolio</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Refined Editorial Copy & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Discipline Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-neutral-100/80 px-4 py-1.5 text-xs font-medium text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-neutral-900 dark:text-neutral-100" />
              <span>Computational Engineering &amp; Hadith Scholarship</span>
            </div>

            {/* Powerful Professional Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.1]">
                Bridging Algorithmic Logic &amp;{" "}
                <span className="font-serif italic font-normal text-neutral-600 dark:text-neutral-400">
                  Classical Tradition.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed max-w-xl">
                I am <span className="text-neutral-950 dark:text-white font-semibold underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Basit Majeed</span> — an engineer and researcher dedicated to uniting computer science rigor with classical Arabic philology and Hadith authentication.
              </p>
            </div>

            {/* Detailed Value Statement */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              Applying structural abstraction, graph theory, and modern software paradigms to solve computational challenges, while employing traditional Isnad critique and Arabic morphological parsing to preserve scholarly precision.
            </p>

            {/* Three Sophisticated Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="group rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-xs transition-all hover:border-neutral-300 hover:shadow-xs dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500">01</span>
                  <Terminal className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div className="mt-2.5">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Engineering
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Systems &amp; CS Foundations
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-xs transition-all hover:border-neutral-300 hover:shadow-xs dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500">02</span>
                  <BookOpen className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div className="mt-2.5">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Hadith Studies
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Isnad &amp; Textual Criticism
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-xs transition-all hover:border-neutral-300 hover:shadow-xs dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-neutral-400 dark:text-neutral-500">03</span>
                  <Sparkles className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div className="mt-2.5">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Arabic Philology
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Syntax, Sarf &amp; Rhetoric
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/projects">
                <Button size="lg" className="gap-2 text-sm font-medium shadow-sm">
                  <span>Explore Projects</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="gap-2 text-sm font-medium">
                  <span>Read Full Bio</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" className="gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  <span>Get in Touch</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Boundary-Free, Elevated Oval Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            {/* Elevated Container with Lift and Ambient Soft Shadow */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:-translate-y-6 transition-transform duration-500 hover:-translate-y-8">
              {/* Soft Ambient Radial Blur */}
              <div className="absolute -inset-6 rounded-[999px] bg-gradient-to-b from-neutral-300/40 via-neutral-200/20 to-transparent dark:from-neutral-700/25 dark:via-neutral-800/10 dark:to-transparent blur-3xl -z-10" />

              {/* Pure Oval Image Container - Zero Harsh Borders */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[999px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/basit-majeed.jpg"
                  alt="Basit Majeed — Student of Islamic Studies, Arabic & Computer Engineering"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top filter contrast-[1.02] hover:scale-104 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Minimal Floating Identity Label Below */}
              <div className="mt-5 text-center space-y-1">
                <p className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Basit Majeed
                </p>
                <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                  Computer Engineering &amp; Hadith Scholarship
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <Link
            href="/about"
            className="group flex flex-col items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-200 transition-colors"
          >
            <span className="tracking-widest uppercase text-[10px] font-mono">Explore Academic Background</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
