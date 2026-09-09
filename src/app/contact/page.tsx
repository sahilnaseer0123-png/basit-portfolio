import { Metadata } from "next";
import { ArrowUpRight, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { GithubIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons/social";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct communication channels and social links for Basit Majeed. Get in touch for research inquiries, writing, or software collaborations."
};

export default function ContactPage() {
  const iconMap: Record<string, React.ReactNode> = {
    mail: <Mail className="h-5 w-5" />,
    instagram: <InstagramIcon className="h-5 w-5" />,
    facebook: <FacebookIcon className="h-5 w-5" />,
    github: <GithubIcon className="h-5 w-5" />,
    linkedin: <LinkedinIcon className="h-5 w-5" />
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
      {/* Editorial Page Header */}
      <PageHeader
        watermark="CONTACT"
        badgeText="Direct Inquiries"
        title="Connect &amp; Collaborate"
        description="Whether you wish to discuss classical Islamic research, Arabic philology, computer engineering, or writing collaborations, reach out through the verified links below."
      />

      <div className="space-y-10">
        {/* Primary Email Card */}
        <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="accent" className="text-xs">
                  Primary Channel
                </Badge>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  Direct Inbox
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                Email Address
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                For detailed academic inquiries, publishing requests, and software discussions.
              </p>
              <div className="pt-2">
                <span className="font-mono text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 select-all">
                  {profileData.email}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <CopyButton text={profileData.email} label="Copy Address" />
              <a href={`mailto:${profileData.email}`}>
                <Button className="gap-2 text-xs">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Verified Social & Professional Profiles Grid */}
        <div>
          <div className="mb-6 space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                Verified Social &amp; Research Channels
              </h3>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Direct links only — no intermediaries or contact forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.socialLinks.map((link) => (
              <Card
                key={link.name}
                className="flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900 transition-colors">
                        {iconMap[link.icon]}
                      </div>
                      <div>
                        <CardTitle className="text-base">{link.name}</CardTitle>
                        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                          {link.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-neutral-50 transition-colors" />
                  </div>
                  <CardDescription className="text-xs mt-3 leading-relaxed">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs gap-1.5 justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900 dark:group-hover:border-neutral-100 transition-colors"
                    >
                      <span>Visit {link.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic & Ethical Conduct Note */}
        <div className="rounded-2xl border border-neutral-200/70 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-neutral-500 dark:text-neutral-400 mt-0.5 shrink-0" />
            <div className="space-y-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                Communication Standards
              </p>
              <p>
                In accordance with academic integrity and classical research etiquette, all correspondence is reviewed personally. Responses are typically dispatched within 24–48 hours for academic queries, article proposals, and engineering collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
