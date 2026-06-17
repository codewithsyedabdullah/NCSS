import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { name: "Hackathon 2025", category: "Flagship Event", year: "2025", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" },
  { name: "AI Workshop", category: "Technical Workshop", year: "2025", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000" },
  { name: "Speaker Series", category: "Seminar", year: "2025", image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80&w=1000" },
  { name: "Web Dev Bootcamp", category: "Training Program", year: "2026", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000" },
  { name: "Capture The Flag", category: "Cybersecurity", year: "2026", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000" },
  { name: "Annual Tech Fest", category: "Showcase", year: "2026", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000" },
]

export default function SectionFeaturedWork() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-red-950/30 to-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 lg:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-podium text-6xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-tight uppercase text-white"
          >
            Featured<br />Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 font-inter text-sm lg:text-lg max-w-sm pb-2 border-l-2 border-red-600 pl-4"
          >
            A look at our most impactful events and activities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer border border-red-900/20 hover:border-red-600/50 transition-colors duration-500"
    >
      <img src={project.image} alt={project.name}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-[10px] font-inter uppercase tracking-widest text-white border border-white/20">{project.category}</span>
          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-red-400 font-inter text-xs tracking-widest uppercase mb-2 font-bold">{project.year}</p>
          <h3 className="font-podium text-3xl sm:text-4xl text-white uppercase">{project.name}</h3>
        </div>
      </div>
    </motion.div>
  )
}
