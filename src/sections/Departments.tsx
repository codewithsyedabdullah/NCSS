const depts = [
  { title: "DEVELOPMENT", tag: "Build", desc: "Web, mobile, and software engineering. Ship real products used by real people.", score: "Web & Mobile" },
  { title: "AI / DATA SCIENCE", tag: "Innovate", desc: "Machine learning, deep learning, data pipelines. Explore the frontiers of intelligence.", score: "ML & Research" },
  { title: "DESIGN", tag: "Create", desc: "UI/UX design, graphic design, branding. Make technology beautiful.", score: "UI/UX & Graphics" },
  { title: "MARKETING / MEDIA", tag: "Amplify", desc: "Social media, content creation, event coverage. Tell the NCSS story.", score: "Media & Outreach" },
];

export default function Departments() {
  return (
    <section className="bg-bg py-20 lg:py-32">
      <div className="max-w-[1831px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[48px] lg:text-[60px] leading-[1]">
            OUR<br />
            <span className="ml-12 lg:ml-32">
              <span className="font-condiment text-neon text-[40px] sm:text-[56px] lg:text-[68px]">Four </span>
              <span className="font-grotesk">TEAMS</span>
            </span>
          </h2>
          <div className="cursor-pointer group">
            <div className="flex items-baseline gap-3">
              <span className="font-grotesk text-[32px] lg:text-[60px] text-cream uppercase">JOIN</span>
              <div>
                <div className="font-grotesk text-[20px] lg:text-[36px] text-cream uppercase leading-none">US</div>
                <div className="font-grotesk text-[20px] lg:text-[36px] text-cream uppercase leading-none">NOW</div>
              </div>
            </div>
            <div className="h-[6px] lg:h-[10px] w-full bg-neon mt-2 group-hover:opacity-80 transition-opacity" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {depts.map((d, i) => (
            <div key={i} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors cursor-pointer">
              <div className="relative pb-[100%] rounded-[24px] overflow-hidden mb-4 bg-white/5">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-condiment text-neon text-[48px] lg:text-[64px] opacity-60">{d.tag}</span>
                  <span className="font-grotesk text-cream text-[13px] uppercase opacity-40 mt-2">{d.score}</span>
                </div>
              </div>
              <div className="liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-grotesk text-[11px] text-cream/70 uppercase tracking-wider">DEPT:</div>
                  <div className="font-grotesk text-[16px] text-cream uppercase">{d.title}</div>
                </div>
                <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #b724ff, #7c3aed)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <p className="font-mono text-[12px] text-cream/60 uppercase mt-3 px-1 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
