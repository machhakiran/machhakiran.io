export interface StackCategory {
  name: string;
  tools: string[];
}

export const stackCategories: StackCategory[] = [
  {
    name: 'AI/ML',
    tools: ['PyTorch', 'Hugging Face', 'Transformers', 'ML', 'Deep Learning', 'NLP', 'OCR', 'Vision', 'Voice', 'Prediction', 'Forecasting'],
  },
  {
    name: 'LLM',
    tools: ['RAG', 'Embeddings', 'Vector Search', 'Reranking', 'Fine-Tuning', 'LoRA/QLoRA', 'LLM Training', 'LLM Deployment', 'Model Management', 'Evaluation'],
  },
  {
    name: 'Agents',
    tools: ['AI Agents', 'Agentic AI', 'MCP', 'Tool Calling', 'Multi-Agent Workflows', 'n8n'],
  },
  {
    name: 'Infrastructure',
    tools: ['Docker', 'Kubernetes', 'GPU', 'vLLM', 'Triton', 'Model Serving', 'CI/CD'],
  },
  {
    name: 'Data',
    tools: ['PostgreSQL', 'pgvector', 'OpenSearch', 'Elasticsearch', 'Vector Databases'],
  },
  {
    name: 'Cloud',
    tools: ['AWS', 'Azure', 'Google Cloud', 'Cloud AI', 'GPU Infrastructure', 'Cost Estimation', 'Cost Optimization'],
  },
  {
    name: 'Observability',
    tools: ['Logs', 'Metrics', 'Tracing', 'LLM Observability', 'Model Monitoring', 'Performance Monitoring', 'Cost Monitoring', 'Alerts'],
  },
];
