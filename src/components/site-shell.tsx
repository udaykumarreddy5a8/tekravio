import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TekravioLogo } from "@/components/brand-logos";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <TekravioLogo className="h-8 w-8 md:h-7 md:w-7" />
            <span className="hidden text-lg font-semibold tracking-tight sm:inline">
              tekravio
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link
              to="/academy"
              className="hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Academy
            </Link>
            <Link
              to="/studio"
              className="hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Studio
            </Link>
            <Link
              to="/labs"
              className="hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Labs
            </Link>
            <Link
              to="/careers"
              className="hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Careers
            </Link>
          </nav>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Book a call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <TekravioLogo className="h-5 w-5" />
            <span>© 2025 Tekravio. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/academy" className="hover:text-foreground">
              Academy
            </Link>
            <Link to="/studio" className="hover:text-foreground">
              Studio
            </Link>
            <Link to="/labs" className="hover:text-foreground">
              Labs
            </Link>
            <Link to="/careers" className="hover:text-foreground">
              Careers
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <svg
                className="h-3.5 w-3.5 text-border"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.to ? (
              <Link to={item.to} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accentTitle,
  ctaLabel = "Talk to a senior engineer",
  ctaHref = "/#contact",
}: {
  eyebrow: string;
  title: string;
  accentTitle?: string;
  subtitle: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.55 0.18 220 / 0.35), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 text-center md:pt-28">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}{" "}
          {accentTitle && (
            <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
              {accentTitle}
            </span>
          )}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.75_0.16_220_/_0.6)]"
          >
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
