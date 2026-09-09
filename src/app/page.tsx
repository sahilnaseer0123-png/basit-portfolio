import Link from "next/link";
import { ArrowUpRight, Binary, BookOpen, PenTool, Terminal } from "lucide-react";
import { HeroPreview } from "@/components/home/hero-preview";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroPreview />

      {/* Dual Discipline Philosophy Banner */}
      <section className="border-y border-neutral-200/70 bg-neutral-100/50 py-16 transition-colors dark:border-neutral-800/70 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <Badge variant="outline" className="font-mono text-[11px]">
                Core Philosophy
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                Bridging Algorithmic Logic &amp; Classical Tradition
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Computer Engineering teaches systematic problem decomposition and computational verification. Classical Hadith scholarship pioneered rigorous evidentiary criticism and biographical network validation over a millennium ago.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 mb-3">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Computational Rigor
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Data structures, modular architecture, algorithmic efficiency, and resilient software concepts designed with precision.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/60 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 mb-3">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Scholarly Authentication
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Isnad chain verification, biographical analysis (Ilm ar-Rijal), and Arabic philological criticism rooted in classical scholarship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-xs">
                Selected Work
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                Featured Projects &amp; Research
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
                A selection of computational utilities, scholarly monographs, and software concepts.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                <span>View All Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between group">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-[11px] font-mono">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-3 mt-1">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 text-xs font-medium text-neutral-900 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300 transition-colors"
                    >
                      <span>Explore details</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies Quick Overview */}
      <section className="border-t border-neutral-200/70 bg-white py-20 transition-colors dark:border-neutral-800/70 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-xs">
                Areas of Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                Skills &amp; Capabilities
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
                Structured into computer engineering, classical academic scholarship, and professional writing.
              </p>
            </div>
            <Link href="/about">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                <span>View Full Curriculum</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const iconMap: Record<string, React.ReactNode> = {
                Binary: <Binary className="h-5 w-5" />,
                BookOpen: <BookOpen className="h-5 w-5" />,
                PenTool: <PenTool className="h-5 w-5" />
              };

              return (
                <div
                  key={category.title}
                  className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 mb-4">
                    {iconMap[category.iconName] || <Binary className="h-5 w-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-4 leading-relaxed">
                    {category.subtitle}
                  </p>
                  <ul className="space-y-2.5">
                    {category.items.slice(0, 4).map((item) => (
                      <li key={item.name} className="flex items-start gap-2 text-xs">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                        <div>
                          <span className="font-medium text-neutral-800 dark:text-neutral-200">
                            {item.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="border-t border-neutral-200/70 bg-neutral-900 text-white py-16 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
          <Badge variant="outline" className="text-xs border-neutral-700 text-neutral-300">
            Let&apos;s Connect
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Interested in Research, Writing, or Engineering Collaboration?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            I am always open to scholarly discussions, academic collaborations, and software engineering opportunities.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-neutral-950 hover:bg-neutral-100 font-medium text-sm gap-2"
              >
                <span>View Contact Directory</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="mailto:contact.basitmajeed@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="border-neutral-700 text-white hover:bg-neutral-800 font-medium text-sm"
              >
                <span>Direct Email</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
