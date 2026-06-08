import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Departments from "./components/Departments";
import WhyNCSS from "./components/WhyNCSS";
import CTA from "./components/CTA";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Departments />
        <WhyNCSS />
        <CTA />
      </main>
    </>
  );
}
