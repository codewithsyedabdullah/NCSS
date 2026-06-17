"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface CursorProps {
  size?: number;
}

export const Cursor: React.FC<CursorProps> = ({ size = 60 }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -size, y: -size });
  const targetPos = useRef({ x: -size, y: -size });
  const currentSize = useRef(size);
  const targetSize = useRef(size);

  const [visible, setVisible] = useState(false);

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
    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

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

    const handleMouseDown = () => {
      targetSize.current = size * 0.6;
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
  }, [animate, size]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none rounded-full bg-white mix-blend-difference z-50 transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
};

export default Cursor;
