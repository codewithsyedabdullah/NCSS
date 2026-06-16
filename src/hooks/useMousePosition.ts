import { useEffect, useRef } from "react";

export interface MouseState {
  x: number;
  y: number;
  nx: number;
  ny: number;
}

export function useMousePosition() {
  const state = useRef<MouseState>({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
      state.current.nx = (e.clientX / window.innerWidth) * 2 - 1;
      state.current.ny = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return state;
}
