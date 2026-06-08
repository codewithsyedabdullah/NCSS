export default function Hero() {
  const navLinks = ["HOME", "ABOUT", "DEPARTMENTS", "JOIN US", "CONTACT"];
  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-b-[32px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        autoPlay loop muted playsInline
      />
      <div className="absolute inset-0 bg-bg/50" />
      <div className="relative z-10 max-w-[1831px] mx-auto px-6 lg:px-16 min-h-screen flex flex-col">
        <div className="flex items-center justify-between pt-8">
          <span className="font-grotesk text-cream uppercase tracking-widest text-base">NCSS</span>
          <nav className="liquid-glass hidden lg:flex rounded-[28px] px-[52px] py-[24px] gap-10">
            {navLinks.map(l => (
              <a key={l} href="#" className="font-grotesk text-[13px] text-cream uppercase hover:text-neon transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex lg:hidden gap-2">
            <span className="font-grotesk text-[13px] text-cream uppercase">MENU</span>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="relative lg:ml-32 max-w-[780px]">
            <h1 className="font-grotesk uppercase text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] lg:leading-[1]">
              NUST<br />COMPUTER<br />SCIENCE<br />SOCIETY
            </h1>
            <span
              className="font-condiment text-neon absolute -right-4 top-8 text-[24px] sm:text-[36px] md:text-[48px] opacity-90 -rotate-1"
              style={{ mixBlendMode: "exclusion" }}
            >
              Est. NUST
            </span>
          </div>
        </div>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {["?", "??", "¦"].map((icon, i) => (
            <button key={i} className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center text-cream hover:bg-white/10 transition-colors text-lg">
              {icon}
            </button>
          ))}
        </div>
        <div className="flex lg:hidden justify-center gap-3 pb-12">
          {["?", "??", "¦"].map((icon, i) => (
            <button key={i} className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center text-cream text-lg">
              {icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
