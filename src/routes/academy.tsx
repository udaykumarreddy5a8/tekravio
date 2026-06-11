import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Users, Building2, BookOpen, Check } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site-shell";
import { AcademyLogo } from "@/components/brand-logos";
import { TechIcon } from "@/components/tech-icons";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Tekravio Academy — Stack-specific training by senior engineers" },
      {
        name: "description",
        content:
          "Cohort bootcamps and corporate upskilling across 17 stacks — taught by the same senior engineers who ship in Studio.",
      },
      { property: "og:title", content: "Tekravio Academy — Training that ships engineers" },
      {
        property: "og:description",
        content:
          "Hands-on cohort bootcamps and corporate upskilling across 17 stacks. Taught by working senior engineers.",
      },
      { property: "og:url", content: "/academy" },
      { name: "twitter:title", content: "Tekravio Academy — Training that ships engineers" },
      { name: "twitter:description", content: "Hands-on cohort bootcamps and corporate upskilling across 17 stacks." },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Academy", item: "/academy" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Tekravio Academy",
          url: "/academy",
          description: "Cohort bootcamps and corporate upskilling taught by senior engineers.",
        }),
      },
    ],
  }),
  component: AcademyPage,
});

const programs = [
  {
    icon: Users,
    tag: "Cohort Bootcamps",
    title: "12-week, project-based cohorts",
    desc: "Small cohorts, live senior mentors, and a portfolio project you can defend in any interview.",
    bullets: ["Live code reviews", "1:1 mentor pairing", "Capstone shipped to prod"],
  },
  {
    icon: Building2,
    tag: "Corporate Upskilling",
    title: "Custom curricula for engineering teams",
    desc: (
      <>
        Onboard new hires, migrate legacy teams, or stand up an AI practice — built around your codebase, with optional{" "}
        <Link to="/labs" className="text-accent hover:underline">
          Labs kit
        </Link>{" "}
        integration.
      </>
    ),
    bullets: ["Stack assessment", "Custom curriculum", "Outcome metrics, not attendance"],
  },
  {
    icon: BookOpen,
    tag: "Workshops",
    title: "Focused 1–3 day deep dives",
    desc: "Targeted intensives on RAG, LLM evaluation, system design, DevOps, and platform engineering.",
    bullets: ["Hands-on labs", "Take-home repo", "Senior instructor only"],
  },
];

const tracks = [
  { name: "Java & Spring", icon: "Java & Spring" },
  { name: "Python & FastAPI", icon: "Python & FastAPI" },
  { name: "Node.js & TypeScript", icon: "Node.js & TypeScript" },
  { name: "React & Next.js", icon: "React & Next.js" },
  { name: "Angular", icon: "Angular" },
  { name: "QA & Test Automation", icon: "QA & Test Automation" },
  { name: "DevOps & SRE", icon: "DevOps & SRE" },
  { name: "Data Science", icon: "Data Science" },
  { name: "Golang", icon: "Golang" },
  { name: "Android", icon: "Android" },
  { name: "iOS", icon: "iOS" },
  { name: "AWS", icon: "AWS" },
  { name: "Azure", icon: "Azure" },
  { name: "GCP", icon: "GCP" },
  { name: "AI / LLM Engineering", icon: "AI / LLM Engineering" },
  { name: "ML & MLOps", icon: "ML & MLOps" },
  { name: "RAG & Embeddings", icon: "RAG & Embeddings" },
];

function AcademyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tekravio Academy"
        title="Training that ships"
        accentTitle="engineers."
        subtitle={
          <>
            Hands-on bootcamps and corporate programs across 17 stacks — taught by the same senior engineers who deliver in{" "}
            <Link to="/studio" className="text-accent hover:underline">
              Studio
            </Link>
            .
          </>
        }
        ctaLabel="Talk to an instructor"
        ctaHref="mailto:info@tekravio.com?subject=Academy%20enquiry"
      />

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Programs
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Three formats. One bar.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.tag}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-colors hover:border-accent/40"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {p.tag}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.bullets.map((b) => (
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
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Tracks
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                17 stacks. All taught by people who ship them.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Every track is owned by a senior engineer with production scars on that stack.
              No video-only instructors.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {tracks.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-4 text-sm font-medium text-foreground/90"
              >
                <TechIcon name={t.icon} className="h-4 w-4 text-accent" />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
            <div className="flex items-center gap-3 text-accent">
              <AcademyLogo className="h-7 w-7" />
              <span className="text-sm font-medium uppercase tracking-[0.2em]">
                Tekravio Academy
              </span>
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Train your team like we train ours.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us your stack, your gaps, and your timeline. We'll come back with an
              outcome-based proposal — not a course catalog.
            </p>
            <a
              href="mailto:info@tekravio.com?subject=Academy%20enquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Request a syllabus
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
