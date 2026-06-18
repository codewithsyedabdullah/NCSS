import { motion } from 'framer-motion'
import InfiniteRibbon from './ui/infinite-ribbon'

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Years Established" },
  { value: "6", label: "Departments" },
  { value: "50+", label: "Events per Year" },
]

export default function SectionWhoWeAre() {
  return (
    <section id="about" className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-red-950 to-black relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mb-16 -mx-6 sm:-mx-10 lg:-mx-16">
        <InfiniteRibbon className="absolute top-0 left-0" duration={28} rotation={3}>
          Build · Innovate · Lead &nbsp;&nbsp;✦&nbsp;&nbsp; NUST Computer Science Society &nbsp;&nbsp;✦&nbsp;&nbsp;
        </InfiniteRibbon>
        <InfiniteRibbon duration={28} reverse rotation={-3}>
          Join 500+ members · 15+ years · 50+ events yearly &nbsp;&nbsp;✦&nbsp;&nbsp;
        </InfiniteRibbon>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-red-500 text-lg tracking-widest uppercase mb-6 font-inter font-bold">About NCSS</p>
            <h2 className="font-podium text-5xl sm:text-6xl lg:text-8xl leading-[0.85] tracking-tight uppercase text-white">
              The Home of<br />Computing<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">at NUST.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end pb-4"
          >
            <p className="text-white/80 font-inter text-lg lg:text-2xl leading-relaxed max-w-lg border-l-2 border-red-600 pl-6 lg:pl-10">
              NCSS is the official computer science society at NUST, fostering a vibrant ecosystem of learning, innovation, and collaboration. We bring students together to explore emerging tech, build real-world projects, and connect with industry leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-10 flex flex-col justify-center items-start overflow-hidden group border border-red-900/30 bg-black/40 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <span className="font-podium text-5xl sm:text-6xl lg:text-7xl text-white mb-2 group-hover:text-red-500 transition-colors duration-500 relative z-10">{s.value}</span>
              <span className="font-inter text-white/60 text-xs sm:text-sm tracking-widest uppercase relative z-10 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
