'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0.32) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * offset;
      let active = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= line) {
          active = section.id;
        }
      }

      setActiveId(active);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
