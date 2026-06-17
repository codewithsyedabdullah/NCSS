import { useRef } from "react"
import { useInView } from "framer-motion"

const services = [
  {
    title: "Development",
    description:
      "Web, mobile, and software development projects. Our dev team builds production-grade applications and open-source tools.",
  },
  {
    title: "AI & Data Science",
    description:
      "Exploring machine learning, deep learning, and data analytics through hands-on workshops, projects, and research collaborations.",
  },
  {
    title: "Design",
    description:
      "UI/UX, graphic design, and branding. We craft visually compelling digital experiences and maintain the society's visual identity.",
  },
  {
    title: "Marketing & Media",
    description:
      "Content creation, social media management, event photography, and public relations to amplify NCSS's reach and impact.",
  },
]

export default function SectionServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="bg-black py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4">
            Our Departments
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading text-white leading-tight"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            What We
            <br />
            <span className="text-[#dc2626]">Do</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all duration-500"
              style={{
                transform: isInView ? "none" : "translateY(40px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + i * 0.15}s`,
              }}
            >
              <p className="text-white/30 text-sm tracking-[0.2em] uppercase mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-white text-2xl font-heading mb-3 group-hover:text-[#dc2626] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-6 h-px bg-white/10 group-hover:bg-[#dc2626] transition-all duration-500 w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
