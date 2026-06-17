import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Years Established" },
  { value: "6", label: "Departments" },
  { value: "50+", label: "Events per Year" },
]

export default function SectionWhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative bg-black py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <p className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4">
              About NCSS
            </p>
            <h2
              className="text-4xl md:text-5xl font-heading text-white leading-tight mb-6"
              style={{
                transform: isInView ? "none" : "translateX(-40px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              The Home of
              <br />
              <span className="text-[#dc2626]">Computing</span> at NUST
            </h2>
            <p
              className="text-white/50 leading-relaxed mb-8"
              style={{
                transform: isInView ? "none" : "translateX(-40px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              NCSS is the official computer science society at NUST, founded to
              foster a vibrant ecosystem of learning, innovation, and
              collaboration. We bring together students across disciplines to
              explore emerging technologies, build real-world projects, and
              connect with industry leaders.
            </p>
            <div
              className="grid grid-cols-2 gap-6"
              style={{
                transform: isInView ? "none" : "translateX(-40px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-white text-3xl font-bold">{s.value}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative"
            style={{
              transform: isInView ? "none" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="NCSS community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-white/10 rounded-lg flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-[#dc2626] text-3xl font-bold">15+</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Years Strong
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
