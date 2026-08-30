import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_COOKIE = 'auth_token';

export function proxy(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE);

  if (!token?.value) {
    const loginUrl = new URL('/blog/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/create', '/api/posts'],
};
