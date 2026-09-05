import { NextResponse } from 'next/server';
import { setAuthCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    // Allow sign in even with empty fields or any username/password
    await setAuthCookie();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to sign in' }, { status: 500 });
  }
}
