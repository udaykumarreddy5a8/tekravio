import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Database, Bot, Check, Zap, Sparkles, Shield, Workflow, Users, Server } from "lucide-react";
import { SiteShell, PageHero, Breadcrumbs } from "@/components/site-shell";
import { LabsLogo } from "@/components/brand-logos";

export const Route = createFileRoute("/labs")({
  head: () => ({
    meta: [
      { title: "Tekravio Labs — Accelerator kits & internal SaaS" },
      {
        name: "description",
        content:
          "Production-grade starter kits and internal SaaS tools that compress months of work into days of integration.",
      },
      { property: "og:title", content: "Tekravio Labs — Accelerators & internal SaaS" },
      {
        property: "og:description",
        content:
          "Battle-tested kits for RAG, auth, billing, observability, and internal tooling. Built from real client engagements.",
      },
      { property: "og:url", content: "/labs" },
      { name: "twitter:title", content: "Tekravio Labs — Accelerators & internal SaaS" },
      { name: "twitter:description", content: "Battle-tested kits for RAG, auth, billing, observability, and internal tooling." },
    ],
    links: [{ rel: "canonical", href: "/labs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Labs", item: "/labs" },
          ],
        }),
      },
    ],
  }),
  component: LabsPage,
});

const kits = [
  {
    icon: Bot,
    tag: "AI Accelerators",
    title: "RAG-in-a-Box",
    desc: "Production RAG template with ingestion, evals, guardrails, and a cost dashboard — wire in your data, ship in days.",
    bullets: ["Eval harness included", "Multi-provider LLM router", "PII redaction layer"],
  },
  {
    icon: Boxes,
    tag: "Platform Kits",
    title: "SaaS Starter Stack",
    desc: "Auth, billing, multitenancy, audit logs, and admin dashboards — opinionated, typed, and tested.",
    bullets: ["Stripe + Paddle adapters", "Role-based access control", "Audit + compliance ready"],
  },
  {
    icon: Database,
    tag: "Internal SaaS",
    title: "Ops & Data Tooling",
    desc: "Internal dashboards, data backfills, runbooks, and on-call tools that operations teams actually want to use.",
    bullets: ["Self-serve runbooks", "Backfill orchestration", "On-call rotation UI"],
  },
];

const useCases = [
  {
    icon: Sparkles,
    industry: "SaaS",
    title: "AI-native document search for a legal tech startup",
    desc: "Deployed a RAG-in-a-Box kit with custom ingestion pipelines for contracts and case law. Lawyers query in natural language and get cited answers with source paragraphs in under 2 seconds.",
    tags: ["RAG-in-a-Box", "OpenAI", "Pinecone", "Node.js"],
  },
  {
    icon: Shield,
    industry: "Cybersecurity",
    title: "Self-serve compliance audit platform",
    desc: "Used the SaaS Starter Stack to launch a multi-tenant compliance tool with RBAC, audit logs, and Stripe billing in 4 weeks instead of 4 months.",
    tags: ["SaaS Starter", "Stripe", "PostgreSQL", "React"],
  },
  {
    icon: Workflow,
    industry: "Operations",
    title: "Automated data backfill and reconciliation",
    desc: "Built an internal Ops tool that orchestrates scheduled backfills across 6 data sources, with failure retries, Slack alerts, and a self-serve runbook library.",
    tags: ["Ops Tooling", "Temporal", "Python", "Docker"],
  },
  {
    icon: Users,
    industry: "HR Tech",
    title: "Internal hiring workflow engine",
    desc: "Replaced scattered spreadsheets with a unified hiring dashboard — candidate tracking, interview scheduling, and offer approvals with real-time Slack notifications.",
    tags: ["Internal SaaS", "Next.js", "GraphQL", "AWS"],
  },
  {
    icon: Server,
    industry: "Cloud Infrastructure",
    title: "Multi-tenant observability portal",
    desc: "Shipped a white-label observability dashboard that ingests metrics from client Kubernetes clusters and generates auto-refreshing Grafana-like views with RBAC isolation.",
    tags: ["Platform Kit", "Go", "ClickHouse", "Kubernetes"],
  },
  {
    icon: Bot,
    industry: "Customer Support",
    title: "Agentic support triage system",
    desc: "Integrated a guardrail-heavy LLM router that classifies incoming tickets, drafts responses, and escalates only the ambiguous ones — cutting first-response time by 70%.",
    tags: ["AI Accelerators", "LangChain", "Redis", "FastAPI"],
  },
];

const clients = [
  { name: "LexiQuery", industry: "Legal Tech", outcome: "AI search live in 3 weeks" },
  { name: "FortifyOps", industry: "Cybersecurity", outcome: "SOC 2-ready SaaS in 4 sprints" },
  { name: "DataStream", industry: "Operations", outcome: "6 backfills automated" },
  { name: "HireFlow", industry: "HR Tech", outcome: "Hiring cycle cut by 40%" },
  { name: "CloudWatch", industry: "Cloud Infra", outcome: "Multi-tenant observability portal" },
  { name: "SupportAI", industry: "Customer Support", outcome: "70% faster first response" },
];

function LabsPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Labs" }]} />
      <PageHero
        eyebrow="Tekravio Labs"
        title="Accelerator kits."
        accentTitle="Months → days."
        subtitle={
          <>
            Production-grade starters and internal SaaS tools — extracted from real{" "}
            <Link to="/studio" className="text-accent hover:underline">
              Studio
            </Link>{" "}
            engagements so your team starts at sprint 5, not sprint 1.
          </>
        }
        ctaLabel="Request access"
        ctaHref="mailto:info@tekravio.com?subject=Labs%20access%20request"
      />

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              The Catalog
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Battle-tested. Not boilerplate.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every kit ships from a real client problem we solved twice — so we built it once,
              properly.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {kits.map((k) => (
              <article
                key={k.tag}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-colors hover:border-accent/40"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <k.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {k.tag}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{k.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{k.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {k.bullets.map((b) => (
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
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                How it works
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Licensed. Integrated. Owned.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Kits are licensed per project and integrated by the same{" "}
                <Link to="/studio" className="text-accent hover:underline">
                  Studio
                </Link>{" "}
                seniors who built them. You get the source, the tests, and the architectural decisions —
                not a black box.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Source-available, perpetual license",
                  "Senior engineer-led integration",
                  "Upgrades shipped as PRs",
                  "Roadmap shaped by integrators",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-foreground/90">
                    <Zap className="h-4 w-4 text-accent" /> {b}
                  </li>
                ))}
              </ul>
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
                <LabsLogo className="h-10 w-10 text-accent" />
                <p className="mt-6 text-xl font-medium leading-relaxed tracking-tight">
                  "We compress the first three sprints of any new build into a clean checkout.
                  Then the seniors take it the rest of the way."
                </p>
                <p className="mt-4 text-sm text-muted-foreground">— Labs engineering lead</p>
              </div>
            </div>
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
              Kits in action.
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
              Teams that started with a kit.
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
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Skip the first month. Start on the hard part.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us what you're building. We'll tell you which kit fits and what a{" "}
              <Link to="/studio" className="text-accent hover:underline">
                Studio integration sprint
              </Link>{" "}
              would look like.
            </p>
            <a
              href="mailto:info@tekravio.com?subject=Labs%20enquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Request access
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
