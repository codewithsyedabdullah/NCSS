import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import GridSection from "./components/GridSection";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Reel />
        <GridSection />
        <Footer />
      </main>
    </>
  );
}
