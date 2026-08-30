import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';
import { getAllPosts, savePost } from '@/lib/posts';

// Fallback API Key for agentic MCP submissions if not set in environment
const AGENT_API_KEY = process.env.BLOG_API_KEY || 'kavi-agent-mcp-key-2026';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json({
      success: true,
      count: posts.length,
      posts: posts.map((p) => ({
        title: p.title,
        slug: p.slug,
        date: p.date,
        tags: p.tags,
        excerpt: p.excerpt,
        readingTime: p.readingTime,
        url: `https://machhakiran.pro/blog/${p.slug}`,
      })),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization') || '';
    const apiKeyHeader = request.headers.get('x-api-key') || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    let isAuthorized = false;

    // 1. Check API key for AI agents / MCP calls
    if (token === AGENT_API_KEY || apiKeyHeader === AGENT_API_KEY) {
      isAuthorized = true;
    }

    // 2. Check session cookie for browser UI
    if (!isAuthorized) {
      isAuthorized = await verifyAuth();
    }

    const body = await request.json().catch(() => ({}));
    const { title, content, tags, slug: customSlug, excerpt, apiKey } = body;

    // 3. Allow apiKey in JSON payload as well
    if (!isAuthorized && apiKey && apiKey === AGENT_API_KEY) {
      isAuthorized = true;
    }

    if (!isAuthorized) {
      return NextResponse.json(
        {
          error: 'Unauthorized. Provide valid session cookie or Authorization header: Bearer <API_KEY>',
          mcpInstructions: 'Set Authorization: Bearer kavi-agent-mcp-key-2026 or header x-api-key: kavi-agent-mcp-key-2026',
        },
        { status: 401 }
      );
    }

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Both title and content (Markdown string) are required.' },
        { status: 400 }
      );
    }

    const post = savePost(title, content, tags, customSlug, excerpt);

    return NextResponse.json({
      success: true,
      message: 'Post successfully published!',
      post: {
        title: post.title,
        slug: post.slug,
        date: post.date,
        tags: post.tags,
        url: `https://machhakiran.pro/blog/${post.slug}`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error while publishing post' }, { status: 500 });
  }
}
