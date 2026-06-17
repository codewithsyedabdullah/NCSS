import { useRef } from "react"
import { useInView } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Join the Society",
    description:
      "Sign up as an NCSS member. Open to all NUST students across every discipline, no prior experience required.",
  },
  {
    step: "02",
    title: "Learn & Explore",
    description:
      "Attend workshops, seminars, and bootcamps. Dive into web dev, AI, cybersecurity, and more through hands-on sessions.",
  },
  {
    step: "03",
    title: "Build & Collaborate",
    description:
      "Work on real projects, participate in hackathons, and collaborate with peers on open-source and industry-sponsored initiatives.",
  },
  {
    step: "04",
    title: "Lead & Inspire",
    description:
      "Take on leadership roles, mentor new members, represent NCSS at competitions, and drive the community forward.",
  },
]

export default function SectionProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="bg-black py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#dc2626] text-sm tracking-[0.3em] uppercase mb-4">
            Your Journey
          </p>
          <h2
            className="text-4xl md:text-5xl font-heading text-white leading-tight"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            How to Get
            <br />
            <span className="text-[#dc2626]">Involved</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-16">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className="relative md:flex gap-12 items-start"
                style={{
                  transform: isInView ? "none" : "translateY(40px)",
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.3 + i * 0.2}s`,
                }}
              >
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-[#dc2626] items-center justify-center bg-black z-10">
                  <span className="text-[#dc2626] text-xs font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="md:hidden mb-3">
                  <span className="text-[#dc2626] text-sm tracking-[0.2em] uppercase">
                    Step {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
