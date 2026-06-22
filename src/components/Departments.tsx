import { ArrowUpRight } from "lucide-react";
import { LiquidButton } from "./ui/liquid-glass-button";
import { GlassOverlay } from "./ui/glass-surface";

const departments = [
  {
    name: "Development",
    desc: "Web, mobile, and software engineering. Building the digital future, one commit at a time.",
    accent: "#ff4500",
    members: "30+",
  },
  {
    name: "AI / Data Science",
    desc: "Machine learning, deep learning, analytics, and research. Turning data into intelligence.",
    accent: "#39ff14",
    members: "25+",
  },
  {
    name: "Design",
    desc: "UI/UX, graphics, and visual storytelling. Crafting beautiful, intuitive experiences.",
    accent: "#67e8f9",
    members: "20+",
  },
  {
    name: "Marketing / Media",
    desc: "Content, branding, and outreach. Telling our story to the world, one campaign at a time.",
    accent: "#f472b6",
    members: "15+",
  },
];

export default function Departments() {
  return (
    <section id="departments" className="relative py-32 sm:py-36 lg:py-48 bg-[#0a0b0e]">
      <GlassOverlay />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2 mb-6">
              <span className="font-mono text-[clamp(11px,0.65vw,12px)] text-[#666] uppercase tracking-[0.2em]">
                Departments
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2rem,5vw,4rem)] font-normal">
              Our Divisions
            </h2>
          </div>
          <LiquidButton asChild size="default" className="!text-[clamp(11px,0.7vw,13px)] tracking-[0.12em] uppercase font-inter font-bold hidden sm:inline-flex">
            <a href="#contact" className="inline-flex items-center gap-2">
              Join a Department
              <ArrowUpRight size={12} />
            </a>
          </LiquidButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group relative border border-white/5 bg-white/[0.02] p-8 sm:p-10 hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backdropFilter: 'url("#container-glass")' }} />
              <div className="relative z-10">
              <div
                className="w-12 h-12 flex items-center justify-center text-sm font-bold font-inter mb-6"
                style={{ backgroundColor: `${dept.accent}15`, color: dept.accent }}
              >
                {dept.name.charAt(0)}
              </div>
              <h3 className="font-anton text-white text-[clamp(1.3rem,1.8vw,1.6rem)] uppercase tracking-tight mb-4 group-hover:text-accent transition-colors font-normal">
                {dept.name}
              </h3>
              <p className="font-inter text-[clamp(0.9rem,0.95vw,1rem)] text-[#999] leading-relaxed mb-6 font-normal">
                {dept.desc}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-white/5">
                <span className="font-mono text-[clamp(11px,0.65vw,12px)] text-[#666] uppercase tracking-[0.08em]">
                  {dept.members} members
                </span>
                <ArrowUpRight size={13} className="text-[#666] group-hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <LiquidButton asChild size="default" className="!text-[clamp(11px,0.7vw,13px)] tracking-[0.12em] uppercase font-inter font-bold">
            <a href="#contact" className="inline-flex items-center gap-2">
              Join a Department
              <ArrowUpRight size={12} />
            </a>
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
