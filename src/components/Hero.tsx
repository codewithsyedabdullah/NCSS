import SocialIcons from "./SocialIcons";
import Terminal from "./Terminal";

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-b-[2rem] flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />
      <div className="absolute inset-0 bg-[#010828]/40" />

      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
          <div className="flex-1 lg:ml-0 xl:ml-12 max-w-[clamp(320px,50vw,780px)] relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-orange/30 mb-4 sm:mb-6 bg-orange/5">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="font-mono text-[clamp(8px,1.2vw,11px)] text-orange uppercase tracking-[2px]">
                Society Initiative
              </span>
            </div>

            <h1 className="font-grotesk uppercase leading-[1.05] lg:leading-[1] text-[clamp(2rem,8vw,5.625rem)] text-cream">
              NUST Computer
              <br />
              Science Society
            </h1>

            <p className="font-inter text-[clamp(0.75rem,2vw,1rem)] text-cream/80 mt-4 sm:mt-6 max-w-[clamp(280px,40vw,560px)] leading-relaxed">
              A community of innovators, builders &amp; creators. Exploring technology, design, and the future of computing at NUST.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="#departments"
                className="inline-flex items-center gap-2 px-5 py-3 bg-orange text-bg font-bold font-inter text-[clamp(10px,1.2vw,12px)] uppercase tracking-[1px] border-2 border-orange glow-orange hover:brightness-110 transition-all"
              >
                Explore Departments
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 bg-transparent text-neon font-bold font-inter text-[clamp(10px,1.2vw,12px)] uppercase tracking-[1px] border-2 border-neon/50 hover:border-neon glow-neon transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <Terminal />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 z-20">
        <SocialIcons vertical />
      </div>
    </section>
  );
}
