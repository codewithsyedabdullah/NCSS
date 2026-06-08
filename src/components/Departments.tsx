import { ArrowUpRight } from "lucide-react";

const departments = [
  {
    name: "Development",
    desc: "Web, mobile, and software engineering. Building the digital future, one commit at a time.",
    tags: ["TS/JS", "React", "Full-Stack", "Cloud"],
    members: "30+",
  },
  {
    name: "AI / Data Science",
    desc: "Machine learning, deep learning, analytics, and research. Turning data into intelligence.",
    tags: ["Python", "ML", "NLP", "Analytics"],
    members: "25+",
  },
  {
    name: "Design",
    desc: "UI/UX, graphics, and visual storytelling. Crafting beautiful, intuitive experiences.",
    tags: ["Figma", "UI/UX", "Brand", "Motion"],
    members: "20+",
  },
  {
    name: "Marketing / Media",
    desc: "Content, branding, and outreach. Telling our story to the world, one campaign at a time.",
    tags: ["Content", "Social", "Brand", "Media"],
    members: "15+",
  },
];

export default function Departments() {
  return (
    <section id="departments" className="relative py-24 sm:py-28 lg:py-32 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.25em]">
            [03]
          </span>
          <span className="w-8 sm:w-12 h-px bg-white/10" />
          <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.2em]">
            Departments
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="font-display text-white uppercase leading-[0.85] tracking-tighter text-[clamp(2rem,5vw,3.5rem)]">
            Our Divisions
          </h2>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white px-5 py-2.5 text-[clamp(9px,0.65vw,11px)] tracking-[0.2em] uppercase font-body font-medium transition-all"
          >
            Join a Department
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="bg-black p-6 sm:p-7 lg:p-8 flex flex-col group hover:bg-white/[0.02] transition-all"
            >
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <span className="font-mono text-[clamp(10px,0.65vw,11px)] text-white/20 uppercase tracking-[0.2em]">
                  {dept.members} members
                </span>
              </div>
              <h3 className="font-display text-white text-[clamp(1.2rem,2vw,1.5rem)] uppercase tracking-tight mb-3 group-hover:text-white/70 transition-colors">
                {dept.name}
              </h3>
              <p className="font-body text-[clamp(0.8rem,0.85vw,0.9rem)] text-white/40 leading-relaxed font-light mb-5 flex-1">
                {dept.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {dept.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-white/10 text-[clamp(8px,0.55vw,10px)] text-white/30 uppercase tracking-[0.1em] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[10px] tracking-[0.2em] uppercase font-body text-white/70"
          >
            Join a Department
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
