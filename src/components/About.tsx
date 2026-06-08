const ABOUT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";

const departments = [
  { name: "Development", desc: "Web, mobile & software engineering" },
  { name: "AI / Data Science", desc: "ML, DL, analytics & research" },
  { name: "Design", desc: "UI/UX & graphics design" },
  { name: "Marketing / Media", desc: "Content, branding & outreach" },
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
      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
          <div className="relative">
            <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream leading-[1.1]">
              About
              <br />
              NCSS
            </h2>
            <span className="absolute -bottom-4 right-0 lg:right-auto lg:left-full lg:ml-2 lg:-bottom-2 font-condiment text-neon text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] -rotate-1 opacity-90 normal-case whitespace-nowrap mix-blend-exclusion">
              Community
            </span>
          </div>
          <p className="font-mono text-[14px] sm:text-[16px] uppercase text-cream/80 max-w-[266px] leading-relaxed tracking-wide">
            A community of innovators, builders & creators. Exploring technology, design, and the future of computing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 lg:mt-20">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
            >
              <h3 className="font-grotesk text-[18px] sm:text-[20px] uppercase text-cream mb-2">
                {dept.name}
              </h3>
              <p className="font-mono text-[12px] uppercase text-cream/60">{dept.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-between mt-12 lg:mt-20 gap-8">
          <div className="flex flex-col gap-6 flex-1">
            <p className="font-mono text-[14px] uppercase text-cream/80 max-w-[266px] leading-relaxed">
              Build. deploy. innovate. collaborate. explore. create. lead.
            </p>
            <p className="font-mono text-[14px] uppercase text-cream/80 max-w-[266px] leading-relaxed">
              Code. design. analyze. market. ship. repeat. grow.
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-6 flex-1">
            <p className="font-mono text-[14px] uppercase text-cream/80 max-w-[266px] leading-relaxed">
              Build. deploy. innovate. collaborate. explore. create. lead.
            </p>
            <p className="font-mono text-[14px] uppercase text-cream/80 max-w-[266px] leading-relaxed">
              Code. design. analyze. market. ship. repeat. grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
