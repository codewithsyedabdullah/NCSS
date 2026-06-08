import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Dev-Life Balance",
    desc: "Beat semester burnout, step away from the screen, and recharge with fun campus activities.",
    tag: "Wellness",
  },
  {
    title: "Dedicated Team",
    desc: "Join a family-like team, work together towards success and enjoy a friendly work environment.",
    tag: "Community",
  },
  {
    title: "Senior Guidance",
    desc: "Never get trapped on a bug alone. Debug faster with senior guidance, shared repositories, and collaborative code reviews.",
    tag: "Mentorship",
  },
  {
    title: "Skill Acceleration",
    desc: "Boost your skills, stay up-to-date with the latest trends and get promoted!",
    tag: "Growth",
  },
];

export default function WhyNCSS() {
  return (
    <section id="why" className="relative py-24 sm:py-28 lg:py-32 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.25em]">
            [04]
          </span>
          <span className="w-8 sm:w-12 h-px bg-white/10" />
          <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.2em]">
            Why NCSS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="font-display text-white uppercase leading-[0.85] tracking-tighter text-[clamp(2rem,5vw,3.5rem)]">
            Why Choose Us
          </h2>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-[clamp(9px,0.65vw,11px)] tracking-[0.2em] uppercase font-body font-medium transition-all"
          >
            Join Now
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-black p-6 sm:p-8 lg:p-10 group hover:bg-white/[0.02] transition-all"
            >
              <span className="inline-block font-mono text-[clamp(8px,0.55vw,10px)] text-white/30 uppercase tracking-[0.2em] border border-white/10 px-3 py-1 mb-5">
                {card.tag}
              </span>
              <h3 className="font-display text-white text-[clamp(1.3rem,2.2vw,1.8rem)] uppercase tracking-tight mb-3 group-hover:text-white/70 transition-colors">
                {card.title}
              </h3>
              <p className="font-body text-[clamp(0.8rem,0.85vw,0.9rem)] text-white/40 leading-relaxed font-light mb-5">
                {card.desc}
              </p>
              <div className="pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="font-mono text-[clamp(9px,0.6vw,11px)] text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]"
                >
                  Learn_More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
