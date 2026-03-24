
// import Form from "@/components/Form";

// const projects = [
//   {
//     title: "SynthForge",
//     href: "https://github.com/Hanishsaini/SynthForge.git",
//     description: "Privacy-first system for generating high-quality synthetic tabular data.",
//     detail: "Built in 3 days to solve data scarcity and privacy constraints in ML workflows.",
//     tags: "Next.js • TypeScript • AI Data Generation",
//   },
//   {
//     title: "AI Agents SaaS",
//     href: "https://github.com/Hanishsaini/AI-agents-SaaS.git",
//     description: "Autonomous AI agents platform for complex workflow automation.",
//     detail: "End-to-end SaaS system with agents executing real-world business processes.",
//     tags: "AI Agents • SaaS Architecture • Automation",
//   },
//   {
//     title: "ECHO-OS",
//     href: "https://github.com/Hanishsaini/ECHO-OS.git",
//     description: "Experimental AI interaction layer for agent coordination.",
//     detail: "Explores system-level orchestration for human-AI collaboration.",
//     tags: "Systems Design • AI Orchestration • Experimental",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-white selection:bg-white/10">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex justify-between items-center h-16">
//             <div className="text-xl font-medium tracking-tight">Hanish</div>

//             <div className="flex items-center gap-8 text-sm text-gray-400">
//               <a href="https://github.com/Hanishsaini" target="_blank" className="hover:text-white transition-colors">GitHub</a>
//               <a href="https://linkedin.com/in/hanish-saini-5a223b281" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
//               <a
//                 href="#contact"
//                 className="border border-white/30 px-6 py-2.5 rounded-full hover:border-white hover:bg-white/5 transition-all"
//               >
//                 Get in touch
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="pt-36 pb-28 text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-8">
//             I build AI systems<br />that automate complex work.
//           </h1>
//           <p className="text-lg text-gray-400 max-w-md mx-auto">
//             Designed for clarity, efficiency, and real-world outcomes.
//           </p>
//         </div>
//       </section>

//       {/* About */}
//       <section className="border-t border-white/10 py-28">
//         <div className="max-w-3xl mx-auto px-6">
//           <h2 className="text-4xl font-semibold tracking-tight mb-12">About</h2>
//           <div className="text-[17px] text-gray-300 leading-relaxed space-y-6">
//             <p>I’m a Computer Science student focused on building AI-powered systems and products.</p>
//             <p>
//               My work sits at the intersection of system design, automation, and product thinking — 
//               turning complex processes into scalable, intelligent systems.
//             </p>
//             <p>
//               I focus on building systems that solve real problems and scale efficiently. 
//               My thinking is grounded in first principles, execution speed, and long-term leverage.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Interests */}
//       <section className="border-t border-white/10 py-28">
//         <div className="max-w-3xl mx-auto px-6">
//           <h2 className="text-4xl font-semibold tracking-tight mb-12">Interests</h2>
//           <ul className="text-[17px] text-gray-300 space-y-5">
//             <li>• AI systems and intelligent agents — real-world workflow automation.</li>
//             <li>• Building scalable products at the intersection of AI and business.</li>
//             <li>• First-principles thinking and high-leverage learning.</li>
//             <li>• Health and fitness — optimizing performance and discipline.</li>
//             <li>• Future systems shaping industries and productivity.</li>
//           </ul>
//         </div>
//       </section>

//       {/* Selected Systems */}
//       <section className="border-t border-white/10 py-28">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-4xl font-semibold tracking-tight mb-16">Selected Systems</h2>

//           <div className="space-y-24">
//             {projects.map((project) => (
//               <div key={project.title} className="group">
//                 <a
//                   href={project.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block group-hover:text-white transition-colors"
//                 >
//                   <h3 className="text-3xl font-medium mb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
//                     {project.title}
//                     <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all">→</span>
//                   </h3>
//                 </a>
//                 <p className="text-gray-400 text-[17px] mb-3">{project.description}</p>
//                 <p className="text-gray-500 text-sm mb-6">{project.detail}</p>
//                 <p className="text-xs tracking-widest text-gray-600">{project.tags}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="border-t border-white/10 py-28 bg-zinc-950">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-4xl font-semibold tracking-tight mb-16">How I Work</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//             {[
//               { num: "01", title: "Understand the problem", desc: "Deeply grasp the core problem and goals" },
//               { num: "02", title: "Design system architecture", desc: "Create scalable and reliable systems" },
//               { num: "03", title: "Build and integrate", desc: "Develop and connect into a working solution" },
//               { num: "04", title: "Deliver and refine", desc: "Test, deploy, and iterate continuously" },
//             ].map((step, i) => (
//               <div key={i} className="group border-l-2 border-white/20 pl-8 hover:border-white transition-colors">
//                 <div className="text-5xl font-serif text-white/10 mb-4 group-hover:text-white/30 transition-colors">
//                   {step.num}
//                 </div>
//                 <h3 className="text-xl font-medium mb-3">{step.title}</h3>
//                 <p className="text-gray-400 text-[15px] leading-relaxed">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="border-t border-white/10 py-32">
//         <div className="max-w-3xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-semibold tracking-tight mb-6">
//             Build an AI System for Your Business
//           </h2>
//           <p className="text-gray-400 mb-12 max-w-md mx-auto">
//             If you have a complex or repetitive workflow, I can help you automate it with precision.
//           </p>

//           <Form />

//           <p className="text-xs text-gray-500 mt-12">
//             Every request is reviewed personally. Response within 24 hours.
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 py-16">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} Hanish</p>
//           <div className="flex gap-8">
//             <a href="https://linkedin.com/in/hanish-saini-5a223b281" target="_blank" className="hover:text-white transition">LinkedIn</a>
//             <a href="https://github.com/Hanishsaini" target="_blank" className="hover:text-white transition">GitHub</a>
//             <a href="https://instagram.com/_hanishzzz_" target="_blank" className="hover:text-white transition">Instagram</a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }
















