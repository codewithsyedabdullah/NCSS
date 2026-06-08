const CTA_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

export default function CTA() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
        src={CTA_VIDEO}
      />
      <div className="absolute inset-0 bg-[#010828]/40 flex items-center">
        <div className="relative w-full max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10 lg:pr-[20%] lg:pl-[15%]">
          <span className="block font-condiment text-neon text-[17px] sm:text-[36px] md:text-[48px] lg:text-[68px] mix-blend-exclusion normal-case mb-2">
            Go beyond
          </span>
          <div className="text-right">
            <h2 className="font-grotesk text-[16px] sm:text-[32px] md:text-[48px] lg:text-[60px] uppercase text-cream leading-[1.1]">
              <span className="block mb-4 sm:mb-6 lg:mb-12">JOIN US.</span>
              <span className="block">REVEAL WHAT&apos;S HIDDEN.</span>
              <span className="block">DEFINE WHAT&apos;S NEXT.</span>
              <span className="block">FOLLOW THE SIGNAL.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
