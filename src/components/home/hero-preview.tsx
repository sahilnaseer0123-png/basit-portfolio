import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroPreview() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#191a1f] via-[#211f24] to-[#341d15] text-white flex flex-col justify-between pt-6 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14">
      {/* Warm Ambient Studio Glows mimicking reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-orange-600/35 via-amber-600/20 to-transparent blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-neutral-800/40 via-neutral-900/20 to-transparent blur-[100px]"
      />

      {/* Top Editorial Sub-Bar */}
      <div className="relative z-30 mx-auto w-full max-w-7xl flex items-center justify-between pt-2 pb-4 border-b border-white/10 text-xs text-neutral-300">
        {/* Left Name */}
        <div className="font-bold text-base sm:text-lg tracking-tight text-white">
          Basit Majeed
        </div>

        {/* Center Rating / Discipline Indicator */}
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

        {/* Right Location Tag */}
        <div className="font-mono text-xs text-neutral-400 text-right">
          <span>Kashmir, India</span>
          <span className="hidden sm:inline-block ml-2 text-neutral-500">· Available for Research</span>
        </div>
      </div>

      {/* Massive Editorial Typography + Layered Cutout Composition */}
      <div className="relative my-auto w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-4 sm:py-8">
        {/* Top Giant Word: "SCHOLAR" */}
        <div
          aria-hidden="true"
          className="relative z-10 w-full text-center select-none font-black tracking-tighter text-[15vw] sm:text-[16vw] lg:text-[16.5vw] leading-[0.88] text-white uppercase drop-shadow-md"
        >
          SCHOLAR
        </div>

        {/* Flanking Editorial Info: Mid Left */}
        <div className="absolute left-2 sm:left-4 lg:left-8 top-[32%] sm:top-[35%] z-30 max-w-[210px] sm:max-w-[260px] text-left space-y-1.5 hidden md:block animate-in fade-in duration-500">
          <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
            Hey there, I&apos;m Basit Majeed.
          </p>
          <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
            Crafting rigorous computational systems &amp; preserving classical Hadith sciences.
          </p>
        </div>

        {/* Flanking Editorial Info: Mid Right */}
        <div className="absolute right-2 sm:right-4 lg:right-8 top-[32%] sm:top-[35%] z-30 max-w-[200px] text-right space-y-1.5 hidden md:block animate-in fade-in duration-500">
          <p className="text-xs sm:text-sm font-semibold text-white">
            Based in Kashmir,
          </p>
          <p className="text-[11px] sm:text-xs text-neutral-300">
            Researching &amp; Engineering worldwide
          </p>
        </div>

        {/* Center Piece: Transparent Cutout Portrait with Studio Lighting */}
        <div className="relative z-25 -mt-[9vw] sm:-mt-[11vw] w-[290px] sm:w-[380px] md:w-[440px] lg:w-[490px] aspect-[4/5] pointer-events-none transition-transform duration-700 hover:scale-[1.02]">
          <Image
            src="/images/basit-majeed-cutout.png"
            alt="Basit Majeed — Scholar & Computer Engineer"
            fill
            sizes="(max-width: 640px) 290px, (max-width: 1024px) 440px, 490px"
            priority
            className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Bottom Giant Word: "ENGINEER" */}
        <div
          aria-hidden="true"
          className="relative z-20 w-full text-center select-none font-black tracking-tighter text-[15vw] sm:text-[16vw] lg:text-[16.5vw] leading-[0.88] text-white uppercase -mt-[9vw] sm:-mt-[11vw] drop-shadow-xl"
        >
          ENGINEER
        </div>
      </div>

      {/* Bottom Editorial Bar: Metrics & Actions */}
      <div className="relative z-30 mx-auto w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Metric Counter on Bottom Left */}
        <div className="flex items-center gap-4">
          <div className="space-y-0.5">
            <span className="font-mono text-2xl sm:text-3xl font-black text-white">
              Dual Focus
            </span>
            <p className="text-[11px] text-neutral-400 max-w-[200px] leading-tight">
              Computer Science fundamentals &amp; classical Hadith philology
            </p>
          </div>
        </div>

        {/* Mobile Info (visible on mobile only) */}
        <div className="text-center sm:hidden text-xs text-neutral-300 max-w-xs">
          Student of Islamic Studies, Arabic &amp; Computer Engineering.
        </div>

        {/* Action Buttons on Bottom Right */}
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
    </section>
  );
}
