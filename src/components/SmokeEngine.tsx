import React, { useEffect, useRef } from 'react';

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  s0: number;
  smax: number;
  rot: number;
  rv: number;
  a0: number;
  seed: number;
  ember?: boolean;
  wisp?: boolean;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  seed: number;
}

export const SmokeEngine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let animId: number | null = null;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * d;
      cv.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Sprite generators
    const makeSprite = (rgb: string, a0: number) => {
      const s = 160;
      const c = document.createElement('canvas');
      c.width = c.height = s;
      const g = c.getContext('2d');
      if (!g) return c;
      const r = s / 2;
      const gr = g.createRadialGradient(r, r, 0, r, r, r);
      gr.addColorStop(0, `rgba(${rgb},${a0})`);
      gr.addColorStop(0.32, `rgba(${rgb},${a0 * 0.5})`);
      gr.addColorStop(0.62, `rgba(${rgb},${a0 * 0.16})`);
      gr.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = gr;
      g.fillRect(0, 0, s, s);
      return c;
    };

    const SPR = makeSprite('216,211,202', 0.55);
    const EMB = makeSprite('255,120,45', 0.6);

    const jets: SmokeParticle[] = [];
    const mains: SmokeParticle[] = [];
    const ambs: SmokeParticle[] = [];
    const sparks: SparkParticle[] = [];

    const MAXJET = () => (W < 720 ? 30 : 65);
    const MAXMAIN = () => (W < 720 ? 30 : 65);
    const MAXAMB = () => (W < 720 ? 15 : 30);

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const mkPuff = (arr: SmokeParticle[], cap: number, x: number, y: number, o: Partial<SmokeParticle> = {}) => {
      if (arr.length >= cap) return;
      arr.push({
        x,
        y,
        vx: o.vx ?? rand(-10, 10),
        vy: o.vy ?? rand(-30, -16),
        age: 0,
        life: o.life ?? rand(5, 9),
        s0: o.s0 ?? rand(16, 28),
        smax: o.smax ?? rand(180, 280),
        rot: rand(0, 6.283),
        rv: rand(-0.15, 0.15),
        a0: o.a0 ?? rand(0.06, 0.11),
        seed: Math.random() * 100,
        ember: o.ember ?? false,
        wisp: !!o.wisp,
      });
    };

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let jetT = 0;
    let mainT = 0;
    let ambT = 0;
    let sparkT = 0;
    let last = performance.now();
    let tGlobal = 0;

    const stepArr = (arr: SmokeParticle[], dt: number, time: number) => {
      const R = 120;
      const R2 = R * R;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.age += dt;
        const t = p.age / p.life;
        if (t >= 1) {
          arr.splice(i, 1);
          continue;
        }
        const wob = Math.sin(time * 0.6 + p.seed) * (p.wisp ? 8 : 18);
        p.x += (p.vx + wob) * dt;
        p.y += p.vy * dt * (1 - t * 0.45);

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 1) {
          const d = Math.sqrt(d2);
          const f = (1 - d / R) * 200 * dt;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
        p.rot += p.rv * dt;
      }
    };

    const drawArr = (arr: SmokeParticle[]) => {
      for (let k = 0; k < arr.length; k++) {
        const p = arr[k];
        const t = p.age / p.life;
        const size = p.s0 + (p.smax - p.s0) * (1 - (1 - t) * (1 - t));
        const a = p.a0 * Math.min(1, t / 0.1) * (1 - Math.max(0, (t - 0.45) / 0.55));
        if (a <= 0.003) continue;

        ctx.save();
        ctx.globalAlpha = a;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(p.ember ? EMB : SPR, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
    };

    const loop = (now: number) => {
      animId = requestAnimationFrame(loop);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      tGlobal += dt;

      ctx.clearRect(0, 0, W, H);

      // Character cigarette source location in hero viewport (around 62% width, 42% height on hero)
      const sx = W * 0.62;
      const sy = H * 0.42;

      // Spawn subtle ambient smoke
      ambT -= dt;
      if (ambT <= 0) {
        ambT = rand(0.35, 0.6);
        mkPuff(ambs, MAXAMB(), rand(W * 0.05, W * 0.35), H + 20, { vy: rand(-20, -10), a0: rand(0.02, 0.045), smax: rand(240, 360), life: rand(7, 10) });
        mkPuff(ambs, MAXAMB(), rand(W * 0.65, W * 0.95), H + 20, { vy: rand(-22, -12), a0: rand(0.02, 0.045), smax: rand(240, 360), life: rand(7, 10) });
      }

      // Cigarette smoke plume only active in upper section
      if (window.scrollY < H * 1.5) {
        jetT -= dt;
        if (jetT <= 0) {
          jetT = rand(0.03, 0.06);
          mkPuff(jets, MAXJET(), sx + rand(-3, 3), sy + rand(-3, 3), {
            vy: rand(-55, -35),
            vx: rand(-6, 6),
            s0: rand(8, 14),
            smax: rand(70, 130),
            life: rand(2.2, 3.2),
            a0: rand(0.06, 0.11),
            ember: Math.random() < 0.08,
          });
        }

        mainT -= dt;
        if (mainT <= 0) {
          mainT = rand(0.08, 0.14);
          mkPuff(mains, MAXMAIN(), sx + rand(-4, 4), sy + rand(-3, 3), {
            vy: rand(-40, -20),
            a0: rand(0.05, 0.09),
            smax: rand(170, 260),
            life: rand(5, 8),
            ember: Math.random() < 0.05,
          });
        }

        sparkT -= dt;
        if (sparkT <= 0) {
          sparkT = rand(0.3, 0.8);
          if (sparks.length < 12) {
            sparks.push({
              x: sx + rand(-3, 3),
              y: sy + rand(-2, 2),
              vx: rand(-12, 12),
              vy: rand(-80, -40),
              age: 0,
              life: rand(0.7, 1.4),
              seed: Math.random() * 10,
            });
          }
        }
      }

      stepArr(ambs, dt, tGlobal);
      stepArr(mains, dt, tGlobal);
      stepArr(jets, dt, tGlobal);

      drawArr(ambs);
      drawArr(mains);
      drawArr(jets);

      // Pulsating cigarette cherry ember glow in hero section
      if (window.scrollY < H * 1.5) {
        const fl = Math.max(0, Math.min(1.6, 0.55 + 0.2 * Math.sin(tGlobal * 9.3) + 0.1 * Math.sin(tGlobal * 23.7)));
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = Math.min(fl, 1);
        ctx.fillStyle = '#ffc27a';
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, 6.283);
        ctx.fill();

        let gs = 32 + 9 * Math.sin(tGlobal * 5.1);
        ctx.globalAlpha = fl * 0.5;
        ctx.drawImage(EMB, sx - gs / 2, sy - gs / 2, gs, gs);
        ctx.globalAlpha = fl * 0.14;
        gs *= 3.2;
        ctx.drawImage(EMB, sx - gs / 2, sy - gs / 2, gs, gs);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }

      // Draw sparks
      ctx.globalCompositeOperation = 'lighter';
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.age += dt;
        if (s.age >= s.life) {
          sparks.splice(i, 1);
          continue;
        }
        s.x += (s.vx + Math.sin(tGlobal * 6 + s.seed) * 10) * dt;
        s.y += s.vy * dt;
        const k = 1 - s.age / s.life;
        ctx.globalAlpha = k;
        ctx.fillStyle = '#ff7a3d';
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.6, 0, 6.283);
        ctx.fill();
        ctx.globalAlpha = k * 0.35;
        ctx.drawImage(EMB, s.x - 7, s.y - 7, 14, 14);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    // Burst sparks on click
    const onSparkBurst = (e: Event) => {
      const ce = e as CustomEvent<{ x: number; y: number }>;
      if (ce.detail) {
        const { x, y } = ce.detail;
        for (let i = 0; i < 10; i++) {
          if (sparks.length < 30) {
            sparks.push({
              x: x + rand(-8, 8),
              y: y + rand(-6, 6),
              vx: rand(-60, 60),
              vy: rand(-70, -15),
              age: 0,
              life: rand(0.6, 1.2),
              seed: Math.random() * 10,
            });
          }
        }
      }
    };
    window.addEventListener('dxl-spark-burst', onSparkBurst);

    animId = requestAnimationFrame(loop);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('dxl-spark-burst', onSparkBurst);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[42]"
    />
  );
};

export default SmokeEngine;
