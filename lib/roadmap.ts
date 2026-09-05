export interface StageMeta {
  id: string; // e.g. "00", "01", ..., "14"
  order: number; // 0 to 14
  name: string;
  shortTitle: string;
  slug: string;
  phaseId: string;
  phaseName: string;
  phaseRoman: string;
  color: string; // Official brand hex
  bgGlow: string; // Tailwind glow / opacity helper
  borderHex: string;
  icon: string;
  tech: string;
  domainFocus: string;
}

export interface PhaseMeta {
  id: string;
  roman: string;
  title: string;
  subtitle: string;
  stageIds: string[];
}

export const PHASES: PhaseMeta[] = [
  {
    id: 'phase-1',
    roman: 'PHASE I',
    title: 'Foundations & Quantitative Analytics',
    subtitle: 'Bare-metal Python concurrency, DuckDB statistical engines, and deep PyTorch tensors.',
    stageIds: ['00', '01', '02', '03'],
  },
  {
    id: 'phase-2',
    roman: 'PHASE II',
    title: 'Specialized Multimodal Perception',
    subtitle: 'State-of-the-art transformer NLP and real-time YOLOv11 & OCR computer vision.',
    stageIds: ['04', '05'],
  },
  {
    id: 'phase-3',
    roman: 'PHASE III',
    title: 'Generative AI & Knowledge Systems',
    subtitle: 'Local LLMs, QLoRA fine-tuning, production RAG with Qdrant, and LangChain LCEL.',
    stageIds: ['06', '07', '08'],
  },
  {
    id: 'phase-4',
    roman: 'PHASE IV',
    title: 'Autonomous Agents & Protocol Standards',
    subtitle: 'Cyclic state machines (LangGraph), Model Context Protocol (FastMCP), and autonomous agents.',
    stageIds: ['09', '10', '14'],
  },
  {
    id: 'phase-5',
    roman: 'PHASE V',
    title: 'Production AI Platform Engineering',
    subtitle: 'High-throughput vLLM serving clusters, MLOps/LLMOps governance, and cloud-native Kubernetes AIOps.',
    stageIds: ['11', '12', '13'],
  },
];

