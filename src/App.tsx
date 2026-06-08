import TextureOverlay from "./components/TextureOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyNCSS from "./components/WhyNCSS";
import CTA from "./components/CTA";

export default function App() {
  return (
    <>
      <TextureOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyNCSS />
        <CTA />
      </main>
    </>
  );
}
