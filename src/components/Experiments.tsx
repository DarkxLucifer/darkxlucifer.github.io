import React, { useState } from 'react';
import { FlaskConical, Code2, CheckCircle2 } from 'lucide-react';

interface ExperimentItem {
  id: string;
  num: string;
  name: string;
  environment: string;
  status: 'ACTIVE_LAB' | 'BENCHMARKED' | 'RESEARCH';
  hypothesis: string;
  metrics: { label: string; value: string }[];
  snippet: string;
}

const experimentsData: ExperimentItem[] = [
  {
    id: 'gymnasium-rl-benchmark',
    num: '01',
    name: 'Tabular RL Convergence: Q-Learning vs SARSA',
    environment: 'Gymnasium CliffWalking-v1 + FrozenLake-v1',
    status: 'BENCHMARKED',
    hypothesis: 'Off-policy Q-Learning converges to optimal shortest-path risk, whereas on-policy SARSA discovers the conservative, cliff-avoiding policy during exploratory epochs.',
    metrics: [
      { label: 'Episodes Run', value: '1,000 Episodes' },
      { label: 'Cliff Falls (SARSA)', value: '0 after step 320' },
      { label: 'Convergence Time', value: '0.42s total' },
      { label: 'Discount Factor γ', value: '0.99' },
    ],
    snippet: `# Q-Learning Bellman Optimality Update
best_next_action = np.argmax(q_table[next_state])
td_target = reward + gamma * q_table[next_state][best_next_action]
td_error = td_target - q_table[state][action]
q_table[state][action] += alpha * td_error`,
  },
  {
    id: 'transformer-summarization',
    num: '02',
    name: 'Transformer Seq2Seq Attention Mechanics',
    environment: 'PyTorch + Hugging Face Transformers Lab',
    status: 'ACTIVE_LAB',
    hypothesis: 'Scaled dot-product attention distributes semantic relevance weights dynamically across long-range token spans, preserving key summarization vectors.',
    metrics: [
      { label: 'Attention Heads', value: '8 Heads' },
      { label: 'Embedding Dim', value: 'd_model = 512' },
      { label: 'Context Length', value: '1,024 Tokens' },
      { label: 'Inference Latency', value: '18ms / chunk' },
    ],
    snippet: `# Scaled Dot-Product Attention Implementation
scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
attention_weights = F.softmax(scores, dim=-1)
context_vector = torch.matmul(attention_weights, V)`,
  },
  {
    id: 'backprop-scratch',
    num: '03',
    name: 'PyTorch Gradient Calculus & Hidden Recurrence',
    environment: 'Deep Learning Sequence Lab',
    status: 'RESEARCH',
    hypothesis: 'Inspecting Backpropagation Through Time (BPTT) explicitly verifies how vanishing gradient norms occur when recurrent weights spectral radius < 1.0.',
    metrics: [
      { label: 'Tensor Backend', value: 'PyTorch Autograd' },
      { label: 'Hidden Dimension', value: '128 Hidden Units' },
      { label: 'Gradient Norm Clip', value: 'max_norm = 1.0' },
      { label: 'Activation', value: 'Hyperbolic Tangent' },
    ],
    snippet: `# Recurrent Hidden State Propagation
for t in range(seq_len):
    h_t = torch.tanh(W_hh @ h_prev + W_xh @ x[:, t] + b_h)
    h_prev = h_t
output = W_out @ h_prev + b_out`,
  },
];

export const Experiments: React.FC = () => {
  const [activeExp, setActiveExp] = useState<number>(0);
  const current = experimentsData[activeExp];

  return (
    <section id="experiments" className="py-28 relative border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase font-semibold px-2.5 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded">
              DARKXLUCIFER / 05
            </span>
            <div className="h-px w-10 bg-white/20" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
              ACTIVE RESEARCH LAB
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest flex items-center gap-2">
            <FlaskConical className="w-3.5 h-3.5 text-accent-cyan" />
            <span>EMPIRICAL BENCHMARKS // 03 LABS</span>
          </div>
        </div>

        {/* Experiment Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {experimentsData.map((exp, idx) => {
            const isSelected = activeExp === idx;

            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveExp(idx)}
                className={`p-4 rounded-lg border text-left transition-all duration-200 focus:outline-none flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#08080c] border-accent-cyan text-white shadow-lg shadow-accent-cyan/10'
                    : 'bg-[#08080c]/50 border-white/[0.08] text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-accent-cyan font-bold">{exp.num}</span>
                    <span className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.08] text-[10px] text-white/60 rounded">
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-white tracking-wide">
                    {exp.name}
                  </h3>
                </div>
                <div className="mt-3 font-mono text-[11px] text-white/40 truncate">
                  {exp.environment}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Experiment Inspector Workbench */}
        <div className="bg-[#08080c] border border-white/10 rounded-lg p-6 sm:p-8 shadow-2xl shadow-black/90">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan mb-1">
                <FlaskConical className="w-3.5 h-3.5" />
                <span className="tracking-widest uppercase">LAB WORKBENCH // BENCH {current.num}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                {current.name}
              </h3>
            </div>
            <div className="font-mono text-xs text-white/60 bg-black/60 px-3 py-1.5 border border-white/10 rounded self-start lg:self-auto">
              ENV: <span className="text-white">{current.environment}</span>
            </div>
          </div>

          {/* Hypothesis & Benchmarking Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-1">
                  RESEARCH HYPOTHESIS
                </span>
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {current.hypothesis}
                </p>
              </div>

              {/* Code Snippet */}
              <div className="bg-black/60 border border-white/10 rounded p-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-[10px] text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-accent-cyan" />
                    CORE ALGORITHM LOGIC
                  </span>
                  <span>PYTHON // PYTORCH</span>
                </div>
                <pre className="text-white/90 overflow-x-auto text-xs leading-relaxed font-mono">
                  <code>{current.snippet}</code>
                </pre>
              </div>
            </div>

            {/* Metrics Telemetry Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3.5 bg-black/50 border border-white/[0.08] rounded"
                >
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="font-mono text-sm font-semibold text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Info */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-white/40">
            <span>REPOSITORY LAB CODE : VERIFIED IN REPO</span>
            <span className="text-accent-cyan flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> BENCHMARK TESTED
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experiments;
