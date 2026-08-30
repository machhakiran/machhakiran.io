export const site = {
  name: 'Kiran Machha',
  domain: 'machhakiran.io',
  title: 'Kiran Machha — Senior AI Engineer | Forward Deployed Engineer (FDE)',
  description:
    'Senior AI Engineer & Forward Deployed Engineer. Sovereign AI, Private AI, On-Premises LLM Infrastructure, Open-Source AI Stack, AI Agents, RAG, Kubernetes GPU Clusters, and Enterprise AI Observability.',
  url: 'https://machhakiran.io',
  author: 'Kiran Machha',
  location: 'Singapore',
  email: 'machhakiran@gmail.com',
  linkedin: 'https://www.linkedin.com/in/machhakiran/',
  github: 'https://github.com/machhakiran',
  youtube: 'https://www.youtube.com/channel/UCGvNdo-r87Q12zW2MK01BFw',
  website: 'https://www.kaviagentic.com/',
} as const;

export const heroData = {
  headline: 'Senior AI Engineer · Forward Deployed AI Engineer',
  subheadline: 'Sovereign AI · Private & On-Premises Infra · Open-Source AI Stack',
  tagline: 'Bridging high-level business problems with production-grade AI systems deployed inside client VPCs, air-gapped networks, and Kubernetes GPU clusters.',
  primaryCta: 'View Production Systems',
  primaryHref: '#projects',
  secondaryCta: 'Explore FDE Workflow',
  secondaryHref: '/fde',
} as const;

export const lifecycleStages = [
  { step: '01', title: 'Business Problem', desc: 'Identify workflow bottlenecks, regulatory constraints, ROI targets, and latency requirements.' },
  { step: '02', title: 'AI Architecture', desc: 'Design model strategy, open vs closed weights, vector storage, context windows, and safety barriers.' },
  { step: '03', title: 'Development', desc: 'Fine-tune open-weight models (LoRA/QLoRA), build RAG pipelines, typed agent tools, and evaluation harnesses.' },
  { step: '04', title: 'Enterprise Integration', desc: 'Connect models to ERPs, core banking APIs, CRM database queues, and OAuth/RBAC identity systems.' },
  { step: '05', title: 'Deployment', desc: 'Containerize with vLLM/Triton, deploy on Kubernetes, GPU autoscaling, and zero-downtime rollouts.' },
  { step: '06', title: 'Observability', desc: 'Self-hosted tracing, evals, hallucination monitoring, semantic logging, and token usage analytics.' },
  { step: '07', title: 'Production Operations', desc: 'Automated failover, load balancing, continuous eval gates, and human-in-the-loop fallback queues.' },
  { step: '08', title: 'Cost Optimization', desc: 'Semantic caching, model distillation, dynamic batching, and GPU node pool scale-to-zero.' },
] as const;

export const productionPipeline = [
  { name: 'Data Ingestion', detail: 'OCR, Parsing, Chunking, Embeddings' },
  { name: 'Model Engine', detail: 'Open-Weight LLMs, vLLM, Fine-Tuned LoRA' },
  { name: 'AI Application', detail: 'Agents, RAG, Typed Tool Calling' },
  { name: 'APIs & Gateways', detail: 'FastAPI, Semantic Router, Rate Limiter' },
  { name: 'Enterprise Systems', detail: 'Core Banking, ERP, CRM, Identity' },
  { name: 'Kubernetes Cluster', detail: 'GPU Autoscaling, vLLM Node Pools' },
  { name: 'Cloud & On-Prem', detail: 'Private VPC, Air-Gapped Datacenters' },
  { name: 'Monitoring & Tracing', detail: 'OpenTelemetry, Self-Hosted Evals' },
  { name: 'Alerts & Governance', detail: 'Hallucination Checks, Drift Detection' },
  { name: 'Cost Optimization', detail: 'Semantic Caching, Quantization' },
] as const;
