import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Public access enabled for blog creation and API routes
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
