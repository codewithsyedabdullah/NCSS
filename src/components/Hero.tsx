import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0b0e]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-8%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[110px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-36 lg:py-40">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1.5 mb-6 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[clamp(8px,0.6vw,10px)] text-accent uppercase tracking-[0.2em]">
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

          <div className="animate-fade-up-d2 mt-6 sm:mt-8">
            <p className="text-[#999] text-[clamp(0.85rem,1.1vw,1.05rem)] font-inter leading-relaxed max-w-xl font-normal">
              A community of developers, data scientists, designers, and marketers.
              <br />
              <span className="text-[#e5e5e5] font-semibold">Where ideas become impact.</span>
            </p>
          </div>

          <div className="animate-fade-up-d3 mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#departments"
              className="btn-filled-2 inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-[clamp(10px,0.7vw,12px)] tracking-[0.12em] uppercase font-inter font-bold glow-accent"
            >
              Explore Departments
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="btn-filled inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-[clamp(10px,0.7vw,12px)] tracking-[0.12em] uppercase font-inter font-bold"
            >
              Learn More
            </a>
          </div>

          <div className="animate-fade-up-d4 mt-10 sm:mt-12 lg:mt-14 flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
            {[
              { value: "100+", label: "Members" },
              { value: "4", label: "Departments" },
              { value: "20+", label: "Projects" },
              { value: "2024", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-anton text-white text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight font-normal">
                  {stat.value}
                </p>
                <p className="text-[#666] text-[clamp(8px,0.6vw,11px)] tracking-[0.12em] uppercase font-inter mt-1">
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
