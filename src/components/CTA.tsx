import { ArrowUpRight, Mail } from "lucide-react";
import { LiquidButton } from "./ui/liquid-glass-button";
import { GlassOverlay } from "./ui/glass-surface";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:nustcomputersciencesociety@gmail.com",
    label: "Email",
  },
  {
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    href: "https://www.instagram.com/nustcomputersciencesociety",
    label: "Instagram",
  },
  {
    svg: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
    href: "https://www.linkedin.com/company/nustcomputersciencesociety",
    label: "LinkedIn",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 sm:py-36 lg:py-48 bg-[#0a0b0e]">
      <GlassOverlay />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2 mb-6">
              <span className="font-mono text-[clamp(11px,0.65vw,12px)] text-[#666] uppercase tracking-[0.2em]">
                Get Involved
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal mb-8">
              Ready to
              <br />
              <span className="text-accent">Join Us?</span>
            </h2>
            <p className="font-inter text-[clamp(1rem,1.1vw,1.15rem)] text-[#999] leading-relaxed max-w-lg mb-10 font-normal">
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place for you at NCSS.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <LiquidButton asChild size="xl" className="!text-[clamp(12px,0.8vw,14px)] tracking-[0.12em] uppercase font-inter font-bold">
                <a href="mailto:info@ncss.edu.pk" className="inline-flex items-center gap-2">
                  Contact Us
                  <ArrowUpRight size={15} />
                </a>
              </LiquidButton>
              <LiquidButton asChild size="xl" variant="outline" className="!text-[clamp(12px,0.8vw,14px)] tracking-[0.12em] uppercase font-inter font-bold">
                <a href="careers.html" className="inline-flex items-center gap-2">
                  Open Positions
                  <ArrowUpRight size={15} />
                </a>
              </LiquidButton>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-white/5 bg-white/[0.02] px-4 py-2 self-start">
              <span className="font-mono text-[clamp(11px,0.65vw,12px)] text-[#666] uppercase tracking-[0.2em]">
                Connect
              </span>
            </div>
            <div className="relative border border-white/5 bg-white/[0.02] p-8 sm:p-10 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ backdropFilter: 'url("#container-glass")' }} />
              <div className="relative z-10">
              <p className="font-inter text-[clamp(0.9rem,0.95vw,1rem)] text-[#999] mb-5 font-normal">
                Follow us on social media for updates on events, workshops, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 px-5 py-3.5 text-[clamp(11px,0.65vw,12px)] tracking-[0.12em] uppercase font-inter font-medium text-white/60 hover:text-white hover:bg-white/[0.04] transition-all"
                    aria-label={link.label}
                  >
                    {link.icon ? (
                      <link.icon size={14} />
                    ) : (
                      <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
                        {link.svg}
                      </svg>
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
              </div>
            </div>
            <div className="relative border border-white/5 bg-white/[0.02] p-8 sm:p-10 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ backdropFilter: 'url("#container-glass")' }} />
              <div className="relative z-10">
              <p className="font-anton text-white text-[clamp(1.2rem,1.4vw,1.5rem)] uppercase tracking-tight mb-1.5 font-normal">
                NUST Computer Science Society
              </p>
              <p className="font-mono text-[clamp(10px,0.6vw,12px)] text-[#666] uppercase tracking-[0.08em]">
                &copy; {new Date().getFullYear()} NCSS. All rights reserved.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
