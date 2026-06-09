import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Dev-Life Balance",
    desc: "Beat semester burnout, step away from the screen, and recharge with fun campus activities.",
    tag: "Wellness",
    color: "#ff4500",
  },
  {
    title: "Dedicated Team",
    desc: "Join a family-like team, work together towards success and enjoy a friendly work environment.",
    tag: "Community",
    color: "#fcd34d",
  },
  {
    title: "Senior Guidance",
    desc: "Never get trapped on a bug alone. Debug faster with senior guidance, shared repositories, and collaborative code reviews.",
    tag: "Mentorship",
    color: "#67e8f9",
  },
  {
    title: "Skill Acceleration",
    desc: "Boost your skills, stay up-to-date with the latest trends and get promoted!",
    tag: "Growth",
    color: "#39ff14",
  },
];

export default function WhyNCSS() {
  return (
    <section id="why" className="relative py-28 sm:py-32 lg:py-40 bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-3 py-1.5 mb-5">
              <span className="font-mono text-[clamp(8px,0.55vw,9px)] text-[#666] uppercase tracking-[0.2em]">
                Why NCSS
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2rem,5vw,4rem)] font-normal">
              Why Choose Us
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 btn-filled-2 px-6 py-3 text-[clamp(9px,0.6vw,11px)] tracking-[0.12em] uppercase font-inter font-bold glow-accent"
          >
            Join Now
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group border border-white/5 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block font-mono text-[clamp(8px,0.55vw,9px)] uppercase tracking-[0.12em] px-2.5 py-1 font-medium"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {card.tag}
                </span>
              </div>
              <h3 className="font-anton text-white text-[clamp(1.2rem,2vw,1.8rem)] uppercase tracking-tight mb-3 group-hover:text-accent transition-colors font-normal">
                {card.title}
              </h3>
              <p className="font-inter text-[clamp(0.8rem,0.85vw,0.9rem)] text-[#999] leading-relaxed font-normal">
                {card.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="font-mono text-[clamp(9px,0.6vw,11px)] text-accent hover:text-accent/80 transition-colors uppercase tracking-[0.12em] font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
