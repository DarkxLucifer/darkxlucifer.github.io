import React, { useRef, useState, useEffect } from 'react';
import { CinematicFrameAnimation } from './CinematicFrameAnimation';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = container.offsetHeight - windowHeight;

      if (totalScrollableDistance <= 0) return;

      // Calculate progress from 0.0 to 1.0
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade out hero overlays as we scroll deep into the animation sequence
  const heroFadeOpacity = Math.max(0, 1 - scrollProgress * 1.8);
  const nameParallaxY = scrollProgress * 120;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[600vh] select-none"
    >
      {/* 
        Sticky Viewport Stage:
        Pins perfectly for the full 600vh scroll scrub.
      */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Giant Outline Title (Layer 1) */}
        <div
          aria-hidden="true"
          className="absolute z-[2] top-[10%] left-0 right-0 text-center pointer-events-none transition-transform duration-75 will-change-transform"
          style={{ transform: `translateY(${nameParallaxY}px)` }}
        >
          <span className="hero-name-outline block">
            DARKXLUFICER
          </span>
        </div>

        {/* 
          Main Visual: Full HD 1080p AI-Upscaled 48-Frame Canvas (Layer 3)
          Rendered with screen blend & depth perspective
        */}
        <div className="absolute inset-0 z-[10] flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-[1920px] max-h-[1080px] flex items-center justify-center">
            <CinematicFrameAnimation scrollProgress={scrollProgress} />
          </div>
        </div>

        {/* Top-Right Figure HUD Plate (Layer 15) */}
        <div
          aria-hidden="true"
          className="hidden md:flex absolute z-[15] right-[8vw] top-[14vh] items-center gap-2.5 px-3 py-1.5 text-[9.5px] tracking-[0.22em] text-mut border border-line2 bg-[#0a0908]/60 backdrop-blur-md transition-opacity duration-300 pointer-events-none font-mono"
          style={{ opacity: heroFadeOpacity }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pdot" />
          <span>FIG.01 — DARKXLUFICER</span>
        </div>

        {/* Bottom-Left Hero Title & Identity (Layer 15) */}
        <div
          className="absolute z-[15] left-[clamp(20px,5vw,72px)] bottom-[9vh] max-w-[580px] pointer-events-none transition-opacity duration-300"
          style={{ opacity: heroFadeOpacity }}
        >
          <h1 className="font-disp font-bold text-[clamp(1.6rem,3.4vw,2.8rem)] leading-[1.1] text-ink tracking-tight">
            DARKXLUFICER<span className="text-ember animate-caret font-medium">_</span>
          </h1>

          <p className="mt-2.5 font-mono text-[11px] tracking-[0.34em] text-body uppercase">
            AI ENGINEER &amp; BUILDER
          </p>

          <p className="mt-2 font-mono text-[10.5px] tracking-[0.14em] text-mut">
            ML <span className="text-ember font-semibold">→</span> DL <span className="text-ember font-semibold">→</span> RL <span className="text-ember font-semibold">→</span> GENERATIVE <span className="text-ember font-semibold">→</span> AGENTIC
          </p>

          <p className="mt-4 font-mono text-[9px] tracking-[0.22em] text-[#858076] max-w-[440px]">
            <span className="text-ember">[</span> SCROLL TO SCRUB 48 AI-UPSCALED 1080P FRAMES · YASHRAJ GHADAGE <span className="text-ember">]</span>
          </p>
        </div>

        {/* Bottom-Right Live Telemetry Metadata (Layer 15) */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute z-[15] right-[clamp(20px,5vw,72px)] bottom-[9vh] flex-col gap-2 font-mono text-[10.5px] tracking-[0.16em] text-right pointer-events-none transition-opacity duration-300"
          style={{ opacity: heroFadeOpacity }}
        >
          <p className="flex gap-4 justify-end items-center">
            <span className="text-[#858076]">FOCUS</span>
            <span className="text-body font-normal">GENAI · RAG · AGENTS</span>
          </p>
          <p className="flex gap-4 justify-end items-center">
            <span className="text-[#858076]">STACK</span>
            <span className="text-body font-normal">PYTORCH · LANGCHAIN · FASTAPI</span>
          </p>
          <p className="flex gap-4 justify-end items-center">
            <span className="text-[#858076]">STATUS</span>
            <span className="text-body font-normal flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-ember mr-2 animate-pdot" />
              SMOKING / BUILDING
            </span>
          </p>
        </div>

        {/* Center Bottom Scroll Cue (Layer 15) */}
        <div
          aria-hidden="true"
          className="absolute z-[15] left-1/2 -translate-x-1/2 bottom-[26px] flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
          style={{ opacity: heroFadeOpacity }}
        >
          <span className="font-mono text-[9px] tracking-[0.42em] text-mut">SCROLL</span>
          <div className="w-[1px] h-[46px] bg-line relative overflow-hidden">
            <div className="absolute top-[-12px] left-0 w-[1px] h-[12px] bg-ember animate-scue" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
