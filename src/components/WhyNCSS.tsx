const cards = [
  {
    title: "Dev-Life Balance",
    desc: "Beat semester burnout, step away from the screen, and recharge with fun campus activities.",
    cmd: "./balance --activate",
    hash: "b7c4a8f2",
  },
  {
    title: "Dedicated Team",
    desc: "Join a family-like team, work together towards success and enjoy a friendly work environment.",
    cmd: "./team --join",
    hash: "e3d1f6a9",
  },
  {
    title: "Senior Guidance",
    desc: "Never get trapped on a bug alone. Debug faster with senior guidance, shared repositories, and collaborative code reviews.",
    cmd: "./guide --mentors",
    hash: "f2a8c4b7",
  },
  {
    title: "Skill Acceleration",
    desc: "Boost your skills, stay up-to-date with the latest trends and get promoted!",
    cmd: "./skills --boost",
    hash: "a9f6d1e3",
  },
];

export default function WhyNCSS() {
  return (
    <section
      id="departments"
      className="relative w-full py-[clamp(3rem,8vw,6rem)]"
      style={{ background: "#010828" }}
    >
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-[clamp(2rem,5vw,4rem)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-pink/30 mb-4 bg-pink/5">
              <span className="font-mono text-[clamp(8px,1vw,10px)] text-pink uppercase tracking-[2px]">
                Why NCSS — Core Values
              </span>
            </div>
            <h2 className="font-grotesk uppercase text-[clamp(2rem,6vw,3.75rem)] text-cream leading-[1.1]">
              Why Choose
              <br />
              <span className="ml-[clamp(1.5rem,5vw,4rem)]">
                <span className="font-condiment text-neon normal-case">NCSS</span>{" "}
                <span className="font-grotesk">Society</span>
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-3 mt-6 lg:mt-0 bg-orange text-bg font-bold font-inter text-[clamp(10px,0.9vw,12px)] uppercase tracking-[1px] border-2 border-orange glow-orange hover:brightness-110 transition-all"
          >
            SEE ALL DEPARTMENTS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[4px] border border-white/5 bg-white/[0.02] p-[clamp(1rem,2vw,1.5rem)] hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[clamp(10px,1.2vw,13px)] text-neon/70">$</span>
                <span className="font-mono text-[clamp(10px,1.2vw,13px)] text-cream/60">{card.cmd}</span>
              </div>

              <h3 className="font-grotesk text-[clamp(1.2rem,2.5vw,1.8rem)] uppercase text-cream mb-3 group-hover:text-orange transition-colors">
                {card.title}
              </h3>

              <p className="font-inter text-[clamp(0.75rem,1.1vw,0.9rem)] text-cream/70 leading-relaxed mb-5">
                {card.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="font-mono text-[clamp(8px,0.8vw,10px)] uppercase text-cream/30 tracking-[1px]">
                  0x{card.hash}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 text-neon font-mono text-[clamp(9px,0.9vw,11px)] uppercase tracking-[1px] border border-neon/30 glow-neon hover:bg-neon/20 transition-all"
                >
                  Join Now
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
