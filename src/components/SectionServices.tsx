import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { title: "Brand Identity", desc: "Strategic brand development from identity design to voice and positioning — we build brands that command attention.", icon: "01" },
  { title: "Digital Design", desc: "Websites, apps, and digital products crafted with precision. Every pixel purposeful, every interaction intentional.", icon: "02" },
  { title: "Motion & Video", desc: "Explainer videos, brand films, and motion design that bring your story to life with cinematic quality.", icon: "03" },
  { title: "Campaign Strategy", desc: "Data-backed campaigns that cut through the noise. From concept to execution, we drive results.", icon: "04" },
]

export default function SectionServices() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-red-500 text-xs tracking-widest uppercase mb-4 font-inter font-bold">What We Do</p>
          <h2 className="font-podium text-5xl sm:text-6xl lg:text-8xl leading-[0.85] tracking-tight uppercase text-white">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 lg:p-14 bg-black hover:bg-red-950/20 transition-colors duration-500 cursor-pointer"
            >
              <span className="font-podium text-6xl sm:text-7xl lg:text-8xl text-white/5 absolute top-4 right-6 leading-none select-none">{s.icon}</span>
              <h3 className="font-podium text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-4 relative z-10">{s.title}</h3>
              <p className="font-inter text-white/60 text-sm lg:text-base leading-relaxed max-w-sm relative z-10">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-red-500 transition-colors duration-500 relative z-10">
                <span className="text-xs tracking-widest uppercase font-inter font-bold">Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
