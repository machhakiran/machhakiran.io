export interface WorkItem {
  tag: string;
  title: string;
  href: string;
  description: string;
  foot: string;
}

export const workItems: WorkItem[] = [
  {
    tag: 'Kubernetes · GPU',
    title: 'LLM on Kubernetes Workshop',
    href: 'https://github.com/machhakiran/llm-on-kubernetes-workshop',
    description:
      'How to run your first local LLM on Kubernetes — manifests, demo scripts and narration, end to end.',
    foot: 'Workshop · Manifests',
  },
  {
    tag: 'GPU · Ray',
    title: 'KubeRay GPU LLM Quickstart',
    href: 'https://github.com/machhakiran/kuberay-gpu-llm-quickstart',
    description:
      'A sample LLM served via KubeRay on Kubernetes, running on GPUs on Akamai Cloud — a Qwen-based coding assistant.',
    foot: 'KubeRay · Akamai Cloud',
  },
  {
    tag: 'Platform · AWS',
    title: 'EKS GenAI Platform',
    href: 'https://github.com/machhakiran/sample-eks-genai-platform',
    description:
      'A reference GenAI platform on EKS: the cluster, the serving layer and the glue between them.',
    foot: 'EKS · Terraform',
  },
  {
    tag: 'RAG · Kubernetes',
    title: 'RAG + LangGraph on K8s',
    href: 'https://github.com/machhakiran/rag-langgraph-k8s-quickstart',
    description:
      'An evidence-based Q&A assistant over airline policies, built with RAG and LangGraph, running on Linode Kubernetes.',
    foot: 'LangGraph · LKE',
  },
  {
    tag: 'RAG · Banking',
    title: 'SmartDoc Curator',
    href: 'https://github.com/machhakiran/SmartDoc-Curator',
    description:
      'An enterprise-grade agentic RAG platform built for banking document workflows and regulated retrieval.',
    foot: 'Python · Agentic RAG',
  },
  {
    tag: 'Agents · Local',
    title: 'KaviAgent',
    href: 'https://github.com/machhakiran/KaviAgent',
    description:
      'A local-first personal AI assistant that runs on your laptop, in code you can read in an afternoon.',
    foot: 'Python · Local-first',
  },
  {
    tag: 'Agents · SDLC',
    title: 'Agents-1',
    href: 'https://github.com/machhakiran/Agents-1',
    description:
      'From Jira to PR — AI agents that write code, test it and review it, wired into the delivery pipeline.',
    foot: 'Python · Multi-agent',
  },
  {
    tag: 'Finance · Agents',
    title: 'FinBot AI',
    href: 'https://github.com/machhakiran/FinBot-AI',
    description:
      'An agentic financial intelligence system — retrieval, analysis and reporting over market and filing data.',
    foot: 'Agentic · Finance',
  },
  {
    tag: 'Curriculum',
    title: 'AI Infra Engineer Track',
    href: 'https://github.com/machhakiran/ai-infra-engineer-learning',
    description:
      'A production ML infrastructure curriculum — the path from application engineer to running AI workloads at scale.',
    foot: 'Learning track',
  },
];
