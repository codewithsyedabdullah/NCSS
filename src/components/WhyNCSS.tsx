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
    <section id="why" className="relative py-32 sm:py-36 lg:py-48 bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2 mb-6">
              <span className="font-mono text-[clamp(11px,0.65vw,12px)] text-[#666] uppercase tracking-[0.2em]">
                Why NCSS
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2rem,5vw,4rem)] font-normal">
              Why Choose Us
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 btn-filled-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[clamp(9px,0.6vw,11px)] tracking-[0.12em] uppercase font-inter font-bold glow-accent"
          >
            Join Now
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group border border-white/5 bg-white/[0.02] p-8 sm:p-10 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-block font-mono text-[clamp(11px,0.65vw,12px)] uppercase tracking-[0.12em] px-3 py-1.5 font-medium"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {card.tag}
                </span>
              </div>
              <h3 className="font-anton text-white text-[clamp(1.4rem,2.2vw,2rem)] uppercase tracking-tight mb-4 group-hover:text-accent transition-colors font-normal">
                {card.title}
              </h3>
              <p className="font-inter text-[clamp(0.9rem,0.95vw,1rem)] text-[#999] leading-relaxed font-normal">
                {card.desc}
              </p>
              <div className="mt-6 pt-5 border-t border-white/5">
                <a
                  href="#contact"
                  className="font-mono text-[clamp(11px,0.65vw,12px)] text-accent hover:text-accent/80 transition-colors uppercase tracking-[0.12em] font-medium"
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
