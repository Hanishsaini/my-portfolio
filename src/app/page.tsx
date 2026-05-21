import type { ReactNode } from "react";
import Reveal from "./components/Reveal";
import TopNav from "./components/TopNav";

/* ──────────────────────────────────────────────────────────
   CONTENT — edit here. Everything below renders from this data.
   ────────────────────────────────────────────────────────── */

// What I'm actively building right now. Keep this honest — only real, active work.
const BUILDING: { name: string; note: string; body: string; href: string }[] = [
  {
    name: "Complico",
    note: "compliance copilot",
    href: "https://github.com/Hanishsaini/complico",
    body: "Collapsing the SOC 2 / ISO 27001 readiness loop from weeks into a 90-second feedback cycle — per-control gap analysis with evidence quoted straight from your documents.",
  },
  {
    name: "Lore",
    note: "memory for AI agents",
    href: "https://github.com/Hanishsaini/Lore",
    body: "Persistent organizational memory for AI coding agents — your codebase's memory, so agents stop repeating your team's past mistakes.",
  },
  {
    name: "AI Workspace",
    note: "real-time collaboration",
    href: "https://github.com/Hanishsaini/ai-workspace",
    body: "One AI session shared by two people — a single upstream call streamed into both screens, character by character, with shared cursors and presence.",
  },
];

// Projects. Honest, in my own words. Tags are drawn only from what each repo actually uses.
const PROJECTS: {
  name: string;
  state: string;
  href: string;
  body: ReactNode;
  stack: string[];
}[] = [
  {
    name: "Complico",
    state: "in progress · 2026",
    href: "https://github.com/Hanishsaini/complico",
    body: (
      <>
        Turns the long, painful loop of SOC&nbsp;2 / ISO&nbsp;27001 readiness
        into a 90-second feedback cycle. You drop in a SOC&nbsp;2 Type&nbsp;II
        report, an ISO&nbsp;27001 SoA, or any policy bundle, pick the controls
        you care about, and Complico returns a per-control gap analysis
        (Covered / Partial / Gap) with confidence scores, evidence snippets
        quoted directly from the document, prioritised recommendations, and an
        audit-ready policy pack. Under the hood it combines deterministic
        keyword checks, FAISS-backed retrieval, and a small LLM swarm with a
        tie-breaker reviewer agent. Built for security engineers, vCISOs, and
        founders preparing for a first Type&nbsp;I — not to replace a Big-4
        auditor.
      </>
    ),
    stack: ["Python", "FAISS", "RAG", "LLM swarm"],
  },
  {
    name: "Lore",
    state: "in progress · 2026",
    href: "https://github.com/Hanishsaini/Lore",
    body: (
      <>
        Your codebase&apos;s memory. Persistent organizational memory for AI
        coding agents — so they stop repeating your team&apos;s past mistakes.
        The bet is simple: agents are only as good as what they remember, and
        right now they remember almost nothing between sessions. Lore is where I
        keep working that problem.
      </>
    ),
    stack: ["memory systems", "AI agents", "developer tooling"],
  },
  {
    name: "AI Workspace",
    state: "in progress · 2026",
    href: "https://github.com/Hanishsaini/ai-workspace",
    body: (
      <>
        A real-time collaborative AI workspace where two people share one AI
        session — one upstream call, streamed live into both screens, character
        by character. Think Google Docs, but the second collaborator is an AI
        you&apos;re both talking to at the same time. Type a prompt on one
        screen, the answer streams onto both screens in lockstep; cursors,
        presence, and edits are shared.
      </>
    ),
    stack: ["Next.js", "streaming", "real-time"],
  },
  {
    name: "SynthForge",
    state: "weekend build · 2025",
    href: "https://github.com/Hanishsaini/SynthForge",
    body: (
      <>
        A privacy-first MVP for generating synthetic tabular data, built in
        about three days. Less a product, more a proof-of-concept I shipped to
        see how far you could get on tabular synthesis with the LLM tooling I
        already had on hand. It works; it isn&apos;t production.
      </>
    ),
    stack: ["synthetic data", "LLM tooling"],
  },
  {
    name: "AI-Agents-SaaS",
    state: "experiment · 2025",
    href: "https://github.com/Hanishsaini/AI-agents-SaaS",
    body: (
      <>
        Early scaffolding for a SaaS that deploys autonomous agents against
        business workflows. The interesting parts were the agent runtime and the
        per-tenant boundary; the rest was practice.
      </>
    ),
    stack: ["agents", "multi-tenant"],
  },
  {
    name: "ECHO-OS",
    state: "sketchpad · 2025",
    href: "https://github.com/Hanishsaini/ECHO-OS",
    body: (
      <>
        An experiment in orchestrating multi-agent systems where a human stays
        in the loop as a peer rather than a user. Mostly a sketchpad for ideas I
        keep coming back to.
      </>
    ),
    stack: ["multi-agent", "human-in-the-loop"],
  },
];

