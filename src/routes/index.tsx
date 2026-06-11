import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  X,
  Globe,
  Clock,
  Laptop,
  Phone,
  FileText,
  Rocket,
  PackageCheck,
  Mail,
  Quote,
  Award,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { TekravioLogo, AcademyLogo, StudioLogo, LabsLogo } from "@/components/brand-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tekravio — Senior-Only Engineering, Training & Accelerators" },
      {
        name: "description",
        content:
          "The anti-consulting firm. Senior-only delivery, fixed pricing, sprint-based engagements, full code ownership across Studio, Academy, and Labs.",
      },
      { name: "keywords", content: "software consulting, senior engineers, fixed-price sprints, engineering training, RAG accelerators, Tekravio" },
      { property: "og:title", content: "Tekravio — We Build. We Train. We Deliver." },
      {
        property: "og:description",
        content:
          "Enterprise tech consulting & training without the consulting tax. Senior engineers only.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Tekravio — We Build. We Train. We Deliver." },
      {
        name: "twitter:description",
        content: "Enterprise tech consulting & training without the consulting tax.",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tekravio",
          url: "/",
          logo: "/favicon.ico",
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "info@tekario.com",
              contactType: "customer support",
              availableLanguage: "English",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

type Stack = { name: string; icon: string };
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const stacks: Stack[] = [
  { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
  { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Angular", icon: `${DEVICON}/angular/angular-original.svg` },
  { name: "QA", icon: `${DEVICON}/selenium/selenium-original.svg` },
  { name: "DevOps", icon: `${DEVICON}/docker/docker-original.svg` },
  { name: "Data Science", icon: `${DEVICON}/pandas/pandas-original.svg` },
  { name: "Golang", icon: `${DEVICON}/go/go-original-wordmark.svg` },
  { name: "Android", icon: `${DEVICON}/android/android-original.svg` },
  { name: "iOS", icon: `${DEVICON}/apple/apple-original.svg` },
  { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: "Azure", icon: `${DEVICON}/azure/azure-original.svg` },
  { name: "GCP", icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
  { name: "AI / LLM", icon: `https://cdn.simpleicons.org/openai/22d3ee` },
  { name: "ML", icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
  { name: "RAG & Embeddings", icon: `https://cdn.simpleicons.org/langchain/22d3ee` },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2">
            <TekravioLogo className="h-8 w-8 md:h-7 md:w-7" />
            <span className="hidden text-lg font-semibold tracking-tight sm:inline">tekravio</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link to="/academy" className="hover:text-foreground">Academy</Link>
            <Link to="/studio" className="hover:text-foreground">Studio</Link>
            <Link to="/labs" className="hover:text-foreground">Labs</Link>
            <a href="#process" className="hover:text-foreground">Process</a>
            <Link to="/careers" className="hover:text-foreground">Careers</Link>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Book a call <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
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
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The anti-consulting firm
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              We Build.{" "}
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
                We Train.
              </span>{" "}
              We Deliver.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Senior-only engineering teams shipping sprint-based outcomes across 17+
              technology stacks. Fixed pricing. Itemized scope. Full code ownership —
              always.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.75_0.16_220_/_0.6)]"
              >
                Get a 2-hour tech health check <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#verticals"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-card"
              >
                See what we do
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-accent" /> Global Delivery</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> All Time Zones</span>
              <span className="inline-flex items-center gap-2"><Laptop className="h-4 w-4 text-accent" /> Remote-First</span>
            </div>
          </div>

          {/* Stack marquee */}
          <div className="relative mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-3">
              {[...stacks, ...stacks].map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted-foreground"
                >
                  <img src={s.icon} alt="" className="h-4 w-4 object-contain" loading="lazy" />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section id="problem" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">The Problem</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Traditional consulting is broken.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Structural incentives reward billable hours over outcomes. We rebuilt the model.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card/40">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="p-8">
                <div className="mb-6 inline-flex items-center gap-2 text-sm text-destructive">
                  <X className="h-4 w-4" /> Traditional Consulting
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Junior staff doing senior-priced work",
                    "Open-ended retainers, vague scope",
                    "Bloated pyramids billing by the hour",
                    "Code lock-in, you never truly own it",
                    "Months before anything ships",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[image:linear-gradient(180deg,oklch(0.21_0.04_240/0.6),oklch(0.21_0.04_240/0))] p-8">
                <div className="mb-6 inline-flex items-center gap-2 text-sm text-accent">
                  <Check className="h-4 w-4" /> The Tekravio Way
                </div>
                <ul className="space-y-4">
                  {[
                    "100% senior-only delivery teams",
                    "Sprint-based engagements, fixed pricing",
                    "Itemized scope — every line accountable",
                    "Lean teams. No pyramid, no padding.",
                    "Full code ownership from day one",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section id="verticals" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">What We Do</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Three verticals. One standard.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: AcademyLogo,
                tag: "Academy",
                to: "/academy" as const,
                title: "Stack-specific training",
                desc: "Hands-on bootcamps and corporate upskilling across 17 stacks — taught by the same seniors who ship in Studio.",
                bullets: ["Cohort programs", "Corporate training", "Custom curricula"],
              },
              {
                icon: StudioLogo,
                tag: "Studio",
                to: "/studio" as const,
                title: "Sprint-based delivery",
                desc: "Fixed-scope, fixed-price sprints. Discovery to handover with senior engineers and full code ownership.",
                bullets: ["Product engineering", "Modernization", "AI integration"],
              },
              {
                icon: LabsLogo,
                tag: "Labs",
                to: "/labs" as const,
                title: "Accelerator kits & SaaS",
                desc: "Production-grade starters and internal SaaS tools that compress months of work into days of integration.",
                bullets: ["Accelerator kits", "Internal tooling", "RAG templates"],
              },
            ].map((v) => (
              <Link
                key={v.tag}
                to={v.to}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-colors hover:border-accent/40"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[image:var(--gradient-accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">{v.tag}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {v.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-foreground/90">
                        <span className="h-1 w-1 rounded-full bg-accent" /> {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                    Explore {v.tag} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STACKS */}
      <section id="stacks" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">17 Stacks</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Deep expertise where it counts.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              No generalist resellers. Each stack is led by senior engineers with production scars.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {stacks.map((s) => (
              <div
                key={s.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-6 text-center text-sm font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
              >
                <img
                  src={s.icon}
                  alt={`${s.name} logo`}
                  className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                  loading="lazy"
                />
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">How It Works</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Four steps. Zero ambiguity.
            </h2>
          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", icon: Phone, title: "Free Discovery Call", desc: "A 2-hour tech health check. We diagnose, you decide." },
              { n: "02", icon: FileText, title: "Fixed Scope Proposal", desc: "Itemized deliverables, fixed price, defined timeline." },
              { n: "03", icon: Rocket, title: "Sprint-Based Delivery", desc: <>Senior engineers ship in tight, demoed sprints. <Link to="/studio" className="text-accent hover:underline">See how Studio works →</Link></> },
              { n: "04", icon: PackageCheck, title: "Handover", desc: "Full code, docs, and ownership transferred to your team." },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-border bg-card/40 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent">{s.n}</span>
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TEKRAVIO */}
      <section id="why" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Why Tekravio</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Built by engineers who have been on both sides.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "100% Senior Delivery", desc: "The expert you meet is the expert who ships. No junior bait-and-switch." },
              { icon: Zap, title: "Sprint-Based Speed", desc: "2–4 week sprints with live demos. No multi-month black boxes." },
              { icon: Award, title: "Big 4 Pedigree", desc: "Ex-Deloitte architects who know enterprise compliance, security, and scale." },
              { icon: Users, title: "Full Ownership", desc: "Clean handover with docs and knowledge transfer. Zero vendor lock-in." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card/40 p-6">
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Founder</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Uday kumar reddy
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ex-Deloitte. Started Tekravio after watching Big 4 firms structurally incentivize dragging projects instead of finishing them. Built the firm he wished he could have hired.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-accent">8+</span>
                  <span className="text-muted-foreground">Tech Stacks</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-accent">100%</span>
                  <span className="text-muted-foreground">Senior Delivery</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-semibold text-accent">Big 4</span>
                  <span className="text-muted-foreground">Pedigree</span>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/b-uday-kumar-reddy-88750b19b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.linkedin.com/in/b-uday-kumar-reddy-88750b19b/", "_blank", "noopener,noreferrer");
                }}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.55 0.18 220 / 0.3), transparent 60%)",
                }}
              />
              <div className="relative rounded-2xl border border-border bg-card/60 p-8">
                <Quote className="h-8 w-8 text-accent/60" />
                <blockquote className="mt-4 text-xl font-medium leading-relaxed tracking-tight">
                  The problem is not that enterprises do not invest in technology. It is that the firms they hire are structurally incentivised to drag projects, not finish them.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[image:var(--gradient-accent)]" />
                  <div>
                    <p className="text-sm font-semibold">Uday kumar reddy</p>
                    <p className="text-xs text-muted-foreground">Founder, Tekravio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 100% 0%, oklch(0.55 0.2 220 / 0.5), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Start with a 2-hour tech health check.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                No slides. No junior auditors. A senior engineer reviews what you have and tells you, straight, what is worth doing next.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:info@tekario.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@tekario.com</span>
                </a>
                <span className="text-sm text-muted-foreground">Reply within 24h, any time zone.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <TekravioLogo className="h-5 w-5" />
            <span>© 2025 Tekravio. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/academy" className="hover:text-foreground">Academy</Link>
            <Link to="/studio" className="hover:text-foreground">Studio</Link>
            <Link to="/labs" className="hover:text-foreground">Labs</Link>
            <Link to="/careers" className="hover:text-foreground">Careers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
