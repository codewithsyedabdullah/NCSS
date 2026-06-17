import { motion } from 'framer-motion'

const steps = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your brand, market, and goals to uncover the strategic foundation for every decision ahead." },
  { step: "02", title: "Strategy", desc: "With insights in hand, we craft a roadmap that aligns creative vision with measurable business outcomes." },
  { step: "03", title: "Creation", desc: "Design, code, and content converge. Our team brings the vision to life with relentless attention to detail." },
  { step: "04", title: "Launch", desc: "We deploy, test, and optimize. Then we hand you the keys to a brand experience built to scale." },
]

export default function SectionProcess() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-red-950/20 to-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-red-500 text-xs tracking-widest uppercase mb-4 font-inter font-bold">How We Work</p>
          <h2 className="font-podium text-5xl sm:text-6xl lg:text-8xl leading-[0.85] tracking-tight uppercase text-white">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 lg:pl-12 border-l border-white/10 group hover:border-red-600/50 transition-colors duration-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-black border-2 border-white/20 group-hover:border-red-600 transition-colors duration-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="font-podium text-5xl sm:text-6xl text-white/10 absolute -top-4 right-0 leading-none select-none">{s.step}</span>
              <h3 className="font-podium text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="font-inter text-white/60 text-sm lg:text-base leading-relaxed max-w-md">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
