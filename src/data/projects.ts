export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  technologies: string[];
  pipeline?: string[];
  architecture?: string[];
  concepts?: string[];
  environments?: string[];
  algorithms?: string[];
  stats: { label: string; value: string }[];
  accentTag: string;
  githubUrl: string;
  mathFormula?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'imdb-sentiment-analysis',
    num: '01',
    title: 'IMDB Sentiment Analysis & Recurrent Sequence Lab',
    category: 'NLP / DEEP LEARNING',
    badge: 'CLASSIFICATION & RNN',
    description: 'Engineered an end-to-end NLP and sequence modeling system on 50,000 movie reviews. Built classical TF-IDF discriminative classifiers and followed with PyTorch Recurrent Neural Networks (RNN) to inspect hidden temporal state propagation, token embeddings, and gradient flow through time.',
    technologies: ['Python', 'Pandas', 'NLTK', 'Scikit-learn', 'TF-IDF', 'PyTorch', 'RNN'],
    pipeline: [
      'Raw Review Corpus',
      'Text Preprocessing & Lemmatization',
      'TF-IDF Feature Space',
      'PyTorch Embedding Layer',
      'RNN Hidden State Transitions (h_t)',
      'Linear Projection & Sigmoid Activation',
      'Sentiment Probability Prediction'
    ],
    stats: [
      { label: 'Corpus Size', value: '50,000 Reviews' },
      { label: 'Feature Extraction', value: 'Sparse N-Gram TF-IDF' },
      { label: 'Deep Architecture', value: 'PyTorch Recurrent Net' },
      { label: 'Objective', value: 'Binary Cross-Entropy' }
    ],
    accentTag: 'NLP_RNN_PIPELINE',
    githubUrl: 'https://github.com/DarkxLucifer',
    mathFormula: 'h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)'
  },
  {
    id: 'q-learning-tabular',
    num: '02',
    title: 'Q-Learning Optimal Control Agent',
    category: 'REINFORCEMENT LEARNING',
    badge: 'OFF-POLICY TD CONTROL',
    description: 'Implemented off-policy Tabular Q-Learning in the Gymnasium CliffWalking-v1 benchmark environment. Designed epsilon-greedy exploration schedules, reward engineering, and Bellman optimality updates to converge to minimum-cost safe trajectories.',
    technologies: ['Python', 'NumPy', 'Gymnasium', 'CliffWalking-v1'],
    environments: ['CliffWalking-v1 (Discrete MDP)'],
    algorithms: ['Q-Learning (Off-Policy TD Control)'],
    concepts: [
      'State-Action Values Q(s, a)',
      'Bellman Optimality Operator',
      'Epsilon-Greedy Policy',
      'Temporal Difference Error',
      'Discount Factor γ Decay'
    ],
    stats: [
      { label: 'Environment', value: 'CliffWalking-v1' },
      { label: 'Policy Form', value: 'Off-Policy (Greedy target)' },
      { label: 'Value Representation', value: 'Discrete Q-Table' },
      { label: 'Convergence', value: 'Optimal Path Reached' }
    ],
    accentTag: 'RL_Q_LEARNING',
    githubUrl: 'https://github.com/DarkxLucifer',
    mathFormula: 'Q(s, a) \\leftarrow Q(s, a) + \\alpha \\left[ r + \\gamma \\max_{a\'} Q(s\', a\') - Q(s, a) \\right]'
  },
  {
    id: 'sarsa-td-control',
    num: '03',
    title: 'SARSA On-Policy Policy Learning',
    category: 'REINFORCEMENT LEARNING',
    badge: 'ON-POLICY TD CONTROL',
    description: 'Implemented and evaluated SARSA (State-Action-Reward-State-Action) on Gymnasium CliffWalking-v1 and FrozenLake-v1 stochastic environments. Analyzed the behavioral safety contrast between on-policy SARSA (avoiding cliff danger) and off-policy Q-Learning (edge-hugging).',
    technologies: ['Python', 'NumPy', 'Gymnasium', 'CliffWalking-v1', 'FrozenLake-v1'],
    environments: ['CliffWalking-v1', 'FrozenLake-v1 (Slippery MDP)'],
    algorithms: ['SARSA (On-Policy Temporal Difference)'],
    concepts: [
      'On-Policy Exploration Risk',
      'SARSA Update Rule (s, a, r, s\', a\')',
      'Exploration vs. Safety Tradeoff',
      'Stochastic Transition Matrices'
    ],
    stats: [
      { label: 'Environments', value: 'CliffWalking + FrozenLake' },
      { label: 'Learning Mechanism', value: 'On-Policy Update' },
      { label: 'Safety Metric', value: 'Zero Cliff Falls on Greed' },
      { label: 'Benchmark', value: 'Gymnasium v0.29+' }
    ],
    accentTag: 'RL_SARSA_BENCHMARK',
    githubUrl: 'https://github.com/DarkxLucifer',
    mathFormula: 'Q(s_t, a_t) \\leftarrow Q(s_t, a_t) + \\alpha \\left[ r_{t+1} + \\gamma Q(s_{t+1}, a_{t+1}) - Q(s_t, a_t) \\right]'
  },
  {
    id: 'deep-q-network-agent',
    num: '04',
    title: 'Deep Q-Network (DQN) Neural Value Approximator',
    category: 'DEEP REINFORCEMENT LEARNING',
    badge: 'NEURAL Q-FUNCTION',
    description: 'Built a Deep Q-Network (DQN) with PyTorch, transitioning from tabular state limits to non-linear neural function approximation. Implemented Experience Replay buffers to break temporal data correlation and target network stabilizing to avoid moving target oscillation.',
    technologies: ['Python', 'PyTorch', 'Gymnasium'],
    architecture: [
      'State Vector s_t (Observation)',
      'Fully Connected Deep Neural Net (PyTorch)',
      'Action Value Outputs Q(s, ·; θ)',
      'Experience Replay Buffer (D)',
      'Target Network (θ^-) Periodic Sync',
      'Huber / MSE Loss Minimization'
    ],
    stats: [
      { label: 'Approximator', value: 'PyTorch Deep MLP' },
      { label: 'Replay Buffer', value: 'Uniform Experience Memory' },
      { label: 'Loss Metric', value: 'Smooth L1 / Huber TD Loss' },
      { label: 'Target Network', value: 'Polyak / Periodic Hard Sync' }
    ],
    accentTag: 'DEEP_Q_NETWORK',
    githubUrl: 'https://github.com/DarkxLucifer',
    mathFormula: 'L(\\theta) = \\mathbb{E}_{(s,a,r,s\')} \\left[ \\left( r + \\gamma \\max_{a\'} Q(s\', a\'; \\theta^-) - Q(s, a; \\theta) \\right)^2 \\right]'
  },
  {
    id: 'transformer-text-summarizer',
    num: '05',
    title: 'Transformer Sequence-to-Sequence Summarizer & GenAI Lab',
    category: 'GENERATIVE AI & TRANSFORMERS',
    badge: 'ATTENTION MECHANISMS',
    description: 'Developed and experimented with transformer-based sequence-to-sequence neural architectures for text summarization. Investigated multi-head self-attention, positional representations, and Hugging Face pipelines for generative reasoning and RAG grounding.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Jupyter'],
    concepts: [
      'Scaled Dot-Product Attention',
      'Encoder-Decoder Attention',
      'Token Embeddings & Byte-Pair Encoding',
      'Beam Search vs. Temperature Sampling',
      'Fine-Tuning on Custom Datasets'
    ],
    stats: [
      { label: 'Architecture', value: 'Transformer Seq2Seq' },
      { label: 'Mechanism', value: 'Multi-Head Attention' },
      { label: 'Platform', value: 'PyTorch + Hugging Face' },
      { label: 'Task Domain', value: 'Abstractive Summarization' }
    ],
    accentTag: 'GENAI_TRANSFORMER',
    githubUrl: 'https://github.com/DarkxLucifer',
    mathFormula: '\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V'
  }
];
