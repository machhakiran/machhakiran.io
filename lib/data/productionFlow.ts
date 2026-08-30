export interface FlowStage {
  id: string;
  step: string;
  name: string;
  shortDesc: string;
  category: 'Security' | 'Routing & Cache' | 'Data & Retrieval' | 'Model & Training' | 'Inference & Infra' | 'Validation' | 'Observability';
  badgeColor: string;
  latencySLA: string;
  keyComponents: string[];
  techStack: string[];
  productionRules: string[];
  codeSnippet: {
    language: string;
    title: string;
    code: string;
  };
  details: string;
}

export const productionFlowStages: FlowStage[] = [
  {
    id: 'input-guardrails',
    step: '01',
    name: 'Input Security & Guardrails',
    shortDesc: 'Pre-flight safety, PII redaction, prompt injection defense, and authentication before any prompt touches models.',
    category: 'Security',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    latencySLA: '< 15ms',
    keyComponents: [
      'PII / Secrets Redaction Engine',
      'Prompt Injection & Jailbreak Classifier',
      'Semantic Input Moderation Gate',
      'mTLS & RBAC Token Bucket Rate Limiter',
    ],
    techStack: ['Microsoft Presidio', 'Llama Guard 3', 'NeMo Guardrails', 'FastAPI', 'Redis'],
    productionRules: [
      'Mask all NRIC, SSN, credit cards, and API keys before payload serialization into model context.',
      'Reject prompt injection embeddings with cosine similarity > 0.88 against known adversarial vectors.',
      'Enforce per-tenant token-bucket rate limits and role-based access control (RBAC).',
    ],
    codeSnippet: {
      language: 'python',
      title: 'guardrails_preflight.py',
      code: `async def validate_and_sanitize_input(request: UserPrompt) -> SanitizedPrompt:
    # 1. Zero-trust PII & Secrets masking
    anonymized_text = presidio_engine.mask_pii(
        request.prompt, 
        entities=["CREDIT_CARD", "PHONE_NUMBER", "GOV_ID", "SECRET_KEY"]
    )
    # 2. Embedding-based adversarial jailbreak check (<10ms)
    is_safe = await nemo_guard.verify_prompt_safety(anonymized_text)
    if not is_safe:
        raise SecurityException("Prompt rejected: Adversarial pattern detected")
        
    return SanitizedPrompt(content=anonymized_text, tenant_id=request.tenant_id)`,
    },
    details: 'Acts as the perimeter firewall for enterprise LLM workloads. Prevents prompt injection, exfiltration attempts, and compliance violations before consuming costly compute.',
  },
  {
    id: 'llm-gateway-router',
    step: '02',
    name: 'LLM Gateway & Semantic Router',
    shortDesc: 'Sub-10ms semantic caching, intelligent complexity-based model routing, and automatic multi-tier failover.',
    category: 'Routing & Cache',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    latencySLA: '< 8ms (Cached) / < 25ms (Routed)',
    keyComponents: [
      'Exact & Semantic Embedding Cache (Redis/GPTCache)',
      'Intent & Complexity Classifier Router',
      'Multi-Tier Failover & Load Balancing',
      'Token-Spy Cost & Budget Enforcement',
    ],
    techStack: ['LiteLLM Proxy', 'Redis Stack', 'Kong Gateway', 'FastAPI', 'OpenTelemetry'],
    productionRules: [
      'Serve high-similarity queries (cosine sim > 0.96) directly from cache with sub-8ms response time and 0 token cost.',
      'Classify request complexity: route structured tasks & queries to Small SLMs; escalate complex reasoning to Frontier LLMs.',
      'Auto-failover tier: Local vLLM Cluster -> Private GPU Pool -> Air-gapped Fallback.',
    ],
    codeSnippet: {
      language: 'python',
      title: 'semantic_router.py',
      code: `@gateway.route("/v1/chat/completions")
async def intelligent_route(request: ChatRequest):
    # 1. Semantic Cache Probe (sub-8ms)
    cached_response = await redis_cache.lookup_semantic(request.prompt, threshold=0.96)
    if cached_response:
        return GatewayResponse(data=cached_response, source="semantic_cache", cost_usd=0.0)

    # 2. Complexity & Task Classification
    complexity_score = router_classifier.predict(request.prompt)
    
    # 3. Dynamic Routing: Small SLM vs Frontier LLM
    if complexity_score < 0.35 and request.requires_json_schema:
        target_model = "vllm-local/llama-3.2-3b-instruct-fp8"  # Ultra fast, low cost
    elif complexity_score < 0.75:
        target_model = "vllm-local/qwen-2.5-14b-instruct-awq"  # Balanced domain SLM
    else:
        target_model = "vllm-private/deepseek-r1-70b"          # Complex multi-step reasoning

    return await litellm_client.completion(model=target_model, **request.dict())`,
    },
    details: 'Eliminates 30-50% of model compute costs through semantic caching and routes 80% of routine traffic to fast, specialized Small LLMs.',
  },
  {
    id: 'agentic-rag',
    step: '03',
    name: 'Agentic Workflows & Hybrid RAG',
    shortDesc: 'Multi-agent state machines, dense+sparse vector search, cross-encoder rerankers, and sandboxed tool execution.',
    category: 'Data & Retrieval',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    latencySLA: '< 120ms',
    keyComponents: [
      'Hybrid Retrieval (Dense Vectors + Sparse BM25)',
      'Cross-Encoder Reranking Engine (Cohere / BGE-Reranker)',
      'Stateful Multi-Agent Orchestrator (LangGraph)',
      'Secure Tool Calling & Isolated MicroVM Sandboxes',
    ],
    techStack: ['Qdrant / OpenSearch', 'LangGraph', 'BGE-M3 Embeddings', 'E2B / Firecracker MicroVMs'],
    productionRules: [
      'Enforce hybrid fusion (RRF) combining dense semantic search with sparse keyword accuracy for exact part numbers and codes.',
      'Rerank top 50 candidates down to top 5 context windows using cross-encoder models for 98%+ precision.',
      'Execute all agent tool calls and dynamic code in isolated microVM sandboxes with zero network egress.',
    ],
    codeSnippet: {
      language: 'python',
      title: 'hybrid_rag_pipeline.py',
      code: `async def hybrid_retrieve_and_rank(query: str, tenant_id: str) -> List[Document]:
    # 1. Dual Dense + Sparse BM25 Query in Parallel
    dense_vec = await embed_model.aencode(query)
    qdrant_results, opensearch_bm25 = await asyncio.gather(
        qdrant_client.search_vectors(dense_vec, filter={"tenant": tenant_id}, limit=50),
        opensearch_client.search_bm25(query, filter={"tenant": tenant_id}, limit=50)
    )
    # 2. Reciprocal Rank Fusion (RRF)
    merged_docs = reciprocal_rank_fusion(qdrant_results, opensearch_bm25)
    
    # 3. Cross-Encoder Precision Reranking
    ranked_top5 = await bge_reranker.rank(query=query, docs=merged_docs[:30], top_k=5)
    return ranked_top5`,
    },
    details: 'Provides deterministic grounding for enterprise data with citation enforcement, removing context bloat and preventing hallucinations.',
  },
  {
    id: 'slm-vs-frontier',
    step: '04',
    name: 'Small LLMs (SLMs) vs Frontier Engines',
    shortDesc: 'High-throughput quantized domain SLMs (1B–14B) for 90% of requests paired with frontier reasoning engines for deep audits.',
    category: 'Model & Training',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    latencySLA: '< 25ms TTFT (SLMs) / < 80ms TTFT (Frontier)',
    keyComponents: [
      'Domain Small LLMs (Llama 3.2 3B, Qwen 2.5 7B/14B, Phi-4)',
      'Frontier Deep Reasoning (DeepSeek-R1, Llama 3.3 70B)',
      'Hardware Quantization (FP8, AWQ, INT4) for 4x Speedup',
      'Speculative Decoding with Draft SLMs',
    ],
    techStack: ['vLLM', 'TensorRT-LLM', 'AutoAWQ', 'SGLang', 'NVIDIA Triton'],
    productionRules: [
      'Run domain-adapted 7B/14B models on FP8 quantization to achieve >120 tokens/sec with minimal VRAM consumption.',
      'Use Small LLMs as speculative draft models to accelerate frontier 70B model decoding by 2.2x-2.8x.',
      'Deploy 100% on-premises / private VPC with zero telemetry phone-home.',
    ],
    codeSnippet: {
      language: 'python',
      title: 'speculative_vllm_config.py',
      code: `# Production vLLM engine configuration with Speculative Decoding
vllm_engine_args = AsyncEngineArgs(
    model="deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
    speculative_model="Qwen/Qwen2.5-Coder-1.5B-Instruct", # Draft SLM
    num_speculative_tokens=5,                              # 2.4x latency acceleration
    quantization="fp8",
    kv_cache_dtype="fp8",
    gpu_memory_utilization=0.92,
    max_model_len=16384,
    enable_prefix_caching=True,                           # Zero-cost prompt reuse
    tensor_parallel_size=2                                # 2x NVIDIA L40S/A100 GPUs
)`,
    },
    details: 'Small LLMs (SLMs) handle the heavy lifting with lightning-fast latency and minimal GPU footprints, while larger models handle high-stakes reasoning.',
  },
  {
    id: 'continuous-training',
    step: '05',
    name: 'Continuous Fine-Tuning & Distillation',
    shortDesc: 'Automated data distillation, synthetic generation, LoRA/QLoRA domain fine-tuning, and CI/CD evaluation harnesses.',
    category: 'Model & Training',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    latencySLA: 'Offline / Scheduled Nightly Pipelines',
    keyComponents: [
      'Curated Production Trajectory Distillation',
      'Synthetic Data Generation with Quality Gates',
      'LoRA / QLoRA Parameter-Efficient Fine-Tuning',
      'Automated Benchmark Regression Gates (Promptfoo / Ragas)',
    ],
    techStack: ['Unsloth AI', 'Axolotl', 'HuggingFace TRL', 'Promptfoo', 'DeepSpeed'],
    productionRules: [
      'Continuously extract high-confidence production traces into structured synthetic instruction datasets.',
      'Fine-tune open weights using 4-bit QLoRA with Unsloth for 5x faster training cycles on single GPU nodes.',
      'Block deployment if automated eval harness scores (accuracy, schema conformity, safety) drop below 99.2%.',
    ],
    codeSnippet: {
      language: 'python',
      title: 'lora_finetune_pipeline.py',
      code: `from unsloth import FastLanguageModel
import torch

# Load base Small LLM (Qwen 2.5 7B)
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="unsloth/Qwen2.5-7B-Instruct-bnb-4bit",
    max_seq_length=4096,
    load_in_4bit=True
)

# Apply domain LoRA adapters (OCR / Banking extraction)
model = FastLanguageModel.get_peft_model(
    model,
    r=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_alpha=16,
    lora_dropout=0,
    bias="none",
    use_gradient_checkpointing="unsloth"
)
# Train on domain dataset and export GGUF / AWQ for vLLM deployment`,
    },
    details: 'Transforms general-purpose open models into specialized, proprietary domain powerhouses that beat frontier models on company-specific tasks.',
  },
  {
    id: 'output-guardrails',
    step: '06',
    name: 'Output Validation & Schema Enforcement',
    shortDesc: 'Strict grammar-constrained JSON schema decoding, hallucination detection, and PII leakage prevention.',
    category: 'Validation',
    badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    latencySLA: '< 10ms',
    keyComponents: [
      'Grammar-Constrained Schema Decoder (Outlines/Instructor)',
      'Hallucination & Groundedness Scorer',
      'Sensitive Data Egress & PII Leakage Filter',
      'Automated Self-Correction & Fallback Loop',
    ],
    techStack: ['Outlines', 'Pydantic v2', 'Instructor', 'Guardrails AI'],
    productionRules: [
      'Enforce JSON schema decoding at logit level so generation is mathematically guaranteed to adhere to OpenAPI/Pydantic types.',
      'Verify that all cited entities exist in retrieved RAG context; reject responses with ungrounded claims.',
      'Scan outbound stream for accidental PII leakage before packets reach the client.',
    ],
    codeSnippet: {
      language: 'python',
      title: 'schema_validator.py',
      code: `from pydantic import BaseModel, Field
import outlines

class BankChequeExtract(BaseModel):
    account_number: str = Field(..., pattern=r"^[0-9]{10,12}$")
    cheque_number: str = Field(..., pattern=r"^[0-9]{6}$")
    amount_sgd: float = Field(..., gt=0.0)
    payee_name: str
    confidence_score: float = Field(..., ge=0.0, le=1.0)

# Grammar-constrained generator: 100% Guaranteed valid JSON output
structured_generator = outlines.generate.json(vllm_model, BankChequeExtract)
verified_result: BankChequeExtract = structured_generator(sanitized_prompt)`,
    },
    details: 'Eliminates JSON parsing errors and guarantees compliance with downstream banking and enterprise ERP APIs.',
  },
  {
    id: 'k8s-gpu-infra',
    step: '07',
    name: 'Kubernetes GPU Cluster & Scaling',
    shortDesc: 'Containerized vLLM engine pods, PagedAttention, GPU Operator with KEDA autoscaling and scale-to-zero.',
    category: 'Inference & Infra',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    latencySLA: 'High-Concurrency Autoscaling (0 to 100 Pods)',
    keyComponents: [
      'Kubernetes GPU Operator with NVIDIA NVLink / MIG Slicing',
      'KEDA Metrics Autoscaler (Queue depth & KV Cache saturation)',
      'Zero-Downtime Rolling Model Upgrades',
      'Air-Gapped Private VPC Security',
    ],
    techStack: ['Kubernetes (EKS/RKE2)', 'vLLM', 'KEDA', 'NVIDIA GPU Operator', 'Helm'],
    productionRules: [
      'Scale GPU node pools dynamically based on vLLM concurrency metrics (vllm:num_requests_waiting > 5 triggers auto-scale).',
      'Enable Multi-Instance GPU (MIG) on A100/H100s to host multiple Small SLM instances per physical GPU node.',
      'Configure Pod Disruption Budgets and readiness probes for zero-downtime rolling weight updates.',
    ],
    codeSnippet: {
      language: 'yaml',
      title: 'k8s_vllm_keda_scaledobject.yaml',
      code: `apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: vllm-slm-autoscaler
  namespace: ai-inference
spec:
  scaleTargetRef:
    name: vllm-qwen-7b-deployment
  minReplicaCount: 1
  maxReplicaCount: 16
  triggers:
  - type: prometheus
    metadata:
      serverAddress: http://prometheus-k8s:9090
      metricName: vllm_num_requests_waiting
      query: sum(vllm:num_requests_waiting{namespace="ai-inference"})
      threshold: '5' # Trigger new GPU pod when queue > 5`,
    },
    details: 'Achieves high GPU utilization with sub-second cold scaling and strict data isolation on dedicated enterprise hardware.',
  },
  {
    id: 'observability-evals',
    step: '08',
    name: 'Observability, Evals & Governance',
    shortDesc: 'Self-hosted distributed tracing, latency and token metrics, continuous regression evals, and HITL review queues.',
    category: 'Observability',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    latencySLA: 'Real-time Async Streaming (< 2ms overhead)',
    keyComponents: [
      'End-to-End Tracing & Spans (OpenTelemetry, Langfuse, Opik)',
      'Prometheus + Grafana GPU & Token Telemetry Dashboards',
      'Automated Quality & Hallucination Evals in CI/CD',
      'Human-in-the-Loop (HITL) Exception Queues',
    ],
    techStack: ['Langfuse', 'OpenTelemetry', 'Opik / Phoenix', 'Prometheus', 'Grafana'],
    productionRules: [
      'Trace 100% of production requests with unique span IDs linking input guardrail, gateway cache, retrieval context, and model output.',
      'Alert on latency spikes (P99 TTFT > 300ms) or unexpected drops in groundedness scores.',
      'Route low-confidence predictions (< 90%) directly to human review queues before triggering business actions.',
    ],
    codeSnippet: {
      language: 'python',
      title: 'observability_trace.py',
      code: `from langfuse.decorators import observe, langfuse_context

@observe(name="enterprise_inference_pipeline")
async def execute_enterprise_flow(prompt: str, user_id: str):
    # Log session, tenant metadata & cost tags
    langfuse_context.update_current_trace(
        user_id=user_id,
        tags=["production", "sovereign-vpc", "vllm-fp8"],
        metadata={"gateway_routing": "small_slm_fast_path"}
    )
    
    result = await run_pipeline(prompt)
    
    # Continuous Evaluation Score attachment
    langfuse_context.score_current_trace(
        name="groundedness_score",
        value=result.faithfulness_score,
        comment="Auto-evaluated against Qdrant context vectors"
    )
    return result`,
    },
    details: 'Provides complete transparency, audit compliance, and continuous quality guardrails across the entire enterprise AI lifecycle.',
  },
];
