import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { LiquidButton } from './ui/liquid-glass-button'
import { GlassOverlay } from './ui/glass-surface'

const JOIN_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSe2D8ffYSC9e6NxWQN09ViwsiV6TifENeM0_qPt5NxNC-NHxA/viewform?usp=header'

export default function SectionCTA() {
  return (
    <section id="contact" className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[200px] pointer-events-none" />
      <GlassOverlay />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="text-red-500 text-lg tracking-widest uppercase mb-6 font-inter font-bold">Get Involved</p>
        <h2 className="font-podium text-5xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-tight uppercase text-white mb-8">
          Ready to Join<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">the Community?</span>
        </h2>
        <p className="font-inter text-white/60 text-base lg:text-lg max-w-lg mx-auto mb-10">
          Become part of NUST's most dynamic computing society. There's a place for you at NCSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <LiquidButton asChild size="xl" className="!text-xs tracking-widest uppercase bg-red-600 hover:bg-red-700 text-white px-8">
            <a href={JOIN_LINK} className="flex items-center gap-2">
              <span>Become a Member</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </LiquidButton>
          <LiquidButton variant="outline" size="xl" className="!text-xs tracking-widest uppercase border-white/20 hover:border-white/40 text-white/80 hover:text-white">
            <span>Learn More</span>
          </LiquidButton>
        </div>
      </motion.div>
    </section>
  )
}
