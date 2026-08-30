import { DetailedProject } from '@/components/ProjectArchitectureModal';

export const detailedProjectsList: DetailedProject[] = [
  {
    id: 'openforge-ai',
    number: '01',
    title: 'OpenForge AI (formerly ODS)',
    tagline: 'Self-hosted Sovereign AI platform with 24 bundled services, OpenClaw & Hermes agents, and hardware-accelerated local inference',
    badge: 'Sovereign AI Infrastructure',
    description:
      'A comprehensive, self-hosted Sovereign AI deployment platform built with 24 containerized service manifests. Bundles llama-server and vLLM local inference, OpenClaw and Hermes autonomous agent frameworks, LiteLLM gateway, Qdrant hybrid RAG, SearXNG private search, local voice STT/TTS, Privacy-Shield PII masking, and real-time GPU VRAM telemetry.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       USER ACCESS & CLIENT LAYER                                 │
│    Open-WebUI (:3000)   │   OpenForge Control Dashboard (:3001)   │   OpenForge CLI (ods-cli)   │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  UNIFIED ROUTING & PROXY GATEWAY                                 │
│                                  LiteLLM Proxy Gateway (:4000)                                   │
│              (OpenAI-compatible endpoints, Dynamic Quantization, Token-Spy Metering)             │
└───────────────────────┬────────────────────────┼────────────────────────┬────────────────────────┘
                        │                        │                        │
       ┌────────────────┴───────────────┐        │       ┌────────────────┴───────────────┐
       ▼                                ▼        │       ▼                                ▼
┌─────────────────────────┐ ┌──────────────────┐ │ ┌──────────────────────┐ ┌──────────────────────┐
│  CORE INFERENCE ENGINE  │ │ AUTONOMOUS AGENTS│ │ │    RAG & SEARCH      │ │    VOICE PIPELINE    │
│  llama-server (:8080)   │ │ OpenClaw (:18789)│ │ │ Qdrant Vector (:6333)│ │ Faster-Whisper(:9000)│
│  Ollama Engine (:11434) │ │ Hermes Agent     │ │ │ SearXNG Search(:8888)│ │ Kokoro TTS (:8880)   │
│  vLLM GPU Container     │ │ (:9120)+SOUL.md  │ │ │ Perplexica AI Search │ │ Piper Local Speech   │
└─────────────────────────┘ └──────────────────┘ │ └──────────────────────┘ └──────────────────────┘
                                                 │
                        ┌────────────────────────┴────────────────────────┐
                        ▼                                                 ▼
┌─────────────────────────────────────────────────┐ ┌──────────────────────────────────────────────┐
│          AUTOMATION & CREATIVE ENGINES          │ │       SECURITY, PRIVACY & OBSERVABILITY      │
│   n8n Automation Engine (:5678)                 │ │ Privacy-Shield PII Masking & Redaction Engine │
│   ComfyUI Generative Diffusion (:8188)          │ │ Langfuse LLM Observability & Tracing (:3006) │
└─────────────────────────────────────────────────┘ └──────────────────────────────────────────────┘
`,
    problemStatement:
      'Deploying an enterprise-grade private AI server requires compiling CUDA/ROCm runtimes, configuring multi-agent harnesses (OpenClaw, Hermes), orchestrating hybrid vector search with SearXNG, configuring speech STT/TTS, and securing endpoints with PII masking—a process taking weeks of manual infrastructure plumbing.',
    solution:
      'Engineered OpenForge AI (formerly ODS), an automated deployment system that auto-provisions 24 Docker service manifests with a single bash command. Automatically detects host GPU hardware (NVIDIA CUDA, Apple Metal, AMD ROCm, Intel Arc), mounts persistent agent memory (SOUL.md), configures LiteLLM proxying, and launches a real-time host management dashboard.',
    features: [
      'Single-command bootstrap (`curl -fsSL https://install.osmantic.com/ods.sh | bash`) supporting Linux, macOS, and Windows WSL2',
      '24 bundled production services: llama-server, OpenClaw Agent, Hermes Agent, LiteLLM, Qdrant, SearXNG, ComfyUI, Faster-Whisper, Kokoro, n8n, Langfuse',
      'Hardware auto-detection applying hardware overlays for NVIDIA CUDA, Apple Silicon Metal, AMD ROCm, and Intel Arc GPUs',
      'Autonomous Agent Engines: OpenClaw (:18789) with LAN device pairing, and Hermes Agent (:9120) with SOUL.md persistent memory',
      'Privacy-Shield PII engine masking credentials, credit cards, and sensitive tokens before prompts hit models',
      'OpenForge Control Cockpit (:3001) providing live GPU VRAM telemetry, container health monitoring, and one-click model switching',
      'OpenAI-compatible LiteLLM proxy (:4000) routing traffic to local models with Token-Spy cost accounting',
    ],
    techStack: [
      { category: 'Platform Name', name: 'OpenForge AI (ODS)' },
      { category: 'Agent Runtimes', name: 'OpenClaw (:18789) & Hermes (:9120)' },
      { category: 'Local Inference', name: 'llama-server, Ollama & vLLM' },
      { category: 'Proxy Gateway', name: 'LiteLLM Proxy (:4000)' },
      { category: 'Vector & Search', name: 'Qdrant & SearXNG Metasearch' },
      { category: 'Speech STT/TTS', name: 'Faster-Whisper & Kokoro TTS' },
      { category: 'Automation & Media', name: 'n8n & ComfyUI (:8188)' },
      { category: 'Security & Telemetry', name: 'Privacy-Shield & Langfuse (:3006)' },
    ],
    apiEndpoints: [
      { method: 'GET', endpoint: 'http://localhost:3000', desc: 'Open-WebUI Multi-Model Chat Interface' },
      { method: 'GET', endpoint: 'http://localhost:3001', desc: 'OpenForge Control Cockpit & GPU Monitor' },
      { method: 'POST', endpoint: 'http://localhost:4000/v1/chat/completions', desc: 'LiteLLM OpenAI-compatible Gateway' },
      { method: 'WS', endpoint: 'ws://localhost:18789', desc: 'OpenClaw Autonomous Agent Protocol' },
      { method: 'GET', endpoint: 'http://localhost:9120', desc: 'Hermes Agent Web UI & SOUL Harness' },
    ],
    metrics: [
      { label: 'Bundled Services', value: '24 Container Manifests' },
      { label: 'Agent Engines', value: 'OpenClaw & Hermes' },
      { label: 'Hardware Acceleration', value: 'NVIDIA, Apple Metal, AMD, CPU' },
      { label: 'Deployment Latency', value: 'Single Command (~2 min)' },
    ],
    githubUrl: 'https://github.com/Osmantic/ODS',
    localPath: 'ODS',
  },
  {
    id: 'kavi-agent',
    number: '02',
    title: 'Personal AI Agent (KaviAgent)',
    tagline: 'Local-first personal assistant with SQLite memory state, local web cockpit, and 95-line plain Python loop',
    badge: 'Autonomous Local Agent',
    description:
      'A local-first personal AI assistant framework demonstrating the four foundational pillars of production agents: Harness, Reasoning Loop, Stateful Memory (SQLite), and LLM-as-Judge Evals. Features a local web dashboard cockpit at localhost:7777 and Telegram bot integration.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       USER INTERFACE CHANNELS                                    │
│       Terminal CLI (uv run kavi)   │   Browser Cockpit (:7777)   │   Telegram Bot Bridge        │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       SMART RETRIEVAL GATE                                       │
│                       Evaluates context per turn: Skip Retrieval vs Retrieve Memory              │
└───────────────────────┬──────────────────────────────────────────────────┬───────────────────────┘
                        │                                                  │
                        ▼                                                  ▼
┌─────────────────────────────────────────────────┐ ┌──────────────────────────────────────────────┐
│          STATEFUL MEMORY SYSTEM (.kavi/state.db) │ │       PLAIN PYTHON AGENT LOOP (~95 LINES)    │
│  - Semantic Memory: Entities, facts & preferences│ │  - Tool Registry: Calendar, Search, Bash    │
│  - Episodic Memory: Conversation history & state│ │  - Multi-Provider Adapter (Claude, GPT, Ollama)│
│  - Procedural Memory: Learned workflows & skills│ │  - Self-Correction & Reflection Subroutine   │
└─────────────────────────────────────────────────┘ └──────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  EVALUATION & OBSERVABILITY SUITE                                │
│                   Side-by-side LLM-as-Judge evaluations with deterministic unit tests            │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
`,
    problemStatement:
      'Mainstream agent frameworks (LangChain, AutoGPT) introduce bloated abstractions that obscure the core execution loop, lack persistent transparent memory, and send confidential data to closed cloud APIs.',
    solution:
      'Engineered KaviAgent in clean, readable Python around a ~95-line execution loop, an explicit SQLite memory store (`state.db`), a local web cockpit dashboard (`localhost:7777`), multi-provider adapters (Claude, OpenAI, DeepSeek, Ollama), and Telegram bot integration.',
    features: [
      'Local-first memory architecture stored in a single transparent SQLite database file (`.kavi/state.db`)',
      'Three-tier memory system: semantic facts, episodic conversations, and procedural execution skills',
      'Smart retrieval gate evaluating per turn whether memory retrieval is required to reduce token bloat',
      'Browser Cockpit Dashboard (:7777) rendering real-time message flow and agent reasoning state',
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
    title: 'Agentic Workspace IDE (KaviSpace)',
    tagline: 'Desktop application with Tauri v2, xterm.js terminals, and KaviSwarm multi-agent pipeline',
    badge: 'Desktop Multi-Agent IDE',
    description:
      'A Tauri v2 + Rust desktop application and multi-agent development environment that autonomously writes, builds, deploys, and live-demos full-stack applications through a three-phase AI swarm pipeline (KaviSwarm).',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 KAVISPACE DESKTOP (TAURI V2 + RUST)                              │
│       React 19 SPA   │   Zustand State   │   xterm.js Terminals   │   Draggable Grid Canvas      │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   NODE.JS EXPRESS BACKEND (:3001)                                │
│       REST API   │   WebSocket Server   │   Session Manager (node-pty)   │   KaviTest Router     │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               KAVISWARM AUTONOMOUS 3-PHASE PIPELINE                              │
│  Phase 1: PRD & Architecture ──► Phase 2: Autonomous Code Build ──► Phase 3: Playwright Pilot  │
│  (Claude SDK Streaming)         (Multi-Agent Tool-Use Loop)         (Live Browser Test & Demo)   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
    title: 'Business Growth Agents Platform (KaviAI)',
    tagline: 'AI agent platform planning, generating, and publishing content across 10+ platforms automatically',
    badge: 'Multi-Channel AI SaaS',
    description:
      'An enterprise AI agent platform for growth, marketing, and distribution. Uses Google Gemini with LiteLLM gateway and OpenAI fallback to automate SEO, Reddit, LinkedIn, X, Instagram, and YouTube publishing.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                          BRAND GOAL & SEED INPUT                                 │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   🤖 AUTONOMOUS AI AGENT SQUAD                                   │
│  Reddit Distribution  │  SEO/GEO Targeting  │  LinkedIn Writer  │  X / Threads  │  YouTube Shorts│
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                   ┌─────────────────────────────┼─────────────────────────────┐
                   ▼                             ▼                             ▼
┌──────────────────────────────────┐ ┌───────────────────────┐ ┌──────────────────────────────────┐
│        AI INFERENCE LAYER        │ │   DATABASE & AUTH     │ │    DISTRIBUTION & PUBLISHING     │
│ Google Gemini 2.5 Flash Primary  │ │ Supabase PostgreSQL   │ │ 10+ Connected Channels           │
│ LiteLLM Proxy Gateway            │ │ Row-Level Security RLS│ │ Reddit, LinkedIn, X, Instagram   │
│ GPT-4o-mini Fallback Routing     │ │ SSR Cookie Session    │ │ YouTube, TikTok, Threads, FB     │
└──────────────────────────────────┘ └───────────────────────┘ └──────────────────────────────────┘
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
    title: 'Agentic Coding Platform & Sandboxes',
    tagline: 'Self-hosted AI development infrastructure for secure, governed agentic coding',
    badge: 'Developer AI Infrastructure',
    description:
      'A self-hosted developer platform providing containerized workspace environments, AI coding agents, and governance controls. Allows developers and AI agents to code side-by-side inside controlled sandbox environments.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    CONTROL PLANE & GOVERNANCE                                    │
│   Workspace Orchestrator (FastAPI)  │  Agent Runner Service  │  Token Quota & Audit Log Router   │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   EPHEMERAL SANDBOX CLUSTER                                      │
│  ┌───────────────────────────┐   ┌───────────────────────────┐   ┌────────────────────────────┐  │
│  │ Workspace 01 (Python/UV)  │   │ Workspace 02 (Node Full)  │   │ Agent Execution Sandbox    │  │
│  │ Isolated Docker/K8s Pod   │   │ Isolated Docker/K8s Pod   │   │ Model Context Protocol MCP │  │
│  └───────────────────────────┘   └───────────────────────────┘   └────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
    title: 'Corporate Enterprise RAG',
    tagline: 'Production-grade Retrieval-Augmented Generation for enterprise knowledge management',
    badge: 'Enterprise Hybrid RAG',
    description:
      'A complete corporate organization RAG system that ingests internal documents, enables hybrid search across organizational knowledge, and provides intelligent Q&A through agentic retrieval with LangGraph.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                DOCUMENT INGESTION & PARSING PIPELINE                             │
│                  PDF / Docx / Confluence Ingestion ──► Apache Airflow 3.0 Workers                │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 OPENSEARCH 2.19 HYBRID SEARCH ENGINE                             │
│              BM25 Keyword Matching (Exact Terms)  +  Dense Vector Embeddings (Semantics)         │
│                           Reciprocal Rank Fusion (RRF) Re-ranking                                │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                      LANGGRAPH AGENTIC RAG LOOP                                  │
│  Redis Semantic Cache (Hit? Return in 2ms) ──► Document Grading ──► Query Rewriter ──► LLM Gen   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   CHEQUE SCAN INGESTION (JPG / PNG)                              │
│                                  FastAPI Async Streaming Upload Gateway                          │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 OPENCV COMPUTER VISION PREPROCESSING                             │
│                  Adaptive Thresholding  │  Deskew & Normalization  │  Noise Filtering            │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   FIELD EXTRACTION & OCR PIPELINE                                │
│       Payee & Payer Name (Handwritten)  │  Date Line  │  Numeric & Written English Amounts       │
│                             MICR E-13B Transit & Account Code Strip                              │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    AUTOMATED FRAUD SCORING ENGINE                                │
│  - Amount Parity Cross-Check (Digits vs Written Words)                                           │
│  - MICR Checksum Directory Verification                                                          │
│  - Stale / Post-Dated Cheque Range Verification                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
    title: 'Customer Call Support Voice Agent',
    tagline: 'Production-ready realtime voice agent for customer service call centers',
    badge: 'Realtime Voice AI',
    description:
      'A complete customer service voice agent system capable of handling inbound and outbound telephone calls with sub-second speech recognition, intelligent tool-calling responses, knowledge lookup, and conversation tracing.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  TELEPHONY INGESTION (TWILIO SIP)                                │
│                        Inbound & Outbound Webhooks ──► Bi-directional Audio Stream               │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     FASTRTC LOW-LATENCY AUDIO LOOP                               │
│  1. Speech-to-Text: Moonshine / Faster-Whisper (Sub-200ms)                                       │
│  2. Decision Engine: Low-Latency LLM with Realtime Tool Calling                                  │
│  3. Knowledge Retrieval: Superlinked + Qdrant Vector Search                                      │
│  4. Text-to-Speech: Kokoro / Orpheus 3B Speech Synthesis on GPU pods                             │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     OPIK OBSERVABILITY & TELEMETRY                               │
│                     End-to-end trace tracking audio latency, tool calls, and caller sentiment    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     EVENT TRIGGERS & SENSORS                                     │
│            Webhooks  │  Cron Schedules  │  Gmail Inbound  │  Slack Events  │  GitHub Webhooks    │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     n8n AI AGENT WORKFLOW ENGINE                                 │
│  - GPT-4o / GPT-4o-mini Autonomous Reasoning & Tool Nodes                                        │
│  - Strict JSON Schema Output Validation                                                          │
│  - Conditional Error Routing & Fallback Branches                                                 │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                      ENTERPRISE ACTIONS & OUTPUTS                                │
│       Automated IT Ticket Routing  │  Customer Draft Responses  │  Server Health Alerts (Email)  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
    title: 'Invoice Automation OCR',
    tagline: 'High-throughput document parsing with vLLM, Rust API gateway, and async GPU queues',
    badge: 'Sovereign GPU Pipeline',
    description:
      'A multi-stage asynchronous invoice processing system engineered with vLLM vision model inference, a high-concurrency Rust API gateway, and async task queues for enterprise accounting teams.',
    architectureDiagram: `
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                      HIGH-THROUGHPUT INGESTION                                   │
│                        Rust API Gateway (Axum & Tokio) ──► Redis Job Queue                       │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  KUBERNETES GPU WORKER POOL                                      │
│  - vLLM Vision Inference Workers (Serving Qwen2-VL & Donut Models)                               │
│  - Scale-to-Zero GPU Node Autoscaling                                                            │
│  - Line-Item Table Extraction & Subtotal/Tax/VAT Math Validation                                 │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 POSTGRESQL & ERP INTEGRATION LAYER                               │
│                  Structured JSON Invoices ──► SAP / NetSuite Accounting Feeds                    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                      AI CODING CLIENTS & AGENTS                                  │
│              Cursor IDE  │  Windsurf IDE  │  Claude Desktop  │  Cline Autonomous Agent           │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   PAGEBOLT MCP SERVER (TYPESCRIPT)                               │
│  9 Specialized MCP Tools:                                                                        │
│  - take_screenshot: Full-page & element captures with device emulation                           │
│  - generate_pdf: Headless print-to-pdf generation                                                │
│  - observe_page: Token-budgeted DOM inspection for browser agents                                 │
│  - record_video: Browser interaction capture                                                     │
└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    PUPPETEER CAPTURE ENGINE                                      │
│                  Headless Chrome Cluster (25+ Viewports: iPhone, iPad, MacBook)                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
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
