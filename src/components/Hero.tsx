import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import useParticleCanvas from "../hooks/useParticleCanvas";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useParticleCanvas(canvasRef);

  return (
    <section className="bx-hero-section">
      <div className="bx-hero-mask" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />
      <div className="bx-hero">
        <div className="bx-hero-inner" style={{ zIndex: 3, position: "relative" }}>
          <div className="bx-hero-subtitle">
            NUST Computer Science Society
          </div>
          <h1 className="bx-hero-headline">
            <span>Build.</span>
            <span>Innovate.</span>
            <span>Lead.</span>
          </h1>
          <div style={{ marginTop: "2rem", position: "relative", zIndex: 5 }}>
            <a href="#departments" className="btn-bx btn-bx-theme--black">
              <span>Explore</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
