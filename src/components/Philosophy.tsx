import React from 'react';
import { BookOpen, FlaskConical, Hammer, Bug, TrendingUp } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'LEARN',
      tagline: 'Understand the fundamentals.',
      description: 'Study foundational math, algorithms, papers, and computational theory from ground principles rather than treating frameworks as black boxes.',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'EXPERIMENT',
      tagline: 'Test concepts through implementation.',
      description: 'Isolate variables, write prototypes, inspect tensor shapes, test boundary conditions, and validate hypotheses systematically.',
      icon: FlaskConical,
    },
    {
      num: '03',
      title: 'BUILD',
      tagline: 'Turn knowledge into working systems.',
      description: 'Translate validated experiments into resilient codebases, decoupled pipelines, and scalable production architecture.',
      icon: Hammer,
    },
    {
      num: '04',
      title: 'DEBUG',
      tagline: 'Find out why things fail.',
      description: 'Deconstruct edge cases, inspect gradients, track hallucinations, profile latency bottlenecks, and diagnose anomalous behaviors without guessing.',
      icon: Bug,
    },
    {
      num: '05',
      title: 'IMPROVE',
      tagline: 'Iterate until the system becomes better.',
      description: 'Profile execution metrics, streamline memory overhead, fine-tune models, and refine feedback loops into dependable systems.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 relative border-t border-noir-800/80 bg-noir-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="font-mono text-xs text-noir-400">04 // DOCTRINE</div>
            <div className="h-px w-12 bg-noir-700" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-mono">
              HOW I BUILD
            </h2>
          </div>
          <div className="font-mono text-xs text-noir-400">
            ENGINEERING PRINCIPLES // ZERO COMPROMISE
          </div>
        </div>

        {/* 5-Column Distinctive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-noir-900/40 border border-noir-800 p-6 rounded-sm flex flex-col justify-between hover:border-white/40 hover:bg-noir-900/80 transition-all duration-300 group tech-bracket"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-noir-600 group-hover:text-white transition-colors duration-200">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-xs bg-noir-850 border border-noir-800 flex items-center justify-center text-noir-400 group-hover:text-white group-hover:border-noir-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-mono font-bold text-white mb-1">
                    {step.title}
                  </h3>

                  <div className="text-xs font-mono text-noir-300 font-medium mb-3">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-noir-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-noir-850 text-[10px] font-mono text-noir-600 group-hover:text-noir-400 transition-colors">
                  PHASE // 0{step.num}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
