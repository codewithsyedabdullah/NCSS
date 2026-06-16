import { useEffect, type RefObject } from "react";

export default function useParticleCanvas(
  canvasRef: RefObject<HTMLCanvasElement | null>,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const COUNT = 40;
    let mouseX = 0;
    let mouseY = 0;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    }

    function init() {
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1,
          a: Math.random() * 0.3 + 0.05,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx -= dx / 5000;
          p.vy -= dy / 5000;
        }
        p.vx = Math.max(-0.5, Math.min(0.5, p.vx));
        p.vy = Math.max(-0.5, Math.min(0.5, p.vy));

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 214, 0, ${p.a})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    function onMouse(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    resize();
    init();
    draw();
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", () => { resize(); });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [canvasRef]);
}
