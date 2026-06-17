import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const awards = [
  { title: "Best Student Society", org: "NUST Annual Awards", year: "2024" },
  { title: "Best Tech Event — Hackathon", org: "National Computing Recognition", year: "2023" },
  { title: "Innovation in Education", org: "Pakistan HEC", year: "2022" },
  { title: "Most Active Student Chapter", org: "ACM Pakistan", year: "2021" },
  { title: "Outstanding Community Impact", org: "NUST Student Affairs", year: "2020" },
]

export default function SectionAwards() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-red-950/10 to-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-red-500" />
          <p className="text-red-500 text-xs tracking-widest uppercase font-inter font-bold">Recognition</p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-podium text-5xl sm:text-6xl lg:text-8xl leading-[0.85] tracking-tight uppercase text-white mb-16 lg:mb-24"
        >
          Awards
        </motion.h2>

        <div className="space-y-px">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-wrap items-center justify-between py-6 lg:py-8 border-b border-white/5 hover:border-red-900/30 transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-6 lg:gap-10">
                <span className="font-podium text-3xl text-white/10 group-hover:text-red-600/30 transition-colors duration-500 w-8">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-podium text-xl sm:text-2xl lg:text-3xl text-white uppercase tracking-tight">{a.title}</h3>
                  <p className="font-inter text-white/40 text-xs tracking-wider uppercase mt-1">{a.org}</p>
                </div>
              </div>
              <span className="font-inter text-white/30 text-sm tracking-widest">{a.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
