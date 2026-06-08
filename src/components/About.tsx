export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.25em]">
                [02]
              </span>
              <span className="w-8 sm:w-12 h-px bg-white/10" />
              <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.2em]">
                About
              </span>
            </div>
            <h2 className="font-display text-white uppercase leading-[0.85] tracking-tighter text-[clamp(2rem,5vw,3.5rem)]">
              NUST Computer
              <br />
              <span className="text-white/60">Science Society</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="font-body text-[clamp(0.85rem,1vw,1rem)] text-white/50 leading-relaxed font-light">
              We are the official computer science society at NUST — a student-driven collective
              dedicated to advancing technical excellence across campus.
            </p>
            <p className="font-body text-[clamp(0.85rem,1vw,1rem)] text-white/50 leading-relaxed font-light">
              From coding bootcamps and AI workshops to design sprints and hackathons, we create
              opportunities for students to learn, build, and grow together.
            </p>
            <div className="pt-2">
              <a
                href="#departments"
                className="font-mono text-[clamp(10px,0.7vw,12px)] text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                Explore_Departments →
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 mt-16 sm:mt-20">
          {[
            { number: "06+", label: "Years Active" },
            { number: "100+", label: "Active Members" },
            { number: "04", label: "Core Departments" },
            { number: "30+", label: "Events Held" },
          ].map((stat) => (
            <div key={stat.label} className="bg-black p-6 sm:p-8 text-center">
              <p className="font-display text-white text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight">
                {stat.number}
              </p>
              <p className="font-body text-[clamp(10px,0.65vw,11px)] text-white/30 uppercase tracking-[0.2em] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
