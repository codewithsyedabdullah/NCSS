import useReveal from "../hooks/useReveal";

const cards = [
  { title: "Dev-Life Balance", desc: "Beat semester burnout, step away from the screen, and recharge with fun campus activities.", tag: "Wellness" },
  { title: "Dedicated Team", desc: "Join a family-like team, work together towards success and enjoy a friendly work environment.", tag: "Community" },
  { title: "Senior Guidance", desc: "Never get trapped on a bug alone. Debug faster with senior guidance and collaborative code reviews.", tag: "Mentorship" },
  { title: "Skill Acceleration", desc: "Boost your skills, stay up-to-date with the latest trends and get promoted!", tag: "Growth" },
];

export default function WhyNCSS() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="why" style={{ position: "relative", padding: "8rem 3rem", background: "#101010" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <div className="bx-tag" style={{ color: "#ffd600", marginBottom: "1.5rem" }}>Why NCSS</div>
            <h2 className="bx-hero-headline" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#fff", letterSpacing: "-0.06em", lineHeight: "0.92" }}>Why Choose Us</h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {cards.map((card) => (
            <div key={card.title} style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "2.5rem", transition: "border-color 0.3s" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "20px", fontSize: "clamp(0.625rem,0.65vw,0.75rem)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(255,214,0,0.12)", color: "#ffd600" }}>{card.tag}</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.25rem,1.5vw,1.5rem)", fontWeight: 600, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>{card.title}</h3>
              <p style={{ fontSize: "clamp(0.85rem,0.9vw,0.9rem)", lineHeight: 1.5, color: "#868686" }}>{card.desc}</p>
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a href="#contact" style={{ fontSize: "clamp(0.625rem,0.65vw,0.75rem)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#ffd600", textDecoration: "none" }}>Learn More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
