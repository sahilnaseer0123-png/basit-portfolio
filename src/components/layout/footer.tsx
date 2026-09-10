import { Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/social";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200/80 bg-neutral-50/50 py-12 transition-colors dark:border-neutral-800/80 dark:bg-neutral-950/50 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand & Brief */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                Basit Majeed
              </span>
              <span className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Portfolio &amp; Research
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Student of Islamic Studies, Arabic &amp; Computer Engineering. Exploring the union of computational systems, traditional Hadith sciences, and philology.
            </p>
          </div>

          {/* Social Links & Navigation */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="mailto:contact.basitmajeed@gmail.com"
              className="flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
              aria-label="Send Email"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <a
              href="https://instagram.com/abbasitlone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Instagram</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <a
              href="https://facebook.com/Abuamrahabbasit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
              aria-label="Facebook Profile"
            >
              <FacebookIcon className="h-4 w-4" />
              <span>Facebook</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 dark:text-neutral-400">
          <p>© {currentYear} Basit Majeed. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profileData.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
