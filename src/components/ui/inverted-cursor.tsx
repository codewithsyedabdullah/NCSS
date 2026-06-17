"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface CursorProps {
  size?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

let particleId = 0;

export const Cursor: React.FC<CursorProps> = ({ size = 60 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -size, y: -size });
  const targetPos = useRef({ x: -size, y: -size });
  const currentSize = useRef(size);
  const targetSize = useRef(size);
  const particlesRef = useRef<Particle[]>([]);
  const cursorPos = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [, forceRender] = useState(0);

  const spawnParticles = useCallback((x: number, y: number) => {
    const count = 16;
    const colors = ["#ef4444", "#dc2626", "#f87171", "#b91c1c", "#ffffff"];
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 150 + Math.random() * 250;
      newParticles.push({
        id: particleId++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 4,
        life: 0,
        maxLife: 500 + Math.random() * 300,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    particlesRef.current = [...particlesRef.current, ...newParticles];
    forceRender((n) => n + 1);
  }, []);

  const animate = useCallback(() => {
    if (!cursorRef.current) return;

    const currentX = previousPos.current.x;
    const currentY = previousPos.current.y;
    const targetX = targetPos.current.x - currentSize.current / 2;
    const targetY = targetPos.current.y - currentSize.current / 2;

    const deltaX = (targetX - currentX) * 0.2;
    const deltaY = (targetY - currentY) * 0.2;

    previousPos.current = { x: currentX + deltaX, y: currentY + deltaY };

    const sizeDelta = (targetSize.current - currentSize.current) * 0.15;
    currentSize.current += sizeDelta;

    cursorRef.current.style.width = `${currentSize.current}px`;
    cursorRef.current.style.height = `${currentSize.current}px`;
    cursorRef.current.style.transform = `translate(${previousPos.current.x}px, ${previousPos.current.y}px)`;

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    let particleRaf: number;

    const updateParticles = () => {
      const dt = 16;
      const list = particlesRef.current;
      if (list.length > 0) {
        let changed = false;
        const alive: Particle[] = [];

        for (const p of list) {
          p.life += dt;
          if (p.life >= p.maxLife) {
            changed = true;
            continue;
          }
          p.x += p.vx * (dt / 1000);
          p.y += p.vy * (dt / 1000);
          p.vx *= 0.96;
          p.vy *= 0.96;
          alive.push(p);
          changed = true;
        }

        if (changed) {
          particlesRef.current = alive;
          forceRender((n) => n + 1);
        }
      }

      particleRaf = requestAnimationFrame(updateParticles);
    };

    particleRaf = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(particleRaf);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      cursorPos.current = { x: e.clientX, y: e.clientY };
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => {
      setVisible(false);
      particlesRef.current = [];
      forceRender((n) => n + 1);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches("button, a, input, select, textarea, [role=\"button\"]")) {
        targetSize.current = size * 1.5;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches("button, a, input, select, textarea, [role=\"button\"]")) {
        targetSize.current = size;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches("button, a, input, select, textarea, [role=\"button\"]")) {
        targetSize.current = size * 0.6;
        spawnParticles(cursorPos.current.x, cursorPos.current.y);
      }
    };

    const handleMouseUp = () => {
      targetSize.current = size;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    document.body.style.cursor = "none";

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = "auto";
    };
  }, [animate, size, spawnParticles]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none rounded-full bg-white mix-blend-difference z-50 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
        }}
        aria-hidden="true"
      />
      {particlesRef.current.map((p) => {
        const progress = p.life / p.maxLife;
        return (
          <div
            key={p.id}
            className="fixed pointer-events-none rounded-full z-50"
            style={{
              left: p.x - p.size / 2,
              top: p.y - p.size / 2,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: 1 - progress,
              transform: `scale(${1 - progress * 0.5})`,
            }}
          />
        );
      })}
    </>
  );
};

export default Cursor;
