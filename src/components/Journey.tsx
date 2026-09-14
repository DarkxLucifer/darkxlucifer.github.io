import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyStages, JourneyStage } from '../data/journey';
import { ChevronRight, ChevronLeft, Terminal, Cpu } from 'lucide-react';

export const Journey: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current: JourneyStage = journeyStages[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : journeyStages.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < journeyStages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="journey" className="py-28 relative border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase font-semibold px-2.5 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded">
              DARKXLUCIFER / 02
            </span>
            <div className="h-px w-10 bg-white/20" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
              AI JOURNEY // 3D TIMELINE
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span>PROGRESSION // 07 STAGES</span>
          </div>
        </div>

        {/* 3D Timeline Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 7 Stages Sequence Stack */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono text-[11px] text-white/40 tracking-widest uppercase mb-3 flex items-center justify-between">
              <span>SYSTEM SEQUENCE</span>
              <span>STAGE {activeIdx + 1} OF 07</span>
            </div>

            {journeyStages.map((stage, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-3.5 rounded border transition-all duration-200 flex items-center justify-between group focus:outline-none ${
                    isActive
                      ? 'bg-white/[0.08] border-accent-cyan text-white shadow-lg shadow-accent-cyan/10'
                      : 'bg-white/[0.02] border-white/[0.07] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded border transition-colors ${
                        isActive
                          ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/10'
                          : 'border-white/10 text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {stage.step}
                    </span>

                    <div>
                      <div
                        className={`font-display text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors ${
                          isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {stage.title}
                      </div>
                      <div className="text-[11px] font-mono text-white/40 truncate max-w-[200px] sm:max-w-xs">
                        {stage.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-200 ${
                      isActive ? 'text-accent-cyan translate-x-1' : 'text-white/20 group-hover:text-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Detail Card */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-[#08080c] border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl shadow-black/90"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-white font-semibold">STAGE // {current.step} OF 07</span>
                  </div>
                  <span className="text-accent-cyan text-[11px] tracking-wider uppercase font-semibold">
                    {current.category}
                  </span>
                </div>

                {/* Stage Title */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white uppercase">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-white/50 mt-1">
                    {current.subtitle}
                  </p>
                </div>

                {/* Narrative */}
                <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Core Governing Equation */}
                {current.equation && (
                  <div className="mb-6 p-4 bg-black/60 border border-white/10 rounded font-mono text-xs">
                    <div className="text-[10px] text-accent-cyan uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>GOVERNING FORMULATION // UPDATE RULE</span>
                    </div>
                    <div className="text-white font-mono text-xs sm:text-sm overflow-x-auto py-1">
                      <code>{current.equation}</code>
                    </div>
                  </div>
                )}

                {/* Concept Pills */}
                <div className="mb-6">
                  <div className="font-mono text-[11px] text-white/40 uppercase tracking-widest mb-2.5">
                    CORE CONCEPTS &amp; TOOLING
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.keyConcepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] text-white/80 font-mono text-xs rounded hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Stepper Actions */}
                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-white/30 rounded font-mono text-xs transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>PREV</span>
                  </button>

                  <span className="font-mono text-xs text-white/40">
                    LAYER {current.depthLayer} / 07
                  </span>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-white/30 rounded font-mono text-xs transition-colors"
                  >
                    <span>NEXT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
