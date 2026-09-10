import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroPreview() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#191a1f] via-[#211f24] to-[#341d15] text-white flex flex-col justify-between pt-6 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14">

      {/* Warm Ambient Glow — bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-orange-600/35 via-amber-600/20 to-transparent blur-[120px]"
      />
      {/* Cool top-left accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-neutral-800/40 via-neutral-900/20 to-transparent blur-[100px]"
      />

      {/* Top Editorial Bar */}
      <div className="relative z-30 mx-auto w-full max-w-7xl flex items-center justify-between pt-2 pb-4 border-b border-white/10 text-xs text-neutral-300">
        <div className="font-bold text-base sm:text-lg tracking-tight text-white">
          Basit Majeed
        </div>
        <div className="hidden md:flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="ml-1 font-mono text-[11px] font-semibold text-white">5.0 / Dual Discipline</span>
          </div>
          <span className="text-[10px] text-neutral-400 tracking-wide mt-0.5">
            Computer Engineering · Classical Hadith Scholarship
          </span>
        </div>
        <div className="font-mono text-xs text-neutral-400 text-right">
          <span>Kashmir, India</span>
          <span className="hidden sm:inline-block ml-2 text-neutral-500">· Available for Research</span>
        </div>
      </div>

      {/* Main Hero Body */}
      <div className="relative flex-1 mx-auto w-full max-w-7xl flex items-center py-6 sm:py-10">

        {/* Portrait — anchored to right side, behind left content */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 w-[52%] sm:w-[46%] lg:w-[42%] pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/images/basit-majeed-cutout.png"
            alt="Basit Majeed — Scholar & Computer Engineer"
            fill
            sizes="(max-width: 640px) 52vw, (max-width: 1024px) 46vw, 42vw"
            priority
            className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)]"
          />
        </div>

        {/* Left Content — in front of portrait */}
        <div className="relative z-20 flex flex-col justify-center gap-5 sm:gap-7 max-w-[60%] sm:max-w-[56%] lg:max-w-[52%]">

          {/* SCHOLAR / ENGINEER — smaller, left-aligned */}
          <div className="leading-none select-none">
            <div className="font-black tracking-tighter uppercase text-[10vw] sm:text-[8.5vw] lg:text-[7.5vw] leading-[0.92] text-white drop-shadow-lg">
              SCHOLAR
            </div>
            <div className="font-black tracking-tighter uppercase text-[10vw] sm:text-[8.5vw] lg:text-[7.5vw] leading-[0.92] text-white drop-shadow-lg">
              ENGINEER
            </div>
          </div>

          {/* Amber divider */}
          <div className="w-12 h-[2px] bg-amber-500 rounded-full" />

          {/* Bio */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-semibold text-white leading-snug">
              Hey there, I&apos;m Basit Majeed.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-[320px]">
              Crafting rigorous computational systems &amp; preserving classical Hadith sciences. Student of Islamic Studies, Arabic &amp; Computer Engineering.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 pt-1">
              <MapPin className="h-3 w-3 text-amber-500" />
              <span>Kashmir, India · Researching &amp; Engineering worldwide</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/projects">
              <Button
                size="default"
                className="bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-semibold gap-1.5 shadow-lg"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="default"
                className="border-white/25 text-white hover:bg-white/10 text-xs font-medium"
              >
                <span>Full Biography</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="default"
                className="text-neutral-300 hover:text-white hover:bg-white/10 text-xs font-medium"
              >
                <span>Contact</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="relative z-30 mx-auto w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5">
          <span className="font-mono text-xl sm:text-2xl font-black text-white">Dual Focus</span>
          <p className="text-[11px] text-neutral-400 max-w-[220px] leading-tight">
            Computer Science fundamentals &amp; classical Hadith philology
          </p>
        </div>

        <div className="text-center sm:hidden text-xs text-neutral-400 max-w-xs">
          Student of Islamic Studies, Arabic &amp; Computer Engineering.
        </div>

        <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-mono">
          <span>© 2025 Basit Majeed</span>
          <span className="text-neutral-700">·</span>
          <span className="text-amber-500/80">Available for Research</span>
        </div>
      </div>
    </section>
  );
}
