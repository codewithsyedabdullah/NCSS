export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        autoPlay loop muted playsInline
      />
      <div className="absolute inset-0 bg-bg/40" />
      <div className="relative z-10 max-w-[1831px] mx-auto px-6 lg:px-16 py-16 lg:py-24 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">
          <div className="relative">
            <h2 className="font-grotesk uppercase text-cream text-[32px] sm:text-[48px] lg:text-[60px] leading-[1]">
              HELLO!<br />I AM NCSS
            </h2>
            <span
              className="font-condiment text-neon absolute -bottom-4 right-0 text-[36px] lg:text-[68px] -rotate-2 opacity-90"
              style={{ mixBlendMode: "exclusion" }}
            >
              The Society
            </span>
          </div>
          <p className="font-mono text-[14px] lg:text-[16px] uppercase text-cream max-w-[340px] leading-relaxed">
            A community of builders, designers, and thinkers. Pushing boundaries of technology at NUST Islamabad.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "DEV-LIFE BALANCE", body: "Beat semester burnout, step away from the screen, and recharge with fun campus activities." },
            { title: "DEDICATED TEAM", body: "Join a family-like team, work together towards success and enjoy a friendly work environment." },
            { title: "SENIOR GUIDANCE", body: "Never get trapped on a bug alone. Debug faster with senior guidance and collaborative code reviews." },
            { title: "SKILL ACCELERATION", body: "Boost your skills, stay up-to-date with the latest trends and get promoted!" },
          ].map((item, i) => (
            <div key={i} className="liquid-glass rounded-[24px] p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-grotesk text-[16px] lg:text-[18px] uppercase text-neon mb-3">{item.title}</h3>
              <p className="font-mono text-[13px] uppercase text-cream/80 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