// Areas my own projects keep pulling me into — not expertise claims, just where the hours went.
const SYSTEMS: { area: string; note: string }[] = [
  { area: "AI agents & orchestration", note: "runtimes, hand-offs, swarms" },
  { area: "RAG & retrieval", note: "FAISS, grounding answers in sources" },
  { area: "Memory systems", note: "what agents keep between sessions" },
  { area: "Real-time & streaming", note: "token streams, presence, sync" },
  { area: "Multi-tenant systems", note: "isolation boundaries that hold" },
  { area: "Full-stack AI products", note: "model → interface → user" },
];

/* ──────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <TopNav />

      <main
        id="top"
        className="relative z-10 mx-auto max-w-[640px] px-6 pt-28 pb-32 sm:pt-32 sm:pb-40"
      >
        {/* Header */}
        <header>
          <Reveal>
            <h1 className="text-[28px] leading-tight tracking-[-0.01em] sm:text-[32px]">
              Hanish Saini
            </h1>
            <p className="meta mt-2">
              computer science student · india · building ai tools solo
            </p>
          </Reveal>
        </header>

        {/* Hero / honest intro */}
        <section className="mt-16">
          <Reveal delay={80}>
            <p className="text-[24px] leading-[1.45] tracking-[-0.01em] text-ink sm:text-[27px]">
              I build AI tools and systems — mostly{" "}
              <span className="display">on my own</span>, mostly to understand
              how these things actually work.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-[18px] leading-[1.7] text-ink-soft">
              I&apos;m a B.Tech CS student on the IoT track, self-teaching my way
              into AI product engineering. I want to end up as a{" "}
              <span className="display">founding engineer</span> at a small,
              AI-native team — and the way I&apos;m getting there is to keep
              shipping projects and stay honest about what works and what
              doesn&apos;t. What follows is the current state of that.
            </p>
          </Reveal>

          {/* Live status + links */}
          <Reveal delay={240}>
            <div className="mt-8 flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="meta">
                currently building Complico, Lore &amp; AI&nbsp;Workspace
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:hanishsaini958@gmail.com" className="btn btn-primary bare">
                Get in touch
              </a>
              <a
                href="https://github.com/Hanishsaini"
                target="_blank"
                rel="noreferrer"
                className="btn bare"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/hanish-saini-5a223b281"
                target="_blank"
                rel="noreferrer"
                className="btn bare"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </section>

        {/* Currently building */}
        <section id="building" className="anchor mt-24">
          <Reveal>
            <h2 className="eyebrow">— currently building</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-ink-muted">
              The three things that have my attention right now.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-px sm:grid-cols-2">
            {BUILDING.map((b, i) => (
              <Reveal key={b.name} delay={i * 70}>
                <div className="border-t border-rule pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[17px] font-medium tracking-[-0.005em] text-ink">
                      <a href={b.href} target="_blank" rel="noreferrer" className="link-head">
                        {b.name}
                      </a>
                    </h3>
                    <span className="meta shrink-0">{b.note}</span>
                  </div>
                  <p className="mt-2 text-[15.5px] leading-[1.65] text-ink-soft">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="anchor mt-24">
          <Reveal>
            <h2 className="eyebrow">— selected work</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-ink-muted">
              The projects, in my own words — including the ones that are more
              experiment than product. Links go to the repos.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-12">
            {PROJECTS.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 50}>
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="text-[21px] font-medium tracking-[-0.005em] text-ink">
                    <a href={p.href} target="_blank" rel="noreferrer" className="link-head">
                      {p.name}
                      <span className="ml-1 text-ink-faint">↗</span>
                    </a>
                  </h3>
                  <span className="meta shrink-0">{p.state}</span>
                </div>

                <p className="mt-3 text-[16.5px] leading-[1.7] text-ink-soft">
                  {p.body}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Systems / areas */}
        <section id="systems" className="anchor mt-24">
          <Reveal>
            <h2 className="eyebrow">— what i keep building with</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-ink-muted">
              Not a skills bar, and not expertise claims. Just the areas my own
              projects keep pulling me into.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-px sm:grid-cols-2">
            {SYSTEMS.map((s, i) => (
              <Reveal key={s.area} delay={i * 45}>
                <div className="border-t border-rule-soft py-4">
                  <p className="text-[16px] tracking-[-0.005em] text-ink">{s.area}</p>
                  <p className="meta mt-1">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact / elsewhere */}
        <section id="contact" className="anchor mt-24">
          <Reveal>
            <h2 className="eyebrow">— elsewhere</h2>
            <ul className="mt-6 space-y-2 text-[17px] text-ink-soft">
              <li>
                <span className="meta mr-3">email</span>
                <a href="mailto:hanishsaini958@gmail.com">hanishsaini958@gmail.com</a>
              </li>
              <li>
                <span className="meta mr-3">github</span>
                <a href="https://github.com/Hanishsaini" target="_blank" rel="noreferrer">
                  github.com/Hanishsaini
                </a>
              </li>
              <li>
                <span className="meta mr-3">linkedin</span>
                <a
                  href="https://linkedin.com/in/hanish-saini-5a223b281"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/hanish-saini
                </a>
              </li>
            </ul>
          </Reveal>
        </section>

        <footer className="mt-24 pt-8">
          <Reveal>
            <hr className="rule" />
            <p className="meta mt-6">© {new Date().getFullYear()} hanish saini</p>
          </Reveal>
        </footer>
      </main>
    </>
  );
}
