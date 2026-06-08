export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32 bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-3 py-1.5 mb-5">
              <span className="font-mono text-[clamp(8px,0.55vw,9px)] text-[#666] uppercase tracking-[0.2em]">
                About
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal">
              NUST Computer
              <br />
              <span className="text-accent">Science Society</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-inter text-[clamp(0.85rem,1vw,1rem)] text-[#999] leading-relaxed font-normal">
              We are the official computer science society at NUST — a student-driven collective
              dedicated to advancing technical excellence across campus.
            </p>
            <p className="font-inter text-[clamp(0.85rem,1vw,1rem)] text-[#999] leading-relaxed font-normal">
              From coding bootcamps and AI workshops to design sprints and hackathons, we create
              opportunities for students to learn, build, and grow together.
            </p>
            <div className="pt-2">
              <a
                href="#departments"
                className="font-mono text-[clamp(10px,0.65vw,12px)] text-accent hover:text-accent/80 transition-colors uppercase tracking-[0.12em] font-medium"
              >
                Explore our departments →
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {[
            { number: "06+", label: "Years Active" },
            { number: "100+", label: "Active Members" },
            { number: "04", label: "Core Departments" },
            { number: "30+", label: "Events Held" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/5 bg-white/[0.02] p-5 sm:p-6 text-center"
            >
              <p className="font-anton text-white text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight font-normal">
                {stat.number}
              </p>
              <p className="text-[#666] text-[clamp(8px,0.55vw,10px)] tracking-[0.12em] uppercase font-inter mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
