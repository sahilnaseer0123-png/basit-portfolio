"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur-md transition-colors dark:border-neutral-800/70 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform active:scale-95"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 shadow-xs transition-colors group-hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:group-hover:bg-neutral-200">
            <span className="font-mono text-xs font-bold tracking-tighter">BM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Basit Majeed
            </span>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium tracking-wide">
              Engineering & Islamic Studies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-neutral-200/80 bg-neutral-50/60 p-1 backdrop-blur-xs dark:border-neutral-800/80 dark:bg-neutral-900/50">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-white text-neutral-950 shadow-xs dark:bg-neutral-800 dark:text-neutral-50"
                    : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <ThemeToggle />
          <Link href="/contact">
            <Button
              size="sm"
              variant="default"
              className="gap-1.5 text-xs font-medium"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-1.5 sm:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="h-9 w-9 rounded-full text-neutral-700 dark:text-neutral-300"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/95 sm:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-neutral-100 text-neutral-950 font-semibold dark:bg-neutral-800/80 dark:text-neutral-50"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link href="/contact" className="w-full block">
                <Button className="w-full gap-1.5 text-xs font-medium justify-center">
                  <span>Get in Touch</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
