import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { recordHit, getCountryDetails, VisitorHit } from '@/lib/analytics';

export async function POST(request: Request) {
  try {
    const headers = request.headers;

    // Extract Vercel Edge Geolocation headers
    const rawCountry = headers.get('x-vercel-ip-country') || 'XX';
    const city = headers.get('x-vercel-ip-city') ? decodeURIComponent(headers.get('x-vercel-ip-city')!) : 'Unknown City';
    const region = headers.get('x-vercel-ip-country-region') || '';
    const ip = headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
    const userAgent = headers.get('user-agent') || '';

    // Parse body for client-side context
    const body = await request.json().catch(() => ({}));
    const path = typeof body.path === 'string' && body.path ? body.path : '/';
    const referrer = typeof body.referrer === 'string' && body.referrer ? body.referrer : 'direct';

    // Filter out internal admin paths from public analytics
    if (path.startsWith('/blog/create') || path.startsWith('/blog/login') || path.startsWith('/api')) {
      return NextResponse.json({ ok: true, ignored: true });
    }

    // Determine device category from userAgent
    const ua = userAgent.toLowerCase();
    let device: 'Desktop' | 'Mobile' | 'Tablet' = 'Desktop';
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
      device = 'Tablet';
    } else if (/mobile|iphone|android|blackberry|opera mini|iemobile/i.test(ua)) {
      device = 'Mobile';
    }

    // Hash IP for privacy-preserving unique visitor tracking (no raw IPs stored)
    const ipHash = crypto
      .createHash('sha256')
      .update(ip + '-salt-2026')
      .digest('hex')
      .slice(0, 16);

    const countryInfo = getCountryDetails(rawCountry);

    const hit: VisitorHit = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      path,
      country: rawCountry,
      countryName: countryInfo.name,
      flag: countryInfo.flag,
      city,
      region,
      device,
      referrer,
      ipHash,
    };

    await recordHit(hit);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
