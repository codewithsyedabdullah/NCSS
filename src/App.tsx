import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Departments from "./components/Departments";
import WhyNCSS from "./components/WhyNCSS";
import CTA from "./components/CTA";
import use3DStage from "./hooks/use3DStage";

export default function App() {
  const stageRef = useRef<HTMLCanvasElement | null>(null);
  use3DStage(stageRef);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const html = document.documentElement;
    html.classList.add("lenis", "lenis-smooth");

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      html.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return (
    <>
      <div id="Stage">
        <canvas ref={stageRef} />
      </div>
      <Navbar />
      <div className="page">
        <main>
          <Hero />
          <About />
          <Departments />
          <WhyNCSS />
          <CTA />
        </main>
      </div>
    </>
  );
}
