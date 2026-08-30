import { cookies } from 'next/headers';

const AUTH_COOKIE = 'auth_token';
const AUTH_SECRET = 'kaviai-auth-secret-2026';

function sign(val: string): string {
  // Simple HMAC-like signing for cookie verification
  let hash = 0;
  const combined = val + AUTH_SECRET;
  for (let i = 0; i < combined.length; i++) {
    const chr = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return `${val}.${Math.abs(hash).toString(36)}`;
}

function verify(signed: string): boolean {
  const [val, sig] = signed.split('.');
  if (!val || !sig) return false;
  return sign(val) === signed;
}

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, sign('kaviai'), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}

export async function verifyAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE);
  if (!token) return false;
  return verify(token.value);
}
