import { motion } from 'framer-motion'

const testimonials = [
  { quote: "Vanguard didn't just redesign our website — they redefined how the world sees our brand. The results exceeded every expectation.", author: "Sarah Chen", role: "CMO, Nike Vision" },
  { quote: "Working with Vanguard felt like finding the missing piece. Their strategic approach and creative execution are second to none.", author: "Marcus Webb", role: "CEO, Apex Motors" },
  { quote: "The campaign Vanguard built for us became the most talked-about launch in our sector. Absolutely world-class work.", author: "Elena Torres", role: "VP Marketing, Red Bull X" },
]

export default function SectionTestimonials() {
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
          <p className="text-red-500 text-xs tracking-widest uppercase mb-4 font-inter font-bold">Testimonials</p>
          <h2 className="font-podium text-5xl sm:text-6xl lg:text-8xl leading-[0.85] tracking-tight uppercase text-white">
            Client Voices
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 lg:p-10 border border-white/5 hover:border-red-900/40 transition-colors duration-500 bg-white/[0.02]"
            >
              <div className="text-red-500 text-5xl leading-none mb-4 font-podium">&ldquo;</div>
              <p className="font-inter text-white/80 text-sm lg:text-base leading-relaxed mb-8">{t.quote}</p>
              <div className="border-t border-white/10 pt-5">
                <p className="font-inter text-white font-semibold text-sm">{t.author}</p>
                <p className="font-inter text-white/50 text-xs tracking-wider uppercase mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
