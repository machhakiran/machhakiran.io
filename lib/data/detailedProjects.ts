import { DetailedProject } from '@/components/ProjectArchitectureModal';

export const detailedProjectsList: DetailedProject[] = [
  {
    "id": "openforge-ai",
    "number": "01",
    "title": "OpenForge AI",
    "tagline": "Self-hosted Sovereign AI platform with 24 bundled services, OpenClaw & Hermes agents, and hardware-accelerated local inference",
    "badge": "Sovereign AI Infrastructure",
    "description": "A comprehensive, self-hosted Sovereign AI deployment platform built with 24 containerized service manifests. Bundles llama-server and vLLM local inference, OpenClaw and Hermes autonomous agent frameworks, LiteLLM gateway, Qdrant hybrid RAG, SearXNG private search, local voice STT/TTS, Privacy-Shield PII masking, and real-time GPU VRAM telemetry.",
    "architectureLayers": [
      {
        "name": "Layer 01: Client & Ingestion Layer",
        "role": "User Interfaces & Entry Gateways",
        "color": "blue",
        "connectionLabel": "Unified OpenAI-compatible API & Streaming Protocol",
        "nodes": [
          {
            "title": "Open-WebUI",
            "subtitle": "Web Client (:3000)",
            "tag": ":3000",
            "color": "blue",
            "description": "Multi-user chat interface, model playground, and custom prompt/persona manager."
          },
          {
            "title": "OpenForge Control Cockpit",
            "subtitle": "Telemetry Dashboard (:3001)",
            "tag": ":3001",
            "color": "blue",
            "description": "Real-time GPU VRAM telemetry, container health monitor, and 1-click model switcher."
          },
          {
            "title": "OpenForge CLI",
            "subtitle": "CLI Utility (ods-cli)",
            "tag": "Terminal",
            "color": "blue",
            "description": "Host hardware auto-discovery, overlay patching, and rapid service orchestrator."
          }
        ]
      },
      {
        "name": "Layer 02: Routing & Gateway Layer",
        "role": "Unified API Proxy & Data Privacy",
        "color": "indigo",
        "connectionLabel": "Dynamic Hardware Dispatch & Agent Routing",
        "nodes": [
          {
            "title": "LiteLLM Proxy Gateway",
            "subtitle": "Reverse Proxy (:4000)",
            "tag": ":4000",
            "color": "indigo",
            "description": "OpenAI-compatible routing, dynamic quantization, and Token-Spy cost accounting."
          },
          {
            "title": "Privacy-Shield PII Engine",
            "subtitle": "Security Filter (DLP)",
            "tag": "Security",
            "color": "indigo",
            "description": "Masks credentials, API tokens, credit cards, and PII before prompts hit local models."
          }
        ]
      },
      {
        "name": "Layer 03: Autonomous Agents & RAG Vector Engine",
        "role": "Autonomous Reasoning & Search",
        "color": "purple",
        "connectionLabel": "Hardware-Accelerated Inference & Media Generation",
        "nodes": [
          {
            "title": "OpenClaw Agent",
            "subtitle": "Autonomous Engine (:18789)",
            "tag": ":18789",
            "color": "purple",
            "description": "Autonomous coding agent runtime with LAN device pairing and tool execution loop."
          },
          {
            "title": "Hermes Agent",
            "subtitle": "SOUL.md Harness (:9120)",
            "tag": ":9120",
            "color": "purple",
            "description": "Multi-turn reasoning harness with persistent SOUL.md memory state storage."
          },
          {
            "title": "Qdrant Hybrid Vector Store",
            "subtitle": "Vector DB (:6333)",
            "tag": ":6333",
            "color": "purple",
            "description": "Dense vector embeddings + BM25 hybrid search across ingested enterprise documents."
          },
          {
            "title": "SearXNG Private Search",
            "subtitle": "Metasearch (:8888)",
            "tag": ":8888",
            "color": "purple",
            "description": "Air-gapped metasearch aggregator querying 70+ search engines with zero logging."
          }
        ]
      },
      {
        "name": "Layer 04: Hardware-Accelerated Local Inference & Media",
        "role": "Compute & Observability",
        "color": "emerald",
        "nodes": [
          {
            "title": "llama-server & vLLM",
            "subtitle": "High-Throughput LLM (:8080)",
            "tag": ":8080",
            "color": "emerald",
            "description": "Hardware overlays for NVIDIA CUDA, Apple Silicon Metal, AMD ROCm, and Intel Arc."
          },
          {
            "title": "Ollama Serving Daemon",
            "subtitle": "Containerized Engine (:11434)",
            "tag": ":11434",
            "color": "emerald",
            "description": "Quantized local GGUF model serving for low-latency interactive conversations."
          },
          {
            "title": "ComfyUI & Kokoro STT/TTS",
            "subtitle": "Multimodal Media (:8188 / :8880)",
            "tag": "Media",
            "color": "emerald",
            "description": "Local diffusion generation + Faster-Whisper speech recognition and Kokoro TTS."
          },
          {
            "title": "Langfuse Observability",
            "subtitle": "LLM Tracing (:3006)",
            "tag": ":3006",
            "color": "emerald",
            "description": "Full trace telemetry, token usage heatmaps, latency metrics, and prompt evaluations."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: USER ACCESS & CLIENT LAYER                             │\n│    Open-WebUI (:3000)   │   OpenForge Control Cockpit (:3001)   │   OpenForge CLI (ods-cli)      │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [REST / WebSocket / WebRTC Streaming]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: ROUTING & GATEWAY LAYER                                │\n│                     LiteLLM Proxy Gateway (:4000)  │  Privacy-Shield DLP Engine                  │\n│              (OpenAI API Compatibility, Dynamic Quantization, Token-Spy Metering)                │\n└───────────────────────┬────────────────────────┼────────────────────────┬────────────────────────┘\n                        │                        │                        │\n       ┌────────────────┴───────────────┐        │       ┌────────────────┴───────────────┐\n       ▼                                ▼        │       ▼                                ▼\n┌─────────────────────────┐ ┌──────────────────┐ │ ┌──────────────────────┐ ┌──────────────────────┐\n│  CORE INFERENCE ENGINE  │ │ AUTONOMOUS AGENTS│ │ │    RAG & SEARCH      │ │    VOICE PIPELINE    │\n│  llama-server (:8080)   │ │ OpenClaw (:18789)│ │ │ Qdrant Vector (:6333)│ │ Faster-Whisper(:9000)│\n│  Ollama Engine (:11434) │ │ Hermes Agent     │ │ │ SearXNG Search(:8888)│ │ Kokoro TTS (:8880)   │\n│  vLLM GPU Container     │ │ (:9120)+SOUL.md  │ │ │ Perplexica AI Search │ │ Piper Local Speech   │\n└─────────────────────────┘ └──────────────────┘ │ └──────────────────────┘ └──────────────────────┘\n                                                 │\n                        ┌────────────────────────┴────────────────────────┐\n                        ▼                                                 ▼\n┌─────────────────────────────────────────────────┐ ┌──────────────────────────────────────────────┐\n│          AUTOMATION & CREATIVE ENGINES          │ │       SECURITY, PRIVACY & OBSERVABILITY      │\n│   n8n Automation Engine (:5678)                 │ │ Privacy-Shield PII Masking & Redaction Engine│\n│   ComfyUI Generative Diffusion (:8188)          │ │ Langfuse LLM Observability & Tracing (:3006) │\n└─────────────────────────────────────────────────┘ └──────────────────────────────────────────────┘\n",
    "problemStatement": "Deploying an enterprise-grade private AI server requires compiling CUDA/ROCm runtimes, configuring multi-agent harnesses (OpenClaw, Hermes), orchestrating hybrid vector search with SearXNG, configuring speech STT/TTS, and securing endpoints with PII masking—a process taking weeks of manual infrastructure plumbing.",
    "solution": "Engineered OpenForge AI, an automated deployment system that auto-provisions 24 Docker service manifests with a single bash command. Automatically detects host GPU hardware (NVIDIA CUDA, Apple Metal, AMD ROCm, Intel Arc), mounts persistent agent memory (SOUL.md), configures LiteLLM proxying, and launches a real-time host management dashboard.",
    "features": [
      "Single-command bootstrap (`curl -fsSL https://install.osmantic.com/ods.sh | bash`) supporting Linux, macOS, and Windows WSL2",
      "24 bundled production services: llama-server, OpenClaw Agent, Hermes Agent, LiteLLM, Qdrant, SearXNG, ComfyUI, Faster-Whisper, Kokoro, n8n, Langfuse",
      "Hardware auto-detection applying hardware overlays for NVIDIA CUDA, Apple Silicon Metal, AMD ROCm, and Intel Arc GPUs",
      "Autonomous Agent Engines: OpenClaw (:18789) with LAN device pairing, and Hermes Agent (:9120) with SOUL.md persistent memory",
      "Privacy-Shield PII engine masking credentials, credit cards, and sensitive tokens before prompts hit models",
      "OpenForge Control Cockpit (:3001) providing live GPU VRAM telemetry, container health monitoring, and one-click model switching",
      "OpenAI-compatible LiteLLM proxy (:4000) routing traffic to local models with Token-Spy cost accounting"
    ],
    "techStack": [
      {
        "category": "Platform Name",
        "name": "OpenForge AI"
      },
      {
        "category": "Agent Runtimes",
        "name": "OpenClaw (:18789) & Hermes (:9120)"
      },
      {
        "category": "Local Inference",
        "name": "llama-server, Ollama & vLLM"
      },
      {
        "category": "Proxy Gateway",
        "name": "LiteLLM Proxy (:4000)"
      },
      {
        "category": "Vector & Search",
        "name": "Qdrant & SearXNG Metasearch"
      },
      {
        "category": "Speech STT/TTS",
        "name": "Faster-Whisper & Kokoro TTS"
      },
      {
        "category": "Automation & Media",
        "name": "n8n & ComfyUI (:8188)"
      },
      {
        "category": "Security & Telemetry",
        "name": "Privacy-Shield & Langfuse (:3006)"
      }
    ],
    "apiEndpoints": [
      {
        "method": "GET",
        "endpoint": "http://localhost:3000",
        "desc": "Open-WebUI Multi-Model Chat Interface"
      },
      {
        "method": "GET",
        "endpoint": "http://localhost:3001",
        "desc": "OpenForge Control Cockpit & GPU Monitor"
      },
      {
        "method": "POST",
        "endpoint": "http://localhost:4000/v1/chat/completions",
        "desc": "LiteLLM OpenAI-compatible Gateway"
      },
      {
        "method": "WS",
        "endpoint": "ws://localhost:18789",
        "desc": "OpenClaw Autonomous Agent Protocol"
      },
      {
        "method": "GET",
        "endpoint": "http://localhost:9120",
        "desc": "Hermes Agent Web UI & SOUL Harness"
      }
    ],
    "metrics": [
      {
        "label": "Bundled Services",
        "value": "24 Manifests"
      },
      {
        "label": "Agent Engines",
        "value": "OpenClaw & Hermes"
      },
      {
        "label": "Hardware Support",
        "value": "CUDA / Metal / ROCm"
      },
      {
        "label": "Bootstrap Time",
        "value": "~2 Minutes"
      }
    ],
    "githubUrl": "https://github.com/Osmantic/ODS",
    "localPath": "ODS"
  },
  {
    "id": "kavi-agent",
    "number": "02",
    "title": "Personal AI Agent (KaviAgent)",
    "tagline": "Local-first personal assistant with SQLite memory state, local web cockpit, and 95-line plain Python loop",
    "badge": "Autonomous Local Agent",
    "description": "A local-first personal AI assistant framework demonstrating the four foundational pillars of production agents: Harness, Reasoning Loop, Stateful Memory (SQLite), and LLM-as-Judge Evals. Features a local web dashboard cockpit at localhost:7777 and Telegram bot integration.",
    "architectureLayers": [
      {
        "name": "Layer 01: User Interface Channels",
        "role": "Multi-Channel Entrypoints",
        "color": "blue",
        "connectionLabel": "Per-Turn Context & Intent Evaluation",
        "nodes": [
          {
            "title": "Interactive Terminal CLI",
            "subtitle": "Python REPL",
            "tag": "uv run kavi",
            "color": "blue",
            "description": "Low-latency interactive chat shell running natively via UV package manager."
          },
          {
            "title": "Local Web Cockpit",
            "subtitle": "FastAPI & React (:7777)",
            "tag": ":7777",
            "color": "blue",
            "description": "Real-time reasoning visualization, memory state explorer, and tool execution feed."
          },
          {
            "title": "Telegram Bot Bridge",
            "subtitle": "Mobile Messenger Channel",
            "tag": "Webhook",
            "color": "blue",
            "description": "Bi-directional async bridge for querying personal agent securely on mobile devices."
          }
        ]
      },
      {
        "name": "Layer 02: Smart Retrieval Gate",
        "role": "Context & Prompt Orchestrator",
        "color": "amber",
        "connectionLabel": "Dynamic State Sync & Reasoning Dispatch",
        "nodes": [
          {
            "title": "Smart Retrieval Gate",
            "subtitle": "Decision Engine",
            "tag": "Gatekeeper",
            "color": "amber",
            "description": "Evaluates turn context to determine if SQLite memory lookup is required or skips to prevent token bloat."
          },
          {
            "title": "Context Assembler",
            "subtitle": "Dynamic Prompt Builder",
            "tag": "Context",
            "color": "amber",
            "description": "Synthesizes active persona, recent conversation turns, and retrieved memory facts."
          }
        ]
      },
      {
        "name": "Layer 03: Core Reasoning Loop & Stateful Memory",
        "role": "Kernel Execution & Storage",
        "color": "emerald",
        "connectionLabel": "Self-Correction, Reflection & Output Validation",
        "nodes": [
          {
            "title": "Plain Python Loop",
            "subtitle": "Kernel Engine (~95 Lines)",
            "tag": "~95 Lines",
            "color": "emerald",
            "description": "Compact, readable execution loop without framework bloat; handles multi-turn tool loops."
          },
          {
            "title": "Three-Tier SQLite Store",
            "subtitle": ".kavi/state.db",
            "tag": "SQLite DB",
            "color": "emerald",
            "description": "Stores semantic facts, episodic conversation transcripts, and learned procedural skills."
          },
          {
            "title": "Tool Registry",
            "subtitle": "Execution Sandbox",
            "tag": "Tools",
            "color": "emerald",
            "description": "Sandboxed Bash commands, Google/Apple Calendar sync, DuckDuckGo web search, and File I/O."
          }
        ]
      },
      {
        "name": "Layer 04: Evaluation & Observability Suite",
        "role": "Quality Assurance & Regression Testing",
        "color": "purple",
        "nodes": [
          {
            "title": "LLM-as-Judge Evals",
            "subtitle": "Evaluation Framework",
            "tag": "Evals",
            "color": "purple",
            "description": "Automated side-by-side rubric evaluations against golden test sets on each release."
          },
          {
            "title": "Deterministic Test Suite",
            "subtitle": "Pytest Regression Suite",
            "tag": "Pytest",
            "color": "purple",
            "description": "100% offline regression tests ensuring tool execution fidelity and SQLite state consistency."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: USER INTERFACE CHANNELS                                │\n│       Terminal CLI (uv run kavi)   │   Browser Cockpit (:7777)   │   Telegram Bot Bridge        │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Intent Evaluation Per Turn]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: SMART RETRIEVAL GATE                                   │\n│                       Evaluates context per turn: Skip Retrieval vs Retrieve Memory              │\n└───────────────────────┬──────────────────────────────────────────────────┬───────────────────────┘\n                        │                                                  │\n                        ▼                                                  ▼\n┌─────────────────────────────────────────────────┐ ┌──────────────────────────────────────────────┐\n│  LAYER 03A: STATEFUL MEMORY (.kavi/state.db)    │ │  LAYER 03B: PLAIN PYTHON AGENT (~95 LINES)   │\n│  - Semantic Memory: Entities, facts & pref      │ │  - Tool Registry: Calendar, Search, Bash     │\n│  - Episodic Memory: Conversation history & state│ │  - Multi-Provider: Claude, GPT, Ollama       │\n│  - Procedural Memory: Learned workflows         │ │  - Self-Correction & Reflection Subroutine   │\n└─────────────────────────────────────────────────┘ └──────────────────────────────────────────────┘\n                                                 │\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 04: EVALUATION & OBSERVABILITY SUITE                       │\n│                   Side-by-side LLM-as-Judge evaluations with deterministic unit tests            │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Mainstream agent frameworks (LangChain, AutoGPT) introduce bloated abstractions that obscure the core execution loop, lack persistent transparent memory, and send confidential data to closed cloud APIs.",
    "solution": "Engineered KaviAgent in clean, readable Python around a ~95-line execution loop, an explicit SQLite memory store (`state.db`), a local web cockpit dashboard (`localhost:7777`), multi-provider adapters (Claude, OpenAI, DeepSeek, Ollama), and Telegram bot integration.",
    "features": [
      "Local-first memory architecture stored in a single transparent SQLite database file (`.kavi/state.db`)",
      "Three-tier memory system: semantic facts, episodic conversations, and procedural execution skills",
      "Smart retrieval gate evaluating per turn whether memory retrieval is required to reduce token bloat",
      "Browser Cockpit Dashboard (:7777) rendering real-time message flow and agent reasoning state",
      "Multi-provider adapter supporting Anthropic Claude, OpenAI GPT-4o, Gemini, DeepSeek, and OpenRouter",
      "Built-in LLM-as-judge evaluation harness side-by-side with deterministic unit tests"
    ],
    "techStack": [
      {
        "category": "Language",
        "name": "Python 3.12 (UV package manager)"
      },
      {
        "category": "Database",
        "name": "SQLite (.kavi/state.db)"
      },
      {
        "category": "Dashboard",
        "name": "FastAPI & Static Web Cockpit (:7777)"
      },
      {
        "category": "Bot Bridge",
        "name": "Telegram Bot API"
      },
      {
        "category": "Model Adapters",
        "name": "Claude, OpenAI, DeepSeek, Ollama"
      }
    ],
    "apiEndpoints": [
      {
        "method": "GET",
        "endpoint": "http://localhost:7777",
        "desc": "Browser Cockpit Dashboard"
      },
      {
        "method": "CLI",
        "endpoint": "uv run kavi",
        "desc": "Terminal interactive chat session"
      }
    ],
    "metrics": [
      {
        "label": "Core Loop",
        "value": "~95 Lines Python"
      },
      {
        "label": "Storage",
        "value": "100% Local SQLite"
      },
      {
        "label": "Gate Decision",
        "value": "Skip / Retrieve"
      },
      {
        "label": "Latency",
        "value": "Sub-50ms Local"
      }
    ],
    "localPath": "KaviAgent"
  },
  {
    "id": "kavi-space",
    "number": "03",
    "title": "Agentic Workspace IDE (KaviSpace)",
    "tagline": "Desktop application with Tauri v2, xterm.js terminals, and KaviSwarm multi-agent pipeline",
    "badge": "Desktop Multi-Agent IDE",
    "description": "A Tauri v2 + Rust desktop application and multi-agent development environment that autonomously writes, builds, deploys, and live-demos full-stack applications through a three-phase AI swarm pipeline (KaviSwarm).",
    "architectureLayers": [
      {
        "name": "Layer 01: Native Desktop Shell (Tauri v2 + Rust)",
        "role": "Native Shell & User Interface",
        "color": "cyan",
        "connectionLabel": "Bi-directional WebSocket & Native IPC Bridge",
        "nodes": [
          {
            "title": "Tauri v2 Desktop Shell",
            "subtitle": "Rust Native Core",
            "tag": "Rust Native",
            "color": "cyan",
            "description": "Ultra-lightweight native desktop container with OS window docking and system tray."
          },
          {
            "title": "React 19 + Vite Frontend",
            "subtitle": "Zustand State Store",
            "tag": "React 19",
            "color": "cyan",
            "description": "High-performance reactive canvas supporting draggable panels and layout grids."
          },
          {
            "title": "xterm.js Terminal Emulators",
            "subtitle": "GPU Shell Emulation",
            "tag": "xterm.js",
            "color": "cyan",
            "description": "Low-latency GPU-accelerated terminal tabs connected via WebSockets to node-pty."
          }
        ]
      },
      {
        "name": "Layer 02: Express Backend & Session Manager",
        "role": "Local Service Multiplexer",
        "color": "indigo",
        "connectionLabel": "Autonomous Execution Protocol",
        "nodes": [
          {
            "title": "Express API & WebSocket Server",
            "subtitle": "Node.js Backend (:3001)",
            "tag": ":3001",
            "color": "indigo",
            "description": "Manages pseudo-terminal child processes, agent messaging bus, and file system IPC."
          },
          {
            "title": "Workspace Mode Controller",
            "subtitle": "3 Workspace Modes",
            "tag": "Modes",
            "color": "indigo",
            "description": "Switches between KaviAI terminal grid, KaviCanvas freeform canvas, and KaviSwarm."
          }
        ]
      },
      {
        "name": "Layer 03: KaviSwarm 3-Phase Autonomous Pipeline",
        "role": "Multi-Agent Autonomous Development",
        "color": "purple",
        "connectionLabel": "Live Verification & Hot-Reload Feedback",
        "nodes": [
          {
            "title": "Phase 1: PRD & Architecture Engine",
            "subtitle": "Claude 3.5 Sonnet Streaming",
            "tag": "Phase 1",
            "color": "purple",
            "description": "Auto-generates technical specifications, data schemas, and dependency execution trees."
          },
          {
            "title": "Phase 2: Swarm Build & Code Agent",
            "subtitle": "Multi-Agent Tool-Use Loop",
            "tag": "Phase 2",
            "color": "purple",
            "description": "Self-correcting agent loop creating files, running package installs, and building apps."
          },
          {
            "title": "Phase 3: Playwright Browser Pilot",
            "subtitle": "End-to-End Automated Testing",
            "tag": "Phase 3",
            "color": "purple",
            "description": "Boots live preview in iframe, runs automated headless tests, and clicks interactive UI."
          }
        ]
      },
      {
        "name": "Layer 04: Verification, Preview & File System Engine",
        "role": "Live Feedback & Disk Persistence",
        "color": "emerald",
        "nodes": [
          {
            "title": "Live Preview Server",
            "subtitle": "Vite Dev Server Integration",
            "tag": "Live Dev",
            "color": "emerald",
            "description": "Embedded hot-reloading web browser preview window right inside the desktop canvas."
          },
          {
            "title": "File System Watcher",
            "subtitle": "Local Storage & Diff Tracker",
            "tag": "Disk I/O",
            "color": "emerald",
            "description": "Monitors file changes on disk, computes AST diffs, and maintains audit commit history."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: KAVISPACE DESKTOP (TAURI V2 + RUST)                    │\n│       React 19 SPA   │   Zustand State   │   xterm.js Terminals   │   Draggable Grid Canvas      │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [WebSocket & IPC Bridge]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: NODE.JS EXPRESS BACKEND (:3001)                        │\n│       REST API   │   WebSocket Server   │   Session Manager (node-pty)   │   KaviTest Router     │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Swarm Task Orchestration]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: KAVISWARM AUTONOMOUS 3-PHASE PIPELINE                  │\n│  Phase 1: PRD & Architecture ──► Phase 2: Autonomous Code Build ──► Phase 3: Playwright Pilot  │\n│  (Claude SDK Streaming)         (Multi-Agent Tool-Use Loop)         (Live Browser Test & Demo)   │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 04: VERIFICATION & HOT-RELOAD PREVIEW                      │\n│                  Embedded Iframe Preview Pane  │  Local File System Watcher (Chokidar)           │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Developing complex full-stack applications with AI requires juggling multiple terminal windows, code editors, browser previews, and agent prompts without unified orchestration.",
    "solution": "Engineered KaviSpace, a Tauri v2 desktop app combining terminal emulation (xterm.js + node-pty), canvas layout management, Express backend, Anthropic Claude SDK streaming, and Playwright browser pilots.",
    "features": [
      "Tauri v2 + Rust native desktop shell with React 19 and Vite frontend",
      "Integrated xterm.js terminal emulation powered by node-pty and WebSockets",
      "KaviSwarm 3-phase autonomous pipeline: PRD generation, build execution, and Playwright verification",
      "Workspace modes: KaviAI (terminal grid), KaviCanvas (draggable layout), and KaviSwarm (agent pipeline)",
      "Claude SDK streaming integration running multi-turn tool-use loops",
      "Live iframe browser preview pane with automated Playwright browser pilot testing"
    ],
    "techStack": [
      {
        "category": "Desktop Shell",
        "name": "Tauri v2 (Rust)"
      },
      {
        "category": "Frontend",
        "name": "React 19, TypeScript, Vite & Zustand"
      },
      {
        "category": "Terminal",
        "name": "xterm.js & node-pty"
      },
      {
        "category": "Backend",
        "name": "Node.js / Express (:3001) & WebSockets"
      },
      {
        "category": "AI SDK",
        "name": "@anthropic-ai/sdk (Claude API)"
      },
      {
        "category": "Browser Pilot",
        "name": "Playwright Browser Automation"
      }
    ],
    "metrics": [
      {
        "label": "Desktop Shell",
        "value": "Tauri v2 Rust"
      },
      {
        "label": "Workspace Modes",
        "value": "3 Modes"
      },
      {
        "label": "Browser Testing",
        "value": "Playwright Pilot"
      },
      {
        "label": "Terminal",
        "value": "GPU-Accelerated"
      }
    ],
    "localPath": "KaviAITerminal-main"
  },
  {
    "id": "kavi-growth-platform",
    "number": "04",
    "title": "Business Growth Agents Platform (KaviAI)",
    "tagline": "AI agent platform planning, generating, and publishing content across 10+ platforms automatically",
    "badge": "Multi-Channel AI SaaS",
    "description": "An enterprise AI agent platform for growth, marketing, and distribution. Uses Google Gemini with LiteLLM gateway and OpenAI fallback to automate SEO, Reddit, LinkedIn, X, Instagram, and YouTube publishing.",
    "architectureLayers": [
      {
        "name": "Layer 01: Ingestion & Campaign Orchestrator",
        "role": "Client App & Brand Parameters",
        "color": "blue",
        "connectionLabel": "Multi-Agent Task Distribution",
        "nodes": [
          {
            "title": "Next.js 16 Web Cockpit",
            "subtitle": "React 19 SaaS Dashboard",
            "tag": "Next.js 16",
            "color": "blue",
            "description": "Campaign planner, brand voice profile editor, and multi-channel publication calendar."
          },
          {
            "title": "Brand Goal & Seed Dispatcher",
            "subtitle": "Input Engine",
            "tag": "Input Engine",
            "color": "blue",
            "description": "Ingests topic keywords, voice guidelines, competitor links, and conversion objectives."
          }
        ]
      },
      {
        "name": "Layer 02: Autonomous AI Agent Squad",
        "role": "Specialized Distribution Agents",
        "color": "purple",
        "connectionLabel": "AI Inference & Governance Gateway",
        "nodes": [
          {
            "title": "Reddit Growth Agent",
            "subtitle": "Subreddit Scanner",
            "tag": "Reddit",
            "color": "purple",
            "description": "Finds niche discussions and drafts value-first answers complying with community rules."
          },
          {
            "title": "SEO / GEO Targeting Writer",
            "subtitle": "Search Engine Optimizer",
            "tag": "SEO/GEO",
            "color": "purple",
            "description": "Produces structured long-form articles optimized for Google and AI generative search engines."
          },
          {
            "title": "LinkedIn & X/Threads Agent",
            "subtitle": "Viral Format Optimizer",
            "tag": "Social",
            "color": "purple",
            "description": "Crafts hook-driven carousels, professional insights, and high-retention Twitter/X threads."
          },
          {
            "title": "YouTube & TikTok Shorts Creator",
            "subtitle": "Shorts Script Engine",
            "tag": "Video",
            "color": "purple",
            "description": "Generates 60-second video scripts with visual storyboard cues and captions."
          }
        ]
      },
      {
        "name": "Layer 03: Model Gateway & Enterprise Database",
        "role": "Inference Runtimes & Persistence",
        "color": "indigo",
        "connectionLabel": "Automated Distribution & Background Scheduling",
        "nodes": [
          {
            "title": "Google Gemini 2.5 Flash",
            "subtitle": "Primary Model (Vercel AI SDK)",
            "tag": "Gemini 2.5",
            "color": "indigo",
            "description": "Sub-second structured output generation with large context window via AI SDK 6.x."
          },
          {
            "title": "LiteLLM Proxy & Failover",
            "subtitle": "GPT-4o-mini Fallback",
            "tag": "Failover",
            "color": "indigo",
            "description": "Automatic failover and rate-limit buffering ensuring 99.99% publishing uptime."
          },
          {
            "title": "Supabase PostgreSQL + RLS",
            "subtitle": "Row-Level Security DB",
            "tag": "Supabase",
            "color": "indigo",
            "description": "Multi-tenant database enforcing strict workspace boundaries with SSR cookie auth."
          }
        ]
      },
      {
        "name": "Layer 04: Publishing & Background Automation",
        "role": "Delivery & Feedback Loops",
        "color": "emerald",
        "nodes": [
          {
            "title": "10+ Connected Channels",
            "subtitle": "API Publishing Connectors",
            "tag": "10+ Channels",
            "color": "emerald",
            "description": "Automated publishing to Reddit, LinkedIn, X, Instagram, YouTube, TikTok, and Threads."
          },
          {
            "title": "Vercel Cron & Workers",
            "subtitle": "Background Automation",
            "tag": "Cron Jobs",
            "color": "emerald",
            "description": "Runs scheduled post releases, engagement polling, and brand reach metrics aggregation."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: BRAND GOAL & SEED INPUT                                │\n│                   Next.js 16 Web Cockpit  │  Brand Persona  │  Target Audience                   │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Task Distribution]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: AUTONOMOUS AI AGENT SQUAD                              │\n│  Reddit Distribution  │  SEO/GEO Targeting  │  LinkedIn Writer  │  X / Threads  │  YouTube Shorts│\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │\n                   ┌─────────────────────────────┼─────────────────────────────┐\n                   ▼                             ▼                             ▼\n┌──────────────────────────────────┐ ┌───────────────────────┐ ┌──────────────────────────────────┐\n│  LAYER 03A: INFERENCE ENGINE     │ │ LAYER 03B: DATA STORE │ │  LAYER 04: PUBLISHING CHANNELS   │\n│ Google Gemini 2.5 Flash Primary  │ │ Supabase PostgreSQL   │ │ 10+ Connected Channels           │\n│ LiteLLM Proxy Gateway            │ │ Row-Level Security RLS│ │ Reddit, LinkedIn, X, Instagram   │\n│ GPT-4o-mini Fallback Routing     │ │ SSR Cookie Session    │ │ YouTube, TikTok, Threads, FB     │\n└──────────────────────────────────┘ └───────────────────────┘ └──────────────────────────────────┘\n",
    "problemStatement": "Growth teams waste massive time rewriting, formatting, scheduling, and posting content across dozens of social networks while tracking brand reach across analytics tool silos.",
    "solution": "Built KaviAI Platform with Next.js 16 App Router, Vercel AI SDK 6.x, Supabase Postgres with RLS, Google Gemini 2.5 Flash, and automated publishing pipelines across 10+ channels.",
    "features": [
      "Multi-channel publishing pipeline across Reddit, LinkedIn, X, Instagram, Facebook, Threads, YouTube, and TikTok",
      "Powered by Google Gemini 2.5 Flash with LiteLLM proxy and GPT-4o-mini fallback",
      "Supabase backend with PostgreSQL Row-Level Security (RLS) and SSR cookie authentication",
      "Integrated SEO/GEO targeting agent generating optimized articles and distribution copies",
      "Vercel Cron automation running background scheduling and analytics ingestion"
    ],
    "techStack": [
      {
        "category": "Framework",
        "name": "Next.js 16 App Router & React 19"
      },
      {
        "category": "AI Orchestration",
        "name": "Vercel AI SDK (ai 6.x)"
      },
      {
        "category": "Primary Model",
        "name": "Google Gemini 2.5 Flash"
      },
      {
        "category": "Database",
        "name": "Supabase (PostgreSQL + RLS)"
      },
      {
        "category": "Styling",
        "name": "Tailwind CSS v4"
      }
    ],
    "metrics": [
      {
        "label": "Publishing Channels",
        "value": "10+ Platforms"
      },
      {
        "label": "Primary LLM",
        "value": "Gemini 2.5 Flash"
      },
      {
        "label": "Tenant Security",
        "value": "Supabase RLS"
      },
      {
        "label": "Architecture",
        "value": "Serverless Edge"
      }
    ],
    "localPath": "KaviAgenticAIPlatform SAS"
  },
  {
    "id": "agentic-coding-platform",
    "number": "05",
    "title": "Agentic Coding Platform & Sandboxes",
    "tagline": "Self-hosted AI development infrastructure for secure, governed agentic coding",
    "badge": "Developer AI Infrastructure",
    "description": "A self-hosted developer platform providing containerized workspace environments, AI coding agents, and governance controls. Allows developers and AI agents to code side-by-side inside controlled sandbox environments.",
    "architectureLayers": [
      {
        "name": "Layer 01: Developer Access & IDE Connectors",
        "role": "Client Interfaces & Protocol Adapters",
        "color": "blue",
        "connectionLabel": "Model Context Protocol (MCP) & REST Control",
        "nodes": [
          {
            "title": "Developer IDEs",
            "subtitle": "Cursor, Windsurf & Claude Code",
            "tag": "IDE Host",
            "color": "blue",
            "description": "Native IDE extensions communicating with sandbox environments through standard protocols."
          },
          {
            "title": "Control Web Cockpit",
            "subtitle": "Admin Dashboard",
            "tag": "Dashboard",
            "color": "blue",
            "description": "Team quota management, sandbox terminal view, and active agent execution status."
          }
        ]
      },
      {
        "name": "Layer 02: Control Plane & Governance Engine",
        "role": "Policy, Quota & Container Orchestration",
        "color": "indigo",
        "connectionLabel": "Container Provisioning & Execution Control",
        "nodes": [
          {
            "title": "FastAPI Control Orchestrator",
            "subtitle": "Core API Engine",
            "tag": "FastAPI",
            "color": "indigo",
            "description": "Pod lifecycle management, user identity verification, and ephemeral container scheduling."
          },
          {
            "title": "Security & Secret Scanner",
            "subtitle": "Air-Gap Guard",
            "tag": "Air-Gap",
            "color": "indigo",
            "description": "Live secret redaction, banned command filter, and zero-egress network isolation."
          },
          {
            "title": "Token Quota & Audit Router",
            "subtitle": "Governance Proxy",
            "tag": "Governance",
            "color": "indigo",
            "description": "Tracks every model prompt, generated code diff, and token consumed for compliance audits."
          }
        ]
      },
      {
        "name": "Layer 03: Ephemeral Isolated Sandboxes",
        "role": "Compute & Execution Environment",
        "color": "emerald",
        "connectionLabel": "Persistent Storage & Container Registry",
        "nodes": [
          {
            "title": "Python / UV Sandbox Pods",
            "subtitle": "Docker / K8s Container",
            "tag": "Python/UV",
            "color": "emerald",
            "description": "Pre-configured Python 3.12 containers with UV package manager and data science tooling."
          },
          {
            "title": "Node.js Fullstack Sandboxes",
            "subtitle": "Docker / K8s Container",
            "tag": "Node.js",
            "color": "emerald",
            "description": "High-speed Node.js / TypeScript build environments with integrated test runners."
          },
          {
            "title": "Agent Sandbox Runner",
            "subtitle": "MCP Tool Executor",
            "tag": "MCP Runner",
            "color": "emerald",
            "description": "Autonomous agents executing shell commands, reading git diffs, and running test suites."
          }
        ]
      },
      {
        "name": "Layer 04: Storage, Git & Observability Backend",
        "role": "State Persistence & Tracing",
        "color": "purple",
        "nodes": [
          {
            "title": "Persistent Workspace Volumes",
            "subtitle": "PVC Storage",
            "tag": "PVC Storage",
            "color": "purple",
            "description": "Per-developer git workspaces and volume mounts preserved across sandbox recycles."
          },
          {
            "title": "OpenTelemetry & Jaeger",
            "subtitle": "Full Trace Telemetry",
            "tag": "Telemetry",
            "color": "purple",
            "description": "Sub-millisecond latency and agent command trace history with audit logs."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: CONTROL PLANE & GOVERNANCE                             │\n│   Workspace Orchestrator (FastAPI)  │  Agent Runner Service  │  Token Quota & Audit Log Router   │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Container Provisioning & MCP Protocol]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: EPHEMERAL SANDBOX CLUSTER                              │\n│  ┌───────────────────────────┐   ┌───────────────────────────┐   ┌────────────────────────────┐  │\n│  │ Workspace 01 (Python/UV)  │   │ Workspace 02 (Node Full)  │   │ Agent Execution Sandbox    │  │\n│  │ Isolated Docker/K8s Pod   │   │ Isolated Docker/K8s Pod   │   │ Model Context Protocol MCP │  │\n│  └───────────────────────────┘   └───────────────────────────┘   └────────────────────────────┘  │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: PERSISTENT STORAGE & TELEMETRY                         │\n│             Per-Tenant Persistent Volume Claims  │  Jaeger / OpenTelemetry Tracing               │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Uncontrolled developer use of public AI tools poses data-leakage and compliance risks. Companies need self-hosted developer environments where AI agents execute code under strict token budgets and audit logs.",
    "solution": "Built a control plane with FastAPI and Docker/Kubernetes orchestration that provisions ephemeral coding sandboxes, runs AI coding agents with Model Context Protocol (MCP), and logs every command for compliance.",
    "features": [
      "Container-based sandbox isolation with explicit CPU/RAM limits per developer workspace",
      "Multi-agent runner orchestrating autonomous coding tasks across repository AST trees",
      "Model Context Protocol (MCP) tool integration with Cursor, Claude Code, and Windsurf",
      "Centralized AI governance: model allowlists, token budget caps, and secret scanning",
      "Pre-built environment templates for Python (UV/Jupyter), Node.js, and Go services"
    ],
    "techStack": [
      {
        "category": "Control Plane",
        "name": "FastAPI"
      },
      {
        "category": "Containerization",
        "name": "Docker Engine & Kubernetes API"
      },
      {
        "category": "Agent Protocol",
        "name": "Model Context Protocol (MCP)"
      },
      {
        "category": "Package Manager",
        "name": "UV (Python) & Pnpm"
      }
    ],
    "metrics": [
      {
        "label": "Sandbox Spinup",
        "value": "1.2s"
      },
      {
        "label": "Data Leakage",
        "value": "0% Isolated"
      },
      {
        "label": "Protocol",
        "value": "MCP Native"
      },
      {
        "label": "Isolation",
        "value": "Kubernetes Pod"
      }
    ],
    "localPath": "agentic-coding-platform"
  },
  {
    "id": "corporate-rag-system",
    "number": "06",
    "title": "Corporate Enterprise RAG",
    "tagline": "Production-grade Retrieval-Augmented Generation for enterprise knowledge management",
    "badge": "Enterprise Hybrid RAG",
    "description": "A complete corporate organization RAG system that ingests internal documents, enables hybrid search across organizational knowledge, and provides intelligent Q&A through agentic retrieval with LangGraph.",
    "architectureLayers": [
      {
        "name": "Layer 01: Document Ingestion & Pipeline Orchestration",
        "role": "Data Pipeline & Batch Extraction",
        "color": "blue",
        "connectionLabel": "Text Extraction, Chunking & Embedding Generation",
        "nodes": [
          {
            "title": "Multi-Format Enterprise Ingestion",
            "subtitle": "PDF, DOCX, Confluence, S3",
            "tag": "Data Feeds",
            "color": "blue",
            "description": "Batch and real-time ingestion across internal enterprise knowledge repositories."
          },
          {
            "title": "Apache Airflow 3.0 Workers",
            "subtitle": "ETL Pipeline Orchestrator",
            "tag": "Airflow 3.0",
            "color": "blue",
            "description": "Automated document parsing, hierarchical chunking, and metadata tagging workflows."
          }
        ]
      },
      {
        "name": "Layer 02: Hybrid Indexing & Vector Search Engine",
        "role": "Dual-Engine Information Retrieval",
        "color": "emerald",
        "connectionLabel": "Sub-2ms Semantic Cache & Query Router",
        "nodes": [
          {
            "title": "OpenSearch 2.19 Cluster",
            "subtitle": "Dual Search Engine",
            "tag": "OpenSearch",
            "color": "emerald",
            "description": "BM25 exact keyword matching combined with high-dimensional dense vector embeddings."
          },
          {
            "title": "Dense Vector Embeddings",
            "subtitle": "bge-large / text-embedding-3",
            "tag": "Vector DB",
            "color": "emerald",
            "description": "Captures deep semantic concepts across complex multi-page policy manuals."
          },
          {
            "title": "Reciprocal Rank Fusion (RRF)",
            "subtitle": "Hybrid Re-Ranking",
            "tag": "RRF Ranker",
            "color": "emerald",
            "description": "Combines keyword precision with semantic breadth for 99%+ answer retrieval accuracy."
          }
        ]
      },
      {
        "name": "Layer 03: LangGraph Agentic Retrieval Workflow",
        "role": "Reasoning, Validation & Self-Correction",
        "color": "purple",
        "connectionLabel": "Local Air-Gapped Model Generation",
        "nodes": [
          {
            "title": "Redis Semantic Cache",
            "subtitle": "Sub-2ms Cache Hit",
            "tag": "Redis",
            "color": "purple",
            "description": "Delivers instantaneous response on repeated enterprise queries, up to 400x speedup."
          },
          {
            "title": "Document Grading Node",
            "subtitle": "Hallucination Filter",
            "tag": "LangGraph",
            "color": "purple",
            "description": "Evaluates relevance of retrieved chunks; discards irrelevant context automatically."
          },
          {
            "title": "Query Rewriter Subroutine",
            "subtitle": "Self-Correction Loop",
            "tag": "Self-Correction",
            "color": "purple",
            "description": "Rewrites underspecified or ambiguous questions before attempting secondary retrieval."
          }
        ]
      },
      {
        "name": "Layer 04: Local Model Serving & Enterprise Observability",
        "role": "Air-Gapped Synthesis & Telemetry",
        "color": "indigo",
        "nodes": [
          {
            "title": "Local Ollama / vLLM Engine",
            "subtitle": "Air-Gapped LLM Serving",
            "tag": "Self-Hosted",
            "color": "indigo",
            "description": "100% on-premises model serving guaranteeing zero confidential data leakage to third parties."
          },
          {
            "title": "Langfuse Observability",
            "subtitle": "Trace Telemetry",
            "tag": "Langfuse",
            "color": "indigo",
            "description": "Complete trace logging, token accounting, latency bottlenecks, and user feedback ratings."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: DOCUMENT INGESTION & PARSING PIPELINE                  │\n│                  PDF / Docx / Confluence Ingestion ──► Apache Airflow 3.0 Workers                │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Chunking & Vector Embeddings]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: OPENSEARCH 2.19 HYBRID SEARCH ENGINE                   │\n│              BM25 Keyword Matching (Exact Terms)  +  Dense Vector Embeddings (Semantics)         │\n│                           Reciprocal Rank Fusion (RRF) Re-ranking                                │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Filtered Document Candidates]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: LANGGRAPH AGENTIC RAG LOOP                             │\n│  Redis Semantic Cache (Hit? Return in 2ms) ──► Document Grading ──► Query Rewriter ──► LLM Gen   │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 04: AIR-GAPPED INFERENCE & OBSERVABILITY                   │\n│               Local Ollama / vLLM Model Serving  │  Langfuse LLM Observability (:3006)           │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Enterprise teams struggle with fragmented internal knowledge across PDFs and policy documents. Third-party cloud APIs are banned, requiring on-premises vector search and local model serving.",
    "solution": "Engineered an air-gapped Dockerized RAG pipeline with OpenSearch 2.19 (hybrid BM25 + vector search), FastAPI, Ollama local model serving, Redis response caching (up to 400x speedup), and Langfuse observability.",
    "features": [
      "Automated document ingestion & PDF chunking pipeline via Airflow 3.0",
      "Hybrid Reciprocal Rank Fusion (RRF) matching BM25 keyword precision with vector semantics",
      "Agentic LangGraph workflow featuring document grading & automatic query rewriting",
      "Langfuse observability tracing every LLM prompt, token count, and latency bottleneck",
      "Redis semantic caching delivering 150-400x response speedup on repeated queries"
    ],
    "techStack": [
      {
        "category": "Search Engine",
        "name": "OpenSearch 2.19 (Hybrid BM25 + Vector)"
      },
      {
        "category": "Framework",
        "name": "FastAPI 0.115+"
      },
      {
        "category": "Agentic Framework",
        "name": "LangGraph & LangChain"
      },
      {
        "category": "Model Serving",
        "name": "Local Ollama LLM"
      }
    ],
    "metrics": [
      {
        "label": "Cache Speedup",
        "value": "400x Speedup"
      },
      {
        "label": "Deployment",
        "value": "100% On-Prem"
      },
      {
        "label": "Search Mode",
        "value": "Hybrid RRF"
      },
      {
        "label": "Observability",
        "value": "Langfuse Tracing"
      }
    ],
    "localPath": "corporate-rag-system"
  },
  {
    "id": "bank-cheque-ocr-automation",
    "number": "07",
    "title": "Bank Cheque OCR Automation",
    "tagline": "Handwriting-aware cheque processing with automatic fraud detection for regulated banking",
    "badge": "Banking & Financial AI",
    "description": "A production-ready Bank Cheque OCR API automating the extraction and verification of critical information from scanned bank cheques. Designed for high-volume banking back-offices processing 5,000+ cheques daily.",
    "architectureLayers": [
      {
        "name": "Layer 01: Cheque Ingestion & Bank Gateway",
        "role": "Secure Ingestion & Validation",
        "color": "blue",
        "connectionLabel": "Raw Cheque Image Stream (TIFF / PNG / JPG)",
        "nodes": [
          {
            "title": "High-Throughput Upload API",
            "subtitle": "FastAPI Async Gateway",
            "tag": "FastAPI",
            "color": "blue",
            "description": "Processes scanned cheque batches up to 5,000+ daily with async streaming uploads."
          },
          {
            "title": "Secure Bank Network Gateway",
            "subtitle": "mTLS & Audit Verification",
            "tag": "mTLS",
            "color": "blue",
            "description": "Mutual TLS encryption with tamper-evident cryptographic checksum verification."
          }
        ]
      },
      {
        "name": "Layer 02: OpenCV Computer Vision Preprocessing",
        "role": "Image Normalization & ROI Extraction",
        "color": "cyan",
        "connectionLabel": "Clean Normalized Cheque ROI Cutouts",
        "nodes": [
          {
            "title": "Adaptive Thresholding",
            "subtitle": "OpenCV Binarization",
            "tag": "OpenCV",
            "color": "cyan",
            "description": "Separates foreground ink and pen strokes from complex bank security guilloche patterns."
          },
          {
            "title": "Deskew & Rotation Engine",
            "subtitle": "Geometric Transform",
            "tag": "Deskew",
            "color": "cyan",
            "description": "Corrects skew angles up to 45 degrees, automatically aligning cheque borders."
          },
          {
            "title": "Noise & Watermark Filter",
            "subtitle": "Morphological Filters",
            "tag": "Filtering",
            "color": "cyan",
            "description": "Filters out background watermark stamps while preserving light pencil/pen writing."
          }
        ]
      },
      {
        "name": "Layer 03: Field Extraction & OCR Pipeline",
        "role": "Multi-Zone Character Recognition",
        "color": "purple",
        "connectionLabel": "Structured Candidate Data Payload",
        "nodes": [
          {
            "title": "Handwritten Text Recognition",
            "subtitle": "PyTesseract + Custom CNN",
            "tag": "HTR Model",
            "color": "purple",
            "description": "Extracts handwritten Payee Name, Payer Name, and written currency sentences."
          },
          {
            "title": "Numeric Courtesy Amount OCR",
            "subtitle": "CRNN Amount Recognizer",
            "tag": "CRNN",
            "color": "purple",
            "description": "Isolates and transcribes courtesy numeric figures with decimal and comma checks."
          },
          {
            "title": "MICR E-13B Optical Strip Reader",
            "subtitle": "Magnetic Ink Character Strip",
            "tag": "MICR E-13B",
            "color": "purple",
            "description": "Extracts 6-digit cheque number, 9-digit transit routing code, and account number."
          }
        ]
      },
      {
        "name": "Layer 04: Automated Fraud Scoring & Core Banking Bridge",
        "role": "Rule Validation & Settlement Clearing",
        "color": "emerald",
        "nodes": [
          {
            "title": "Amount Parity Cross-Checker",
            "subtitle": "Pydantic v2 Validator",
            "tag": "Parity Check",
            "color": "emerald",
            "description": "Cross-checks numeric amount against written English words with 0% mismatch tolerance."
          },
          {
            "title": "MICR Checksum & Date Validator",
            "subtitle": "Banking Rules Engine",
            "tag": "Fraud Engine",
            "color": "emerald",
            "description": "Validates transit routing checksum and flags stale or post-dated cheque dates."
          },
          {
            "title": "Core Banking Gateway Export",
            "subtitle": "ISO 20022 / JSON Dispatch",
            "tag": "Core Banking",
            "color": "emerald",
            "description": "Dispatches verified transaction payload directly to bank settlement clearing systems."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: CHEQUE SCAN INGESTION (JPG / PNG)                      │\n│                                  FastAPI Async Streaming Upload Gateway                          │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Secure Image Payload]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: OPENCV COMPUTER VISION PREPROCESSING                   │\n│                  Adaptive Thresholding  │  Deskew & Normalization  │  Noise Filtering            │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Normalized Cheque Cutouts]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: FIELD EXTRACTION & OCR PIPELINE                        │\n│       Payee & Payer Name (Handwritten)  │  Date Line  │  Numeric & Written English Amounts       │\n│                             MICR E-13B Transit & Account Code Strip                              │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Structured Extraction JSON]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 04: AUTOMATED FRAUD SCORING ENGINE                         │\n│  - Amount Parity Cross-Check (Digits vs Written Words)                                           │\n│  - MICR Checksum Directory Verification                                                          │\n│  - Stale / Post-Dated Cheque Range Verification                                                  │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Manual bank cheque processing is slow and error-prone. Banks require automated extraction of handwritten payee names, amounts, MICR codes, and automated cross-validation against fraud.",
    "solution": "Designed a multi-stage Computer Vision + OCR pipeline using OpenCV and PyTesseract wrapped in FastAPI. Includes automatic numeric-to-written amount cross-checking and fraud anomaly scoring.",
    "features": [
      "Sub-second field extraction: Payer, Payee, Numeric Amount, Written Amount, Cheque Number, IFSC, MICR data",
      "Dual-support for both printed bank text and complex handwritten entries",
      "Automatic cross-validation comparing numeric figures vs written English text",
      "Fraud detection flagging altered values, invalid date ranges, and signature anomalies"
    ],
    "techStack": [
      {
        "category": "API Framework",
        "name": "FastAPI"
      },
      {
        "category": "Computer Vision",
        "name": "OpenCV & PyTesseract"
      },
      {
        "category": "Validation Engine",
        "name": "Pydantic v2"
      }
    ],
    "metrics": [
      {
        "label": "Processing Speed",
        "value": "850 ms / Cheque"
      },
      {
        "label": "Extraction Acc",
        "value": "99.1% Confidence"
      },
      {
        "label": "Throughput",
        "value": "5,000+ / Day"
      },
      {
        "label": "Fraud Detection",
        "value": "Automated Parity"
      }
    ],
    "localPath": "bank-cheque-ocr-automation"
  },
  {
    "id": "customer-voice-agent",
    "number": "08",
    "title": "Customer Call Support Voice Agent",
    "tagline": "Production-ready realtime voice agent for customer service call centers",
    "badge": "Realtime Voice AI",
    "description": "A complete customer service voice agent system capable of handling inbound and outbound telephone calls with sub-second speech recognition, intelligent tool-calling responses, knowledge lookup, and conversation tracing.",
    "architectureLayers": [
      {
        "name": "Layer 01: Telephony & Audio Ingestion",
        "role": "Carrier Stream & Webhook Gateway",
        "color": "blue",
        "connectionLabel": "Sub-200ms Inbound Speech Packets",
        "nodes": [
          {
            "title": "Twilio WebRTC / SIP Trunk",
            "subtitle": "Telephony Carrier Gateway",
            "tag": "Twilio SIP",
            "color": "blue",
            "description": "Handles inbound phone calls and outbound proactive service alerts across PSTN."
          },
          {
            "title": "Bi-directional Audio Stream",
            "subtitle": "Opus 16kHz / G.711 Protocol",
            "tag": "WebSocket",
            "color": "blue",
            "description": "Low-latency full-duplex audio stream piped directly between caller and server."
          }
        ]
      },
      {
        "name": "Layer 02: Realtime Speech-to-Text & FastRTC",
        "role": "Low-Latency Audio Processing",
        "color": "cyan",
        "connectionLabel": "Live Streaming Transcription Tokens",
        "nodes": [
          {
            "title": "FastRTC Audio Transport",
            "subtitle": "Realtime WebRTC Layer",
            "tag": "FastRTC",
            "color": "cyan",
            "description": "Sub-millisecond jitter buffering, echo cancellation, and voice activity detection (VAD)."
          },
          {
            "title": "Moonshine / Faster-Whisper",
            "subtitle": "GPU STT Model",
            "tag": "< 200ms STT",
            "color": "cyan",
            "description": "Sub-200ms speech-to-text transcription with enterprise domain vocabulary fine-tuning."
          }
        ]
      },
      {
        "name": "Layer 03: Conversational Reasoning & Knowledge",
        "role": "LLM Decision & Knowledge Search",
        "color": "purple",
        "connectionLabel": "Streaming Response Tokens",
        "nodes": [
          {
            "title": "Low-Latency LLM Engine",
            "subtitle": "Streaming Decision Engine",
            "tag": "Streaming LLM",
            "color": "purple",
            "description": "Ultra-fast decision loop with live function calling and conversational interruptions."
          },
          {
            "title": "Knowledge: Superlinked + Qdrant",
            "subtitle": "Sub-50ms Vector Search",
            "tag": "Vector Search",
            "color": "purple",
            "description": "Queries customer account history, FAQs, and ticket policies in under 50ms."
          },
          {
            "title": "Multi-Avatar Persona Engine",
            "subtitle": "Tone & Brand Persona",
            "tag": "Persona",
            "color": "purple",
            "description": "Empathetic customer support tone adapted dynamically to caller sentiment."
          }
        ]
      },
      {
        "name": "Layer 04: Ultra-Low-Latency TTS & Observability",
        "role": "Voice Synthesis & Telemetry",
        "color": "emerald",
        "nodes": [
          {
            "title": "Kokoro / Orpheus 3B TTS",
            "subtitle": "GPU Speech Synthesizer",
            "tag": "< 300ms TTS",
            "color": "emerald",
            "description": "Human-like voice synthesis with natural breathing pauses (<300ms time-to-first-byte)."
          },
          {
            "title": "Twilio Audio Egress",
            "subtitle": "Outbound Voice Stream",
            "tag": "Audio Out",
            "color": "emerald",
            "description": "Streams synthesized audio frames back to the caller telephone seamlessly."
          },
          {
            "title": "Opik Observability",
            "subtitle": "End-to-End Waterfall Trace",
            "tag": "Opik",
            "color": "emerald",
            "description": "Tracks STT latency, tool execution, LLM thought time, and overall turnaround (<800ms)."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: TELEPHONY INGESTION (TWILIO SIP)                       │\n│                        Inbound & Outbound Webhooks ──► Bi-directional Audio Stream               │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Sub-200ms Inbound Speech Packets]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: FASTRTC LOW-LATENCY AUDIO LOOP                         │\n│  1. Speech-to-Text: Moonshine / Faster-Whisper (Sub-200ms)                                       │\n│  2. Decision Engine: Low-Latency LLM with Realtime Tool Calling                                  │\n│  3. Knowledge Retrieval: Superlinked + Qdrant Vector Search                                      │\n│  4. Text-to-Speech: Kokoro / Orpheus 3B Speech Synthesis on GPU pods                             │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Synthesized Audio Egress]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: OPIK OBSERVABILITY & TELEMETRY                         │\n│                     End-to-end trace tracking audio latency, tool calls, and caller sentiment    │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Traditional IVR call centers annoy customers with rigid menus. Organizations need human-sounding voice agents capable of querying live databases in real time.",
    "solution": "Architected a low-latency audio pipeline integrating Twilio SIP webhooks with FastRTC, Moonshine/Faster-Whisper for STT, Qdrant + Superlinked for knowledge search, Kokoro/Orpheus for TTS, and Opik for latency tracing.",
    "features": [
      "Inbound and outbound telephone call handling via Twilio Webhook integration",
      "Ultra-low-latency realtime conversational audio loop powered by FastRTC",
      "Multi-avatar persona system supporting distinct department voices and personalities",
      "Telemetry tracing every STT, tool call, LLM decision, and TTS step via Opik"
    ],
    "techStack": [
      {
        "category": "Realtime Audio",
        "name": "FastRTC"
      },
      {
        "category": "Telephony",
        "name": "Twilio WebRTC / SIP"
      },
      {
        "category": "Vector Search",
        "name": "Superlinked & Qdrant"
      }
    ],
    "metrics": [
      {
        "label": "Voice Latency",
        "value": "< 800ms Roundtrip"
      },
      {
        "label": "Telephony",
        "value": "Twilio SIP Trunk"
      },
      {
        "label": "Speech Model",
        "value": "Kokoro / Moonshine"
      },
      {
        "label": "Telemetry",
        "value": "Opik Full Trace"
      }
    ],
    "localPath": "customer-voice-agent"
  },
  {
    "id": "n8n-ai-agents-workflows",
    "number": "09",
    "title": "n8n AI Agents & Workflow Automation Collection",
    "tagline": "Production-ready n8n automation workflows powered by AI agents for enterprise operations",
    "badge": "Agentic Workflows",
    "description": "A curated collection of 17 enterprise-grade n8n automation workflows integrating LLM agents, automated triage, email notification generators, IT ticket processors, and daily reporting systems.",
    "architectureLayers": [
      {
        "name": "Layer 01: Event Triggers & Enterprise Sensors",
        "role": "Inbound Webhooks & Sensors",
        "color": "blue",
        "connectionLabel": "Normalized Event Stream",
        "nodes": [
          {
            "title": "Inbound Webhooks & APIs",
            "subtitle": "HTTP Event Triggers",
            "tag": "Webhooks",
            "color": "blue",
            "description": "Receives real-time events from GitHub, Jira, Stripe, and customer CRM systems."
          },
          {
            "title": "Cron Schedules & Timers",
            "subtitle": "Temporal Triggers",
            "tag": "Cron",
            "color": "blue",
            "description": "Runs scheduled hourly audits, daily standup digests, and server health checks."
          },
          {
            "title": "Gmail & Slack Event Listeners",
            "subtitle": "Communication Sensors",
            "tag": "Messaging",
            "color": "blue",
            "description": "Monitors unread email threads, ticket mentions, incident pings, and escalations."
          }
        ]
      },
      {
        "name": "Layer 02: n8n Workflow Orchestration Engine",
        "role": "Graph Execution & State Machine",
        "color": "amber",
        "connectionLabel": "Structured Prompt & Tool Payload",
        "nodes": [
          {
            "title": "17 Modular Production Workflows",
            "subtitle": "n8n Self-Hosted Engine",
            "tag": "17 Workflows",
            "color": "amber",
            "description": "Visual DAG orchestration graph with credential isolation and execution history."
          },
          {
            "title": "Conditional Flow Branches",
            "subtitle": "Error Routing & Fallbacks",
            "tag": "Error Handler",
            "color": "amber",
            "description": "Automated retry policies, circuit breakers, and dead-letter queue notifications."
          }
        ]
      },
      {
        "name": "Layer 03: AI Reasoning & Tool Calling Nodes",
        "role": "Autonomous Decision Engine",
        "color": "purple",
        "connectionLabel": "Validated Action Execution",
        "nodes": [
          {
            "title": "OpenAI GPT-4o / GPT-4o-mini",
            "subtitle": "Agent Reasoning Nodes",
            "tag": "GPT-4o",
            "color": "purple",
            "description": "Contextual decision-making, sentiment triage, and ticket auto-categorization."
          },
          {
            "title": "Strict JSON Schema Enforcer",
            "subtitle": "Output Validation Node",
            "tag": "Schema Check",
            "color": "purple",
            "description": "Guarantees 100% structured JSON compliance before passing outputs to downstream tools."
          },
          {
            "title": "Custom Tool Registry",
            "subtitle": "Function Calling Nodes",
            "tag": "Function Call",
            "color": "purple",
            "description": "Automated database lookup, Jira ticket creation, and server restart routines."
          }
        ]
      },
      {
        "name": "Layer 04: Enterprise Actions & Notification Delivery",
        "role": "Output Distribution & Alerts",
        "color": "emerald",
        "nodes": [
          {
            "title": "IT & Jira Ticket Routing",
            "subtitle": "Automated Triage",
            "tag": "Jira / Linear",
            "color": "emerald",
            "description": "Assigns priority severity, tags relevant on-call engineers, and links pull requests."
          },
          {
            "title": "Customer Draft Responder",
            "subtitle": "CRM Email Queue",
            "tag": "Email Draft",
            "color": "emerald",
            "description": "Drafts contextual AI customer replies placed in queue for 1-click human agent approval."
          },
          {
            "title": "Server Health Alert Dispatch",
            "subtitle": "Slack & Email Notifications",
            "tag": "Alerts",
            "color": "emerald",
            "description": "Dispatches instant warnings on HTTP 5xx error rate spikes or high RAM consumption."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: EVENT TRIGGERS & SENSORS                               │\n│            Webhooks  │  Cron Schedules  │  Gmail Inbound  │  Slack Events  │  GitHub Webhooks    │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Normalized Event Stream]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: n8n AI AGENT WORKFLOW ENGINE                           │\n│  - GPT-4o / GPT-4o-mini Autonomous Reasoning & Tool Nodes                                        │\n│  - Strict JSON Schema Output Validation                                                          │\n│  - Conditional Error Routing & Fallback Branches                                                 │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Structured Execution Commands]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: ENTERPRISE ACTIONS & OUTPUTS                           │\n│       Automated IT Ticket Routing  │  Customer Draft Responses  │  Server Health Alerts (Email)  │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Operations teams waste thousands of hours manually classifying support tickets, summarizing standups, triaging bugs, and generating release notes.",
    "solution": "Designed 17 modular n8n AI agent workflows with GPT-4o-mini tool calling, structured JSON output validation, fallback branches, and automated notification loops over Gmail.",
    "features": [
      "17 production workflows covering IT, DevOps, Customer Support, HR, and Sales",
      "Daily Server & API Health Monitor sending automated email alerts",
      "Customer Support Auto-Responder generating contextual AI draft responses",
      "Bug Report Triage & Auto-Severity Classifier categorizing incoming issues"
    ],
    "techStack": [
      {
        "category": "Engine",
        "name": "n8n Workflow Automation"
      },
      {
        "category": "LLM Provider",
        "name": "OpenAI (GPT-4o / GPT-4o-mini)"
      },
      {
        "category": "Notifications",
        "name": "Gmail SMTP & Webhooks"
      }
    ],
    "metrics": [
      {
        "label": "Workflows Built",
        "value": "17 Workflows"
      },
      {
        "label": "Automation Savings",
        "value": "80+ hrs/mo"
      },
      {
        "label": "Engine",
        "value": "Self-Hosted n8n"
      },
      {
        "label": "LLM Integration",
        "value": "GPT-4o Agentic"
      }
    ],
    "localPath": "n8n-ai-agents-workflows"
  },
  {
    "id": "invoice-ocr-automation",
    "number": "10",
    "title": "Invoice Automation OCR",
    "tagline": "High-throughput document parsing with vLLM, Rust API gateway, and async GPU queues",
    "badge": "Sovereign GPU Pipeline",
    "description": "A multi-stage asynchronous invoice processing system engineered with vLLM vision model inference, a high-concurrency Rust API gateway, and async task queues for enterprise accounting teams.",
    "architectureLayers": [
      {
        "name": "Layer 01: High-Concurrency Ingestion Gateway",
        "role": "Non-Blocking Network Layer",
        "color": "cyan",
        "connectionLabel": "Asynchronous Task Enqueue",
        "nodes": [
          {
            "title": "Rust Axum API Gateway",
            "subtitle": "Tokio Async Runtimes",
            "tag": "10k req/s",
            "color": "cyan",
            "description": "Receives thousands of concurrent PDF and image uploads with sub-millisecond overhead."
          },
          {
            "title": "Upload Sanitizer & Validator",
            "subtitle": "Security Filter",
            "tag": "Security",
            "color": "cyan",
            "description": "Validates file mime types, checks structural integrity, and strips malicious payload scripts."
          }
        ]
      },
      {
        "name": "Layer 02: Redis Task Broker & GPU Scheduling",
        "role": "Queue Broker & Dynamic Scaler",
        "color": "indigo",
        "connectionLabel": "Dispatched Batches to GPU Nodes",
        "nodes": [
          {
            "title": "Redis Task Queue",
            "subtitle": "In-Memory Priority Broker",
            "tag": "Redis Queue",
            "color": "indigo",
            "description": "Buffers incoming document streams with priority tenant scheduling and deduplication."
          },
          {
            "title": "K8s GPU Node Autoscaler",
            "subtitle": "Elastic Compute Scaler",
            "tag": "K8s Scaler",
            "color": "indigo",
            "description": "Scales GPU worker instances from zero to handle large end-of-month billing surges."
          }
        ]
      },
      {
        "name": "Layer 03: Sovereign Vision AI Inference (vLLM)",
        "role": "Deep Learning Vision OCR",
        "color": "emerald",
        "connectionLabel": "Validated Accounting JSON",
        "nodes": [
          {
            "title": "vLLM Vision Engine",
            "subtitle": "Qwen2-VL & Donut Models",
            "tag": "vLLM Vision",
            "color": "emerald",
            "description": "High-throughput tensor-parallel vision model extracting complex multi-table layouts."
          },
          {
            "title": "Line-Item Table Extractor",
            "subtitle": "Structured Line Items",
            "tag": "Line Items",
            "color": "emerald",
            "description": "Extracts descriptions, quantities, unit prices, tax amounts, and line item totals."
          },
          {
            "title": "Math Reconciliation Engine",
            "subtitle": "Arithmetic Validator",
            "tag": "Math Check",
            "color": "emerald",
            "description": "Cross-verifies subtotals, VAT rates, and grand totals to ensure exact financial reconciliation."
          }
        ]
      },
      {
        "name": "Layer 04: ERP Integration & Audit Storage",
        "role": "Enterprise Financial Export",
        "color": "purple",
        "nodes": [
          {
            "title": "ERP Accounting Connectors",
            "subtitle": "SAP, NetSuite, QuickBooks",
            "tag": "ERP Bridge",
            "color": "purple",
            "description": "Direct API push into general ledger accounts with automated AP approval routing."
          },
          {
            "title": "PostgreSQL Audit Archive",
            "subtitle": "Tamper-Proof DB",
            "tag": "Postgres",
            "color": "purple",
            "description": "Immutable historical storage archiving original invoice hashes and parsed JSON models."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: HIGH-THROUGHPUT INGESTION                              │\n│                        Rust API Gateway (Axum & Tokio) ──► Redis Job Queue                       │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Async Job Dispatch]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: KUBERNETES GPU WORKER POOL                             │\n│  - vLLM Vision Inference Workers (Serving Qwen2-VL & Donut Models)                               │\n│  - Scale-to-Zero GPU Node Autoscaling                                                            │\n│  - Line-Item Table Extraction & Subtotal/Tax/VAT Math Validation                                 │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Reconciled JSON Models]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: POSTGRESQL & ERP INTEGRATION LAYER                     │\n│                  Structured JSON Invoices ──► SAP / NetSuite Accounting Feeds                    │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "Enterprise AP departments process millions of complex multi-page invoices with varying layouts, hitting severe throughput bottlenecks on legacy software.",
    "solution": "Built a hybrid system combining a high-performance Rust (Axum) gateway, Redis async job queues, and self-hosted vLLM vision model worker nodes on Kubernetes GPU pools.",
    "features": [
      "Rust-based gateway capable of receiving thousands of concurrent document uploads",
      "vLLM vision model inference serving Qwen2-VL and Donut models on GPU instances",
      "Automatic line-item extraction, subtotal/total reconciliation, and tax/VAT calculation"
    ],
    "techStack": [
      {
        "category": "API Gateway",
        "name": "Rust (Axum & Tokio)"
      },
      {
        "category": "Inference Engine",
        "name": "vLLM Vision Engine"
      },
      {
        "category": "Queue",
        "name": "Redis & Celery"
      }
    ],
    "metrics": [
      {
        "label": "Gateway Throughput",
        "value": "10k req/sec"
      },
      {
        "label": "Line-Item Acc",
        "value": "98.7% Precision"
      },
      {
        "label": "Vision Engine",
        "value": "vLLM Tensor"
      },
      {
        "label": "Gateway Tech",
        "value": "Rust Axum"
      }
    ],
    "localPath": "invoice-ocr-automation"
  },
  {
    "id": "pagebolt-mcp",
    "number": "11",
    "title": "PageBolt MCP Server for AI Coding Assistants",
    "tagline": "Model Context Protocol (MCP) server giving AI agents web capture, screenshots, and page inspection",
    "badge": "Developer AI Tooling",
    "description": "An open-source Model Context Protocol (MCP) server connecting AI coding assistants (Cursor, Windsurf, Claude Desktop, Cline) to PageBolt capture APIs for screenshotting, PDF generation, and page inspection.",
    "architectureLayers": [
      {
        "name": "Layer 01: AI Coding Assistants & MCP Clients",
        "role": "Client IDE Integration",
        "color": "blue",
        "connectionLabel": "JSON-RPC 2.0 over Stdio / SSE Transport",
        "nodes": [
          {
            "title": "Cursor IDE",
            "subtitle": "AI Composer & Chat",
            "tag": "Cursor",
            "color": "blue",
            "description": "Direct screenshot and inspection calls from Cursor Composer during frontend builds."
          },
          {
            "title": "Claude Desktop & Windsurf",
            "subtitle": "AI Desktop Environment",
            "tag": "Claude / Windsurf",
            "color": "blue",
            "description": "Invokes browser inspection tools natively to visually verify rendered web pages."
          },
          {
            "title": "Cline & OpenClaw Agents",
            "subtitle": "Autonomous Coding Agents",
            "tag": "Autonomous",
            "color": "blue",
            "description": "Autonomous agents testing web responsiveness and checking DOM element accessibility."
          }
        ]
      },
      {
        "name": "Layer 02: PageBolt MCP Server (TypeScript / Node.js)",
        "role": "MCP Server Protocol Dispatcher",
        "color": "indigo",
        "connectionLabel": "Local Chrome DevTools Protocol (CDP)",
        "nodes": [
          {
            "title": "MCP Protocol Handler",
            "subtitle": "JSON-RPC 2.0 Engine",
            "tag": "MCP Standard",
            "color": "indigo",
            "description": "Implements official Model Context Protocol specifications with typed tool definitions."
          },
          {
            "title": "9 Specialized MCP Tools",
            "subtitle": "Tool Suite",
            "tag": "9 Tools",
            "color": "indigo",
            "description": "Tools for take_screenshot, generate_pdf, observe_page, record_video, and inspect_dom."
          },
          {
            "title": "Token-Budgeted DOM Compressor",
            "subtitle": "Context Optimizer",
            "tag": "Compressor",
            "color": "indigo",
            "description": "Prunes redundant HTML tags to fit complete DOM trees within agent token budgets."
          }
        ]
      },
      {
        "name": "Layer 03: Headless Chrome Fleet & Viewports",
        "role": "Browser Automation Runtime",
        "color": "purple",
        "connectionLabel": "Rendered Artifacts & Base64 Payloads",
        "nodes": [
          {
            "title": "Puppeteer Chrome Engine",
            "subtitle": "Headless Browser Cluster",
            "tag": "Chromium",
            "color": "purple",
            "description": "Pool of headless Chromium browser instances optimized with GPU acceleration flags."
          },
          {
            "title": "25+ Device Presets",
            "subtitle": "Responsive Emulation Matrix",
            "tag": "25+ Devices",
            "color": "purple",
            "description": "Emulates iPhone 15 Pro, iPad Air, MacBook Retina, Galaxy S24 viewports accurately."
          },
          {
            "title": "Render Stability Monitor",
            "subtitle": "Network Idle & Font Waiter",
            "tag": "Stability",
            "color": "purple",
            "description": "Ensures web fonts, CSS animations, and lazy-loaded assets are fully settled before capture."
          }
        ]
      },
      {
        "name": "Layer 04: Output Delivery & Artifact Generation",
        "role": "Artifact Delivery to LLM",
        "color": "emerald",
        "nodes": [
          {
            "title": "High-DPI PNG Screenshots",
            "subtitle": "Base64 & File Output",
            "tag": "Screenshots",
            "color": "emerald",
            "description": "Delivers full-page or selector-level visual snapshots directly into the AI context window."
          },
          {
            "title": "Vector PDF Print Exports",
            "subtitle": "A4 / Letter Print Files",
            "tag": "PDF Engine",
            "color": "emerald",
            "description": "Generates pixel-perfect PDF documents from web pages for documentation archives."
          },
          {
            "title": "Interactive DOM Selector Map",
            "subtitle": "Accessibility Tree",
            "tag": "DOM Tree",
            "color": "emerald",
            "description": "Compact accessibility tree providing exact click coordinates for browser agent actions."
          }
        ]
      }
    ],
    "architectureDiagram": "\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 01: AI CODING CLIENTS & AGENTS                             │\n│              Cursor IDE  │  Windsurf IDE  │  Claude Desktop  │  Cline Autonomous Agent           │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [JSON-RPC 2.0 / MCP Protocol]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 02: PAGEBOLT MCP SERVER (TYPESCRIPT)                       │\n│  9 Specialized MCP Tools:                                                                        │\n│  - take_screenshot: Full-page & element captures with device emulation                           │\n│  - generate_pdf: Headless print-to-pdf generation                                                │\n│  - observe_page: Token-budgeted DOM inspection for browser agents                                 │\n│  - record_video: Browser interaction capture                                                     │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │ [Chrome DevTools Protocol CDP]\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 03: PUPPETEER CAPTURE ENGINE                               │\n│                  Headless Chrome Cluster (25+ Viewports: iPhone, iPad, MacBook)                  │\n└────────────────────────────────────────────────┬─────────────────────────────────────────────────┘\n                                                 │\n                                                 ▼\n┌──────────────────────────────────────────────────────────────────────────────────────────────────┐\n│                                 LAYER 04: DELIVERED VISUAL ARTIFACTS                             │\n│            High-DPI PNG Screenshots  │  Vector PDF Documents  │  Accessibility DOM Trees         │\n└──────────────────────────────────────────────────────────────────────────────────────────────────┘\n",
    "problemStatement": "AI coding agents operate \"blind\" when developing web applications, unable to see the visual rendered UI or inspect interactive DOM element selectors.",
    "solution": "Created PageBolt MCP Server, an npm-distributable package exposing 9 typed tools allowing AI assistants to capture live UI screenshots and observe DOM state under token budgets.",
    "features": [
      "9 specialized MCP tools: take_screenshot, generate_pdf, create_og_image, inspect_page, observe_page, record_video",
      "Token-budgeted page observation specifically optimized for AI browser agents",
      "Device preset support covering 25+ viewports (iPhone, iPad, MacBook, Galaxy)"
    ],
    "techStack": [
      {
        "category": "Protocol",
        "name": "Model Context Protocol (MCP)"
      },
      {
        "category": "Runtime",
        "name": "TypeScript & Node.js"
      },
      {
        "category": "Compatible Clients",
        "name": "Cursor, Claude Desktop, Windsurf, Cline"
      }
    ],
    "metrics": [
      {
        "label": "MCP Tools",
        "value": "9 Typed Tools"
      },
      {
        "label": "Device Presets",
        "value": "25+ Viewports"
      },
      {
        "label": "Protocol",
        "value": "MCP Native"
      },
      {
        "label": "Engine",
        "value": "Puppeteer Cluster"
      }
    ],
    "githubUrl": "https://github.com/machhakiran/pagebolt-mcp",
    "localPath": "pagebolt-mcp"
  }
];
