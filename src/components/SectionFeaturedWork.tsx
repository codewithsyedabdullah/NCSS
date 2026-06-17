import { useRef } from "react"
import { useInView } from "framer-motion"

const projects = [
  {
    title: "Hackathon 2025",
    category: "Flagship Event",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
  {
    title: "AI & Data Science Workshop",
    category: "Technical Workshop",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
  },
  {
    title: "Industry Speaker Series",
    category: "Seminar",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
  },
  {
    title: "Web Dev Bootcamp",
    category: "Training Program",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    title: "Capture The Flag",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    title: "Annual Tech Fest",
    category: "Showcase",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
]

export default function SectionFeaturedWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" className="bg-black py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4">
              Our Events
            </p>
            <h2
              className="text-4xl md:text-5xl font-heading text-white leading-tight"
              style={{
                transform: isInView ? "none" : "translateY(30px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              Featured
              <br />
              <span className="text-[#dc2626]">Activities</span>
            </h2>
          </div>
          <a
            href="#cta"
            className="hidden md:inline-block border border-white/20 text-white px-6 py-2 rounded-full text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            View All
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              style={{
                transform: isInView ? "none" : "translateY(40px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + i * 0.1}s`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-white text-xl font-heading">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 text-center md:hidden"
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition:
              "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          <a
            href="#cta"
            className="border border-white/20 text-white px-6 py-2 rounded-full text-sm tracking-wider uppercase hover:bg-white/10 transition-all"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  )
}
