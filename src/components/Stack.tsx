import React from 'react';

interface TechBand {
  label: string;
  items: string[];
  dur: number;
  rev?: boolean;
}

export const Stack: React.FC = () => {
  const bands: TechBand[] = [
    {
      label: '01 / LANGUAGES & DATA',
      items: ['PYTHON', 'NUMPY', 'PANDAS'],
      dur: 26,
    },
    {
      label: '02 / ML & DEEP LEARNING',
      items: ['SCIKIT-LEARN', 'PYTORCH', 'NLTK', 'TF-IDF'],
      dur: 32,
      rev: true,
    },
    {
      label: '03 / REINFORCEMENT',
      items: ['GYMNASIUM', 'Q-LEARNING', 'SARSA', 'DQN'],
      dur: 24,
    },
    {
      label: '04 / GENERATIVE & BACKEND',
      items: ['TRANSFORMERS', 'RAG', 'LANGCHAIN', 'LANGGRAPH', 'FINE-TUNING', 'FASTAPI', 'STREAMLIT'],
      dur: 38,
      rev: true,
    },
  ];

  return (
    <section id="stack" className="sec-border overflow-hidden">
      <div className="wrap-container">
        {/* Section Header */}
        <header className="mb-[clamp(40px,7vh,72px)]">
          <p className="kicker">04 / TECH STACK</p>
          <h2 className="sec-title">
            <span className="block">THE</span>
            <span className="block ol">ARSENAL</span>
          </h2>
        </header>
      </div>

      {/* Infinite Marquee Bands */}
      <div className="mt-[clamp(26px,4vh,44px)]">
        {bands.map((band) => {
          // Quadruple items to ensure seamless infinite looping
          const loopedItems = [...band.items, ...band.items, ...band.items, ...band.items];

          return (
            <div
              key={band.label}
              className="relative overflow-hidden border-t border-line py-6 last:border-b group"
            >
              {/* Category Label Pill */}
              <span className="absolute -top-2 left-[clamp(20px,5vw,72px)] font-mono text-[9px] tracking-[0.3em] text-mut bg-bg px-2.5 z-10">
                {band.label}
              </span>

              {/* Ticker Track */}
              <div
                className={`flex items-center gap-[clamp(28px,4vw,56px)] w-max ${
                  band.rev ? 'animate-marq-rev' : 'animate-marq'
                }`}
                style={{ '--dur': `${band.dur}s` } as React.CSSProperties}
              >
                {loopedItems.map((item, idx) => {
                  const isOutlined = idx % 4 === 0;
                  return (
                    <React.Fragment key={`${item}-${idx}`}>
                      <span
                        className={`font-disp font-semibold text-[clamp(1.15rem,2.6vw,1.9rem)] whitespace-nowrap transition-colors duration-300 ${
                          isOutlined
                            ? 'text-transparent [-webkit-text-stroke:1px_rgba(236,232,225,0.4)] group-hover:[-webkit-text-stroke:1px_rgba(255,90,31,0.7)]'
                            : 'text-[#c4bfb5] group-hover:text-ink'
                        }`}
                      >
                        {item}
                      </span>
                      {/* Ember Diamond Bullet */}
                      <span className="w-[7px] h-[7px] bg-ember rotate-45 flex-none opacity-85" />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Currently Exploring Callout Box */}
      <div className="wrap-container">
        <div className="mt-[clamp(48px,8vh,80px)] border border-ember/35 p-[clamp(24px,4vw,40px)] relative bg-ember/[0.03]">
          {/* Top-Left Corner Bracket */}
          <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-ember" />
          {/* Bottom-Right Corner Bracket */}
          <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-ember" />

          <p className="font-mono text-[10px] tracking-[0.3em] text-ember uppercase">
            CURRENTLY EXPLORING
          </p>
          <p className="mt-3.5 font-mono text-[clamp(13px,2vw,18px)] tracking-[0.12em] text-ink flex flex-wrap items-center">
            AGENTIC AI
            <span className="text-ember px-2.5">/</span>
            AI AUTOMATION
            <span className="text-ember px-2.5">/</span>
            CYBERSECURITY
            <span className="text-ember px-2.5">/</span>
            AI + CYBERSECURITY
            <span className="text-ember ml-2 font-bold animate-blink">▌</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stack;