export const STAGES: Record<string, StageMeta> = {
  '00': {
    id: '00',
    order: 0,
    name: 'Python Foundations & Architecture',
    shortTitle: 'Python Systems',
    slug: 'python',
    phaseId: 'phase-1',
    phaseName: 'Foundations & Quantitative Analytics',
    phaseRoman: 'PHASE I',
    color: '#3776AB', // Python Blue
    bgGlow: 'rgba(55, 118, 171, 0.15)',
    borderHex: '#3776AB',
    icon: '🐍',
    tech: 'Python 3.11+, AsyncIO, Pydantic v2, FastAPI',
    domainFocus: 'High-throughput async event loops & defensive data contracts',
  },
  '01': {
    id: '01',
    order: 1,
    name: 'Data Science, SQL & Statistics',
    shortTitle: 'Data Science & SQL',
    slug: 'data-science-sql-stats',
    phaseId: 'phase-1',
    phaseName: 'Foundations & Quantitative Analytics',
    phaseRoman: 'PHASE I',
    color: '#06B6D4', // Cyan
    bgGlow: 'rgba(6, 182, 212, 0.15)',
    borderHex: '#06B6D4',
    icon: '📊',
    tech: 'DuckDB, PostgreSQL, Pandas, Statsmodels',
    domainFocus: 'Window functions, statistical hypothesis testing & OLAP pipelines',
  },
  '02': {
    id: '02',
    order: 2,
    name: 'Machine Learning & Feature Engineering',
    shortTitle: 'Machine Learning',
    slug: 'machine-learning',
    phaseId: 'phase-1',
    phaseName: 'Foundations & Quantitative Analytics',
    phaseRoman: 'PHASE I',
    color: '#8B5CF6', // Purple
    bgGlow: 'rgba(139, 92, 246, 0.15)',
    borderHex: '#8B5CF6',
    icon: '🤖',
    tech: 'LightGBM, XGBoost, Optuna, SHAP, Scikit-Learn',
    domainFocus: 'Supervised/unsupervised models, Bayesian hyperopt & SHAP interpretability',
  },
  '03': {
    id: '03',
    order: 3,
    name: 'Deep Learning Architecture (PyTorch)',
    shortTitle: 'Deep Learning PyTorch',
    slug: 'deep-learning-pytorch',
    phaseId: 'phase-1',
    phaseName: 'Foundations & Quantitative Analytics',
    phaseRoman: 'PHASE I',
    color: '#EE4C2C', // PyTorch Flame Orange
    bgGlow: 'rgba(238, 76, 44, 0.15)',
    borderHex: '#EE4C2C',
    icon: '🔥',
    tech: 'PyTorch, TorchVision, PyG, CUDA, Lightning',
    domainFocus: 'Custom autograd, autoencoders, LSTMs, ViTs & Graph Neural Networks',
  },
  '04': {
    id: '04',
    order: 4,
    name: 'Natural Language Processing & Transformers',
    shortTitle: 'NLP Transformers',
    slug: 'nlp',
    phaseId: 'phase-2',
    phaseName: 'Specialized Multimodal Perception',
    phaseRoman: 'PHASE II',
    color: '#F59E0B', // Gold / Amber
    bgGlow: 'rgba(245, 158, 11, 0.15)',
    borderHex: '#F59E0B',
    icon: '📚',
    tech: 'HuggingFace, Pegasus, DistilBERT, RoBERTa',
    domainFocus: 'Sub-word tokenizers, fine-tuned summarization, classification & token NER',
  },
  '05': {
    id: '05',
    order: 5,
    name: 'Computer Vision & Multimodal Perception',
    shortTitle: 'Computer Vision',
    slug: 'computer-vision',
    phaseId: 'phase-2',
    phaseName: 'Specialized Multimodal Perception',
    phaseRoman: 'PHASE II',
    color: '#F43F5E', // Rose
    bgGlow: 'rgba(244, 63, 94, 0.15)',
    borderHex: '#F43F5E',
    icon: '🎯',
    tech: 'Ultralytics YOLOv11, DBNet OCR, OpenCV, TensorRT',
    domainFocus: 'Edge object detection, oriented bounding boxes & high-speed OCR pipelines',
  },
  '06': {
    id: '06',
    order: 6,
    name: 'Large Language Models & Generative AI',
    shortTitle: 'LLMs & GenAI',
    slug: 'llm-generative-ai',
    phaseId: 'phase-3',
    phaseName: 'Generative AI & Knowledge Systems',
    phaseRoman: 'PHASE III',
    color: '#EA580C', // GenAI Deep Orange
    bgGlow: 'rgba(234, 88, 12, 0.15)',
    borderHex: '#EA580C',
    icon: '✨',
    tech: 'Unsloth QLoRA, Llama 3.3, Mistral, GGUF, vLLM',
    domainFocus: 'Parameter-efficient instruction tuning, quantization & prompt routing',
  },
  '07': {
    id: '07',
    order: 7,
    name: 'Retrieval-Augmented Generation & Graphs',
    shortTitle: 'RAG Systems',
    slug: 'rag-knowledge-systems',
    phaseId: 'phase-3',
    phaseName: 'Generative AI & Knowledge Systems',
    phaseRoman: 'PHASE III',
    color: '#10B981', // Emerald
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    borderHex: '#10B981',
    icon: '🔍',
    tech: 'Qdrant, Cohere Rerank, LlamaIndex, Neo4j GraphRAG',
    domainFocus: 'Dense + sparse hybrid search, cross-encoder reranking & knowledge graphs',
  },
  '08': {
    id: '08',
    order: 8,
    name: 'LangChain Ecosystem & Composable Chains',
    shortTitle: 'LangChain Chains',
    slug: 'langchain',
    phaseId: 'phase-3',
    phaseName: 'Generative AI & Knowledge Systems',
    phaseRoman: 'PHASE III',
    color: '#0D9488', // Teal
    bgGlow: 'rgba(13, 148, 136, 0.15)',
    borderHex: '#0D9488',
    icon: '⛓️',
    tech: 'LangChain, LCEL, LangSmith, Google Gemini Flash',
    domainFocus: 'Streaming LCEL runnables, dynamic tool schemas & production tracing',
  },
  '09': {
    id: '09',
    order: 9,
    name: 'LangGraph Workflows & State Machines',
    shortTitle: 'LangGraph State',
    slug: 'langgraph',
    phaseId: 'phase-4',
    phaseName: 'Autonomous Agents & Protocol Standards',
    phaseRoman: 'PHASE IV',
    color: '#EF4444', // Red / Coral
    bgGlow: 'rgba(239, 68, 68, 0.15)',
    borderHex: '#EF4444',
    icon: '🕸️',
    tech: 'LangGraph, SqliteSaver Checkpointer, ReAct Loops',
    domainFocus: 'Cyclic state graphs, checkpointed human-in-the-loop & multi-agent handoffs',
  },
  '10': {
    id: '10',
    order: 10,
    name: 'Agentic AI & Model Context Protocol (MCP)',
    shortTitle: 'Agentic AI & MCP',
    slug: 'agentic-ai-mcp',
    phaseId: 'phase-4',
    phaseName: 'Autonomous Agents & Protocol Standards',
    phaseRoman: 'PHASE IV',
    color: '#6366F1', // Indigo
    bgGlow: 'rgba(99, 102, 241, 0.15)',
    borderHex: '#6366F1',
    icon: '🔌',
    tech: 'Model Context Protocol (MCP), FastMCP, Claude SDK',
    domainFocus: 'Zero-friction tool exposure, standardized RPC servers & sovereign auth',
  },
  '14': {
    id: '14',
    order: 11, // Placed logically in Phase IV with Agents
    name: 'AI Agents Core (Loop, Graph, Context, Memory, Tools)',
    shortTitle: 'AI Agents Core',
    slug: 'ai-agents-core',
    phaseId: 'phase-4',
    phaseName: 'Autonomous Agents & Protocol Standards',
    phaseRoman: 'PHASE IV',
    color: '#EC4899', // Hot Pink
    bgGlow: 'rgba(236, 72, 153, 0.15)',
    borderHex: '#EC4899',
    icon: '🤖',
    tech: 'LangGraph, ReAct Loops, FastMCP, Mem0, Groq',
    domainFocus: 'Autonomous PR reviewers, market analysts, deep research & support voice memory',
  },
  '11': {
    id: '11',
    order: 12,
    name: 'AI Infrastructure, vLLM & Serving Clusters',
    shortTitle: 'AI Infrastructure',
    slug: 'ai-infrastructure',
    phaseId: 'phase-5',
    phaseName: 'Production AI Platform Engineering',
    phaseRoman: 'PHASE V',
    color: '#00C49F', // Mint
    bgGlow: 'rgba(0, 196, 159, 0.15)',
    borderHex: '#00C49F',
    icon: '⚡',
    tech: 'vLLM PagedAttention, NVIDIA Triton, Modal.com',
    domainFocus: 'Continuous batching, KV cache management & sub-10ms inference clusters',
  },
  '12': {
    id: '12',
    order: 13,
    name: 'MLOps & LLMOps Lifecycle Automation',
    shortTitle: 'MLOps & LLMOps',
    slug: 'mlops-llmops',
    phaseId: 'phase-5',
    phaseName: 'Production AI Platform Engineering',
    phaseRoman: 'PHASE V',
    color: '#0284C7', // Sky Blue
    bgGlow: 'rgba(2, 132, 199, 0.15)',
    borderHex: '#0284C7',
    icon: '🔄',
    tech: 'DVC, MLflow, Evidently AI, Ragas, DeepEval',
    domainFocus: 'Continuous evaluation, drift detection, lineage tracking & automated retrain triggers',
  },
  '13': {
    id: '13',
    order: 14,
    name: 'AIOps & Cloud-Native AI Platforms',
    shortTitle: 'AIOps Platform',
    slug: 'aiops-platform-engineering',
    phaseId: 'phase-5',
    phaseName: 'Production AI Platform Engineering',
    phaseRoman: 'PHASE V',
    color: '#2563EB', // Royal Blue
    bgGlow: 'rgba(37, 99, 235, 0.15)',
    borderHex: '#2563EB',
    icon: '☸️',
    tech: 'Kubernetes (K8s), KubeRay, LiteLLM Gateway, KServe',
    domainFocus: 'GPU resource orchestration, high-availability multi-region routing & autoscaling',
  },
};

