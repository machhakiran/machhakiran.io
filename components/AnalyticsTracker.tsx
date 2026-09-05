'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Prevent duplicate firing on same path
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    // Do not track admin portals
    if (pathname.startsWith('/blog/create') || pathname.startsWith('/blog/login') || pathname.startsWith('/api')) {
      return;
    }

    const payload = {
      path: pathname,
      referrer: typeof document !== 'undefined' ? document.referrer || 'direct' : 'direct',
    };

    try {
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/track', JSON.stringify(payload));
      } else {
        fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Fail silently for tracker
    }
  }, [pathname]);

  return null;
}
