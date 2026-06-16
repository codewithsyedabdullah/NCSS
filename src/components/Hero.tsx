import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0b0e]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-8%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[110px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-40 sm:py-48 lg:py-56">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 bg-accent/10 px-4 py-2 mb-8 border border-accent/20">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[clamp(11px,0.7vw,13px)] text-accent uppercase tracking-[0.2em]">
                NUST Computer Science Society
              </span>
            </div>
          </div>

          <div className="animate-fade-up-d1">
            <h1 className="font-anton text-white uppercase leading-[0.92] tracking-tight font-normal">
              <span className="block text-[clamp(2.8rem,9vw,7rem)]">Build.</span>
              <span className="block text-[clamp(2.8rem,9vw,7rem)]">Innovate.</span>
              <span className="block text-[clamp(2.8rem,9vw,7rem)] text-accent">Lead.</span>
            </h1>
          </div>

          <div className="animate-fade-up-d2 mt-10 sm:mt-12">
            <p className="text-[#999] text-[clamp(1rem,1.3vw,1.2rem)] font-inter leading-relaxed max-w-2xl font-normal">
              A community of developers, data scientists, designers, and marketers.
              <br />
              <span className="text-[#e5e5e5] font-semibold">Where ideas become impact.</span>
            </p>
          </div>

          <div className="animate-fade-up-d3 mt-12 sm:mt-14 flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="#departments"
              className="btn-filled-2 inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-4.5 text-[clamp(12px,0.8vw,14px)] tracking-[0.12em] uppercase font-inter font-bold glow-accent"
            >
              Explore Departments
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="btn-filled inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-4.5 text-[clamp(12px,0.8vw,14px)] tracking-[0.12em] uppercase font-inter font-bold"
            >
              Learn More
            </a>
          </div>

          <div className="animate-fade-up-d4 mt-14 sm:mt-16 lg:mt-20 flex flex-wrap gap-12 sm:gap-16 lg:gap-24">
            {[
              { value: "100+", label: "Members" },
              { value: "4", label: "Departments" },
              { value: "20+", label: "Projects" },
              { value: "2024", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-anton text-white text-[clamp(2rem,4vw,3.2rem)] tracking-tight font-normal">
                  {stat.value}
                </p>
                <p className="text-[#666] text-[clamp(11px,0.7vw,13px)] tracking-[0.12em] uppercase font-inter mt-1.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
