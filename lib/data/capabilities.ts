export interface Capability {
  number: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    number: '01 · AI agents',
    title: 'Agents that finish the job',
    description:
      'Multi-step agents with real tool access, planning and memory — built to complete a workflow, not to demo one. Every run leaves an audit trail a reviewer can replay.',
  },
  {
    number: '02 · Model tuning & training',
    title: 'Your data, your weights',
    description:
      'Fine-tuning open models on the customer\'s own corpus — LoRA and QLoRA, SFT and preference tuning — alongside the classical ML models that still beat an LLM at tabular work.',
  },
  {
    number: '03 · AI infrastructure',
    title: 'Serving it at scale',
    description:
      'AI workloads are not stateless web apps. Long requests, fat weights and queue-shaped traffic need a Kubernetes and GPU strategy designed for them.',
  },
  {
    number: '04 · AI observability',
    title: 'Knowing it still works',
    description:
      'Traces, evals, drift and cost per request — self-hosted, so quality is a number on a dashboard rather than a complaint from a user.',
  },
  {
    number: '05 · Private & on-premise AI',
    title: 'Nothing leaves the estate',
    description:
      'Open weights served inside the customer\'s own datacentre, VPC or air-gapped network. No third-party API, no data egress, no vendor holding the keys.',
  },
  {
    number: '06 · Enterprise integration',
    title: 'Into the stack you already have',
    description:
      'The last mile, and where most pilots stall. ERPs, core banking, ticketing and warehouses — reached through typed, permissioned tools with a human approval step.',
  },
];
