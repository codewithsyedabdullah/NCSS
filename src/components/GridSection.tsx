const projects = [
  {
    title: "Development",
    client: "Web & Mobile",
    year: "2024",
    icon: "D",
  },
  {
    title: "AI / Data Science",
    client: "Machine Learning",
    year: "2024",
    icon: "A",
  },
  {
    title: "Design",
    client: "UI/UX & Graphics",
    year: "2024",
    icon: "D",
  },
  {
    title: "Marketing",
    client: "Media & Outreach",
    year: "2024",
    icon: "M",
  },
  {
    title: "Events",
    client: "Hackathons",
    year: "2024",
    icon: "E",
  },
  {
    title: "Community",
    client: "100+ Members",
    year: "2024",
    icon: "C",
  },
];

export default function GridSection() {
  return (
    <section className="bx-grid-wrap">
      <div className="bx-grid-copy">
        <p className="bx-grid-copy-sub">Who we are</p>
        <p className="bx-grid-copy-title">
          NCSS is a digital community of builders, thinkers, and creators.
        </p>
      </div>

      <div className="bx-grid">
        {projects.map((project) => (
          <div key={project.title} className="bx-grid-item">
            <div className="bx-card">
              <div className="bx-card-intrinsic">
                <div className="bx-card-inner">
                  <div className="bx-card-bg" />

                  <div className="bx-card-marquee">
                    <div className="bx-card-marquee-inner">
                      <span>{project.title}</span>
                      <span>{project.title}</span>
                    </div>
                  </div>

                  <div className="bx-card-label">
                    {project.client}
                    <span style={{ fontSize: "0.8em", fontWeight: 800, marginLeft: "0.3em", opacity: 0.5 }}>
                      ({project.year})
                    </span>
                  </div>

                  <div className="bx-card-icon">
                    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <text x="12" y="16" textAnchor="middle" fill="#101010" fontSize="12" fontWeight="700" fontFamily="Inter">{project.icon}</text>
                    </svg>
                  </div>

                  <div className="bx-card-device">
                    <svg viewBox="0 0 60 40" width="80%" height="80%" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15">
                      <rect x="2" y="5" width="56" height="30" rx="3" />
                      <rect x="5" y="8" width="50" height="24" rx="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
