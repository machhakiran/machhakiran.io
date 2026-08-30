export interface Job {
  when: string;
  location: string;
  title: string;
  org: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    when: 'Present',
    location: 'Singapore',
    title: 'Founder & Forward Deployed AI Engineer',
    org: 'KaviAI · kaviagentic.com',
    bullets: [
      'Builds and deploys agentic AI systems with customers — multi-agent orchestration, tool calling, and self-correcting reasoning loops that survive real inputs.',
      'Runs the full LLMOps chain: serving, gateway routing, evaluation harnesses and observability, so quality regressions are caught before customers find them.',
      'Ships production infrastructure on Kubernetes with GPU autoscaling, and publishes the patterns as open workshops.',
    ],
  },
  {
    when: 'Prior',
    location: 'SaaS',
    title: 'AI Platform / LLM Ops Engineer',
    org: 'Enterprise SaaS',
    bullets: [
      'Stood up the shared inference platform — model gateway, quota and usage-based billing, and semantic caching to hold cost per request down as traffic grew.',
      'Introduced evaluation gates into CI so prompt and model changes shipped on evidence rather than vibes.',
      'Moved batch and streaming inference onto autoscaling GPU node pools with scale-to-zero for off-peak hours.',
    ],
  },
  {
    when: 'Prior',
    location: 'Payments',
    title: 'Full Stack AI Engineer',
    org: 'Payments',
    bullets: [
      'Delivered customer-facing AI features end to end — Next.js and FastAPI through to the retrieval and ranking layers behind them.',
      'Built hybrid search and RAG over transaction and policy corpora, with citation enforcement for audit trails.',
      'Hardened the path to production: async workers, idempotent retries and structured tracing across services.',
    ],
  },
  {
    when: 'Earlier',
    location: 'Banking',
    title: 'Software Engineer — Enterprise Applications',
    org: 'Banking',
    bullets: [
      'Built and maintained enterprise-grade applications under regulated change control, where a failed release is an incident report.',
      'Microservices and API platforms on Spring Boot and Node.js, containerised and delivered through automated pipelines.',
      'The grounding that makes the AI work deployable: security review, access control and data handling as defaults rather than afterthoughts.',
    ],
  },
];
