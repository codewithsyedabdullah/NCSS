import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import useParticleCanvas from "../hooks/useParticleCanvas";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useParticleCanvas(canvasRef);

  return (
    <section className="bx-hero">
      <div className="bx-hero-mask" />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      <div className="bx-slideshow">
        <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" stroke="#101010" strokeWidth="1" opacity="0.08">
          <rect x="20" y="20" width="160" height="160" rx="12" />
          <rect x="40" y="40" width="120" height="120" rx="8" />
          <circle cx="100" cy="100" r="30" />
        </svg>
      </div>

      <div className="bx-hero-content" style={{ zIndex: 3, position: "relative" }}>
        <div className="bx-hero-subtitle">
          <span>NUST Computer Science Society</span>
        </div>
        <h1 className="bx-hero-headline" style={{ marginTop: "-0.25em" }}>
          <span style={{ display: "block" }}>The Gold</span>
          <span style={{ display: "block" }}>Standard</span>
          <span style={{ display: "block" }}>In Buttery</span>
          <span style={{ display: "block", marginLeft: "auto" }}>Smooth Digital</span>
          <span style={{ display: "block", marginLeft: "auto" }}>Production</span>
        </h1>

        <div style={{ marginTop: "2rem", color: "#101010", position: "relative", zIndex: 5 }}>
          <a href="#departments" className="btn-bx btn-bx-black">
            Explore
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
