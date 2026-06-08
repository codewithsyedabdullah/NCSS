import { ArrowUpRight, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:info@ncss.edu.pk",
    label: "Email",
  },
  {
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    href: "https://x.com/ncss",
    label: "X",
  },
  {
    svg: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
    href: "https://github.com/ncss",
    label: "GitHub",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-1.5 mb-5">
              <span className="font-mono-code text-[9px] text-[#666] uppercase tracking-[3px]">
                Get Involved
              </span>
            </div>
            <h2 className="font-anton text-white uppercase leading-[0.95] text-[clamp(2.5rem,6vw,5rem)] tracking-tight mb-6">
              Ready to
              <br />
              <span className="text-accent">Join Us?</span>
            </h2>
            <p className="font-inter text-sm sm:text-base text-[#999] leading-relaxed max-w-md mb-8">
              Whether you're a seasoned developer or just starting out, there's a place for you at NCSS.
              Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@ncss.edu.pk"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3.5 text-xs tracking-widest uppercase font-inter font-bold transition-all"
              >
                Contact Us
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#departments"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 px-6 py-3.5 text-xs tracking-widest uppercase font-inter font-medium transition-all"
              >
                View Departments
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-1.5 mb-2 self-start">
              <span className="font-mono-code text-[9px] text-[#666] uppercase tracking-[3px]">
                Connect
              </span>
            </div>
            <div className="border border-white/5 bg-white/[0.02] p-6 sm:p-8">
              <p className="font-inter text-sm text-[#999] mb-4 tracking-wide">
                Follow us on social media for updates on events, workshops, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 px-4 py-3 text-[10px] tracking-widest uppercase font-inter font-medium text-white/70 hover:text-white hover:bg-white/[0.04] transition-all"
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
            <div className="border border-white/5 bg-white/[0.02] p-6 sm:p-8">
              <p className="font-anton text-white text-lg uppercase tracking-tight mb-1">
                NUST Computer Science Society
              </p>
              <p className="font-inter text-[11px] text-[#666] tracking-wider">
                &copy; {new Date().getFullYear()} NCSS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
