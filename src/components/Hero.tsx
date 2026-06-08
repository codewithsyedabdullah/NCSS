import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none md:hidden" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-36 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.25em]">
                  [01]
                </span>
                <span className="w-8 sm:w-12 h-px bg-white/20" />
                <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.2em]">
                  established 2024
                </span>
              </div>
            </div>

            <div className="animate-fade-up-d1">
              <h1 className="font-display text-white uppercase leading-[0.85] tracking-tighter">
                <span className="block text-[clamp(2.5rem,7vw,5.5rem)]">NUST</span>
                <span className="block text-[clamp(2rem,5.5vw,4.5rem)] text-white/60">Computer</span>
                <span className="block text-[clamp(2rem,5.5vw,4.5rem)]">Science</span>
                <span className="block text-[clamp(2.5rem,7vw,5.5rem)] text-white/80">Society</span>
              </h1>
            </div>

            <div className="animate-fade-up-d2 mt-6 sm:mt-8">
              <p className="font-body text-[clamp(0.85rem,1.1vw,1.05rem)] text-white/50 leading-relaxed max-w-[450px] font-light">
                A community of developers, data scientists, designers, and marketers. Where ideas become impact.
              </p>
            </div>

            <div className="animate-fade-up-d3 mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#departments"
                className="group inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[clamp(10px,0.75vw,12px)] tracking-[0.2em] uppercase font-body font-medium transition-all"
              >
                Explore Departments
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                Learn_More →
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end animate-fade-up-d4">
            <div className="border-t border-white/10 pt-5 sm:pt-6 space-y-3 sm:space-y-4">
              {[
                { label: "Members", value: "100+" },
                { label: "Departments", value: "04" },
                { label: "Projects", value: "20+" },
                { label: "Events", value: "30+" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between border-b border-white/5 pb-3 sm:pb-4">
                  <span className="font-body text-[clamp(11px,0.8vw,13px)] text-white/30 uppercase tracking-[0.15em]">
                    {stat.label}
                  </span>
                  <span className="font-display text-[clamp(1rem,1.2vw,1.3rem)] text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
