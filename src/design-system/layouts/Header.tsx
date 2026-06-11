"use client";

import { Logo } from "@/src/design-system/components";
import { URLS } from "@/src/shared/urls";
import {
  BookOpen,
  GraduationCap,
  Menu,
  MessageCircle,
  PackageCheck,
  Sun,
  Moon,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const headerLinks = [
  {
    label: "من نحن",
    href: URLS.about,
    icon: Users,
  },
  {
    label: "الدورات",
    href: URLS.courses,
    icon: BookOpen,
  },
  {
    label: "الباقات",
    href: URLS.packages,
    icon: PackageCheck,
  },
  {
    label: "آراء الطلاب",
    href: URLS.testimonials,
    icon: MessageCircle,
  },
];
function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/60 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-primary/15 bg-background/95 p-4 shadow-lg backdrop-blur-2xl">
          <nav className="flex flex-col gap-2">
            {headerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-md px-4 py-3 font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-5" aria-hidden="true" />
                  {link.label}
                </Link>
              );
            })}
            <div className="my-2 h-px w-full bg-border" />
            <Link
              href={URLS.courses}
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-bold text-background shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <GraduationCap className="size-5" aria-hidden="true" />
              ابدأ التعلم
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const nextTheme = theme === "dark" ? "light" : "dark";

    const updateDOM = () => {
      setTheme(nextTheme);
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("codeKody-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("codeKody-theme", "light");
      }
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as any).startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  };

  if (theme === null) {
    return (
      <div className="size-10 rounded-xl border border-border bg-secondary/30 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/60 text-foreground transition-all duration-300 hover:scale-105 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 overflow-hidden cursor-pointer"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute transition-all duration-500 ease-in-out ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <Moon className="size-5 text-indigo-600 dark:text-indigo-400" />
      </span>
      <span
        className={`absolute transition-all duration-500 ease-in-out ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        <Sun className="size-5 text-amber-500" />
      </span>
    </button>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-background/90 shadow-sm backdrop-blur-xl">
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4 lg:gap-8">
          <Link
            href={URLS.home}
            className="flex shrink-0 items-center gap-3 rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="Codecody home"
          >
            <Logo />
            <span className="hidden rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-bold text-primary sm:inline-flex">
              Code Kody
            </span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-md border border-border bg-secondary/60 p-1 md:flex">
            {headerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  onClick={() => {
                    const sectionId = document.getElementById(link.href.slice(1));
                    if (sectionId) {
                      sectionId.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  href={link.href}
                  key={link.href}
                  className="flex h-10 shrink-0 items-center gap-2 rounded-md border border-border bg-background px-3 font-bold text-black dark:text-white transition-colors hover:text-white hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              href={URLS.courses}
              className="hidden h-11 shrink-0 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-bold text-background shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 lg:flex"
            >
              <GraduationCap className="size-4" aria-hidden="true" />
              ابدأ التعلم
            </Link>

            <MobileHeader />
          </div>
        </div>
      </section>
    </header>
  );
}
