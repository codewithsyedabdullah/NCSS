import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Award, Crown } from "lucide-react"

export default function HeroScrollAnimation() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -5])
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <main ref={container} className="relative h-[200vh] bg-black">
      <motion.section
        style={{ scale: scale1, rotate: rotate1 }}
        className="sticky top-0 h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden"
      >
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-inter">
              NUST Computer Science Society
            </span>
          </div>
          <h1 className="font-podium text-white uppercase leading-[0.88] tracking-tight text-[clamp(3rem,10vw,9rem)]">
            <div>Build.</div>
            <div>Innovate.</div>
            <div className="text-red-500">Lead.</div>
          </h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto mt-6 font-inter">
            The official computing society of NUST — a community of builders, creators, and problem solvers.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button className="group flex items-center gap-2 bg-white text-black px-7 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-white/90 transition-colors">
              <span>JOIN NCSS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="group flex items-center gap-2 border border-white/30 px-7 py-3 text-xs tracking-widest uppercase text-white hover:bg-white/10 transition-colors">
              <span>OUR EVENTS</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-12 z-10">
          {[
            { val: "500+", label: "Active Members" },
            { val: "15+", label: "Years Established" },
            { val: "50+", label: "Events per Year" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white text-2xl sm:text-3xl font-bold font-inter">{s.val}</p>
              <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        style={{ scale: scale2, rotate: rotate2 }}
        className="relative h-screen bg-gradient-to-b from-black via-red-950/30 to-black text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <p className="text-red-500 text-xs tracking-widest uppercase mb-4 font-inter font-bold">
                About NCSS
              </p>
              <h2 className="font-podium text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-[0.88] tracking-tight mb-6">
                The Home of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Computing</span>
              </h2>
              <p className="text-white/60 font-inter text-base lg:text-lg leading-relaxed">
                NCSS is the official computer science society at NUST, fostering a vibrant ecosystem of learning, innovation, and collaboration. We bring students together to explore emerging tech, build real-world projects, and connect with industry leaders.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "500+", label: "Active Members" },
                { val: "15+", label: "Years Established" },
                { val: "6", label: "Departments" },
                { val: "50+", label: "Events per Year" },
              ].map((s) => (
                <div key={s.label} className="border border-red-900/30 p-8 bg-black/40 backdrop-blur-sm">
                  <p className="font-podium text-5xl text-white mb-2">{s.val}</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase font-inter">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="group bg-red-950/20">
        <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-red-900 to-red-950 bg-clip-text text-transparent font-podium">
          NCSS
        </h1>
        <div className="bg-black text-white/40 h-40 relative z-10 grid place-content-center text-sm tracking-widest uppercase font-inter rounded-tr-full rounded-tl-full border-t border-white/5">
          NUST Computer Science Society
        </div>
      </footer>
    </main>
  )
}
