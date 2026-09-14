import React from 'react';
import { Terminal, Layers, Binary, Cpu, Network, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const domains = [
    { name: 'Machine Learning', icon: Binary, detail: 'Optimization, cost surfaces, Scikit-learn' },
    { name: 'Deep Learning', icon: Cpu, detail: 'PyTorch tensors, CNN, RNN sequence dynamics' },
    { name: 'Reinforcement Learning', icon: Layers, detail: 'MDPs, Bellman updates, Q-Learning, DQN' },
    { name: 'Generative AI', icon: Terminal, detail: 'Transformers, scaled dot-product attention' },
    { name: 'RAG Systems', icon: Network, detail: 'Dense vector retrieval, hybrid chunking' },
    { name: 'Agentic Workflows', icon: Sparkles, detail: 'LangGraph state graphs, autonomous loops' },
  ];

  const terminalLines = [
    { prompt: 'identity --resolve', response: 'DarkxLucifer (Yashraj Ghadage)' },
    { prompt: 'role --query', response: 'AI / ML Developer & Systems Builder' },
    { prompt: 'mission --print', response: '"Learning AI by building it from first principles."' },
    { prompt: 'core.stack --status', response: 'PyTorch / Gymnasium / Transformers / LangGraph [READY]' },
  ];

  return (
    <section id="about" className="py-28 relative border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase font-semibold px-2.5 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded">
              DARKXLUCIFER / 01
            </span>
            <div className="h-px w-10 bg-white/20" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
              BEHIND THE IDENTITY
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>PERSONA: YASHRAJ GHADAGE</span>
          </div>
        </div>

        {/* Two-Column Grid: Narrative & Live Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-white/[0.03] px-3 py-1.5 rounded border border-white/10">
              <span>ENGINEER BIO</span>
              <span className="text-white/30">|</span>
              <span className="text-white">YASHRAJ GHADAGE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-snug">
              <span className="text-accent-cyan">DarkxLucifer</span> is the developer identity of Yashraj Ghadage.
            </h3>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              I am an AI / ML developer who believes that deep mastery cannot be achieved through abstraction alone. Instead of merely consuming APIs, I deconstruct algorithms from foundational mathematics, writing tensor operations from scratch, implementing Bellman optimality operators, and crafting autonomous agent feedback loops.
            </p>

            <p className="text-sm text-white/60 font-light leading-relaxed">
              Whether benchmarked on Gymnasium continuous control environments or fine-tuning transformer attention mechanics, my work adheres to one single standard: <strong className="text-white font-medium">verify everything through real code.</strong>
            </p>

            {/* Core Domains Grid */}
            <div className="pt-2">
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-widest mb-3">
                CORE TECHNICAL SPECIALIZATIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {domains.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div
                      key={d.name}
                      className="p-3 bg-white/[0.02] border border-white/[0.08] hover:border-accent-cyan/40 rounded transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-accent-cyan/80 group-hover:text-accent-cyan transition-colors" />
                        <span className="font-mono text-xs font-semibold text-white group-hover:text-accent-cyan transition-colors">
                          {d.name}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-white/45 font-light">
                        {d.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry Terminal */}
          <div className="lg:col-span-6">
            <div className="bg-[#08080c] border border-white/10 rounded-lg overflow-hidden shadow-2xl shadow-black/80 font-mono">
              {/* Terminal Window Bar */}
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-white/40 font-mono">darkxlucifer@ai-core:~</span>
                </div>
                <div className="text-[10px] text-accent-cyan/70 font-mono">zsh // active</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-4 text-xs">
                {terminalLines.map((line, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-accent-cyan">
                      <span className="text-white/40">&gt;</span>
                      <span>{line.prompt}</span>
                    </div>
                    <div className="pl-4 text-white/80 font-light text-[11px]">
                      {line.response}
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-white/40">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-accent-cyan" /> ALL PACKAGES VALIDATED
                  </span>
                  <span>LATENCY: 0.02ms</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Pill Bar */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3 bg-white/[0.02] border border-white/[0.08] rounded text-center">
                <div className="font-mono text-base font-bold text-white">48+</div>
                <div className="font-mono text-[10px] text-white/40 uppercase mt-0.5">Frames Scrubbed</div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.08] rounded text-center">
                <div className="font-mono text-base font-bold text-white">07</div>
                <div className="font-mono text-[10px] text-white/40 uppercase mt-0.5">AI Stages</div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.08] rounded text-center">
                <div className="font-mono text-base font-bold text-accent-cyan">100%</div>
                <div className="font-mono text-[10px] text-white/40 uppercase mt-0.5">Code Proven</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
