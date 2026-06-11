import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Globe,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  FileText,
  Code2,
  Target,
  Eye,
} from "lucide-react";
import { SiteShell, PageHero, Breadcrumbs } from "@/components/site-shell";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Tekravio | We Hire Hunger, Not Resumes" },
      {
        name: "description",
        content:
          "No GPA filter. No college name. No years gate for interns. Senior full-time roles + 3-month paid internships with PPO. Remote-first. Apply with GitHub, not CGPA.",
      },
      { property: "og:title", content: "Careers at Tekravio | We Hire Hunger, Not Resumes" },
      {
        property: "og:description",
        content:
          "4 senior full-time roles and 5 intern roles open. Resume screen → real-world assignment → 1 interview. No aptitude tests, no HR rounds.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers at Tekravio | We Hire Hunger, Not Resumes" },
      {
        name: "twitter:description",
        content:
          "4 senior full-time roles and 5 intern roles open. Resume screen → real-world assignment → 1 interview.",
      },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Careers", item: "/careers" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: "Engineering & Internship roles at Tekravio",
          description:
            "Senior full-time engineering roles (Java Full Stack, Data Analyst, QA Automation, SAP MM) and 3-month paid internships with PPO across Java, React, Python, Node.js, and AI research.",
          hiringOrganization: {
            "@type": "Organization",
            name: "Tekravio",
            sameAs: "/",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Remote — India / Global",
            },
          },
          employmentType: ["FULL_TIME", "INTERN"],
          occupationalCategory: "Software Engineering",
          directApply: true,
        }),
      },
    ],
  }),
  component: CareersPage,
});

const fullTimeRoles = [
  {
    title: "Java Full Stack Developer",
    type: "Full-time · 5–7 yrs",
    location: "Remote-friendly",
    stack: "Java · Spring Boot · React · TypeScript · Microservices · AWS",
    desc: "Build enterprise-grade Spring Boot backends and React frontends. Own both sides of the stack on live client projects. Fixed-price delivery, senior team only.",
  },
  {
    title: "Data Analyst (Python)",
    type: "Full-time · 5–7 yrs",
    location: "Remote-friendly",
    stack: "Python · Pandas · dbt · Airflow · BigQuery · Power BI",
    desc: "Build Python data pipelines, analytics dashboards, and AI-integrated data products for enterprise clients across BFSI, retail, and logistics.",
  },
  {
    title: "QA Automation Engineer",
    type: "Full-time · 5–8 yrs · Women encouraged",
    location: "Remote-friendly",
    stack: "Java · Selenium · RestAssured · TestNG · Jenkins · Cucumber",
    desc: "Own the automation framework. Java-based test suites integrated into CI/CD. Quality is a first-class discipline here — not a sprint afterthought. Women candidates strongly encouraged to apply.",
  },
  {
    title: "SAP MM Consultant",
    type: "Full-time · 6–10 yrs",
    location: "Remote-friendly",
    stack: "SAP MM · S/4HANA · MM-FI · MM-SD · Procurement · Inventory",
    desc: "Lead end-to-end SAP MM implementations for enterprise clients in manufacturing and FMCG. Own client workshops, configuration, UAT, and go-live. This is delivery, not support.",
  },
];

const internRoles = [
  {
    title: "Java — Backend Intern",
    duration: "3 months · Stipend + PPO",
    location: "Remote-first",
    stack: "Spring Boot · JPA / Hibernate · REST APIs · MySQL · JUnit 5",
    desc: "Build enterprise-grade REST APIs with Spring Boot. Real microservices, JPA/Hibernate, and production-quality backend systems used by actual clients.",
  },
  {
    title: "React — Frontend Intern",
    duration: "3 months · Stipend + PPO",
    location: "Remote-first",
    stack: "TypeScript · TanStack Query · Zustand · Tailwind CSS · Vitest",
    desc: "Build polished enterprise dashboards with React and TypeScript. Think TanStack Query, Zustand, and Vitest — not jQuery and hope.",
  },
  {
    title: "Python — Backend / Data Intern",
    duration: "3 months · Stipend + PPO",
    location: "Remote-first",
    stack: "FastAPI · SQLAlchemy · Pydantic · pytest · Alembic",
    desc: "Build FastAPI backends, automation scripts, and data pipelines. Python done properly — async, typed, tested — not scripting glued together with prayer.",
  },
  {
    title: "Node.js — Backend Intern",
    duration: "3 months · Stipend + PPO",
    location: "Remote-first",
    stack: "Express.js · Sequelize · PostgreSQL · Jest / Supertest · Socket.io",
    desc: "Build fast, clean Express APIs with Sequelize and PostgreSQL. Real-time features with Socket.io. Async/await everywhere — no callback hell allowed.",
  },
  {
    title: "AI Research — LLM Intern",
    duration: "3 months · Stipend + PPO",
    location: "Remote-first",
    stack: "LLM Research · Prompt Engineering · API Integration · RAG · Documentation",
    desc: "Map every major AI model, understand what each one is built for, and produce a reference document so clear any enterprise CTO could use it. No ML PhD required — just deep curiosity.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "No resume theatre",
    desc: "No GPA filter. No college name filter. No certification checklist. We read GitHub and what you've actually shipped.",
  },
  {
    icon: Sparkles,
    title: "Real work from Day 1",
    desc: (
      <>
        Interns ship into client sprints; full-timers own modules in{" "}
        <Link to="/studio" className="text-accent hover:underline">
          Studio
        </Link>{" "}
        and{" "}
        <Link to="/labs" className="text-accent hover:underline">
          Labs
        </Link>
        . No bench, no shadowing for months.
      </>
    ),
  },
  {
    icon: Target,
    title: "One assignment, one interview",
    desc: "A 2–3 day real-world technical assignment, then one conversation. No aptitude tests, no HR rounds, no group discussions.",
  },
  {
    icon: Globe,
    title: "Remote-first, honest replies",
    desc: "Remote-friendly across India and global. Every applicant gets a real reply — yes or no — within a clear window.",
  },
];

