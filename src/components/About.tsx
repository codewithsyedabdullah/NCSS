import useReveal from "../hooks/useReveal";

const stats = [
  { number: "06+", label: "Years Active" },
  { number: "100+", label: "Active Members" },
  { number: "04", label: "Core Departments" },
  { number: "30+", label: "Events Held" },
];

export default function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" style={{ position: "relative", padding: "8rem 3rem", background: "#101010" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          <div>
            <div className="bx-tag" style={{ color: "#ffd600", marginBottom: "1.5rem" }}>
              About
            </div>
            <h2 className="bx-hero-headline" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", letterSpacing: "-0.06em", lineHeight: "0.92" }}>
              NUST Computer
              <br />
              <span style={{ color: "#ffd600" }}>Science Society</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p className="bx-body" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}>
              We are the official computer science society at NUST — a student-driven collective
              dedicated to advancing technical excellence across campus.
            </p>
            <p className="bx-body" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}>
              From coding bootcamps and AI workshops to design sprints and hackathons, we create
              opportunities for students to learn, build, and grow together.
            </p>
            <div style={{ paddingTop: "0.5rem" }}>
              <a href="#departments" className="btn-bx btn-bx-theme--brand">
                <span>Explore Departments</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginTop: "5rem" }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "2rem", textAlign: "center" }}>
              <p style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff" }}>{stat.number}</p>
              <p style={{ fontSize: "clamp(0.625rem,0.65vw,0.75rem)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#868686", marginTop: "0.375rem" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
