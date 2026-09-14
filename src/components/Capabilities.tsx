import React, { useState } from 'react';

interface CapabilityItem {
  id: string;
  name: string;
  meta: string;
  badge?: string;
  desc: string;
  tags: string[];
}

export const Capabilities: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const capabilities: CapabilityItem[] = [
    {
      id: 'ml',
      name: 'MACHINE LEARNING',
      meta: 'SUPERVISED · UNSUPERVISED',
      desc: 'Classical learning — the layer everything else stands on. Data preprocessing, feature extraction, model training and evaluation, done by hand before reaching for a library shortcut.',
      tags: ['SUPERVISED LEARNING', 'UNSUPERVISED LEARNING', 'PREPROCESSING', 'FEATURE EXTRACTION', 'TRAINING', 'EVALUATION'],
    },
    {
      id: 'dl',
      name: 'DEEP LEARNING',
      meta: 'PYTORCH · SEQUENCES',
      desc: 'Sequence-based neural networks built from scratch in PyTorch — forward propagation, backpropagation, hidden states, loss functions and optimizers, understood at the tensor level.',
      tags: ['NEURAL NETWORKS', 'PYTORCH', 'RNNS', 'FORWARD PROP', 'BACKPROP', 'HIDDEN STATES', 'SEQUENCE MODELLING', 'LOSS FUNCTIONS', 'OPTIMIZERS'],
    },
    {
      id: 'rl',
      name: 'REINFORCEMENT LEARNING',
      meta: 'Q-LEARNING · SARSA · DQN',
      desc: 'Agents that learn by acting. Tabular methods first — Q-tables, epsilon-greedy exploration, alpha and gamma tuned inside Gymnasium environments — then scaled up to Deep Q-Networks.',
      tags: ['Q-LEARNING', 'SARSA', 'DQN', 'Q-TABLES', 'EXPLORATION / EXPLOITATION', 'EPSILON-GREEDY', 'GYMNASIUM', 'CLIFFWALKING-V1', 'FROZENLAKE-V1'],
    },
    {
      id: 'genai',
      name: 'GENERATIVE AI',
      meta: 'TRANSFORMERS · RAG',
      desc: 'Transformer-based models, fine-tuning and Retrieval-Augmented Generation — building LLM applications that ground their answers in real context instead of hallucination.',
      tags: ['TRANSFORMERS', 'FINE-TUNING', 'RAG', 'LANGCHAIN', 'LANGGRAPH', 'LLM APPLICATIONS'],
    },
    {
      id: 'agents',
      name: 'AGENTIC AI',
      meta: 'WORKFLOWS · TOOL USE',
      desc: 'Multi-step AI systems that plan, retrieve, call tools and act — agentic workflows wired into external applications and APIs.',
      tags: ['AI AGENTS', 'AGENTIC WORKFLOWS', 'TOOL USE', 'MULTI-STEP PLANNING', 'AI AUTOMATION'],
    },
    {
      id: 'appdev',
      name: 'APPLICATION DEV',
      meta: 'FASTAPI · STREAMLIT',
      desc: 'Connecting intelligence to interfaces — AI/ML applications served through FastAPI APIs and Streamlit apps.',
      tags: ['FASTAPI', 'STREAMLIT', 'APIS', 'AI INTEGRATION'],
    },
    {
      id: 'sec',
      name: 'CYBERSECURITY',
      meta: 'EXPLORING',
      badge: 'IN PROGRESS',
      desc: 'Currently exploring the offensive side — networking concepts, SMB and RPC, Windows environments, Active Directory concepts and security labs.',
      tags: ['NETWORKING', 'SMB', 'RPC', 'WINDOWS', 'ACTIVE DIRECTORY', 'SECURITY LABS'],
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="capabilities" className="sec-border">
      <div className="wrap-container">
        {/* Section Header */}
        <header className="mb-[clamp(40px,7vh,72px)]">
          <p className="kicker">02 / CAPABILITIES</p>
          <h2 className="sec-title">
            <span className="block">FIELDS OF</span>
            <span className="block ol">OPERATION</span>
          </h2>
        </header>

        {/* Expandable Accordion Ledger */}
        <div className="border-t border-line">
          {capabilities.map((cap, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={cap.id}
                className={`border-b border-line transition-colors duration-300 ${
                  isOpen ? 'bg-white/[0.015]' : ''
                }`}
              >
                {/* Accordion Trigger Row */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-6 flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isOpen ? 'text-ember' : 'text-mut group-hover:text-ember'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="font-disp font-bold text-[clamp(1rem,2.2vw,1.5rem)] text-ink group-hover:translate-x-2 transition-transform duration-300 flex items-center flex-wrap gap-3">
                      {cap.name}
                      {cap.badge && (
                        <span className="font-mono text-[9px] text-ember border border-ember/40 px-2 py-0.5 tracking-widest font-normal">
                          {cap.badge}
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden md:inline font-mono text-[10px] tracking-[0.18em] text-mut text-right">
                      {cap.meta}
                    </span>

                    {/* Plus / Minus indicator */}
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <span
                        className={`absolute w-3.5 h-[1px] transition-colors duration-300 ${
                          isOpen ? 'bg-ember' : 'bg-mut'
                        }`}
                      />
                      <span
                        className={`absolute w-[1px] h-3.5 transition-all duration-300 ${
                          isOpen ? 'bg-ember rotate-90 opacity-0' : 'bg-mut opacity-100'
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                <div
                  className={`grid transition-all duration-500 ease-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden pl-0 sm:pl-[44px]">
                    <p className="max-w-[64ch] text-[15px] leading-[1.7] text-body mb-5">
                      {cap.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9.5px] tracking-[0.12em] text-mut border border-line px-2.5 py-1 bg-white/[0.01]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
