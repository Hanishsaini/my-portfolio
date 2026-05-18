const PROJECTS = [
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
        audit-ready policy pack you can hand to an auditor. Under the hood it
        combines deterministic keyword checks, FAISS-backed retrieval, and a
        small LLM swarm with a tie-breaker reviewer agent. Built for security
        engineers, vCISOs, and founders preparing for a first Type&nbsp;I — not
        for replacing a Big-4 auditor.
      </>
    ),
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
  },
  {
    name: "AI-Agents-SaaS",
    state: "experiment · 2025",
    href: "https://github.com/Hanishsaini/AI-agents-SaaS",
    body: (
      <>
        Early scaffolding for a SaaS that deploys autonomous agents against
        business workflows. The interesting parts were the agent runtime and
        the per-tenant boundary; the rest was practice.
      </>
    ),
  },
  {
    name: "ECHO-OS",
    state: "sketchpad · 2025",
    href: "https://github.com/Hanishsaini/ECHO-OS",
    body: (
      <>
        An experiment in orchestrating multi-agent systems where a human stays
        in the loop as a peer rather than a user. Mostly a sketchpad for ideas
        I keep coming back to.
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[640px] px-6 pt-24 pb-32 sm:pt-32 sm:pb-40">
      {/* Header */}
      <header>
        <h1 className="text-[28px] leading-tight tracking-[-0.01em] sm:text-[32px]">
          Hanish Saini
        </h1>
        <p className="meta mt-2">
          computer science student · india · open to founding-eng roles
        </p>
      </header>

      {/* Intro */}
      <section className="mt-16">
        <p className="text-[18px] leading-[1.7] text-ink">
          I&apos;m a B.Tech CS student (IoT track), mostly self-teaching my way
          into AI product engineering. The path I&apos;m on is narrower than
          most — I want to be a{" "}
          <span className="display">founding engineer</span> at a small,
          AI-native team where the work matters more than the title. The
          fastest way I&apos;ve found to get there is to keep shipping things,
          and to be honest about what works and what doesn&apos;t.
        </p>
        <p className="mt-5 text-[18px] leading-[1.7] text-ink-soft">
          What follows is the current state of that — the projects I&apos;m
          building, what I&apos;m working on this month, and how to reach me.
        </p>
      </section>

      {/* Projects */}
      <section className="mt-20">
        <h2 className="meta">— projects</h2>
        <ol className="mt-8 space-y-12">
          {PROJECTS.map((p) => (
            <li key={p.name}>
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="text-[20px] font-medium tracking-[-0.005em] text-ink">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-none hover:text-accent"
                  >
                    {p.name}
                    <span className="ml-1 text-ink-faint">↗</span>
                  </a>
                </h3>
                <span className="meta shrink-0">{p.state}</span>
              </div>
              <p className="mt-3 text-[16.5px] leading-[1.7] text-ink-soft">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Now */}
      <section className="mt-20">
        <h2 className="meta">— now</h2>
        <p className="mt-6 text-[17px] leading-[1.7] text-ink-soft">
          Building{" "}
          <a href="https://github.com/Hanishsaini/complico" target="_blank" rel="noreferrer">
            Complico
          </a>{" "}
          and{" "}
          <a href="https://github.com/Hanishsaini/ai-workspace" target="_blank" rel="noreferrer">
            AI Workspace
          </a>
          . Both linked above; everything else is paused until those land.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-20">
        <h2 className="meta">— elsewhere</h2>
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
      </section>

      <footer className="mt-24 pt-8">
        <hr className="rule" />
        <p className="meta mt-6">© {new Date().getFullYear()} hanish saini</p>
      </footer>
    </main>
  );
}
