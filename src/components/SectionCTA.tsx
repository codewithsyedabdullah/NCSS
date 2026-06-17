import { useRef } from "react"
import { useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function SectionCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cta" className="relative bg-black py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626]/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#dc2626]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p
          className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          Get Involved
        </p>
        <h2
          className="text-4xl md:text-6xl font-heading text-white leading-tight mb-6"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          Ready to Join the
          <br />
          <span className="text-[#dc2626]">Community</span>?
        </h2>
        <p
          className="text-white/50 max-w-lg mx-auto mb-10"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Become part of NUST's most dynamic computing society. Whether you're a
          beginner or an experienced developer, there's a place for you at NCSS.
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <a
            href="#"
            className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/90 transition-all inline-flex items-center gap-2"
          >
            Become a Member
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
