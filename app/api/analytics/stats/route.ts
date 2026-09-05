import { NextResponse } from 'next/server';
import { getAnalyticsData } from '@/lib/analytics';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getAnalyticsData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to generate analytics stats' },
      { status: 500 }
    );
  }
}
