export interface Project {
  number: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  stack: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Enterprise RAG Platform',
    tagline: 'Knowledge retrieval with citations, RBAC permissions, and audit trails.',
    description:
      'Enterprise knowledge platform with document ingestion, OCR, embeddings, vector database, hybrid search, reranking, LLMs, citations, evaluation, security and observability.',
    badge: 'Private & Air-Gapped RAG',
    stack: ['Document Ingestion', 'OCR', 'Embeddings', 'Vector DB', 'Hybrid Search', 'Reranking', 'LLMs', 'Citations', 'Evaluation', 'Security', 'Observability'],
    features: ['RBAC Document Ingestion', 'Hybrid Keyword + Vector Search', 'Self-Hosted Evals & Guardrails'],
  },
  {
    number: '02',
    title: 'OCR Cheque Automation',
    tagline: 'Handwriting-aware cheque processing for regulated banking.',
    description:
      'AI-powered cheque processing using OCR, Computer Vision, document understanding, field extraction, validation, confidence scoring and enterprise banking integration.',
    badge: 'Regulated Banking AI',
    stack: ['OCR', 'Computer Vision', 'Document Understanding', 'Field Extraction', 'Validation', 'Confidence Scoring', 'Banking Integration'],
    features: ['Sub-second Confidence Scoring', 'Handwriting Field Extraction', 'Audit Log Integration'],
  },
  {
    number: '03',
    title: 'Intelligent Workflow Automation — n8n + LLM',
    tagline: 'n8n + LLM agents that route enterprise work, not just answer questions.',
    description:
      'Business workflow automation using n8n, LLMs, AI agents, APIs, tool calling, human approval, monitoring and alerts.',
    badge: 'Agentic Workflows',
    stack: ['n8n', 'LLMs', 'AI Agents', 'APIs', 'Tool Calling', 'Human Approval', 'Monitoring', 'Alerts'],
    features: ['Structured Tool Calling', 'Human-in-the-Loop Approval', 'Async Queue Retries'],
  },
  {
    number: '04',
    title: 'AI Developer / Coder Agent Platform',
    tagline: 'From Jira ticket to tested PR — agents that understand repos and ship code.',
    description:
      'AI platform for developers using coding agents, repository understanding, code generation, tool calling, MCP, testing, agent orchestration and LLM integration.',
    badge: 'Developer AI Platform',
    stack: ['Coding Agents', 'Repository Understanding', 'Code Generation', 'Tool Calling', 'MCP', 'Testing', 'Agent Orchestration', 'LLM Integration'],
    features: ['Model Context Protocol (MCP)', 'AST Repository Indexing', 'Automated Test Verification'],
  },
  {
    number: '05',
    title: 'Social Media AI Agent SaaS',
    tagline: 'Multi-tenant AI SaaS with usage metering, tenant isolation, and autonomous scheduling.',
    description:
      'Multi-tenant SaaS product with customer onboarding, AI agents, LLM content generation, workflow automation, social-media integration, scheduling, analytics, subscriptions and usage tracking.',
    badge: 'Multi-Tenant SaaS AI',
    stack: ['Multi-tenant SaaS', 'Customer Onboarding', 'AI Agents', 'Content Generation', 'Workflow Automation', 'Social Media Integration', 'Scheduling', 'Analytics', 'Subscriptions', 'Usage Tracking'],
    features: ['Tenant Data Isolation', 'Token Usage Metering', 'Autonomous Campaign Scheduling'],
  },
  {
    number: '06',
    title: 'Local Open-Source Sovereign AI Stack',
    tagline: 'Full AI capability on local hardware — zero data leaves the corporate estate.',
    description:
      'Full-stack private/local AI platform that installs and wires together everything required to run AI locally, including open-source LLMs, RAG, vector databases, agents, OCR, vision, voice, APIs, GPU inference, Kubernetes and monitoring.',
    badge: 'Open-Source & Sovereign AI',
    stack: ['Open-Source LLMs', 'RAG', 'Vector Databases', 'Agents', 'OCR', 'Vision', 'Voice', 'APIs', 'GPU Inference', 'Kubernetes', 'Monitoring'],
    features: ['vLLM & Triton Inference', 'Kubernetes GPU Autoscaling', 'Zero Third-Party API Calls'],
  },
];
