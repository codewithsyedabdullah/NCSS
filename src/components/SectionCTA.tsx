import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import RippleEffect from './ui/ripple-effect'

export default function SectionCTA() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[200px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="text-red-500 text-xs tracking-widest uppercase mb-6 font-inter font-bold">Get Involved</p>
        <RippleEffect>
          <h2 className="font-podium text-5xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-tight uppercase text-white mb-8">
            Ready to Join<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">the Community?</span>
          </h2>
        </RippleEffect>
        <p className="font-inter text-white/60 text-base lg:text-lg max-w-lg mx-auto mb-10">
          Become part of NUST's most dynamic computing society. There's a place for you at NCSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 text-xs tracking-widest uppercase text-white transition-colors">
            <span>Become a Member</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="group flex items-center gap-2 border border-white/20 hover:border-white/40 px-8 py-4 text-xs tracking-widest uppercase text-white/80 hover:text-white transition-colors">
            <span>Learn More</span>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
