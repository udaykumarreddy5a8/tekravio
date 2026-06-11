import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Rocket,
  Wrench,
  Brain,
  Check,
  Phone,
  FileText,
  PackageCheck,
  Building2,
  ShoppingCart,
  Landmark,
  HeartPulse,
  BarChart3,
  Globe,
} from "lucide-react";
import { SiteShell, PageHero, Breadcrumbs } from "@/components/site-shell";
import { StudioLogo } from "@/components/brand-logos";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Tekravio Studio | Fixed-Scope Engineering Sprints" },
      {
        name: "description",
        content:
          "Hire senior engineers on fixed-scope, fixed-price sprints. Product engineering, legacy modernization, and AI integration with full code ownership.",
      },
      { property: "og:title", content: "Tekravio Studio | Fixed-Scope Engineering Sprints" },
      {
        property: "og:description",
        content:
          "Senior-only sprints with itemized scope, fixed pricing, and clean handover. No pyramids, no padding.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tekravio Studio | Fixed-Scope Engineering Sprints" },
      {
        name: "twitter:description",
        content:
          "Senior-only sprints with itemized scope, fixed pricing, and clean handover. No pyramids, no padding.",
      },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Studio", item: "/studio" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Tekravio Studio",
          description: "Fixed-scope, fixed-price engineering sprints with senior engineers.",
          url: "/studio",
          provider: {
            "@type": "Organization",
            name: "Tekravio",
          },
          areaServed: "Global",
          serviceType: [
            "Product Engineering",
            "Legacy Modernization",
            "AI Integration",
          ],
        }),
      },
    ],
  }),
  component: StudioPage,
});

const services = [
  {
    icon: Rocket,
    tag: "Product Engineering",
    title: "Zero to v1, fast.",
    desc: "Greenfield products built in tight sprints — design, backend, frontend, infra — by people who have shipped before.",
    bullets: ["Architecture upfront", "2-week demoable sprints", "Full code + docs handover"],
  },
  {
    icon: Wrench,
    tag: "Modernization",
    title: "Untangle the legacy.",
    desc: "Migrate monoliths, replatform on cloud, retire dead code, and leave your team a system they actually want to maintain.",
    bullets: ["Risk-first migration plan", "Strangler-fig rollouts", "Knowledge transfer included"],
  },
  {
    icon: Brain,
    tag: "AI Integration",
    title: "LLMs in production, not in slides.",
    desc: (
      <>
        RAG pipelines, agents, evals, and guardrails wired into your existing stack — with measurable success metrics. Need a faster start? Explore our{" "}
        <Link to="/labs" className="text-accent hover:underline">
          Labs RAG-in-a-Box kit
        </Link>
        .
      </>
    ),
    bullets: ["RAG + eval harness", "Cost & latency budgets", "Human-in-the-loop reviews"],
  },
];

const steps = [
  { n: "01", icon: Phone, title: "Discovery", desc: "2-hour senior-led tech health check. Diagnose first." },
  { n: "02", icon: FileText, title: "Fixed Proposal", desc: "Itemized scope, fixed price, defined sprint plan." },
  { n: "03", icon: Rocket, title: "Sprint Delivery", desc: "Tight, demoed sprints with live access to the team." },
  { n: "04", icon: PackageCheck, title: "Handover", desc: "Code, docs, and ownership transferred. No lock-in." },
];

const useCases = [
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    title: "Microservices migration for a high-traffic marketplace",
    desc: "Migrated a monolithic Java storefront to Spring Boot microservices on AWS ECS. Reduced deployment time from 4 hours to 12 minutes and cut infra costs by 40%.",
    tags: ["Java", "Spring Boot", "AWS", "Kafka"],
  },
  {
    icon: Landmark,
    industry: "FinTech",
    title: "Real-time fraud detection pipeline",
    desc: "Built an event-streaming fraud detection system processing 50K+ TPS. Integrated ML models with sub-50ms inference latency and automated remediation workflows.",
    tags: ["Python", "Kafka", "ML", "Kubernetes"],
  },
  {
    icon: HeartPulse,
    industry: "HealthTech",
    title: "HIPAA-compliant patient data platform",
    desc: "Delivered a React + Node.js patient portal with end-to-end encryption, audit logging, and EHR integrations. Passed SOC 2 Type II in the first audit cycle.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: BarChart3,
    industry: "SaaS / Analytics",
    title: "AI-powered analytics assistant",
    desc: "Embedded a RAG-based natural language querying layer over a multi-tenant data warehouse. Users ask questions in plain English and get generated SQL + visualizations.",
    tags: ["RAG", "LLM", "React", "Python"],
  },
  {
    icon: Globe,
    industry: "Logistics",
    title: "Global supply chain visibility platform",
    desc: "Unified 12 disparate logistics APIs into a single GraphQL gateway with real-time tracking, predictive ETAs, and automated exception handling.",
    tags: ["GraphQL", "Go", "Redis", "GCP"],
  },
  {
    icon: Building2,
    industry: "Enterprise",
    title: "Legacy mainframe modernization",
    desc: "Retired a 20-year-old COBOL billing system by strangler-fig migration to Go microservices. Zero-downtime cutover with full data integrity verification.",
    tags: ["Go", "PostgreSQL", "Kubernetes", "Azure"],
  },
];

const clients = [
  { name: "Velocity Retail", industry: "E-Commerce", outcome: "60% faster deployments" },
  { name: "Apex Capital", industry: "FinTech", outcome: "50K TPS fraud pipeline" },
  { name: "MedSync", industry: "HealthTech", outcome: "HIPAA-ready in 8 weeks" },
  { name: "DataPulse", industry: "SaaS", outcome: "AI analytics live in 6 sprints" },
  { name: "GlobalFreight", industry: "Logistics", outcome: "12 APIs unified" },
  { name: "CoreLedger", industry: "Enterprise", outcome: "Zero-downtime migration" },
];

function StudioPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Studio" }]} />
      <PageHero
        eyebrow="Tekravio Studio"
        title="Sprint-based delivery."
        accentTitle="Senior only."
        subtitle="Fixed scope. Fixed price. Itemized deliverables. Full code ownership from day one — by engineers who finish what they start."
        ctaLabel="Scope a sprint"
        ctaHref="mailto:info@tekravio.com?subject=Studio%20sprint%20enquiry"
      />

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              What we ship.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.tag}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-colors hover:border-accent/40"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {s.tag}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-foreground/90">
                      <Check className="h-4 w-4 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Engagement Model
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Four steps. Zero ambiguity.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card/40 p-6">
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

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Use Cases
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Problems we have solved.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <article
                key={uc.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-colors hover:border-accent/40"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <uc.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {uc.industry}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{uc.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {uc.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Clients
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted by teams that ship.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/40"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    {c.industry}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{c.name}</h3>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent" />
                  <span>{c.outcome}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Client names are representative placeholders. Real references available on request.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
            <div className="flex items-center gap-3 text-accent">
              <StudioLogo className="h-7 w-7" />
              <span className="text-sm font-medium uppercase tracking-[0.2em]">
                Tekravio Studio
              </span>
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Bring us a problem. Leave with a system.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              The first conversation is a senior engineer reviewing what you have — not a
              sales pitch. We'll tell you, straight, what's worth doing next. Want to move faster? Start with a{" "}
              <Link to="/labs" className="text-accent hover:underline">
                Labs accelerator kit
              </Link>
              .
            </p>
            <a
              href="mailto:info@tekravio.com?subject=Studio%20enquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Start a discovery call
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
