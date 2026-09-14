import React from 'react';

interface ProjectEntry {
  idx: string;
  title: string;
  type: string;
  desc: string;
  stats: string;
  pipe: string[];
  loop?: boolean;
  tags: string[];
  link?: string;
}

export const Work: React.FC = () => {
  const projects: ProjectEntry[] = [
    {
      idx: 'P.01',
      title: 'IMDB SENTIMENT ENGINE',
      type: 'NLP / MACHINE LEARNING',
      desc: 'An end-to-end NLP pipeline for binary sentiment classification — raw reviews cleaned, tokenized, stripped of stopwords and vectorized with TF-IDF before training.',
      stats: 'DATASET: 50,000 → 49,582 AFTER DEDUPE · FEATURES: REVIEW / SENTIMENT',
      pipe: ['RAW REVIEWS', 'TEXT CLEANING', 'TOKENIZATION', 'STOPWORDS', 'TF-IDF', 'TRAINING', 'PREDICTION'],
      tags: ['PYTHON', 'PANDAS', 'NLTK', 'SCIKIT-LEARN', 'TF-IDF'],
      link: 'https://github.com/DarkxLucifer',
    },
    {
      idx: 'P.02',
      title: 'SEQUENCE MODELS FROM SCRATCH',
      type: 'DEEP LEARNING / NLP',
      desc: 'Recurrent networks built by hand in PyTorch — every nn.Module, every hidden state, from forward propagation to backpropagation, tuned with BCE loss and Adam.',
      stats: 'ARCH: EMBED → RNN → LINEAR → SIGMOID · LOSS: BCE · OPTIMIZER: ADAM',
      pipe: ['INPUT SEQ', 'RNN', 'HIDDEN STATE', 'LINEAR', 'SIGMOID', 'PREDICTION'],
      tags: ['PYTORCH', 'NN.RNN', 'BACKPROP', 'HIDDEN STATES', 'BCE LOSS', 'ADAM'],
      link: 'https://github.com/DarkxLucifer',
    },
    {
      idx: 'P.03',
      title: 'TABULAR RL AGENTS',
      type: 'REINFORCEMENT LEARNING',
      desc: 'Q-Learning and SARSA agents trained inside Gymnasium — exploring CliffWalking-v1 and FrozenLake-v1 with epsilon-greedy policies and hand-tuned alpha and gamma.',
      stats: 'ALGOS: Q-LEARNING / SARSA · ENVS: CLIFFWALKING-V1 / FROZENLAKE-V1',
      pipe: ['STATE', 'ACTION', 'REWARD', 'Q-UPDATE', 'POLICY'],
      tags: ['Q-LEARNING', 'SARSA', 'EPSILON-GREEDY', 'ALPHA / GAMMA', 'GYMNASIUM'],
      link: 'https://github.com/DarkxLucifer',
    },
    {
      idx: 'P.04',
      title: 'DEEP Q-NETWORK',
      type: 'DEEP REINFORCEMENT LEARNING',
      desc: 'Moving beyond Q-tables — a neural network that approximates Q-values directly from states, closing the loop between perception and policy.',
      stats: 'FROM Q-TABLE TO Q-FUNCTION APPROXIMATION',
      pipe: ['STATE', 'NEURAL NET', 'Q-VALUES', 'ACTION', 'ENVIRONMENT', 'REWARD', 'LEARN', '↺ LOOP'],
      loop: true,
      tags: ['PYTORCH', 'DQN', 'GYMNASIUM', 'Q-VALUE APPROXIMATION'],
      link: 'https://github.com/DarkxLucifer',
    },
    {
      idx: 'P.05',
      title: 'RAG & AGENTIC SYSTEMS',
      type: 'GENERATIVE AI / AGENTIC',
      desc: 'LLM applications that retrieve, reason and act — RAG pipelines and agentic workflows performing multi-step reasoning, tool calls and interaction with external APIs.',
      stats: 'STACK: TRANSFORMERS · LANGCHAIN · LANGGRAPH',
      pipe: ['QUERY', 'RETRIEVE', 'CONTEXT', 'REASON', 'TOOLS', 'RESPONSE'],
      tags: ['TRANSFORMERS', 'RAG', 'LANGCHAIN', 'LANGGRAPH', 'FINE-TUNING', 'FASTAPI', 'STREAMLIT'],
      link: 'https://github.com/DarkxLucifer',
    },
  ];

  return (
    <section id="work" className="sec-border">
      <div className="wrap-container">
        {/* Section Header */}
        <header className="mb-[clamp(40px,7vh,72px)]">
          <p className="kicker">03 / PROJECTS</p>
          <h2 className="sec-title">
            <span className="block">PROOF OF</span>
            <span className="block ol">WORK</span>
          </h2>
        </header>

        {/* Section Note */}
        <p className="font-mono text-[10.5px] tracking-[0.2em] text-mut -mt-6 mb-12">
          05 ENTRIES — FROM TABULAR RL TO AGENTIC PIPELINES ·{' '}
          <a
            href="https://github.com/DarkxLucifer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember border-b border-ember/40 hover:text-ember2 transition-colors"
          >
            FULL PROFILE ON GITHUB ↗
          </a>
        </p>

        {/* Projects List */}
        <div className="border-t border-line">
          {projects.map((proj) => (
            <article
              key={proj.idx}
              className="grid grid-cols-1 md:grid-cols-[96px_1fr] gap-[clamp(20px,3vw,44px)] py-[clamp(36px,6vh,56px)] border-b border-line group"
            >
              {/* Project Index */}
              <div className="font-mono text-xs text-ember tracking-[0.14em] pt-2">
                {proj.idx}
                <div className="hidden md:block w-[22px] h-[1px] bg-line2 mt-3" />
              </div>

              {/* Main Content */}
              <div>
                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3.5">
                  <h3 className="font-disp font-bold text-[clamp(1.3rem,2.8vw,2rem)] leading-[1.15] text-ink group-hover:translate-x-2 transition-transform duration-300">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {proj.title}
                    </a>
                  </h3>
                  <span className="font-mono text-[9.5px] tracking-[0.22em] text-mut border border-line px-2.5 py-1 whitespace-nowrap">
                    {proj.type}
                  </span>
                </div>

                <p className="max-w-[64ch] text-[15.5px] leading-[1.7] text-body">
                  {proj.desc}
                </p>

                {proj.stats && (
                  <p className="mt-3.5 font-mono text-[10.5px] tracking-[0.14em] text-mut">
                    {proj.stats}
                  </p>
                )}

                {/* Architecture Pipeline Nodes */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center mt-6">
                  {proj.pipe.map((node, i) => {
                    const isLoopback = proj.loop && i === proj.pipe.length - 1;
                    return (
                      <React.Fragment key={node}>
                        {i > 0 && (
                          <span
                            className="font-mono text-xs text-ember animate-pflow"
                            style={{ animationDelay: `${i * 0.16}s` }}
                          >
                            →
                          </span>
                        )}
                        <span
                          className={`font-mono text-[10px] tracking-[0.14em] border px-2.5 py-1.5 ${
                            isLoopback
                              ? 'border-ember/45 text-ember2 bg-ember/5'
                              : 'border-line2 text-body bg-white/[0.02]'
                          }`}
                        >
                          {node}
                        </span>
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9.5px] tracking-[0.12em] text-mut border border-line px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
