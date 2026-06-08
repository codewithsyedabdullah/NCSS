import Hero from "./sections/Hero";
import About from "./sections/About";
import Departments from "./sections/Departments";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <main className="bg-bg text-cream overflow-x-hidden">
      <Hero />
      <About />
      <Departments />
      <CTA />
    </main>
  );
}
