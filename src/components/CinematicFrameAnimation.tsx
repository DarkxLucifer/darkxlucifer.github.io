import React, { useEffect, useRef, useCallback } from 'react';

export interface CinematicFrameAnimationProps {
  scrollProgress: number; // 0.0 to 1.0
  className?: string;
}

const FRAME_COUNT = 48;
const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
const frameUrls: string[] = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `${baseUrl}/frames/ezgif-frame-${num}.jpg`;
});

export const CinematicFrameAnimation: React.FC<CinematicFrameAnimationProps> = ({
  scrollProgress = 0,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesCacheRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnIndexRef = useRef<number>(-1);
  const isLoadedRef = useRef<boolean>(false);

  // Direct GPU blit function — razor sharp, zero blur, zero re-render lag
  const drawFrame = useCallback((img: HTMLImageElement | undefined) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // High quality crisp filtering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(img, 0, 0, 1920, 1080);
  }, []);

  // Pre-load and pre-decode all 48 frames into GPU memory
  useEffect(() => {
    let loadedCount = 0;
    const cache: HTMLImageElement[] = [];
    imagesCacheRef.current = cache;

    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;

      const onReady = () => {
        cache[i] = img;
        loadedCount++;

        // As soon as Frame 0 is ready, draw it with maximum sharpness
        if (i === 0 && canvasRef.current && lastDrawnIndexRef.current === -1) {
          drawFrame(img);
          lastDrawnIndexRef.current = 0;
        }

        if (loadedCount === FRAME_COUNT) {
          isLoadedRef.current = true;
        }
      };

      img.onload = onReady;
      if ('decode' in img) {
        img.decode().then(onReady).catch(() => {});
      }
    });
  }, [drawFrame]);

  // Scrub frames smoothly based on scrollProgress
  // 0.0 to 0.70: scrub through frames 0 to 47 completely.
  // 0.70 to 1.00: HOLD frame 47 with complete visual stability (delay before next section).
  useEffect(() => {
    const clamped = Math.max(0, Math.min(1, scrollProgress));
    const animProgress = Math.min(1, clamped / 0.70);
    const target = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(animProgress * (FRAME_COUNT - 1))));

    if (target !== lastDrawnIndexRef.current) {
      lastDrawnIndexRef.current = target;

      const img = imagesCacheRef.current[target];
      if (img) {
        drawFrame(img);
      }
    }
  }, [scrollProgress, drawFrame]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      {/* 
        Instant Fallback Underlay: Frame 01 renders on first HTML paint.
        Zero black screen while textures initialize.
      */}
      <img
        src={`${baseUrl}/frames/ezgif-frame-001.jpg`}
        alt="DarkxLucifer Cinema Initial Frame"
        className="absolute inset-0 w-full h-full object-cover object-[45%_center] select-none pointer-events-none -z-10"
        loading="eager"
        decoding="sync"
      />

      {/* 
        Hardware-Accelerated 1920x1080 Canvas:
        GPU direct blit from pre-decoded memory cache.
        ZERO DOM src swapping, ZERO transition blur, ZERO mipmap lag!
      */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-[45%_center] select-none pointer-events-none"
        style={{
          imageRendering: '-webkit-optimize-contrast',
        }}
      />

      {/* Gentle soft ambient border vignette — NO heavy dark masks */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 70%, rgba(5,5,7,0.4) 100%)',
        }}
      />
    </div>
  );
};

export default CinematicFrameAnimation;