import Form from "@/components/Form";

const projects = [
  {
    title: "SynthForge",
    href: "https://github.com/Hanishsaini/SynthForge.git",
    description: "Privacy-first system for generating high-quality synthetic tabular data.",
    detail: "Built in 3 days to solve data scarcity and privacy constraints in ML workflows.",
    tags: "Next.js • TypeScript • AI Data Generation",
  },
  {
    title: "AI Agents SaaS",
    href: "https://github.com/Hanishsaini/AI-agents-SaaS.git",
    description: "Autonomous AI agents platform for complex workflow automation.",
    detail: "End-to-end SaaS system with agents executing real-world business processes.",
    tags: "AI Agents • SaaS Architecture • Automation",
  },
  {
    title: "ECHO-OS",
    href: "https://github.com/Hanishsaini/ECHO-OS.git",
    description: "Experimental AI interaction layer for agent coordination.",
    detail: "Explores system-level orchestration for human-AI collaboration.",
    tags: "Systems Design • AI Orchestration • Experimental",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-3xl font-medium tracking-tight">Hanish</div>

            <div className="flex items-center gap-8 text-sm text-gray-400">
              <a href="https://github.com/Hanishsaini" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/hanish-saini-5a223b281" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
              <a
                href="#contact"
                className="border border-white/30 px-6 py-2.5 rounded-full hover:border-white hover:bg-white/5 transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-8">
            I build AI systems<br />that automate complex work.
          </h1>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            Designed for clarity, efficiency, and real-world outcomes.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10 py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-6xl font-semibold tracking-tight mb-12">About</h2>
          <div className="text-[17px] text-gray-300 leading-relaxed space-y-6">
            <p>I’m a Computer Science student focused on building AI-powered systems and products.</p>
            <p>
              My work sits at the intersection of system design, automation, and product thinking — 
              turning complex processes into scalable, intelligent systems.
            </p>
            <p>
              I focus on building systems that solve real problems and scale efficiently. 
              My thinking is grounded in first principles, execution speed, and long-term leverage.
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="border-t border-white/10 py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-6xl font-semibold tracking-tight mb-12">Interests</h2>
          <ul className="text-[17px] text-gray-300 space-y-5">
            <li>• AI systems and intelligent agents — real-world workflow automation.</li>
            <li>• Building scalable products at the intersection of AI and business.</li>
            <li>• First-principles thinking and high-leverage learning.</li>
            <li>• Health and fitness — optimizing performance and discipline.</li>
            <li>• Future systems shaping industries and productivity.</li>
          </ul>
        </div>
      </section>

      {/* Selected Systems */}
      <section className="border-t border-white/10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-semibold tracking-tight mb-16">My Projects</h2>

          <div className="space-y-24">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-white transition-colors"
                >
                  <h3 className="text-3xl font-medium mb-4 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    {project.title}
                    <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all">→</span>
                  </h3>
                </a>
                <p className="text-gray-400 text-[17px] mb-3">{project.description}</p>
                <p className="text-gray-500 text-sm mb-6">{project.detail}</p>
                <p className="text-xs tracking-widest text-gray-600">{project.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Systems I've Designed */}
      <section className="border-t border-white/10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-semibold tracking-tight mb-16">Systems I’ve Designed</h2>
          <div className="text-[17px] text-gray-300 leading-relaxed space-y-10">
            <div>
              <strong className="block mb-2 text-white">SynthForge</strong>
              <p>Privacy-first, lightweight tool that generates high-quality synthetic tabular data to overcome common AI bottlenecks like data scarcity, annotation challenges, and privacy concerns. Built as a Minimum Viable Product (MVP) in just 3 days.</p>
            </div>

            <div>
              <strong className="block mb-2 text-white">Client Onboarding System</strong>
              <p>An AI-powered autonomous onboarding pipeline that converts client input into a fully operational project workspace with zero human intervention.</p>
            </div>

            <div>
              <strong className="block mb-2 text-white">Real-Time Insights System</strong>
              <p>An AI-powered real-time search + analysis API that pulls insights from X (Twitter), web, and news using Grok, then returns structured, high-signal answers via webhook.</p>
            </div>

            <div>
              <strong className="block mb-2 text-white">Automated Sales Agents</strong>
              <p>Autonomous AI agents that handle lead qualification, objection handling, and meeting booking with minimal human oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 py-28 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-semibold tracking-tight mb-16">How I Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { num: "01", title: "Understand the problem", desc: "Deeply grasp the core problem and goals" },
              { num: "02", title: "Design system architecture", desc: "Create scalable and reliable systems" },
              { num: "03", title: "Build and integrate", desc: "Develop and connect into a working solution" },
              { num: "04", title: "Deliver and refine", desc: "Test, deploy, and iterate continuously" },
            ].map((step, i) => (
              <div key={i} className="group border-l-2 border-white/20 pl-8 hover:border-white transition-colors">
                <div className="text-5xl font-serif text-white/10 mb-4 group-hover:text-white/30 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-6">
            Build an AI System for Your Business
          </h2>
          <p className="text-gray-400 mb-12 max-w-md mx-auto">
            If you have a complex or repetitive workflow, I can help you automate it with precision.
          </p>

          <Form />

          <p className="text-xs text-gray-500 mt-12">
            Every request is reviewed personally. Response within 24 hours.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Hanish</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/hanish-saini-5a223b281" target="_blank" className="hover:text-white transition">LinkedIn</a>
            <a href="https://github.com/Hanishsaini" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="https://instagram.com/_hanishzzz_" target="_blank" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
