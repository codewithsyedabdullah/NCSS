const cards = [
  {
    title: "Dev-Life Balance",
    desc: "Beat semester burnout, step away from the screen, and recharge with fun campus activities.",
  },
  {
    title: "Dedicated Team",
    desc: "Join a family-like team, work together towards success and enjoy a friendly work environment.",
  },
  {
    title: "Senior Guidance",
    desc: "Never get trapped on a bug alone. Debug faster with senior guidance, shared repositories, and collaborative code reviews.",
  },
  {
    title: "Skill Acceleration",
    desc: "Boost your skills, stay up-to-date with the latest trends and get promoted!",
  },
];

export default function WhyNCSS() {
  return (
    <section
      id="departments"
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{ background: "#010828" }}
    >
      <div className="max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream leading-[1.1]">
              Why Choose
              <br />
              <span className="ml-12 sm:ml-24 lg:ml-32">
                <span className="font-condiment text-neon normal-case">NCSS</span>{" "}
                <span className="font-grotesk">Society</span>
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-neon/10 border border-neon/40 text-neon font-grotesk text-[13px] uppercase tracking-wide rounded-[1rem] hover:bg-neon/20 transition-all"
          >
            SEE ALL DEPARTMENTS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
            >
              <div className="rounded-[24px] overflow-hidden bg-[#010828]/60 p-6 sm:p-8 min-h-[180px] flex flex-col justify-end">
                <h3 className="font-grotesk text-[22px] sm:text-[26px] uppercase text-cream mb-3">
                  {card.title}
                </h3>
                <p className="font-mono text-[13px] sm:text-[14px] uppercase text-cream/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="liquid-glass rounded-[20px] px-5 py-4 mt-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase text-cream/70">NCSS VALUE</p>
                  <p className="font-mono text-[16px] uppercase text-cream mt-1">{card.title}</p>
                </div>
                <a
                  href="#contact"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform shrink-0"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
