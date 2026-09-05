import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_COOKIE = 'auth_token';

export function proxy(request: NextRequest) {
  // Allow AI Agents and MCP clients passing Bearer auth or x-api-key to access API routes directly
  const authHeader = request.headers.get('authorization') || '';
  const apiKeyHeader = request.headers.get('x-api-key') || '';
  if (request.nextUrl.pathname.startsWith('/api/posts')) {
    if (authHeader.startsWith('Bearer ') || apiKeyHeader) {
      return NextResponse.next();
    }
  }

  const token = request.cookies.get(AUTH_COOKIE);

  if (!token?.value) {
    if (request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized. Provide Bearer API key.' }, { status: 401 });
    }
    const loginUrl = new URL('/blog/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/create', '/api/posts'],
};
