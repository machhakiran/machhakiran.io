import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'machhakiran-blog-mcp',
    version: '1.0.0',
    description: 'Model Context Protocol (MCP) server for publishing and managing blog posts on machhakiran.pro',
    endpoint: 'https://machhakiran.pro/api/posts',
    auth: {
      type: 'bearer',
      header: 'Authorization: Bearer <API_KEY>',
      defaultKeyEnv: 'BLOG_API_KEY',
      fallbackKey: 'kavi-agent-mcp-key-2026',
    },
    tools: [
      {
        name: 'create_blog_post',
        description: 'Publish a new markdown engineering blog post to machhakiran.pro',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'The title of the blog post' },
            content: { type: 'string', description: 'Full markdown content of the post' },
            excerpt: { type: 'string', description: 'Short 1-2 sentence summary of the post' },
            tags: { type: 'array', items: { type: 'string' }, description: 'Array of category tags e.g. ["Sovereign AI", "RAG"]' },
            slug: { type: 'string', description: 'Optional custom URL slug (auto-generated from title if omitted)' },
          },
          required: ['title', 'content'],
        },
      },
      {
        name: 'list_blog_posts',
        description: 'Retrieve all published engineering blog posts and metadata from machhakiran.pro',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
    exampleCurl: `curl -X POST https://machhakiran.pro/api/posts \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer kavi-agent-mcp-key-2026" \\
  -d '{"title": "My Post Title", "content": "# Content here...", "tags": ["AI"]}'`,
  });
}
