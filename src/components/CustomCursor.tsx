import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let animId: number;
    let targetX = -100;
    let targetY = -100;
    let currentRingX = -100;
    let currentRingY = -100;

    const onMove = (e: MouseEvent) => {
      setIsVisible(true);
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest('a, button, [role="button"], input, textarea, select, .cap-row, .chan, .band');
      setIsHovered(isInteractive);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      currentRingX = lerp(currentRingX, targetX, 0.18);
      currentRingY = lerp(currentRingY, targetY, 0.18);
      setRingPos({ x: currentRingX, y: currentRingY });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* 5px Ember Dot */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 w-[5px] h-[5px] bg-ember rounded-full pointer-events-none z-[100] transition-opacity duration-200"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing Responsive Ring */}
      <div
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99] transition-[width,height,border-color] duration-200 ${
          isHovered
            ? 'w-[54px] h-[54px] border border-ember/75 bg-ember/5'
            : 'w-[34px] h-[34px] border border-ink/35'
        }`}
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
