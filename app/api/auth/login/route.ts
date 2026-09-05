import { NextResponse } from 'next/server';
import { setAuthCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const username = typeof body.username === 'string' ? body.username.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    // Smart validation for missing fields
    if (!username && !password) {
      return NextResponse.json(
        { error: 'Please enter both username and password to log in.' },
        { status: 400 }
      );
    }

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required. Please enter your username.' },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required. Please enter your password.' },
        { status: 400 }
      );
    }

    // Hardcoded credentials verification: kavi / kavikavi
    const VALID_USER = 'kavi';
    const VALID_PASS = 'kavikavi';

    if (username !== VALID_USER || password !== VALID_PASS) {
      return NextResponse.json(
        { error: 'Invalid username or password. Please verify your credentials and try again.' },
        { status: 401 }
      );
    }

    await setAuthCookie();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Server authentication error. Please try again.' },
      { status: 500 }
    );
  }
}
