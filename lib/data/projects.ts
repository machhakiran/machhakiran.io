export interface Project {
  number: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Enterprise RAG Platform',
    tagline: 'Knowledge retrieval with citations, permissions, and audit trails.',
    description:
      'Enterprise knowledge platform with document ingestion, OCR, embeddings, vector database, hybrid search, reranking, LLMs, citations, evaluation, security and observability.',
    stack: ['Document Ingestion', 'OCR', 'Embeddings', 'Vector DB', 'Hybrid Search', 'Reranking', 'LLMs', 'Citations', 'Evaluation', 'Security', 'Observability'],
  },
  {
    number: '02',
    title: 'OCR Cheque Automation',
    tagline: 'Handwriting-aware cheque processing for regulated banking.',
    description:
      'AI-powered cheque processing using OCR, Computer Vision, document understanding, field extraction, validation, confidence scoring and enterprise banking integration.',
    stack: ['OCR', 'Computer Vision', 'Document Understanding', 'Field Extraction', 'Validation', 'Confidence Scoring', 'Banking Integration'],
  },
  {
    number: '03',
    title: 'Intelligent Workflow Automation',
    tagline: 'n8n + LLM agents that route work, not just answer questions.',
    description:
      'Business workflow automation using n8n, LLMs, AI agents, APIs, tool calling, human approval, monitoring and alerts.',
    stack: ['n8n', 'LLMs', 'AI Agents', 'APIs', 'Tool Calling', 'Human Approval', 'Monitoring', 'Alerts'],
  },
  {
    number: '04',
    title: 'AI Developer / Coder Agent Platform',
    tagline: 'From Jira ticket to tested PR — agents that ship code.',
    description:
      'AI platform for developers using coding agents, repository understanding, code generation, tool calling, MCP, testing, agent orchestration and LLM integration.',
    stack: ['Coding Agents', 'Repository Understanding', 'Code Generation', 'Tool Calling', 'MCP', 'Testing', 'Agent Orchestration', 'LLM Integration'],
  },
  {
    number: '05',
    title: 'Social Media AI Agent SaaS',
    tagline: 'Multi-tenant AI SaaS with usage metering and tenant isolation.',
    description:
      'Multi-tenant SaaS product with customer onboarding, AI agents, LLM content generation, workflow automation, social-media integration, scheduling, analytics, subscriptions and usage tracking.',
    stack: ['Multi-tenant SaaS', 'Customer Onboarding', 'AI Agents', 'Content Generation', 'Workflow Automation', 'Social Media Integration', 'Scheduling', 'Analytics', 'Subscriptions', 'Usage Tracking'],
  },
  {
    number: '06',
    title: 'Local Open-Source AI Stack',
    tagline: 'Full AI capability — nothing leaves the estate.',
    description:
      'Full-stack private/local AI platform that installs and wires together everything required to run AI locally, including open-source LLMs, RAG, vector databases, agents, OCR, vision, voice, APIs, GPU inference, Kubernetes and monitoring.',
    stack: ['Open-Source LLMs', 'RAG', 'Vector Databases', 'Agents', 'OCR', 'Vision', 'Voice', 'APIs', 'GPU Inference', 'Kubernetes', 'Monitoring'],
  },
];
