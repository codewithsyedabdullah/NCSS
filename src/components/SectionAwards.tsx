import { useRef } from "react"
import { useInView } from "framer-motion"

const awards = [
  { year: "2024", title: "Best Student Society", org: "NUST Annual Awards" },
  { year: "2023", title: "Best Tech Event — Hackathon", org: "National Computing Recognition" },
  { year: "2022", title: "Innovation in Education Award", org: "Pakistan Higher Education Commission" },
  { year: "2021", title: "Most Active Student Chapter", org: "ACM Pakistan" },
  { year: "2020", title: "Outstanding Community Impact", org: "NUST Student Affairs" },
]

export default function SectionAwards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-black py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4">
            Recognition
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading text-white leading-tight"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            Our
            <br />
            <span className="text-[#dc2626]">Achievements</span>
          </h2>
        </div>

        <div className="space-y-1">
          {awards.map((award, i) => (
            <div
              key={award.title + award.year}
              className="group flex items-center justify-between border-b border-white/5 py-5 hover:border-white/20 transition-all cursor-pointer"
              style={{
                transform: isInView ? "none" : "translateX(-30px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.15 + i * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-6">
                <span className="text-white/20 text-sm font-mono w-12">
                  {award.year}
                </span>
                <div>
                  <p className="text-white text-sm group-hover:text-[#dc2626] transition-colors">
                    {award.title}
                  </p>
                  <p className="text-white/30 text-xs">{award.org}</p>
                </div>
              </div>
              <span className="text-white/20 text-sm group-hover:text-white/60 transition-colors">
                &#8599;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
