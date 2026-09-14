import React, { useEffect } from 'react';

export const ClickToCopyOrange: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Always trigger ember spark burst at click location
      window.dispatchEvent(
        new CustomEvent('dxl-spark-burst', {
          detail: { x: e.clientX, y: e.clientY },
        })
      );

      // Do not highlight canvas or whole page wrapper
      if (target.tagName === 'CANVAS' || target.tagName === 'BODY' || target.id === 'root') {
        return;
      }

      // Find the closest text or interactive element
      const textContainer = target.closest(
        'h1, h2, h3, h4, p, span, dt, dd, b, em, strong, code, .tag, .pnode, .bitem, .chan-name, .chan-handle, .loop-node, .kicker, .hero-role, .hero-path, .hero-hint, .stats, a, button, li'
      ) as HTMLElement | null;

      const el = textContainer || target;

      // Apply radiant orange flash & halo glow (NO clipboard copy, NO toast)
      el.classList.add('text-orange-flash', 'animate-orange-pulse');
      setTimeout(() => {
        el.classList.remove('text-orange-flash', 'animate-orange-pulse');
      }, 1400);
    };

    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Pure visual interaction — no toast or popups
  return null;
};

export default ClickToCopyOrange;
