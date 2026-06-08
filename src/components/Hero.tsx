import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-8%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[110px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-36 lg:py-40">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono-code text-[9px] text-accent uppercase tracking-[3px]">
                NUST Computer Science Society
              </span>
            </div>
          </div>

          <div className="animate-fade-up-d1">
            <h1 className="font-anton text-white uppercase leading-[0.92] tracking-tight">
              <span className="block text-[clamp(3rem,10vw,8rem)]">Build.</span>
              <span className="block text-[clamp(3rem,10vw,8rem)]">Innovate.</span>
              <span className="block text-[clamp(3rem,10vw,8rem)] text-accent">Lead.</span>
            </h1>
          </div>

          <div className="animate-fade-up-d2 mt-6 sm:mt-8">
            <p className="text-[#999] text-sm sm:text-base font-inter leading-relaxed max-w-xl">
              A community of developers, data scientists, designers, and marketers.
              <br />
              <span className="text-[#e5e5e5] font-medium">Where ideas become impact.</span>
            </p>
          </div>

          <div className="animate-fade-up-d3 mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#departments"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-inter font-bold transition-all"
            >
              Explore Departments
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-inter font-medium transition-all"
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
                <p className="font-inter text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[#666] text-[9px] sm:text-xs tracking-widest uppercase font-inter mt-1">
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
