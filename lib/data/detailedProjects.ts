import { DetailedProject } from '@/components/ProjectArchitectureModal';

export const detailedProjectsList: DetailedProject[] = [
  {
    id: 'ods',
    number: '01',
    title: 'ODS — Osmantic Deployment System',
    tagline: 'Turn your PC, Mac, or Linux box into a self-hosted private AI server with a single command',
    badge: 'Private Local AI Platform',
    description:
      'A self-hosted AI deployment platform built around 24 bundled Docker service manifests, hardware-accelerated overlays (NVIDIA, AMD, Apple Silicon, Intel Arc), a control dashboard, LiteLLM gateway, RAG pipeline, local voice STT/TTS, and privacy tools.',
    architectureDiagram: `
┌─────────────────────────────────────────────────────────────────────────┐
│                           User Access (localhost:3000)                  │
│   Open-WebUI (Chat) ──► Control Dashboard (:3001) ──► LiteLLM Proxy (:4000) │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│ Core Inference  │         │ Voice Pipeline  │         │ Search & RAG    │
│ llama-server    │         │ Whisper (:9000) │         │ Qdrant (:6333)  │
│ Ollama (:11434) │         │ Kokoro  (:8880) │         │ SearXNG (:8888) │
└─────────────────┘         └─────────────────┘         └─────────────────┘
         │                           │                           │
         └───────────────────────────┼───────────────────────────┘
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         Agents, Media & Privacy                         │
│   Hermes Agent (:9120) ──► ComfyUI Image Gen ──► Privacy Shield PII     │
└─────────────────────────────────────────────────────────────────────────┘
`,
    problemStatement:
      'Setting up a private local AI homelab requires manually compiling and wiring together Ollama, Open WebUI, LiteLLM, Qdrant, Whisper, SearXNG, and n8n while configuring GPU drivers and authentication.',
    solution:
      'Engineered ODS, an open-source single-command installer (`curl -fsSL install.osmantic.com/ods.sh | bash`) that automatically detects hardware (Apple Silicon, NVIDIA, AMD, CPU), provisions 24 Docker compose services, picked optimal models, and launches a local web control center.',
    features: [
      'Single-command bootstrap (`curl -fsSL install.osmantic.com/ods.sh | bash`) for Linux, macOS, and Windows WSL2',
      'Bundles 24 service manifests: llama-server, Open WebUI, LiteLLM, Qdrant, ComfyUI, Whisper, Kokoro, n8n, SearXNG',
      'Hardware auto-detection applying compose overlays for NVIDIA CUDA, Apple Metal, AMD ROCm, and Intel Arc GPUs',
      'LiteLLM proxy gateway providing OpenAI-compatible API endpoints for all local models',
      'Privacy-Shield PII protection masking sensitive credentials before sending prompts to optional cloud fallbacks',
      'Control Dashboard (:3001) for real-time GPU VRAM monitoring, model downloading, and service extensions',
    ],
    techStack: [
      { category: 'Installer', name: 'Shell Bootstrap & PowerShell CLI' },
      { category: 'Inference', name: 'llama-server & Ollama' },
      { category: 'API Proxy Gateway', name: 'LiteLLM Proxy (:4000)' },
      { category: 'Frontend Chat UI', name: 'Open WebUI (:3000)' },
      { category: 'Control Center', name: 'ODS Dashboard (:3001)' },
      { category: 'Voice STT/TTS', name: 'Faster-Whisper & Kokoro TTS' },
      { category: 'Search & RAG', name: 'SearXNG & Qdrant Vector DB' },
      { category: 'Automation & Media', name: 'n8n & ComfyUI (:8188)' },
    ],
    apiEndpoints: [
      { method: 'GET', endpoint: 'http://localhost:3000', desc: 'Open WebUI ChatGPT-style Chat Interface' },
      { method: 'GET', endpoint: 'http://localhost:3001', desc: 'ODS Control Dashboard & GPU VRAM monitor' },
      { method: 'POST', endpoint: 'http://localhost:4000/v1/chat/completions', desc: 'LiteLLM OpenAI-compatible gateway' },
    ],
    metrics: [
      { label: 'Services Bundled', value: '24 Manifests' },
      { label: 'Setup Time', value: 'Single Command' },
      { label: 'Hardware Support', value: 'Mac, NVIDIA, AMD, CPU' },
    ],
    githubUrl: 'https://github.com/Osmantic/ODS',
    localPath: 'ODS',
  },
  {
    id: 'kavi-agent',
    number: '02',
    title: 'KaviAgent — Local-First Personal AI Assistant',
    tagline: 'Local-first personal assistant with SQLite memory state, local web cockpit, and 95-line plain Python loop',
    badge: 'Autonomous Local Agent',
    description:
      'A local-first personal AI assistant framework demonstrating the four pillars of serious agents: Harness, Reasoning Loop, Stateful Memory (SQLite), and LLM-as-Judge Evals. Features a local web dashboard cockpit at localhost:7777.',
    architectureDiagram: `
User Input (Terminal / Web / Telegram / Voice)
                     │
                     ▼
           Retrieval Gate (Skip vs Retrieve)
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
SQLite Memory (.kavi/state.db)   Plain Python Agent Loop (~95 lines)
(Semantic, Episodic, Procedural) ├── Tool Calling (Calendar, Web Search)
                                 ├── Model Adapter (Claude, OpenAI, Gemini)
                                 └── Self-Correction Reflection
                     │
                     ▼
    Browser Cockpit Dashboard (:7777) & Telegram Bot Bridge
`,
    problemStatement:
      'Popular AI agents rely on complex black-box frameworks (LangChain/AutoGPT) that obscure the execution loop, lack persistent transparent memory, and send all data to closed cloud APIs.',
    solution:
      'Built KaviAgent in clean, readable Python with a ~95-line execution loop, an explicit SQLite memory store (`state.db`), a local web cockpit dashboard (`localhost:7777`), multi-provider adapters (Claude, OpenAI, DeepSeek, Ollama), and Telegram bot integration.',
    features: [
      'Local-first memory architecture stored in a single SQLite database file (`.kavi/state.db`)',
      'Three-tier memory system: semantic facts, episodic conversations, and procedural skills',
      'Smart retrieval gate evaluating per turn whether memory retrieval is required',
      'Browser Cockpit Dashboard (:7777) rendering real-time message flow through the harness',
      'Multi-provider adapter supporting Anthropic Claude, OpenAI GPT-4o, Gemini, DeepSeek, and OpenRouter',
      'Built-in LLM-as-judge evaluation harness side-by-side with deterministic unit tests',
    ],
    techStack: [
      { category: 'Language', name: 'Python 3.12 (UV package manager)' },
      { category: 'Database', name: 'SQLite (.kavi/state.db)' },
      { category: 'Dashboard', name: 'FastAPI & Static Web Cockpit (:7777)' },
      { category: 'Bot Bridge', name: 'Telegram Bot API' },
      { category: 'Model Adapters', name: 'Claude, OpenAI, DeepSeek, Ollama' },
    ],
    apiEndpoints: [
      { method: 'GET', endpoint: 'http://localhost:7777', desc: 'Browser Cockpit Dashboard' },
      { method: 'CLI', endpoint: 'uv run kavi', desc: 'Terminal interactive chat session' },
    ],
    metrics: [
      { label: 'Core Loop', value: '~95 Lines Python' },
      { label: 'Storage', value: '100% Local SQLite' },
      { label: 'Gate Decision', value: 'Skip / Retrieve' },
    ],
    localPath: 'KaviAgent',
  },
  {
    id: 'kavi-space',
    number: '03',
    title: 'KaviSpace — Tauri v2 Multi-Agent Desktop & Swarm Platform',
    tagline: 'Desktop application with Tauri v2, xterm.js terminals, and KaviSwarm multi-agent pipeline',
    badge: 'Desktop Multi-Agent IDE',
    description:
      'A Tauri v2 + Rust desktop application and multi-agent development environment that autonomously writes, builds, deploys, and live-demos full-stack applications through a three-phase AI swarm pipeline (KaviSwarm).',
    architectureDiagram: `
┌────────────────────────────────────────────────────────────────────────┐
│                   KaviSpace Desktop (Tauri v2 + Rust)                  │
│  React 19 SPA ──► Zustand ──► xterm.js Terminals ──► Grid Canvas       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Node.js Express Backend (:3001)                      │
│  REST API & WebSocket Server ──► Session Manager (node-pty)            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                KaviSwarm Autonomous Multi-Agent Pipeline              │
│  Phase 1: PRD & Mission ──► Phase 2: Code Build ──► Phase 3: Playwright│
└────────────────────────────────────────────────────────────────────────┘
`,
    problemStatement:
      'Developing complex full-stack applications with AI requires juggling multiple terminal windows, code editors, browser previews, and agent prompts without unified orchestration.',
    solution:
      'Engineered KaviSpace, a Tauri v2 desktop app combining terminal emulation (xterm.js + node-pty), canvas layout management, Express backend, Anthropic Claude SDK streaming, and Playwright browser pilots.',
    features: [
      'Tauri v2 + Rust native desktop shell with React 19 and Vite frontend',
      'Integrated xterm.js terminal emulation powered by node-pty and WebSockets',
      'KaviSwarm 3-phase autonomous pipeline: PRD generation, build execution, and Playwright verification',
      'Workspace modes: KaviAI (terminal grid), KaviCanvas (draggable layout), and KaviSwarm (agent pipeline)',
      'Claude SDK streaming integration running multi-turn tool-use loops',
      'Live iframe browser preview pane with automated Playwright browser pilot testing',
    ],
    techStack: [
      { category: 'Desktop Shell', name: 'Tauri v2 (Rust)' },
      { category: 'Frontend', name: 'React 19, TypeScript, Vite & Zustand' },
      { category: 'Terminal', name: 'xterm.js & node-pty' },
      { category: 'Backend', name: 'Node.js / Express (:3001) & WebSockets' },
      { category: 'AI SDK', name: '@anthropic-ai/sdk (Claude API)' },
      { category: 'Browser Pilot', name: 'Playwright Browser Automation' },
    ],
    metrics: [
      { label: 'Desktop Shell', value: 'Tauri v2 Rust' },
      { label: 'Workspace Modes', value: '3 (AI, Canvas, Swarm)' },
      { label: 'Browser Testing', value: 'Playwright Pilot' },
    ],
    localPath: 'KaviAITerminal-main',
  },
  {
    id: 'kavi-growth-platform',
    number: '04',
    title: 'KaviAI — Growth & Multi-Channel Content Platform',
    tagline: 'AI agent platform planning, generating, and publishing content across 10+ platforms automatically',
    badge: 'Multi-Channel AI SaaS',
    description:
      'An enterprise AI agent platform for growth, marketing, and distribution. Uses Google Gemini with LiteLLM gateway and OpenAI fallback to automate SEO, Reddit, LinkedIn, X, Instagram, and YouTube publishing.',
    architectureDiagram: `
Your Brand
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   🤖 AI Agents (Vercel AI SDK 6.x)                     │
│  Reddit Distribution · SEO/GEO Target · LinkedIn Writer · X · YouTube  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ LLM Engine       │       │ Database & Auth  │       │ Publishing       │
│ Gemini 2.5 Flash │       │ Supabase Postgres│       │ 10+ Channels     │
│ LiteLLM Proxy    │       │ RLS + SSR Cookie │       │ Reddit, X, LIn   │
└──────────────────┘       └──────────────────┘       └──────────────────┘
`,
    problemStatement:
      'Growth teams waste massive time rewriting, formatting, scheduling, and posting content across dozens of social networks while tracking brand reach across analytics tool silos.',
    solution:
      'Built KaviAI Platform with Next.js 16 App Router, Vercel AI SDK 6.x, Supabase Postgres with RLS, Google Gemini 2.5 Flash, and automated publishing pipelines across 10+ channels.',
    features: [
      'Multi-channel publishing pipeline across Reddit, LinkedIn, X, Instagram, Facebook, Threads, YouTube, and TikTok',
      'Powered by Google Gemini 2.5 Flash with LiteLLM proxy and GPT-4o-mini fallback',
      'Supabase backend with PostgreSQL Row-Level Security (RLS) and SSR cookie authentication',
      'Integrated SEO/GEO targeting agent generating optimized articles and distribution copies',
      'Vercel Cron automation running background scheduling and analytics ingestion',
    ],
    techStack: [
      { category: 'Framework', name: 'Next.js 16 App Router & React 19' },
      { category: 'AI Orchestration', name: 'Vercel AI SDK (ai 6.x)' },
      { category: 'Primary Model', name: 'Google Gemini 2.5 Flash' },
      { category: 'Database', name: 'Supabase (PostgreSQL + RLS)' },
      { category: 'Styling', name: 'Tailwind CSS v4' },
    ],
    metrics: [
      { label: 'Publishing Channels', value: '10+ Platforms' },
      { label: 'Primary LLM', value: 'Gemini 2.5 Flash' },
      { label: 'Tenant Security', value: 'Supabase RLS' },
    ],
    localPath: 'KaviAgenticAIPlatform SAS',
  },
  {
    id: 'agentic-coding-platform',
    number: '05',
    title: 'Agentic Coding Platform & Workspaces',
    tagline: 'Self-hosted AI development infrastructure for secure, governed agentic coding',
    badge: 'Developer AI Infrastructure',
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
      'Uncontrolled developer use of public AI tools poses data-leakage and compliance risks. Companies need self-hosted developer environments where AI agents execute code under strict token budgets and audit logs.',
    solution:
      'Built a control plane with FastAPI and Docker/Kubernetes orchestration that provisions ephemeral coding sandboxes, runs AI coding agents with Model Context Protocol (MCP), and logs every command for compliance.',
    features: [
      'Container-based sandbox isolation with explicit CPU/RAM limits per developer workspace',
      'Multi-agent runner orchestrating autonomous coding tasks across repository AST trees',
      'Model Context Protocol (MCP) tool integration with Cursor, Claude Code, and Windsurf',
      'Centralized AI governance: model allowlists, token budget caps, and secret scanning',
      'Pre-built environment templates for Python (UV/Jupyter), Node.js, and Go services',
    ],
    techStack: [
      { category: 'Control Plane', name: 'FastAPI' },
      { category: 'Containerization', name: 'Docker Engine & Kubernetes API' },
      { category: 'Agent Protocol', name: 'Model Context Protocol (MCP)' },
      { category: 'Package Manager', name: 'UV (Python) & Pnpm' },
    ],
    metrics: [
      { label: 'Sandbox Spinup', value: '1.2s' },
      { label: 'Data Leakage', value: '0% (Isolated)' },
    ],
    localPath: 'agentic-coding-platform',
  },
  {
    id: 'corporate-rag-system',
    number: '06',
    title: 'Corporate Organization RAG System',
    tagline: 'Production-grade Retrieval-Augmented Generation for enterprise knowledge management',
    badge: 'Enterprise Hybrid RAG',
    description:
      'A complete corporate organization RAG system that ingests internal documents, enables hybrid search across organizational knowledge, and provides intelligent Q&A through agentic retrieval with LangGraph.',
    architectureDiagram: `
Document Ingestion ──► OpenSearch Vector DB (BM25 + Vector) ──► RRF Fusion ──► LangGraph Agentic RAG
`,
    problemStatement:
      'Enterprise teams struggle with fragmented internal knowledge across PDFs and policy documents. Third-party cloud APIs are banned, requiring on-premises vector search and local model serving.',
    solution:
      'Engineered an air-gapped Dockerized RAG pipeline with OpenSearch 2.19 (hybrid BM25 + vector search), FastAPI, Ollama local model serving, Redis response caching (up to 400x speedup), and Langfuse observability.',
    features: [
      'Automated document ingestion & PDF chunking pipeline via Airflow 3.0',
      'Hybrid Reciprocal Rank Fusion (RRF) matching BM25 keyword precision with vector semantics',
      'Agentic LangGraph workflow featuring document grading & automatic query rewriting',
      'Langfuse observability tracing every LLM prompt, token count, and latency bottleneck',
      'Redis semantic caching delivering 150-400x response speedup on repeated queries',
    ],
    techStack: [
      { category: 'Search Engine', name: 'OpenSearch 2.19 (Hybrid BM25 + Vector)' },
      { category: 'Framework', name: 'FastAPI 0.115+' },
      { category: 'Agentic Framework', name: 'LangGraph & LangChain' },
      { category: 'Model Serving', name: 'Local Ollama LLM' },
    ],
    metrics: [
      { label: 'Cache Speedup', value: '400x' },
      { label: 'Deployment', value: '100% Local / Docker' },
    ],
    localPath: 'corporate-rag-system',
  },
  {
    id: 'bank-cheque-ocr-automation',
    number: '07',
    title: 'Bank Cheque OCR Automation',
    tagline: 'Handwriting-aware cheque processing with automatic fraud detection for regulated banking',
    badge: 'Banking & Financial AI',
    description:
      'A production-ready Bank Cheque OCR API automating the extraction and verification of critical information from scanned bank cheques. Designed for high-volume banking back-offices processing 5,000+ cheques daily.',
    architectureDiagram: `
Cheque Scan Image ──► Upload API ──► OpenCV Preprocessing ──► OCR Field Extraction ──► Fraud Detection
`,
    problemStatement:
      'Manual bank cheque processing is slow and error-prone. Banks require automated extraction of handwritten payee names, amounts, MICR codes, and automated cross-validation against fraud.',
    solution:
      'Designed a multi-stage Computer Vision + OCR pipeline using OpenCV and PyTesseract wrapped in FastAPI. Includes automatic numeric-to-written amount cross-checking and fraud anomaly scoring.',
    features: [
      'Sub-second field extraction: Payer, Payee, Numeric Amount, Written Amount, Cheque Number, IFSC, MICR data',
      'Dual-support for both printed bank text and complex handwritten entries',
      'Automatic cross-validation comparing numeric figures vs written English text',
      'Fraud detection flagging altered values, invalid date ranges, and signature anomalies',
    ],
    techStack: [
      { category: 'API Framework', name: 'FastAPI' },
      { category: 'Computer Vision', name: 'OpenCV & PyTesseract' },
      { category: 'Validation Engine', name: 'Pydantic v2' },
    ],
    metrics: [
      { label: 'Processing Speed', value: '850 ms' },
      { label: 'Extraction Confidence', value: '99.1%' },
    ],
    localPath: 'bank-cheque-ocr-automation',
  },
  {
    id: 'customer-voice-agent',
    number: '08',
    title: 'Realtime Customer Service Voice Agent',
    tagline: 'Production-ready realtime voice agent for customer service call centers',
    badge: 'Realtime Voice AI',
    description:
      'A complete customer service voice agent system capable of handling inbound and outbound telephone calls with sub-second speech recognition, intelligent tool-calling responses, knowledge lookup, and conversation tracing.',
    architectureDiagram: `
Caller ──► Twilio Telephony ──► FastRTC Voice Loop (Whisper STT + LLM + Kokoro TTS) ──► Opik Tracing
`,
    problemStatement:
      'Traditional IVR call centers annoy customers with rigid menus. Organizations need human-sounding voice agents capable of querying live databases in real time.',
    solution:
      'Architected a low-latency audio pipeline integrating Twilio SIP webhooks with FastRTC, Moonshine/Faster-Whisper for STT, Qdrant + Superlinked for knowledge search, Kokoro/Orpheus for TTS, and Opik for latency tracing.',
    features: [
      'Inbound and outbound telephone call handling via Twilio Webhook integration',
      'Ultra-low-latency realtime conversational audio loop powered by FastRTC',
      'Multi-avatar persona system supporting distinct department voices and personalities',
      'Telemetry tracing every STT, tool call, LLM decision, and TTS step via Opik',
    ],
    techStack: [
      { category: 'Realtime Audio', name: 'FastRTC' },
      { category: 'Telephony', name: 'Twilio WebRTC / SIP' },
      { category: 'Vector Search', name: 'Superlinked & Qdrant' },
    ],
    metrics: [
      { label: 'Voice Latency', value: '< 800ms' },
      { label: 'Telephony', value: 'Twilio' },
    ],
    localPath: 'customer-voice-agent',
  },
  {
    id: 'n8n-ai-agents-workflows',
    number: '09',
    title: 'n8n AI Agents & Workflow Automation Collection',
    tagline: 'Production-ready n8n automation workflows powered by AI agents for enterprise operations',
    badge: 'Agentic Workflows',
    description:
      'A curated collection of 17 enterprise-grade n8n automation workflows integrating LLM agents, automated triage, email notification generators, IT ticket processors, and daily reporting systems.',
    architectureDiagram: `
Trigger (Webhook/Cron) ──► n8n Engine ──► GPT-4o Triage Node ──► Gmail & Slack Notifications
`,
    problemStatement:
      'Operations teams waste thousands of hours manually classifying support tickets, summarizing standups, triaging bugs, and generating release notes.',
    solution:
      'Designed 17 modular n8n AI agent workflows with GPT-4o-mini tool calling, structured JSON output validation, fallback branches, and automated notification loops over Gmail.',
    features: [
      '17 production workflows covering IT, DevOps, Customer Support, HR, and Sales',
      'Daily Server & API Health Monitor sending automated email alerts',
      'Customer Support Auto-Responder generating contextual AI draft responses',
      'Bug Report Triage & Auto-Severity Classifier categorizing incoming issues',
    ],
    techStack: [
      { category: 'Engine', name: 'n8n Workflow Automation' },
      { category: 'LLM Provider', name: 'OpenAI (GPT-4o / GPT-4o-mini)' },
      { category: 'Notifications', name: 'Gmail SMTP & Webhooks' },
    ],
    metrics: [
      { label: 'Workflows Built', value: '17 Production' },
      { label: 'Automation Savings', value: '80+ hrs/month' },
    ],
    localPath: 'n8n-ai-agents-workflows',
  },
  {
    id: 'invoice-ocr-automation',
    number: '10',
    title: 'Invoice OCR & Multi-Scale Processing Pipeline',
    tagline: 'High-throughput document parsing with vLLM, Rust API gateway, and async GPU queues',
    badge: 'Sovereign GPU Pipeline',
    description:
      'A multi-stage asynchronous invoice processing system engineered with vLLM vision model inference, a high-concurrency Rust API gateway, and async task queues for enterprise accounting teams.',
    architectureDiagram: `
Invoice PDFs ──► Rust API Gateway (Axum) ──► Redis Queue ──► vLLM GPU Vision Workers ──► PostgreSQL
`,
    problemStatement:
      'Enterprise AP departments process millions of complex multi-page invoices with varying layouts, hitting severe throughput bottlenecks on legacy software.',
    solution:
      'Built a hybrid system combining a high-performance Rust (Axum) gateway, Redis async job queues, and self-hosted vLLM vision model worker nodes on Kubernetes GPU pools.',
    features: [
      'Rust-based gateway capable of receiving thousands of concurrent document uploads',
      'vLLM vision model inference serving Qwen2-VL and Donut models on GPU instances',
      'Automatic line-item extraction, subtotal/total reconciliation, and tax/VAT calculation',
    ],
    techStack: [
      { category: 'API Gateway', name: 'Rust (Axum & Tokio)' },
      { category: 'Inference Engine', name: 'vLLM Vision Engine' },
      { category: 'Queue', name: 'Redis & Celery' },
    ],
    metrics: [
      { label: 'Gateway Throughput', value: '10k req/sec' },
      { label: 'Line-Item Accuracy', value: '98.7%' },
    ],
    localPath: 'invoice-ocr-automation',
  },
  {
    id: 'pagebolt-mcp',
    number: '11',
    title: 'PageBolt MCP Server for AI Coding Assistants',
    tagline: 'Model Context Protocol (MCP) server giving AI agents web capture, screenshots, and page inspection',
    badge: 'Developer AI Tooling',
    description:
      'An open-source Model Context Protocol (MCP) server connecting AI coding assistants (Cursor, Windsurf, Claude Desktop, Cline) to PageBolt capture APIs for screenshotting, PDF generation, and page inspection.',
    architectureDiagram: `
Cursor / Claude Desktop ──► MCP Server ──► Puppeteer / PageBolt Engine (Screenshots, PDFs, Video)
`,
    problemStatement:
      'AI coding agents operate "blind" when developing web applications, unable to see the visual rendered UI or inspect interactive DOM element selectors.',
    solution:
      'Created PageBolt MCP Server, an npm-distributable package exposing 9 typed tools allowing AI assistants to capture live UI screenshots and observe DOM state under token budgets.',
    features: [
      '9 specialized MCP tools: take_screenshot, generate_pdf, create_og_image, inspect_page, observe_page, record_video',
      'Token-budgeted page observation specifically optimized for AI browser agents',
      'Device preset support covering 25+ viewports (iPhone, iPad, MacBook, Galaxy)',
    ],
    techStack: [
      { category: 'Protocol', name: 'Model Context Protocol (MCP)' },
      { category: 'Runtime', name: 'TypeScript & Node.js' },
      { category: 'Compatible Clients', name: 'Cursor, Claude Desktop, Windsurf, Cline' },
    ],
    metrics: [
      { label: 'MCP Tools', value: '9 Typed Tools' },
      { label: 'Device Presets', value: '25+ Viewports' },
    ],
    githubUrl: 'https://github.com/machhakiran/pagebolt-mcp',
    localPath: 'pagebolt-mcp',
  },
];
