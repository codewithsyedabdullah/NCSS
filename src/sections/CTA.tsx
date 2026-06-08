export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <video
        className="w-full h-auto block"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        autoPlay loop muted playsInline
      />
      <div className="absolute inset-0 bg-bg/40" />
      <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-8">
        <div className="relative text-right">
          <span
            className="font-condiment text-neon absolute -top-8 left-0 text-[24px] sm:text-[40px] lg:text-[68px] -rotate-1 opacity-90"
            style={{ mixBlendMode: "exclusion" }}
          >
            Come join us
          </span>
          <h2 className="font-grotesk uppercase text-cream text-[20px] sm:text-[36px] lg:text-[60px] leading-[1.05]">
            <span className="block mb-4 lg:mb-12">JOIN NCSS.</span>
            BUILD WHAT MATTERS.<br />
            LEARN WHAT IS NEXT.<br />
            FOLLOW THE CODE.
          </h2>
        </div>
      </div>
      <div className="absolute left-[8%] bottom-[15%] liquid-glass rounded-[1.25rem] overflow-hidden hidden sm:block">
        {["?", "??", "¦"].map((icon, i) => (
          <button
            key={i}
            className={`flex items-center justify-center text-cream hover:bg-white/10 transition-colors w-[14vw] sm:w-[10rem] lg:w-[14rem] h-14 lg:h-16 text-lg ${i < 2 ? "border-b border-white/10" : ""}`}
          >
            {icon}
          </button>
        ))}
      </div>
    </section>
  );
}
