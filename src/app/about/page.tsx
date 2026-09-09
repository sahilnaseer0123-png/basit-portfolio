import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Binary, BookOpen, GraduationCap, PenTool, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Basit Majeed's academic journey bridging Computer Engineering, Hadith Scholarship, and classical Arabic research."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
      {/* Editorial Page Header */}
      <PageHeader
        watermark="ABOUT"
        badgeText="Biography &amp; Foundations"
        title="Scholarship, Engineering &amp; Research"
        description="Exploring how computational systems and classical Islamic traditions cross-pollinate to produce deeper rigor, intellectual clarity, and meaningful work."
      />

      {/* Biography & Portrait Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Left: Comprehensive Biography Text */}
        <div className="lg:col-span-7 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              The Dual Pursuit: Logic &amp; Tradition
            </h2>
            {profileData.fullBio.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Pillars / Values */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4.5 dark:border-neutral-800 dark:bg-neutral-900/40">
              <span className="font-mono text-xs font-semibold text-neutral-950 dark:text-neutral-100">
                01. Rigorous Authentication
              </span>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Evaluating source integrity through historical chains, biographical reliability, and philological scrutiny.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4.5 dark:border-neutral-800 dark:bg-neutral-900/40">
              <span className="font-mono text-xs font-semibold text-neutral-950 dark:text-neutral-100">
                02. Algorithmic Thinking
              </span>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Applying structural decomposition, graph theory, and clean software architecture to complex domains.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Boundary-Free Elevated Oval Portrait & Key Facts */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-6">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:-translate-y-4">
            {/* Ambient Radial Glow */}
            <div className="absolute -inset-4 rounded-[999px] bg-gradient-to-b from-neutral-300/30 to-transparent dark:from-neutral-700/20 dark:to-transparent blur-2xl -z-10" />

            {/* Boundary-Free Oval Photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[999px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/basit-majeed.jpg"
                alt="Basit Majeed"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top filter contrast-[1.02]"
                priority
              />
            </div>

            <div className="mt-4 text-center space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                  Basit Majeed
                </span>
                <Badge variant="accent" className="text-[10px]">Scholar-Engineer</Badge>
              </div>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                Kashmir, India
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-5 dark:border-neutral-800 dark:bg-neutral-900/30 text-center">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Have a research inquiry or project?
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-3">
              I am always eager to engage in thoughtful dialogue and collaborations.
            </p>
            <Link href="/contact">
              <Button size="sm" className="w-full gap-1.5 text-xs">
                <span>View Contact Directory</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education & Academic Journey */}
      <section className="mb-20">
        <div className="mb-8 space-y-1">
          <Badge variant="secondary" className="text-xs">
            Academic Background
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Education &amp; Scholarly Formation
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Formal training in engineering paired with traditional guided scholarship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.education.map((item, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    <GraduationCap className="h-4 w-4" />
                    <span>{item.period}</span>
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    {item.focus}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{item.degree}</CardTitle>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {item.institution}
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2">
                  {item.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Skills & Core Competencies Section */}
      <section>
        <div className="mb-8 space-y-1">
          <Badge variant="secondary" className="text-xs">
            Curriculum of Competencies
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Skills &amp; Technical Capabilities
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Specific proficiencies across computer engineering, classical Islamic scholarship, and academic writing.
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category) => {
            const iconMap: Record<string, React.ReactNode> = {
              Binary: <Binary className="h-5 w-5" />,
              BookOpen: <BookOpen className="h-5 w-5" />,
              PenTool: <PenTool className="h-5 w-5" />
            };

            return (
              <div
                key={category.title}
                className="rounded-3xl border border-neutral-200/80 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
                    {iconMap[category.iconName] || <Sparkles className="h-4 w-4" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-50">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4 transition-all hover:border-neutral-200 dark:border-neutral-800/80 dark:bg-neutral-950/40 dark:hover:border-neutral-700"
                    >
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
