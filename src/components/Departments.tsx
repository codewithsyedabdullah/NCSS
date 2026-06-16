import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const departments = [
  { name: "Development", desc: "Web, mobile, and software engineering. Building the digital future, one commit at a time.", members: "30+" },
  { name: "AI / Data Science", desc: "Machine learning, deep learning, analytics, and research. Turning data into intelligence.", members: "25+" },
  { name: "Design", desc: "UI/UX, graphics, and visual storytelling. Crafting beautiful, intuitive experiences.", members: "20+" },
  { name: "Marketing / Media", desc: "Content, branding, and outreach. Telling our story to the world.", members: "15+" },
];

export default function Departments() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="departments" style={{ position: "relative", padding: "8rem 3rem", background: "#101010" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <div className="bx-tag" style={{ color: "#868686", marginBottom: "1.5rem" }}>Departments</div>
            <h2 className="bx-hero-headline" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#fff", letterSpacing: "-0.06em", lineHeight: "0.92" }}>Our Divisions</h2>
          </div>
          <a href="#contact" className="btn-bx btn-bx-theme--brand">
            <span>Join a Department</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {departments.map((dept) => (
            <div key={dept.name} style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "2.5rem", transition: "border-color 0.3s, background 0.3s" }}>
              <div style={{ width: "2.5rem", height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "rgba(255,214,0,0.1)", color: "#ffd600", fontWeight: 700, marginBottom: "1.25rem" }}>
                {dept.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: "clamp(1.25rem,1.5vw,1.5rem)", fontWeight: 600, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>{dept.name}</h3>
              <p style={{ fontSize: "clamp(0.85rem,0.9vw,0.9rem)", lineHeight: 1.5, color: "#868686" }}>{dept.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", marginTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize: "clamp(0.625rem,0.65vw,0.75rem)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#868686" }}>{dept.members} members</span>
                <ArrowUpRight size={13} style={{ color: "#868686" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
