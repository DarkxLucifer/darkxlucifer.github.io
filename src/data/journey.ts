export interface JourneyStage {
  step: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  keyConcepts: string[];
  equation?: string;
  depthLayer: number;
}

export const journeyStages: JourneyStage[] = [
  {
    step: '01',
    title: 'MACHINE LEARNING',
    subtitle: 'Statistical Foundations & Optimization',
    category: 'Foundations & Empirical Modeling',
    description: 'Mastering classical learning algorithms from first principles: linear algebra, multivariable gradient descent, empirical loss minimization, feature engineering, regularization, and bias-variance tradeoff decomposition.',
    keyConcepts: ['Scikit-learn', 'Feature Engineering', 'Regularization (L1/L2)', 'Cross-Validation', 'Loss Minimization', 'Pandas / NumPy'],
    equation: 'min_w (1/2m) ∑(h_w(x) - y)^2 + λ||w||_2^2',
    depthLayer: 1,
  },
  {
    step: '02',
    title: 'DEEP LEARNING',
    subtitle: 'Non-Linear Representations & Sequence Mechanics',
    category: 'Neural Networks & PyTorch',
    description: 'Deconstructing neural representations from tensor calculus to recurrent architectures. Building forward-backward propagation graphs, handling vanishing gradients, hidden state dynamics, and LSTM/RNN sequence learning.',
    keyConcepts: ['PyTorch', 'Backpropagation', 'Recurrent Neural Networks (RNN)', 'Hidden States', 'Gradient Flow (BPTT)', 'Loss Landscapes'],
    equation: 'h_t = tanh(W_hh h_{t-1} + W_xh x_t + b_h)',
    depthLayer: 2,
  },
  {
    step: '03',
    title: 'REINFORCEMENT LEARNING',
    subtitle: 'Markov Decision Processes & Value Convergence',
    category: 'Decision Science & Temporal Difference',
    description: 'Formulating agent-environment interaction via Bellman equations. Implementing Tabular Q-Learning (off-policy), SARSA (on-policy TD), and Deep Q-Networks (DQN) with experience replay buffers in Gymnasium environments.',
    keyConcepts: ['Gymnasium', 'Q-Learning', 'SARSA', 'DQN', 'Bellman Optimality', 'Epsilon-Greedy', 'Experience Replay'],
    equation: 'Q(s, a) ← Q(s, a) + α [r + γ max_a\' Q(s\', a\') - Q(s, a)]',
    depthLayer: 3,
  },
  {
    step: '04',
    title: 'GENERATIVE AI',
    subtitle: 'Transformers & Scaled Dot-Product Attention',
    category: 'Foundation Models & Latent Spaces',
    description: 'Dissecting modern transformer architectures, multi-head self-attention mechanics, positional encodings, parameter-efficient fine-tuning (PEFT/LoRA), tokenization pipelines, and sequence-to-sequence summarization.',
    keyConcepts: ['Transformers', 'Multi-Head Attention', 'Self-Attention', 'Hugging Face', 'Fine-Tuning', 'Latent Embeddings'],
    equation: 'Attention(Q, K, V) = softmax((Q K^T) / √d_k) V',
    depthLayer: 4,
  },
  {
    step: '05',
    title: 'RAG',
    subtitle: 'Dense Retrieval & Dynamic Context Grounding',
    category: 'Knowledge Systems & Semantic Search',
    description: 'Grounding generative models with verified dynamic external context. Engineering dense-sparse hybrid vector search, chunking strategies, semantic indexing, metadata filtering, and context window optimization.',
    keyConcepts: ['Vector Databases', 'Dense Embeddings', 'Cosine Similarity', 'Chunking Strategies', 'Hybrid Search', 'Context Windowing'],
    equation: 'sim(u, v) = (u · v) / (||u|| ||v||)',
    depthLayer: 5,
  },
  {
    step: '06',
    title: 'LANGCHAIN + LANGGRAPH',
    subtitle: 'Cyclic State Graphs & Memory Orchestration',
    category: 'Agentic Frameworks & State Machines',
    description: 'Structuring reliable LLM workflows with stateful computation graphs. Implementing deterministic branching, cyclical reasoning, short-term/long-term memory buffers, human-in-the-loop validation, and external tool execution.',
    keyConcepts: ['LangChain', 'LangGraph', 'StateGraph', 'Memory Checkpoints', 'Tool Invocation', 'Cyclic Execution Graphs'],
    equation: 'State_{t+1} = f_{node}(State_t, Action_t)',
    depthLayer: 6,
  },
  {
    step: '07',
    title: 'AGENTIC AI',
    subtitle: 'Autonomous Multi-Step Reasoning & Tool Action',
    category: 'Autonomous Systems & Cognitive Loops',
    description: 'Engineering fully autonomous goal-directed agents. Combining planning, reasoning (ReAct/Plan-and-Solve), self-reflection, environmental perception, persistent workspace memory, and robust error recovery protocols.',
    keyConcepts: ['Autonomous Agents', 'ReAct Reasoning', 'Self-Correction', 'Multi-Agent Teams', 'Tool Synthesis', 'Continuous Loops'],
    equation: 'Action = argmax_a E[Reward | History, Goal]',
    depthLayer: 7,
  }
];
