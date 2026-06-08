import { Terminal } from "lucide-react";

const ABOUT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";

const departments = [
  {
    name: "Development",
    desc: "Web, mobile & software engineering — building the digital future.",
    icon: "</>",
  },
  {
    name: "AI / Data Science",
    desc: "ML, DL, analytics & research — turning data into intelligence.",
    icon: "±",
  },
  {
    name: "Design",
    desc: "UI/UX & graphics — crafting beautiful, intuitive experiences.",
    icon: "◆",
  },
  {
    name: "Marketing / Media",
    desc: "Content, branding & outreach — telling our story to the world.",
    icon: "◉",
  },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
      />
      <div className="absolute inset-0 bg-[#010828]/30" />
      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10 py-[clamp(3rem,8vw,6rem)] min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
          <div className="relative max-w-[clamp(280px,40vw,600px)]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-cyan/30 mb-4 bg-cyan/5">
              <Terminal size={12} className="text-cyan" />
              <span className="font-mono text-[clamp(8px,1vw,10px)] text-cyan uppercase tracking-[2px]">
                ncss --about
              </span>
            </div>
            <h2 className="font-grotesk uppercase text-[clamp(2rem,6vw,3.75rem)] text-cream leading-[1.1]">
              About
              <br />
              NCSS
            </h2>
            <span className="font-condiment text-neon text-[clamp(1.5rem,4vw,3rem)] -rotate-1 mix-blend-exclusion opacity-90 normal-case block -mt-2 ml-2">
              Community
            </span>
          </div>
          <p className="font-mono text-[clamp(0.75rem,1.2vw,1rem)] uppercase text-cream/90 max-w-[266px] leading-relaxed">
            A community of innovators, builders & creators. Exploring technology, design, and the future of computing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-[clamp(2rem,6vw,6rem)]">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="liquid-glass rounded-[4px] p-[clamp(0.75rem,2vw,1.125rem)] hover:bg-white/[0.03] transition-all group border border-white/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[clamp(1.2rem,2.5vw,1.8rem)] text-neon/80">{dept.icon}</span>
                <h3 className="font-grotesk text-[clamp(0.9rem,1.5vw,1.25rem)] uppercase text-cream group-hover:text-neon transition-colors">
                  {dept.name}
                </h3>
              </div>
              <p className="font-inter text-[clamp(0.65rem,0.9vw,0.8rem)] text-cream/60 leading-relaxed">
                {dept.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          {[
            { label: "Est.", value: "2024", color: "text-orange" },
            { label: "Members", value: "100+", color: "text-neon" },
            { label: "Departments", value: "4", color: "text-cyan" },
            { label: "Projects", value: "20+", color: "text-pink" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[4px] border border-white/5 bg-white/[0.02] p-[clamp(0.75rem,1.5vw,1.25rem)] text-center"
            >
              <div className={`font-mono text-[clamp(1.25rem,3vw,2rem)] font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-inter text-[clamp(0.55rem,0.8vw,0.7rem)] uppercase text-cream/50 tracking-[1px] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
