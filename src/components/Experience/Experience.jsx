import { theme, fonts } from "../../data/theme";
import { experiences } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

export default function Experience() {
  return (
    <section id="Experience" style={{ background: "var(--cardBg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 850, margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeIn>
          <SectionTitle label="Professional Experience" accent="var(--accent)" />
        </FadeIn>

        {/* Timeline Container */}
        <div className="timeline-container" style={{ marginTop: "1rem" }}>
          {experiences.map((exp, i) => (
            <div key={exp.role} className="timeline-item">
              {/* Timeline Dot with matching color */}
              <div
                className="timeline-dot"
                style={{
                  borderColor: exp.color,
                  boxShadow: `0 0 8px ${exp.color}44`
                }}
              />

              <FadeIn delay={i * 0.1}>
                <div style={{
                  background: "var(--bg)",
                  border: `1px solid var(--border)`,
                  borderRadius: 14,
                  padding: "2rem",
                  boxShadow: "var(--shadow)",
                  transition: "all 0.3s ease"
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = exp.color;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1rem"
                  }}>
                    <div>
                      {/* Badge indicator */}
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        background: `${exp.color}15`,
                        color: exp.color,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        fontWeight: "bold"
                      }}>
                        {exp.type === "work" ? "Internship" : "Leadership"}
                      </span>

                      <h3 style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        fontFamily: "var(--font-sans)",
                        marginTop: "0.5rem"
                      }}>
                        {exp.role}
                      </h3>
                      
                      <p style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        color: exp.color,
                        marginTop: "0.15rem"
                      }}>
                        {exp.company} {exp.location ? `· ${exp.location}` : ""}
                      </p>
                    </div>

                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--muted)",
                      background: "var(--cardBg)", padding: "0.35rem 0.85rem",
                      border: "1px solid var(--border)",
                      borderRadius: 20, height: "fit-content", whiteSpace: "nowrap",
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul style={{
                    paddingLeft: "1.2rem",
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    fontSize: "0.92rem",
                    fontFamily: "var(--font-sans)",
                    marginBottom: "1.25rem"
                  }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ marginBottom: "0.4rem" }}>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Skills/Tags Used */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.15rem" }}>
                    {exp.tags.map((t) => (
                      <span key={t} style={{
                        display: "inline-block",
                        background: "var(--cardBg)",
                        color: "var(--text)",
                        border: "1px solid var(--border)",
                        borderRadius: 20,
                        padding: "0.2rem 0.7rem",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        margin: "0.15rem",
                        transition: "all 0.25s ease"
                      }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = exp.color;
                          e.currentTarget.style.color = exp.color;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.color = "var(--text)";
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
