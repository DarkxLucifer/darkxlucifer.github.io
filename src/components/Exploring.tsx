import React from 'react';
import { Radar, Bot, Workflow, Shield, ShieldCheck, Sparkles } from 'lucide-react';

export const Exploring: React.FC = () => {
  const explorationAreas = [
    {
      title: 'Agentic AI',
      code: 'EXP.01',
      description: 'Autonomous multi-agent delegation frameworks, self-reflection steps, persistent vector memory, and self-correcting tool chains.',
      icon: Bot,
      focusTag: 'ACTIVE RESEARCH'
    },
    {
      title: 'AI Automation',
      code: 'EXP.02',
      description: 'Bridging autonomous models with asynchronous event buses, webhooks, and background worker daemons for continuous operations.',
      icon: Workflow,
      focusTag: 'LAB PROTOTYPES'
    },
    {
      title: 'Cybersecurity',
      code: 'EXP.03',
      description: 'Dissecting network protocols, Windows domain internals, RPC/SMB inspection, and adversary defense laboratories.',
      icon: Shield,
      focusTag: 'HANDS-ON LABS'
    },
    {
      title: 'AI + Cybersecurity',
      code: 'EXP.04',
      description: 'Machine learning agents detecting anomalous network signals, telemetry profiling, and automated incident response.',
      icon: ShieldCheck,
      focusTag: 'CROSS-DOMAIN FUSION'
    },
    {
      title: 'Advanced LLM Systems',
      code: 'EXP.05',
      description: 'Benchmarking context window dynamics, speculative decoding, parameter-efficient LoRA adapters, and high-throughput inference.',
      icon: Sparkles,
      focusTag: 'SYSTEMS BENCHMARKS'
    },
  ];

  return (
    <section className="py-24 relative border-t border-noir-800/80 bg-noir-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bordered Orange-Accent Box as explicitly requested */}
        <div className="mb-14 p-6 sm:p-8 bg-noir-900/50 border-2 border-tactical-orange rounded-sm relative tech-bracket tech-bracket-orange shadow-lg shadow-tactical-orange/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-noir-800">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-tactical-orange animate-pulse" />
              <h2 className="font-mono text-sm sm:text-base font-bold text-white tracking-widest uppercase">
                CURRENTLY EXPLORING
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-tactical-orange">
              <Radar className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>ACTIVE RESEARCH LAB</span>
            </div>
          </div>

          <div className="text-sm sm:text-lg font-mono text-noir-200 tracking-wide leading-relaxed font-semibold">
            AGENTIC AI <span className="text-tactical-orange">/</span> AI AUTOMATION <span className="text-tactical-orange">/</span> CYBERSECURITY <span className="text-tactical-orange">/</span> AI + CYBERSECURITY <span className="text-tactical-orange">/</span> ADVANCED LLM SYSTEMS
          </div>

          <p className="mt-3 text-xs font-mono text-noir-400">
            Note: These vectors represent ongoing investigations and experimental benches rather than finished static knowledge.
          </p>
        </div>

        {/* Detailed Investigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {explorationAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.code}
                className="bg-noir-900/40 border border-noir-800/80 p-5 rounded-sm flex flex-col justify-between hover:border-tactical-orange/60 hover:bg-noir-900/80 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-noir-500 mb-3">
                    <span className="text-tactical-orange font-semibold">{area.code}</span>
                    <span className="px-2 py-0.5 bg-noir-950 border border-noir-800 text-[10px] text-noir-300 tracking-wider">
                      {area.focusTag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-4 h-4 text-noir-400 group-hover:text-tactical-orange transition-colors" />
                    <h3 className="font-mono text-sm font-bold text-noir-100 group-hover:text-white transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-xs text-noir-400 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-noir-850 flex items-center justify-between text-[10px] font-mono text-noir-500">
                  <span>EXP_STATUS // ACTIVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-tactical-orange" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Exploring;
