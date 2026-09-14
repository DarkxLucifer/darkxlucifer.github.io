import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        const progress = Math.min(1, Math.max(0, winScroll / height));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = 16;
  const center = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <aside
      aria-label="Scroll Progress Telemetry"
      className="fixed left-4 sm:left-8 bottom-8 z-40 hidden md:flex items-center gap-3 pointer-events-none select-none"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Circular Progress Ring */}
        <svg className="w-10 h-10" viewBox="0 0 40 40">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1.5"
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#00D6FF"
            strokeWidth="1.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-75"
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>

        {/* Center Percentage Display */}
        <span className="absolute font-mono text-[9px] text-white/70 font-semibold">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
        SYS.SCROLL
      </div>
    </aside>
  );
};

export default ScrollProgress;
