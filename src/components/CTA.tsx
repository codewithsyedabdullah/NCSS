import { Mail } from "lucide-react";

const CTA_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:info@ncss.edu.pk",
    label: "Mail",
  },
  {
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    href: "https://x.com/ncss",
    label: "X",
    viewBox: "0 0 24 24",
  },
  {
    svg: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
    href: "https://github.com/ncss",
    label: "Github",
    viewBox: "0 24 24",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block min-h-[clamp(200px,40vw,600px)] object-cover"
        src={CTA_VIDEO}
      />
      <div className="absolute inset-0 bg-[#010828]/50 flex items-center">
        <div className="relative w-full max-w-[1831px] mx-auto px-4 sm:px-6 lg:px-10 lg:pr-[20%] lg:pl-[15%]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] border border-neon/30 mb-4 sm:mb-6 bg-neon/5">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="font-mono text-[clamp(8px,1vw,10px)] text-neon uppercase tracking-[2px]">
              ncss --join
            </span>
          </div>

          <span className="block font-condiment text-neon text-[clamp(1rem,3vw,2.5rem)] mix-blend-exclusion normal-case mb-2">
            Go beyond
          </span>

          <div className="text-right">
            <h2 className="font-grotesk text-[clamp(1rem,4vw,3.75rem)] uppercase text-cream leading-[1.1]">
              <span className="block mb-[clamp(0.5rem,2vw,1rem)]">JOIN US.</span>
              <span className="block">REVEAL WHAT&apos;S HIDDEN.</span>
              <span className="block">DEFINE WHAT&apos;S NEXT.</span>
              <span className="block">FOLLOW THE SIGNAL.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:hidden">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[clamp(2.5rem,8vw,3.5rem)] h-[clamp(2.5rem,8vw,3.5rem)] rounded-[4px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
                aria-label={item.label}
              >
                {item.icon ? (
                  <item.icon size={18} className="text-cream/80" />
                ) : (
                  <svg viewBox={item.viewBox} width={18} height={18} fill="currentColor" className="text-cream/80">
                    {item.svg}
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute hidden lg:block" style={{ left: "8%", bottom: "12%" }}>
          <div className="rounded-[4px] border border-white/10 bg-[#0a0b0e]/80 backdrop-blur-sm flex flex-col">
            {socialLinks.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center hover:bg-white/[0.06] transition-colors
                  w-[clamp(3rem,12vw,16rem)] h-[clamp(2.5rem,3.5vw,4rem)]
                  ${i < socialLinks.length - 1 ? "border-b border-white/10" : ""}`}
                aria-label={item.label}
              >
                {item.icon ? (
                  <item.icon size={20} className="text-cream/80" />
                ) : (
                  <svg viewBox={item.viewBox} width={20} height={20} fill="currentColor" className="text-cream/80">
                    {item.svg}
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
