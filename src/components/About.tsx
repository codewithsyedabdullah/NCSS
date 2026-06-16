export default function About() {
  return (
    <section id="about" className="relative py-32 sm:py-36 lg:py-48 bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2 mb-6">
              <span className="font-mono text-[clamp(11px,0.65vw,12px)] text-[#666] uppercase tracking-[0.2em]">
                About
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal">
              NUST Computer
              <br />
              <span className="text-accent">Science Society</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="font-inter text-[clamp(1rem,1.1vw,1.15rem)] text-[#999] leading-relaxed font-normal">
              We are the official computer science society at NUST — a student-driven collective
              dedicated to advancing technical excellence across campus.
            </p>
            <p className="font-inter text-[clamp(1rem,1.1vw,1.15rem)] text-[#999] leading-relaxed font-normal">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-24 sm:mt-28">
          {[
            { number: "06+", label: "Years Active" },
            { number: "100+", label: "Active Members" },
            { number: "04", label: "Core Departments" },
            { number: "30+", label: "Events Held" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/5 bg-white/[0.02] p-6 sm:p-8 text-center"
            >
              <p className="font-anton text-white text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight font-normal">
                {stat.number}
              </p>
                <p className="text-[#666] text-[clamp(11px,0.65vw,12px)] tracking-[0.12em] uppercase font-inter mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
