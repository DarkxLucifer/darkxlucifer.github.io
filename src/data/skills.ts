export interface SkillCategory {
  id: string;
  name: string;
  code: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    type?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    code: 'SYS.01',
    description: 'Core languages for AI systems and data engineering',
    skills: [
      { name: 'Python', type: 'Primary Language' },
    ],
  },
  {
    id: 'data-computing',
    name: 'Data & Scientific Computing',
    code: 'SYS.02',
    description: 'Vectorized computing, array operations, and data manipulation',
    skills: [
      { name: 'NumPy', type: 'Tensor & Array Ops' },
      { name: 'Pandas', type: 'Data Wrangling' },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    code: 'SYS.03',
    description: 'Classical predictive modeling, classification, and statistical regression',
    skills: [
      { name: 'Scikit-learn', type: 'Framework' },
      { name: 'Supervised Learning', type: 'Methodology' },
      { name: 'Unsupervised Learning', type: 'Methodology' },
    ],
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    code: 'SYS.04',
    description: 'Neural architectures, backpropagation gradients, and sequence modeling',
    skills: [
      { name: 'PyTorch', type: 'Core DL Engine' },
      { name: 'Neural Networks', type: 'Architecture' },
      { name: 'RNNs', type: 'Sequence Modeling' },
      { name: 'Backpropagation', type: 'Gradient Descent' },
      { name: 'Sequence Modeling', type: 'Temporal Processing' },
    ],
  },
  {
    id: 'reinforcement-learning',
    name: 'Reinforcement Learning',
    code: 'SYS.05',
    description: 'Markov decision processes, value iteration, and deep policy learning',
    skills: [
      { name: 'Q-Learning', type: 'Value-Based' },
      { name: 'SARSA', type: 'On-Policy TD' },
      { name: 'DQN', type: 'Deep Q-Networks' },
      { name: 'Gymnasium', type: 'Simulation Envs' },
    ],
  },
  {
    id: 'generative-ai',
    name: 'Generative AI & Agentic Systems',
    code: 'SYS.06',
    description: 'Foundation models, context retrieval, multi-agent reasoning, and orchestration',
    skills: [
      { name: 'Transformers', type: 'Attention Mech' },
      { name: 'RAG', type: 'Retrieval Augmented' },
      { name: 'Fine-tuning', type: 'Model Adaptation' },
      { name: 'LangChain', type: 'LLM Framework' },
      { name: 'LangGraph', type: 'Stateful Graphs' },
      { name: 'LLM Applications', type: 'Production AI' },
      { name: 'Agentic AI', type: 'Autonomous Agents' },
    ],
  },
  {
    id: 'app-dev',
    name: 'Application Development',
    code: 'SYS.07',
    description: 'Serving AI inference endpoints, real-time streaming, and interactive interfaces',
    skills: [
      { name: 'FastAPI', type: 'Async API Microservices' },
      { name: 'Streamlit', type: 'Rapid AI Prototyping' },
      { name: 'AI APIs', type: 'Model Integration' },
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Systems',
    code: 'SYS.08',
    description: 'Network architecture, protocol analysis, identity, and security lab environments',
    skills: [
      { name: 'Networking', type: 'Protocols & Routing' },
      { name: 'SMB', type: 'Protocol Inspection' },
      { name: 'RPC', type: 'Remote Procedure Calls' },
      { name: 'Windows Environments', type: 'Enterprise Systems' },
      { name: 'Active Directory Concepts', type: 'Domain Security' },
      { name: 'Security Labs', type: 'Vulnerability Analysis' },
    ],
  },
];
