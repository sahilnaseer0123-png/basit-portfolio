"use client";

import * as React from "react";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/social";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Computer Engineering",
  "Scholarly & Research",
  "Writing & Publications"
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
      <PageHeader
        watermark="PROJECTS"
        badgeText="Curated Archive"
        title="Projects &amp; Publications"
        description="A showcase of software implementations, computational linguistics experiments, classical Hadith research papers, and academic essays."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-200/60 dark:border-neutral-800/60">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer select-none",
              activeCategory === category
                ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-xs"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            )}
          >
            {category}
          </button>
        ))}
        <span className="ml-auto text-xs font-mono text-neutral-400 dark:text-neutral-500 hidden sm:inline-block">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "work" : "works"}
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project: Project) => (
          <Card key={project.id} className="flex flex-col justify-between group">
            <div>
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="accent" className="text-[10px]">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed mt-2">
                  {project.longDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
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
              </CardContent>
            </div>

            <CardFooter className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </Button>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="sm" className="h-8 text-xs gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live</span>
                    </Button>
                  </a>
                )}
                {project.links.read && (
                  <a
                    href={project.links.read}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Read</span>
                    </Button>
                  </a>
                )}
              </div>
              <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
