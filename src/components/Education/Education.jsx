import { theme, fonts } from "../../data/theme";
import { education } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

export default function Education() {
  return (
    <section id="Education" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeIn>
          <SectionTitle label="Education" accent="var(--accent)" />
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.08}>
              <div
                className="dk-card"
                style={{
                  padding: "1.75rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.75rem",
                  position: "relative",
                  overflow: "hidden"
                }}
                className="dk-edu-card dk-card"
              >
                {/* Visual Icon Container */}
                <div style={{
                  fontSize: "2rem",
                  flexShrink: 0,
                  width: 54,
                  height: 54,
                  borderRadius: "12px",
                  background: "var(--accentLight)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(16, 185, 129, 0.08)"
                }}>
                  {edu.icon}
                </div>

                {/* Degree Info */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontWeight: 700, fontSize: "1.1rem", color: "var(--text)",
                    fontFamily: "var(--font-sans)",
                  }}>
                    {edu.degree}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.82rem",
                    color: "var(--accent)", marginTop: "0.2rem",
                    fontWeight: 550
                  }}>
                    {edu.school}
                  </p>
                  
                  {/* Academic performance badge */}
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                    marginTop: "0.5rem",
                    fontFamily: "var(--font-mono)"
                  }}>
                    Performance: <strong>{edu.detail}</strong>
                  </span>
                </div>

                {/* Grad Year Badge */}
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                  fontWeight: 700, color: "var(--accent)",
                  background: "var(--accentLight)",
                  padding: "0.35rem 0.95rem", borderRadius: 20, flexShrink: 0,
                  border: "1px solid rgba(16, 185, 129, 0.15)"
                }}>
                  {edu.year}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
