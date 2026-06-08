import SocialIcons from "./SocialIcons";

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden rounded-b-[32px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center max-w-[1831px] mx-auto w-full px-4 sm:px-6 lg:px-10">
          <div className="lg:ml-32 max-w-[780px] relative">
            <h1 className="font-grotesk uppercase leading-[1.05] lg:leading-[1] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] text-cream">
              NUST Computer
              <br />
              Science Society
            </h1>
            <span
              className="absolute -right-12 sm:-right-20 top-0 font-condiment text-neon text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] -rotate-1 mix-blend-exclusion opacity-90 normal-case"
            >
              Innovate
            </span>
          </div>
        </div>
        <div className="lg:hidden flex justify-center pb-10">
          <SocialIcons />
        </div>
      </div>
      <div className="hidden lg:block absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 z-20">
        <SocialIcons vertical />
      </div>
    </section>
  );
}
