import { ArrowUpRight } from 'lucide-react'

const JOIN_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSe2D8ffYSC9e6NxWQN09ViwsiV6TifENeM0_qPt5NxNC-NHxA/viewform?usp=header'

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/nustcomputersciencesociety' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nustcomputersciencesociety' },
  { name: 'Email', href: 'mailto:nustcomputersciencesociety@gmail.com' },
]

const links: { label: string; href: string }[] = [
  { label: 'Events', href: '#events' },
  { label: 'Departments', href: '#departments' },
  { label: 'About', href: '#about' },
  { label: 'Join', href: JOIN_LINK },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-16 lg:py-24 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16 lg:mb-24">
          <div className="md:col-span-2">
            <h3 className="font-podium text-4xl sm:text-5xl lg:text-7xl text-white uppercase leading-[0.85] tracking-tight mb-6">
              NUST Computer<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Science Society.</span>
            </h3>
            <a href="mailto:nustcomputersciencesociety@gmail.com" className="font-inter text-white/60 hover:text-red-500 transition-colors text-lg lg:text-xl tracking-tight">
              nustcomputersciencesociety@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-inter text-white/30 text-base tracking-widest uppercase mb-2">Navigate</p>
            {links.map(l => (
              <a key={l.label} href={l.href} className="font-inter text-white/70 hover:text-white transition-colors text-sm tracking-wider uppercase">{l.label}</a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-end gap-8 pt-8 border-t border-white/5">
          <div className="flex flex-wrap gap-6">
            {socials.map(s => (
              <a key={s.name} href={s.href} className="group flex items-center gap-1 text-white/40 hover:text-red-500 transition-colors text-xs tracking-widest uppercase font-inter">
                {s.name}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
          <p className="font-inter text-white/20 text-[10px] tracking-wider uppercase">
            &copy; {new Date().getFullYear()} NUST Computer Science Society. All rights reserved.<br />
            designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/syedabdullahyaqoob"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/50 transition-colors"
            >
              Syed Abdullah Yaqoob
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
