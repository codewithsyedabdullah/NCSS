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
    <section id="why" className="relative py-24 sm:py-28 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-1.5 mb-5">
              <span className="font-mono-code text-[9px] text-[#666] uppercase tracking-[3px]">
                Why NCSS
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.95] text-[clamp(2.2rem,5vw,4rem)] tracking-tight">
              Why Choose Us
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-white px-6 py-3 text-[10px] tracking-widest uppercase font-inter font-bold transition-all"
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
                  className="inline-block font-mono-code text-[9px] uppercase tracking-[2px] px-2.5 py-1"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {card.tag}
                </span>
              </div>
              <h3 className="font-anton text-white text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight mb-3 group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="font-inter text-[13px] sm:text-sm text-[#999] leading-relaxed">
                {card.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[10px] text-accent tracking-widest uppercase font-inter font-bold hover:underline underline-offset-4"
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
