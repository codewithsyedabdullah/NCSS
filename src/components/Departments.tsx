import { ArrowUpRight } from "lucide-react";

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
    <section id="departments" className="relative py-28 sm:py-32 lg:py-40 bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-3 py-1.5 mb-5">
              <span className="font-mono text-[clamp(8px,0.55vw,9px)] text-[#666] uppercase tracking-[0.2em]">
                Departments
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2rem,5vw,4rem)] font-normal">
              Our Divisions
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 btn-filled-2 px-5 py-2.5 text-[clamp(9px,0.6vw,11px)] tracking-[0.12em] uppercase font-inter font-bold"
          >
            Join a Department
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group border border-white/5 bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.04] transition-all"
            >
              <div
                className="w-10 h-10 flex items-center justify-center text-xs font-bold font-inter mb-5"
                style={{ backgroundColor: `${dept.accent}15`, color: dept.accent }}
              >
                {dept.name.charAt(0)}
              </div>
              <h3 className="font-anton text-white text-[clamp(1.1rem,1.5vw,1.4rem)] uppercase tracking-tight mb-3 group-hover:text-accent transition-colors font-normal">
                {dept.name}
              </h3>
              <p className="font-inter text-[clamp(0.8rem,0.85vw,0.9rem)] text-[#999] leading-relaxed mb-5 font-normal">
                {dept.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="font-mono text-[clamp(8px,0.55vw,10px)] text-[#666] uppercase tracking-[0.08em]">
                  {dept.members} members
                </span>
                <ArrowUpRight size={13} className="text-[#666] group-hover:text-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <a
            href="#contact"
            className="btn-filled-2 inline-flex items-center gap-1.5 px-5 py-3 text-[10px] tracking-[0.12em] uppercase font-inter font-bold"
          >
            Join a Department
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
