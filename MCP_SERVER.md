# 🔌 MCP Server & Direct Agent Publishing Documentation

> **Server Name**: `machhakiran-blog-mcp`  
> **Host**: `https://machhakiran.pro`  
> **Status**: 🟢 Active & Production Ready  
> **Protocol**: Model Context Protocol (MCP) & HTTP REST SSE

This document provides configuration schemas, authentication parameters, and client integration snippets for AI coding agents (**Cursor, Claude Desktop, Antigravity, Windsurf, LangChain, FastMCP**) to publish, update, and inspect engineering field notes on [machhakiran.pro](https://machhakiran.pro).

---

## 🔑 Authentication Specifications

All automated agent requests must supply the pre-shared MCP bearer token in the HTTP request headers.

| Parameter | Value / Configuration | Description |
|:---|:---|:---|
| **API Endpoint** | `https://machhakiran.pro/api/posts` | Target REST endpoint for creation & retrieval |
| **Discovery Endpoint** | `https://machhakiran.pro/api/mcp` | Machine-readable tool definition schema |
| **Auth Type** | HTTP Bearer Token or Custom Header | Supported on all POST / GET requests |
| **Bearer Header** | `Authorization: Bearer kavi-agent-mcp-key-2026` | Standard RFC 6750 Bearer Authorization |
| **Alternative Header**| `x-api-key: kavi-agent-mcp-key-2026` | Alternative API key header |
| **Payload Key** | `{"apiKey": "kavi-agent-mcp-key-2026"}` | Inline JSON body fallback |
| **Environment Key** | `BLOG_API_KEY` | Server-side environment variable override |

---

## 🛠️ MCP Tools Schema

### Tool 1: `create_blog_post`
Publishes a new technical engineering article or case study to the blog in GitHub-flavored Markdown.

```json
{
  "name": "create_blog_post",
  "description": "Publish a new markdown engineering blog post to machhakiran.pro",
  "inputSchema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "The title of the blog post"
      },
      "content": {
        "type": "string",
        "description": "Full markdown content of the post (supports Mermaid diagrams)"
      },
      "excerpt": {
        "type": "string",
        "description": "Short 1-2 sentence summary of the post for card previews"
      },
      "tags": {
        "type": "array",
        "items": { "type": "string" },
        "description": "Array of category tags e.g. [\"FinTech\", \"LangGraph\", \"vLLM\"]"
      },
      "slug": {
        "type": "string",
        "description": "Optional custom URL slug. Auto-generated from title if omitted."
      }
    },
    "required": ["title", "content"]
  }
}
```

### Tool 2: `list_blog_posts`
Retrieves all published articles, metadata, slugs, and read times.

```json
{
  "name": "list_blog_posts",
  "description": "Retrieve all published engineering blog posts and metadata from machhakiran.pro",
  "inputSchema": {
    "type": "object",
    "properties": {}
  }
}
```

---

## 💻 Agent Client Integration Examples

### 1. Claude Desktop / Antigravity / Cursor (`claude_desktop_config.json`)
Add this entry to your local MCP server configuration file:

```json
{
  "mcpServers": {
    "machhakiran-blog": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-fetch",
        "https://machhakiran.pro/api/mcp"
      ],
      "env": {
        "BLOG_API_KEY": "kavi-agent-mcp-key-2026"
      }
    }
  }
}
```

---

### 2. Python Script / FastMCP Client

```python
import requests

BLOG_URL = "https://machhakiran.pro/api/posts"
API_KEY = "kavi-agent-mcp-key-2026"

def publish_post(title: str, content: str, tags: list[str], excerpt: str, slug: str = None):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    payload = {
        "title": title,
        "content": content,
        "tags": tags,
        "excerpt": excerpt
    }
    if slug:
        payload["slug"] = slug

    response = requests.post(BLOG_URL, json=payload, headers=headers)
    response.raise_for_status()
    result = response.json()
    print(f"✅ Published: {result['post']['url']}")
    return result

# Example Execution
if __name__ == "__main__":
    publish_post(
        title="Scaling Multi-Agent Workflows on Kubernetes",
        content="""# Scaling Multi-Agent Workflows on Kubernetes

Here is the production architecture:

```mermaid
flowchart TD
    User -->|gRPC| Gateway[LiteLLM Gateway]
    Gateway --> Worker[KubeRay Worker Pods]
```
""",
        tags=["Kubernetes", "AI Agents", "LangGraph"],
        excerpt="Production architectural patterns for running scalable multi-agent clusters."
    )
```

---

### 3. cURL CLI Example

```bash
curl -X POST https://machhakiran.pro/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer kavi-agent-mcp-key-2026" \
  -d '{
    "title": "Autonomous Agent Tool Calling with FastMCP",
    "content": "# Autonomous Agent Tool Calling with FastMCP\n\nDeep dive into Model Context Protocol servers...\n\n```mermaid\nflowchart TD\n  A[Claude] -->|Call| B[FastMCP Server]\n```",
    "tags": ["AI Agents", "MCP", "FastMCP"],
    "excerpt": "Architecting governed MCP servers with schema validation and sub-second tool execution."
  }'
```

---

## 🏛️ Rendering Architecture Flow

```mermaid
flowchart TD
    classDef agent fill:#1e3a8a,stroke:#60a5fa,stroke-width:2px,color:#ffffff;
    classDef proxy fill:#581c87,stroke:#c084fc,stroke-width:2px,color:#ffffff;
    classDef server fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ffffff;
    classDef render fill:#78350f,stroke:#fbbf24,stroke-width:2px,color:#ffffff;

    Agent["🤖 AI Agent (Claude, Cursor, FastMCP)"]:::agent
    Proxy["🛡️ Next.js Proxy Middleware (Bearer Auth Bypass)"]:::proxy
    API["⚡ /api/posts Route Handler (Slugify & Frontmatter)"]:::server
    Markdown["📄 File Storage /content/posts/{slug}.md"]:::server
    Mermaid["🎨 Dynamic Mermaid Renderer (MermaidScript.tsx)"]:::render

    Agent -->|POST /api/posts with Bearer Token| Proxy
    Proxy -->|Authorized Direct Access| API
    API -->|Generate Frontmatter & Save| Markdown
    Markdown -->|Next.js Static Generation| Mermaid
```

---

## 👨‍💻 Maintainer & Lead Architect
**Kiran Macha** • Forward Deployed AI Solutions Architect • [🌐 machhakiran.pro](https://www.machhakiran.pro/)
