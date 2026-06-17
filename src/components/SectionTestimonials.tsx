import { useRef } from "react"
import { useInView } from "framer-motion"

const testimonials = [
  {
    quote:
      "NCSS gave me the platform to learn beyond the classroom. The workshops and hackathons were instrumental in landing my internship.",
    author: "Ahmed Raza",
    role: "CS Senior, Former NCSS Tech Lead",
  },
  {
    quote:
      "Being part of NCSS felt like joining a family of passionate builders. The collaborative energy here is unlike anything else on campus.",
    author: "Fatima Khan",
    role: "AI/ML Department Head",
  },
  {
    quote:
      "From a complete beginner to building my first full-stack app in one semester — NCSS made it possible. The mentorship culture is incredible.",
    author: "Usman Ali",
    role: "First-Year Member",
  },
]

export default function SectionTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-black py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading text-white leading-tight"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            Voices from
            <br />
            <span className="text-[#dc2626]">Our Community</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={item.author}
              className="border border-white/10 rounded-lg p-8"
              style={{
                transform: isInView ? "none" : "translateY(40px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.3 + i * 0.15}s`,
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#dc2626] text-sm">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-white/60 leading-relaxed text-sm mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="text-white text-sm font-semibold">
                  {item.author}
                </p>
                <p className="text-white/30 text-xs tracking-wider uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