export interface PostStageInfo {
  isRoadmap: boolean;
  stageId?: string;
  stage?: StageMeta;
  projectNum?: string;
  projectIndex?: number;
  domain?: string;
  domainColor?: string;
  breadcrumb: string;
}

export function getDomainColor(domainOrTag: string): { bg: string; text: string; border: string } {
  const d = domainOrTag.toLowerCase();
  if (d.includes('fintech') || d.includes('bank') || d.includes('finance')) {
    return { bg: 'rgba(16, 185, 129, 0.15)', text: '#34D399', border: 'rgba(16, 185, 129, 0.35)' }; // Emerald
  }
  if (d.includes('telecom') || d.includes('network') || d.includes('bandwidth')) {
    return { bg: 'rgba(2, 132, 199, 0.15)', text: '#38BDF8', border: 'rgba(2, 132, 199, 0.35)' }; // Sky Blue
  }
  if (d.includes('ecommerce') || d.includes('retail') || d.includes('price')) {
    return { bg: 'rgba(245, 158, 11, 0.15)', text: '#FBBF24', border: 'rgba(245, 158, 11, 0.35)' }; // Amber
  }
  if (d.includes('government') || d.includes('public') || d.includes('civic') || d.includes('law')) {
    return { bg: 'rgba(139, 92, 246, 0.15)', text: '#C084FC', border: 'rgba(139, 92, 246, 0.35)' }; // Purple
  }
  if (d.includes('agent') || d.includes('mcp') || d.includes('social') || d.includes('autonomous')) {
    return { bg: 'rgba(236, 72, 153, 0.15)', text: '#F472B6', border: 'rgba(236, 72, 153, 0.35)' }; // Pink
  }
  return { bg: 'rgba(99, 102, 241, 0.15)', text: '#818CF8', border: 'rgba(99, 102, 241, 0.35)' }; // Indigo default
}

export function parsePostStageInfo(slug: string, tags?: string[]): PostStageInfo {
  const match = slug.match(/^(\d{2})-([a-z0-9-]+)-(\d{2})-(.*)$/);

  if (match) {
    const stageId = match[1];
    const projectNum = match[3];
    const stage = STAGES[stageId];

    let domain = 'AI Engineering';
    if (tags && tags.length > 0) {
      const found = tags.find((t) =>
        ['FinTech', 'Telecom', 'E-Commerce', 'Government', 'Social Growth', 'AI Agents', 'Python'].includes(t)
      );
      if (found) domain = found;
      else domain = tags[tags.length - 1];
    }

    const domainColor = getDomainColor(domain).text;

    return {
      isRoadmap: true,
      stageId,
      stage,
      projectNum,
      projectIndex: parseInt(projectNum, 10),
      domain,
      domainColor,
      breadcrumb: `${stage?.phaseRoman || 'Roadmap'} · Stage ${stageId} · Project ${projectNum}`,
    };
  }

  // Standalone whitepapers
  return {
    isRoadmap: false,
    domain: tags?.[0] || 'Architecture Whitepaper',
    domainColor: '#38BDF8',
    breadcrumb: 'Production Architecture Whitepapers',
  };
}
