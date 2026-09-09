import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Basit Majeed — Student of Islamic Studies, Arabic & Computer Engineering",
    template: "%s | Basit Majeed"
  },
  description:
    "Personal portfolio of Basit Majeed. Bridging computer engineering, Hadith scholarship, classical Arabic philology, and analytical writing.",
  keywords: [
    "Basit Majeed",
    "Computer Engineering",
    "Hadith Scholarship",
    "Arabic Language",
    "Classical Islamic Research",
    "Software Engineering",
    "Technical Writing",
    "Portfolio"
  ],
  authors: [{ name: "Basit Majeed" }],
  creator: "Basit Majeed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://basitmajeed.vercel.app",
    title: "Basit Majeed — Student of Islamic Studies, Arabic & Computer Engineering",
    description:
      "Bridging computer engineering, Hadith scholarship, classical Arabic philology, and analytical writing.",
    siteName: "Basit Majeed Portfolio"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