const process = [
  {
    n: "01",
    icon: FileText,
    t: "Apply",
    sub: "~5 minutes",
    d: "Email careers@tekravio.com with the role name and a short note on what you've built. Attach your resume and GitHub.",
  },
  {
    n: "02",
    icon: Eye,
    t: "We screen",
    sub: "Within 24 hrs",
    d: "Uday reads your application personally. We look at GitHub, your answers, and genuine interest — not your CGPA.",
  },
  {
    n: "03",
    icon: Code2,
    t: "Assignment",
    sub: "2–3 day window",
    d: "If you pass screening, you get a real-world technical assignment. Not a quiz — actual engineering work close to what we ship.",
  },
  {
    n: "04",
    icon: Target,
    t: "1 interview",
    sub: "1 round only",
    d: "We talk about your work, your thinking, and how you approach problems. No panels, no trick questions, no whiteboard riddles.",
  },
];

function CareersPage() {
  return (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Careers" }]} />
      <PageHero
        eyebrow="Careers at Tekravio"
        title="We don't hire resumes."
        accentTitle="We hire hunger."
        subtitle={
          <>
            No GPA filter. No college name. No years gate for interns. Just genuine curiosity,
            the right mindset, and the willingness to do real work — in{" "}
            <Link to="/studio" className="text-accent hover:underline">
              Studio
            </Link>{" "}
            and{" "}
            <Link to="/labs" className="text-accent hover:underline">
              Labs
            </Link>{" "}
            — from Day 1.
          </>
        }
        ctaLabel="See open roles"
        ctaHref="#roles"
      />

      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What we don't filter on
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>✗ College name or tier</li>
                <li>✗ GPA, CGPA, or grades</li>
                <li>✗ Certifications</li>
                <li>✗ Years of experience (for interns)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                What we hire for
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                <li>✓ Passion for the craft</li>
                <li>✓ Right mindset and curiosity</li>
                <li>✓ Hunger to ship real work</li>
                <li>✓ A GitHub that shows it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              How we work
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              A firm built around the engineer.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card/40 p-6">
                <p.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Full-time openings
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Senior roles open now.
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Fixed salary. Permanent. Remote-friendly. Hiring: resume screen → assignment →
                1 interview round.
              </p>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              For full JDs, email{" "}
              <a
                href="mailto:careers@tekravio.com"
                className="text-accent hover:underline"
              >
                careers@tekravio.com
              </a>{" "}
              with the role name — we send the detailed JD within 24 hours.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {fullTimeRoles.map((r) => (
              <a
                key={r.title}
                href={`mailto:careers@tekravio.com?subject=Application%20-%20${encodeURIComponent(
                  r.title,
                )}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/40 hover:bg-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Open
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {r.type}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                <p className="text-xs text-foreground/80">{r.stack}</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {r.location}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 text-foreground/90 transition-transform group-hover:translate-x-0.5">
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="interns" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Internship openings
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                5 intern roles open.
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                3-month internships. Remote-first. Stipend + PPO. Process: resume screen →
                assignment → 1 interview round.
              </p>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              No years-of-experience gate. We just want to see what you've built and how you
              think.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {internRoles.map((r) => (
              <a
                key={r.title}
                href={`mailto:careers@tekravio.com?subject=Internship%20Application%20-%20${encodeURIComponent(
                  r.title,
                )}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/40 hover:bg-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                    Open
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                <p className="text-xs text-foreground/80">{r.stack}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accent" /> {r.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {r.location}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 text-foreground/90 transition-transform group-hover:translate-x-0.5">
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-5">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium text-foreground">University partnerships</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We run structured internship tracks with select engineering colleges. If you're
                a placement coordinator, reach out to discuss a batch partnership.
              </p>
              <a
                href="mailto:careers@tekravio.com?subject=University%20partnership"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Partner with us <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              The process
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              How we hire.
            </h2>
            <p className="mt-3 text-muted-foreground">
              No aptitude tests. No HR rounds. No group discussions. Just real work.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent">{s.n}</span>
                  <s.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.sub}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
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
                Curious. Hungry. Ready to ship?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Email us the role name, a short note on what you've built, and your GitHub.
                We reply within 24 hours — every application, real human.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:careers@tekravio.com?subject=Application%20-%20General"
                  className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-medium text-primary-foreground"
                >
                  Apply directly <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hr@tekravio.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-card/60"
                >
                  hr@tekravio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
