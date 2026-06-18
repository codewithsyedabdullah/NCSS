import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  { id: "01", title: "Join", desc: "Sign up as an NCSS member. Open to all NUST students across every discipline, no prior experience required." },
  { id: "02", title: "Learn", desc: "Attend workshops, seminars, and bootcamps. Dive into web dev, AI, cybersecurity, and more." },
  { id: "03", title: "Build", desc: "Work on real projects, participate in hackathons, and collaborate on open-source and industry initiatives." },
  { id: "04", title: "Lead", desc: "Take on leadership roles, mentor new members, and represent NCSS at competitions." },
]

export default function SectionProcess() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-red-950/20 to-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-red-500 text-sm tracking-widest uppercase mb-4 font-inter font-bold">Your Journey</p>
          <h2 className="font-podium text-5xl sm:text-6xl lg:text-8xl leading-[0.85] tracking-tight uppercase text-white">
            Get Involved
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line — vertical on mobile, horizontal on desktop */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-red-900/30 lg:hidden">
            <motion.div
              style={{ scaleY: pathLength, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-red-600 to-red-400"
            />
          </div>
          <div className="absolute hidden lg:block left-0 right-0 top-[44px] h-[2px] bg-red-900/30">
            <motion.div
              style={{ scaleX: pathLength, transformOrigin: "left" }}
              className="w-full h-full bg-gradient-to-r from-red-600 to-red-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex lg:flex-col gap-6 lg:gap-10 items-start"
              >
                {/* Node circle */}
                <div className="relative z-10 w-[46px] h-[46px] lg:w-[88px] lg:h-[88px] rounded-full bg-black border-2 border-red-600 flex items-center justify-center font-podium text-lg lg:text-3xl text-white shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:scale-110 hover:bg-red-600 transition-all duration-500 cursor-default flex-shrink-0">
                  <span className="relative z-10">{step.id}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0 lg:pt-4 flex flex-col">
                  <h3 className="font-podium text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="font-inter text-white/60 text-sm lg:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
