import { DetailedProject } from '@/components/ProjectArchitectureModal';

export const detailedProjectsList: DetailedProject[] = [
  {
    id: 'corporate-rag-system',
    number: '01',
    title: 'Corporate Organization RAG System',
    tagline: 'Production-grade Retrieval-Augmented Generation for enterprise knowledge management',
    badge: 'Enterprise Hybrid RAG',
    description:
      'A complete corporate organization RAG system that ingests internal documents, enables hybrid search across organizational knowledge, and provides intelligent Q&A through agentic retrieval with LangGraph.',
    architectureDiagram: `
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           Corporate Knowledge Ingestion                           │
│  PDF / Doc Ingestion ──► Text Chunking & Embeddings ──► OpenSearch Vector DB    │
└─────────────────────────────────────────────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                             Hybrid Retrieval Engine                             │
│       BM25 Keyword Search  +  Vector Similarity Search  ──► RRF Fusion         │
└─────────────────────────────────────────────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        Agentic RAG & Guardrails (LangGraph)                     │
│    Document Grading ──► Query Rewriting ──► Local Ollama LLM ──► Langfuse Tracing │
└─────────────────────────────────────────────────────────────────────────────────┘
                                         │
                                         ▼
                               Gradio UI / Telegram Bot
`,
    problemStatement:
      'Enterprise teams struggle with fragmented internal knowledge across PDFs, policies, and documents. Third-party cloud APIs are banned due to strict compliance, requiring on-premises vector search, local model serving, and full auditability.',
    solution:
      'Engineered an air-gapped Dockerized RAG pipeline with OpenSearch 2.19 (hybrid BM25 + vector search), FastAPI, Ollama local model serving, Redis response caching (up to 400x speedup), and Langfuse observability.',
    features: [
      'Automated document ingestion & PDF chunking pipeline via Airflow 3.0',
      'Hybrid Reciprocal Rank Fusion (RRF) matching BM25 keyword precision with vector semantics',
      'Agentic LangGraph workflow featuring document grading & automatic query rewriting',
      'Langfuse observability tracing every LLM prompt, token count, and latency bottleneck',
      'Redis semantic caching delivering 150-400x response speedup on repeated queries',
      'Telegram bot interface allowing instant mobile access to corporate knowledge',
    ],
    techStack: [
      { category: 'Search Engine', name: 'OpenSearch 2.19 (Hybrid BM25 + Vector)' },
      { category: 'Framework', name: 'FastAPI 0.115+' },
      { category: 'Agentic Framework', name: 'LangGraph & LangChain' },
      { category: 'Model Serving', name: 'Local Ollama LLM' },
      { category: 'Workflow Engine', name: 'Apache Airflow 3.0' },
      { category: 'Cache', name: 'Redis 7.0' },
      { category: 'Observability', name: 'Langfuse Tracing' },
      { category: 'Database', name: 'PostgreSQL 16' },
    ],
    apiEndpoints: [
      { method: 'POST', endpoint: '/api/v1/search', desc: 'BM25 keyword document search' },
      { method: 'POST', endpoint: '/api/v1/hybrid-search/', desc: 'Hybrid RRF BM25 + Vector search' },
      { method: 'POST', endpoint: '/api/v1/ask', desc: 'RAG Q&A response generation' },
      { method: 'POST', endpoint: '/api/v1/stream', desc: 'Realtime SSE response streaming' },
    ],
    metrics: [
      { label: 'Cache Speedup', value: '400x' },
      { label: 'Ingestion Throughput', value: '1,000 docs/min' },
      { label: 'Deployment', value: '100% Local / Docker' },
    ],
    localPath: 'corporate-rag-system',
  },
  {
    id: 'bank-cheque-ocr-automation',
    number: '02',
    title: 'Bank Cheque OCR Automation',
    tagline: 'Handwriting-aware cheque processing with automatic fraud detection for regulated banking',
    badge: 'Banking & Financial AI',
    description:
      'A production-ready Bank Cheque OCR API automating the extraction and verification of critical information from scanned bank cheques. Designed for high-volume banking back-offices processing 5,000+ cheques daily.',
    architectureDiagram: `
Cheque Scan (JPG/PNG)
        │
        ▼
┌──────────────────┐
│  Upload API      │ (FastAPI REST Gateway)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  CV & Preprocess │ (Binarization, Deskewing, Noise Reduction)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  OCR Engine      │ (Handwritten & Printed Field Extraction)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐      ┌───────────────────────────┐
│ Field Extraction ├─────►│ Payer, Payee, Date, Amount│
└────────┬─────────┘      │ Cheque No, MICR, IFSC Code│
         │                └───────────────────────────┘
         ▼
┌──────────────────┐
│ Validation Rules │ (Numeric vs Written Amount Matching, Date & IFSC Verification)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Fraud Detection  │ (Signature Presence, Alteration Flagging & Anomaly Scoring)
└────────┬─────────┘
         │
         ▼
Core Banking API Response (JSON, 850ms, 99% Confidence)
`,
    problemStatement:
      'Manual bank cheque processing is slow, prone to human data-entry errors, and costly. Banks require automated extraction of handwritten payee names, amounts, MICR codes, and automated cross-validation against fraud.',
    solution:
      'Designed a multi-stage Computer Vision + OCR pipeline using OpenCV, PyTesseract, and custom field-extraction algorithms wrapped in FastAPI. Includes automatic numeric-to-written amount cross-checking and fraud anomaly scoring.',
    features: [
      'Sub-second field extraction: Payer, Payee, Numeric Amount, Written Amount, Cheque Number, IFSC, MICR data',
      'Dual-support for both printed bank text and complex handwritten entries',
      'Automatic cross-validation comparing numeric figures vs written English text',
      'Fraud detection flagging altered values, invalid date ranges, and signature anomalies',
      'High-speed batch processing architecture built to scale to 5,000+ cheques per day',
      'Clean OpenAPI/Swagger interface for seamless integration into core banking software',
    ],
    techStack: [
      { category: 'API Framework', name: 'FastAPI' },
      { category: 'Computer Vision', name: 'OpenCV & Pillow' },
      { category: 'OCR Engine', name: 'Tesseract / Custom Handwriting Models' },
      { category: 'Data Science', name: 'Pandas & NumPy' },
      { category: 'Validation Engine', name: 'Pydantic v2' },
    ],
    apiEndpoints: [
      { method: 'POST', endpoint: '/api/v1/process', desc: 'Process single cheque scan image' },
      { method: 'POST', endpoint: '/api/v1/batch-process', desc: 'Batch cheque processing zip stream' },
      { method: 'GET', endpoint: '/api/v1/health', desc: 'OCR service health monitor' },
    ],
    metrics: [
      { label: 'Processing Speed', value: '850 ms' },
      { label: 'Extraction Confidence', value: '99.1%' },
      { label: 'Manual Effort Reduction', value: '75%' },
    ],
    localPath: 'bank-cheque-ocr-automation',
  },
  {
    id: 'agentic-coding-platform',
    number: '03',
    title: 'Agentic Coding Platform & Developer Sandboxes',
    tagline: 'Self-hosted AI development infrastructure for secure, governed agentic coding',
    badge: 'Developer AI Platform',
    description:
      'A self-hosted developer platform providing containerized workspace environments, AI coding agents, and governance controls. Allows developers and AI agents to code side-by-side inside controlled sandbox environments.',
    architectureDiagram: `
┌────────────────────────────────────────────────────────────────────────┐
│                          Control Plane & Governance                    │
│  ┌──────────────────┐   ┌──────────────────┐   ┌────────────────────┐ │
│  │ Workspace Mgr    │   │ Agent Runner     │   │ Policy & Audit Log │ │
│  └─────────┬────────┘   └─────────┬────────┘   └─────────┬──────────┘ │
└────────────┼──────────────────────┼──────────────────────┼────────────┘
             │                      │                      │
             ▼                      ▼                      ▼
┌───────────────────────────┬───────────────────────────┬───────────────┐
│ Workspace 01 (Python AI)  │ Workspace 02 (Node Full)  │ Agent Sandbox │
│ Docker / K8s Pod Sandbox  │ Docker / K8s Pod Sandbox  │ (MCP Tools)   │
└───────────────────────────┴───────────────────────────┴───────────────┘
`,
    problemStatement:
      'Uncontrolled developer use of public AI tools poses huge data-leakage and compliance risks. Companies need self-hosted developer environments where AI agents execute code under strict token budgets, network isolation, and audit logs.',
    solution:
      'Built a control plane with FastAPI and Docker/Kubernetes orchestration that provisions ephemeral coding sandboxes, runs AI coding agents with Model Context Protocol (MCP), and logs every command for compliance.',
    features: [
      'Container-based sandbox isolation with explicit CPU/RAM limits per developer workspace',
      'Multi-agent runner orchestrating autonomous coding tasks across repository AST trees',
      'Model Context Protocol (MCP) tool integration with Cursor, Claude Code, and Windsurf',
      'Centralized AI governance: model allowlists, token budget caps, and secret scanning',
      'Pre-built environment templates for Python (UV/Jupyter), Node.js, and Go services',
      'Full compliance audit trail capturing all prompt interactions and generated code diffs',
    ],
    techStack: [
      { category: 'Control Plane', name: 'FastAPI' },
      { category: 'Containerization', name: 'Docker Engine & Kubernetes API' },
      { category: 'Agent Protocol', name: 'Model Context Protocol (MCP)' },
      { category: 'Package Manager', name: 'UV (Python) & Pnpm' },
      { category: 'Orchestration', name: 'Docker Compose / K8s CRDs' },
      { category: 'Audit Logging', name: 'PostgreSQL & Structlog' },
    ],
    apiEndpoints: [
      { method: 'POST', endpoint: '/api/v1/workspaces', desc: 'Provision new isolated workspace' },
      { method: 'POST', endpoint: '/api/v1/agents/{id}/run', desc: 'Execute AI agent task in sandbox' },
      { method: 'GET', endpoint: '/api/v1/governance/audit', desc: 'Retrieve full AI audit logs' },
    ],
    metrics: [
      { label: 'Sandbox Spinup', value: '1.2s' },
      { label: 'Data Leakage', value: '0% (Isolated)' },
      { label: 'Governance', value: 'Full Audit Trail' },
    ],
    localPath: 'agentic-coding-platform',
  },
  {
    id: 'customer-voice-agent',
    number: '04',
    title: 'Realtime Customer Service Voice Agent',
    tagline: 'Production-ready realtime voice agent for customer service call centers',
    badge: 'Realtime Voice AI',
    description:
      'A complete customer service voice agent system capable of handling inbound and outbound telephone calls with sub-second speech recognition, intelligent tool-calling responses, knowledge lookup, and conversation tracing.',
    architectureDiagram: `
Caller (Phone) ──► Twilio Telephony ──► FastAPI Call Center
                                              │
                                              ▼
                                       FastRTC Voice Loop
                                   ┌──────────────────────┐
                                   │ STT: Moonshine/Whisper│
                                   │ LLM: Qwen / Llama 3  │
                                   │ Knowledge: Superlinked│
                                   │ TTS: Kokoro / Orpheus │
                                   └──────────┬───────────┘
                                              │
                                              ▼
                                     Opik Tracing & Logs
`,
    problemStatement:
      'Traditional IVR call centers annoy customers with rigid button menus. Human call centers are expensive and struggle with peak volumes. Organizations need human-sounding voice agents capable of querying live databases in real time.',
    solution:
      'Architected a low-latency audio pipeline integrating Twilio SIP webhooks with FastRTC, Moonshine/Faster-Whisper for STT, Qdrant + Superlinked for multi-attribute knowledge search, Kokoro/Orpheus for TTS, and Opik for latency tracing.',
    features: [
      'Inbound and outbound telephone call handling via Twilio Webhook integration',
      'Ultra-low-latency realtime conversational audio loop powered by FastRTC',
      'Multi-avatar persona system supporting distinct department voices and personalities',
      'Multi-attribute vector knowledge retrieval using Superlinked and Qdrant vector database',
      'Flexible STT (Moonshine, Groq Whisper, Faster-Whisper on RunPod GPUs)',
      'High-quality local TTS (Kokoro 82M, Together AI, or Orpheus 3B on GPU pods)',
      'End-to-end telemetry tracing every STT, tool call, LLM decision, and TTS step via Opik',
    ],
    techStack: [
      { category: 'Realtime Audio', name: 'FastRTC' },
      { category: 'Telephony', name: 'Twilio WebRTC / SIP' },
      { category: 'Vector Search', name: 'Superlinked & Qdrant' },
      { category: 'Speech-to-Text', name: 'Moonshine & Faster-Whisper' },
      { category: 'Text-to-Speech', name: 'Kokoro & Orpheus 3B' },
      { category: 'GPU Deployment', name: 'RunPod Serverless GPU Pods' },
      { category: 'Tracing', name: 'Opik Observability' },
    ],
    metrics: [
      { label: 'Voice Latency', value: '< 800ms' },
      { label: 'Knowledge Retrieval', value: 'Multi-Attribute' },
      { label: 'Telephony', value: 'Twilio Inbound/Outbound' },
    ],
    localPath: 'customer-voice-agent',
  },
  {
    id: 'n8n-ai-agents-workflows',
    number: '05',
    title: 'n8n AI Agents & Workflow Automation Collection',
    tagline: 'Production-ready n8n automation workflows powered by AI agents for enterprise operations',
    badge: 'Agentic Workflows',
    description:
      'A curated collection of 17 enterprise-grade n8n automation workflows integrating LLM agents, automated triage, email notification generators, IT ticket processors, and daily reporting systems.',
    architectureDiagram: `
Trigger (Webhook / Cron / Form / Email)
                    │
                    ▼
           n8n Engine Core
   ┌────────────────────────────────┐
   │ AI Agent Triage Node (GPT-4o) │
   │ Tool Calling & Structured JSON │
   └────────────────┬───────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
External Services        Notifications
(Google Sheets, CRM,    (Gmail SMTP, Slack,
Jira, REST APIs)         Telegram Alerts)
`,
    problemStatement:
      'Operations teams waste thousands of hours manually classifying support tickets, summarizing daily standups, triaging bugs, and generating release notes across fragmented SaaS tools.',
    solution:
      'Designed 17 modular n8n AI agent workflows with GPT-4o-mini tool calling, structured JSON output validation, fallback branches, and automated notification loops over Gmail and webhooks.',
    features: [
      '17 production workflows covering IT, DevOps, Customer Support, HR, and Sales',
      'Daily Server & API Health Monitor sending automated email alerts upon status degradation',
      'Customer Support Auto-Responder generating contextual AI draft responses',
      'Bug Report Triage & Auto-Severity Classifier categorizing incoming issues instantly',
      'Deployment Notification & Release Notes Generator compiling git commits automatically',
      'Secure credentials management isolating secrets from workflow JSON files',
    ],
    techStack: [
      { category: 'Engine', name: 'n8n Workflow Automation' },
      { category: 'LLM Provider', name: 'OpenAI (GPT-4o / GPT-4o-mini)' },
      { category: 'Notifications', name: 'Gmail SMTP & Webhooks' },
      { category: 'Database & Logs', name: 'Google Sheets & PostgreSQL' },
      { category: 'Protocols', name: 'REST, Webhooks & JSON Schema' },
    ],
    metrics: [
      { label: 'Workflows Built', value: '17 Production' },
      { label: 'Automation Savings', value: '80+ hrs/month' },
      { label: 'Error Handling', value: 'Automated Retry' },
    ],
    localPath: 'n8n-ai-agents-workflows',
  },
  {
    id: 'invoice-ocr-automation',
    number: '06',
    title: 'Invoice OCR & Multi-Scale Processing Pipeline',
    tagline: 'High-throughput document parsing with vLLM, Rust API gateway, and async GPU queues',
    badge: 'Sovereign GPU Pipeline',
    description:
      'A multi-stage asynchronous invoice processing system engineered with vLLM vision model inference, a high-concurrency Rust API gateway, and async task queues for enterprise accounting teams.',
    architectureDiagram: `
Invoice PDFs ──► Rust API Gateway (Axum) ──► Async Task Queue (Redis)
                                                     │
                                                     ▼
                                          vLLM GPU Worker Nodes
                                          (Qwen2-VL / Donut Vision)
                                                     │
                                                     ▼
                                          Structured Output & VAT
                                          (PostgreSQL & ERP System)
`,
    problemStatement:
      'Enterprise AP departments process millions of complex multi-page invoices with varying layouts, languages, and line-item structures, hitting severe throughput bottlenecks on legacy OCR software.',
    solution:
      'Built a hybrid system combining a high-performance Rust (Axum) gateway, Redis async job queues, and self-hosted vLLM vision model worker nodes on Kubernetes GPU pools.',
    features: [
      'Rust-based gateway capable of receiving thousands of concurrent multipart document uploads',
      'vLLM vision model inference serving Qwen2-VL and Donut models on GPU instances',
      'Automatic line-item extraction, subtotal/total reconciliation, and tax/VAT calculation',
      'Async Redis job queue handling spikes without dropping requests during billing cycles',
      'Scale-to-zero GPU node pooling optimizing cloud hardware costs during off-peak hours',
    ],
    techStack: [
      { category: 'API Gateway', name: 'Rust (Axum & Tokio)' },
      { category: 'Inference Engine', name: 'vLLM Vision Engine' },
      { category: 'Queue', name: 'Redis & Celery' },
      { category: 'Storage', name: 'PostgreSQL & MinIO S3' },
      { category: 'Infrastructure', name: 'Docker & Kubernetes' },
    ],
    metrics: [
      { label: 'Gateway Throughput', value: '10k req/sec' },
      { label: 'Line-Item Accuracy', value: '98.7%' },
      { label: 'GPU Efficiency', value: 'Scale-to-Zero' },
    ],
    localPath: 'invoice-ocr-automation',
  },
  {
    id: 'pagebolt-mcp',
    number: '07',
    title: 'PageBolt MCP Server for AI Coding Assistants',
    tagline: 'Model Context Protocol (MCP) server giving AI agents web capture, screenshots, and page inspection',
    badge: 'Developer AI Tooling',
    description:
      'An open-source Model Context Protocol (MCP) server connecting AI coding assistants (Cursor, Windsurf, Claude Desktop, Cline) to PageBolt capture APIs for screenshotting, PDF generation, and token-budgeted browser page inspection.',
    architectureDiagram: `
Cursor / Claude Desktop ──► Model Context Protocol (MCP) ──► PageBolt Server
                                                                   │
                                                                   ▼
                                                       Puppeteer & Browserless
                                                       ├── Screenshots (30+ params)
                                                       ├── PDF Generation
                                                       ├── OG Social Cards
                                                       ├── Inspect Page Selectors
                                                       └── Record MP4 Demo Video
`,
    problemStatement:
      'AI coding agents operate "blind" when developing web applications, unable to see the visual rendered UI, test responsive layouts, or inspect interactive DOM element selectors.',
    solution:
      'Created PageBolt MCP Server, an npm-distributable package exposing 9 typed tools allowing AI assistants to capture live UI screenshots, observe DOM state under token budgets, and record video walkthroughs directly inside chat.',
    features: [
      '9 specialized MCP tools: take_screenshot, generate_pdf, create_og_image, inspect_page, observe_page, record_video, etc.',
      'Token-budgeted page observation specifically optimized for AI browser agents',
      'Device preset support covering 25+ viewports (iPhone, iPad, MacBook, Galaxy)',
      'Inline image rendering directly inside Claude Desktop and Cursor chat interfaces',
      'Multi-step browser automation sequences (click, fill, navigate, capture)',
    ],
    techStack: [
      { category: 'Protocol', name: 'Model Context Protocol (MCP)' },
      { category: 'Runtime', name: 'TypeScript & Node.js' },
      { category: 'Browser Tech', name: 'Puppeteer / PageBolt API' },
      { category: 'Compatible Clients', name: 'Cursor, Claude Desktop, Windsurf, Cline' },
    ],
    apiEndpoints: [
      { method: 'MCP', endpoint: 'take_screenshot', desc: 'Capture URL/HTML in 25+ viewports' },
      { method: 'MCP', endpoint: 'inspect_page', desc: 'Return structured map of DOM selectors' },
      { method: 'MCP', endpoint: 'observe_page', desc: 'Compact token-budgeted observation for LLMs' },
      { method: 'MCP', endpoint: 'record_video', desc: 'Record browser automation MP4 video' },
    ],
    metrics: [
      { label: 'MCP Tools', value: '9 Typed Tools' },
      { label: 'Device Presets', value: '25+ Viewports' },
      { label: 'License', value: 'Open Source MIT' },
    ],
    localPath: 'pagebolt-mcp',
  },
  {
    id: 'KaviAgenticAIPlatform-SAS',
    number: '08',
    title: 'KaviAgentic AI SaaS Platform',
    tagline: 'Multi-tenant SaaS product for enterprise AI agent orchestration, usage metering, and billing',
    badge: 'Multi-Tenant AI SaaS',
    description:
      'A full-stack multi-tenant SaaS platform enabling organizations to deploy custom AI agents, manage tenant data isolation, monitor token usage metering, and handle subscriber billing.',
    architectureDiagram: `
Customer Web App ──► Next.js App Router ──► FastAPI Multi-Tenant Backend
                                                   │
                                                   ▼
                                         PostgreSQL (Row-Level Security)
                                                   │
                                                   ▼
                                        AI Agent Orchestrator & LLM Gateway
                                        (LangChain, Redis Metering, Stripe)
`,
    problemStatement:
      'SaaS startups and enterprise teams building AI agent products need multi-tenant isolation, usage-based billing per LLM token, team workspace permissions, and secure credential handling.',
    solution:
      'Engineered KaviAgentic SaaS with Next.js, FastAPI, PostgreSQL Row-Level Security (RLS), Redis token tracking, Stripe Subscriptions integration, and an agent execution engine.',
    features: [
      'Multi-tenant data isolation using PostgreSQL Row-Level Security policies',
      'Realtime token usage metering tracking LLM costs per user, team, and workspace',
      'Stripe integration handling subscription tiers, overage billing, and customer portals',
      'Agent workflow orchestrator supporting tool execution, webhooks, and human approval',
      'RBAC user access management with organization workspaces and API key keys',
    ],
    techStack: [
      { category: 'Frontend', name: 'Next.js & TailwindCSS' },
      { category: 'Backend', name: 'FastAPI & Python 3.12' },
      { category: 'Database', name: 'PostgreSQL (RLS)' },
      { category: 'Billing', name: 'Stripe Subscriptions & Metering' },
      { category: 'Caching', name: 'Redis' },
    ],
    metrics: [
      { label: 'Tenant Isolation', value: 'Postgres RLS' },
      { label: 'Metering', value: 'Realtime Token Tracking' },
      { label: 'Billing', value: 'Stripe Overage' },
    ],
    localPath: 'KaviAgenticAIPlatform SAS',
  },
  {
    id: 'KaviAITerminal-main',
    number: '09',
    title: 'KaviAI Terminal — Developer Agent CLI',
    tagline: 'Terminal-native AI agent & CLI workbench for rapid local LLM command execution',
    badge: 'CLI & Terminal AI',
    description:
      'A lightweight, terminal-native AI assistant and CLI workbench that allows developers to run shell commands, analyze git diffs, manage local Ollama models, and debug code directly from the command line.',
    architectureDiagram: `
Terminal CLI ──► Python Rich UI ──► Local Ollama / OpenAI API ──► Subprocess Execution Engine
`,
    problemStatement:
      'Developers waste time context-switching between IDEs, browser AI chats, and terminal command lines when executing complex git, docker, or shell workflows.',
    solution:
      'Created KaviAI Terminal using Python and Rich library, providing an inline terminal AI copilot with safety confirmations before running generated shell commands.',
    features: [
      'Terminal UI built with Rich formatting, syntax highlighting, and progress bars',
      'Subprocess command execution engine with interactive safety review prior to running',
      'Automated git diff analysis, commit message generation, and branch summaries',
      'Ollama local model integration allowing completely offline terminal AI assistance',
    ],
    techStack: [
      { category: 'Language', name: 'Python 3.12' },
      { category: 'UI Framework', name: 'Rich & Typer' },
      { category: 'Local LLM', name: 'Ollama API' },
    ],
    metrics: [
      { label: 'Offline Support', value: '100% Ollama' },
      { label: 'Interface', value: 'Terminal Native' },
    ],
    localPath: 'KaviAITerminal-main',
  },
  {
    id: 'ODS',
    number: '10',
    title: 'Organizational Data Store (ODS) & Vector Engine',
    tagline: 'High-scale enterprise document indexing and unified vector ingestion engine',
    badge: 'Enterprise Data Store',
    description:
      'A unified enterprise data ingestion service that connects to SharePoint, Google Drive, databases, and local file shares to extract, clean, embed, and index documents into central vector stores.',
    architectureDiagram: `
Data Sources (SharePoint / S3 / DB) ──► ODS Ingestion Pipeline ──► Qdrant & pgvector
`,
    problemStatement:
      'Enterprise documents reside across fragmented silos (SharePoint, SQL, S3, PDF shares), making it impossible to enforce uniform embeddings or vector search permissions.',
    solution:
      'Engineered ODS, an ETL ingestion engine with chunking strategies, metadata tagging, and unified vector synchronization across Qdrant and PostgreSQL pgvector.',
    features: [
      'Connectors for S3, SharePoint, Google Drive, PostgreSQL, and local network drives',
      'Adaptive document chunking supporting Markdown, PDF, Word, and Excel tables',
      'Unified vector sync to both Qdrant and PostgreSQL pgvector',
    ],
    techStack: [
      { category: 'Language', name: 'Python' },
      { category: 'Vector Store', name: 'Qdrant & pgvector' },
      { category: 'ETL Engine', name: 'Celery & Redis' },
    ],
    metrics: [
      { label: 'Connectors', value: '5+ Enterprise Sources' },
      { label: 'Vector Stores', value: 'Qdrant & pgvector' },
    ],
    localPath: 'ODS',
  },
  {
    id: 'KaviAgent',
    number: '11',
    title: 'KaviAgent Autonomous Task Orchestrator',
    tagline: 'Multi-agent goal solver with tool calling, memory state, and self-correction loops',
    badge: 'Agent Orchestrator',
    description:
      'An autonomous multi-agent framework capable of taking complex user goals, planning multi-step execution graphs, delegating to specialized subagents, and verifying results.',
    architectureDiagram: `
User Goal ──► Planner Agent ──► Subagent Orchestrator ──► Tool Execution ──► Reflection & Verify
`,
    problemStatement:
      'Single LLM prompts fail on multi-step complex tasks requiring web research, code execution, database lookups, and iterative feedback.',
    solution:
      'Built KaviAgent, a stateful multi-agent orchestrator featuring persistent conversation memory, tool calling definitions, and self-correction verification loops.',
    features: [
      'Planner-agent pattern decomposing complex prompts into executable task steps',
      'Subagent delegation with specialized tool access (web, shell, vector DB)',
      'Self-correction reflection loops ensuring agent output validation before completion',
    ],
    techStack: [
      { category: 'Agent Framework', name: 'LangGraph & Custom Python' },
      { category: 'LLM Engine', name: 'OpenAI & Open-Weight LLMs' },
      { category: 'State Engine', name: 'SQLite & Redis' },
    ],
    metrics: [
      { label: 'Pattern', value: 'Planner & Subagents' },
      { label: 'Verification', value: 'Self-Correcting' },
    ],
    localPath: 'KaviAgent',
  },
];
