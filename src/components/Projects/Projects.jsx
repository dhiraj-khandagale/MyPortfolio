import { theme, fonts } from "../../data/theme";
import { projects } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

export default function Projects({ selectedSkill }) {
  return (
    <section id="Projects" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeIn>
          <SectionTitle label="Featured Projects" accent="var(--accent)" />
        </FadeIn>

        {selectedSkill && (
          <FadeIn>
            <div style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "0.85rem",
              fontFamily: "var(--font-mono)",
              color: "var(--accent)"
            }}>
              Showing projects featuring: <span style={{
                background: "var(--accentLight)",
                padding: "0.2rem 0.6rem",
                borderRadius: "12px",
                fontWeight: "bold"
              }}>{selectedSkill}</span>
            </div>
          </FadeIn>
        )}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}>
          {projects.map((p, i) => {
            const hasSelectedSkill = selectedSkill ? p.tech.includes(selectedSkill) : false;
            
            // Build dynamic classes
            let cardClass = "dk-card";
            if (selectedSkill) {
              cardClass += hasSelectedSkill ? " dk-highlight-active" : " dk-highlight-dimmed";
            }

            return (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className={cardClass} style={{
                  borderTop: `4px solid ${p.color}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "2rem" }}>{p.icon}</span>
                    
                    {/* Professional Project links */}
                    <a
                      href="https://github.com/dhirajkhandagale"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--light)",
                        textDecoration: "none",
                        fontSize: "1.2rem",
                        transition: "color 0.2s"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = "var(--accent)"}
                      onMouseOut={(e) => e.currentTarget.style.color = "var(--light)"}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.25rem", fontWeight: 700,
                    color: "var(--text)", marginBottom: "0.75rem",
                  }}>
                    {p.title}
                  </h3>

                  <ul style={{
                    paddingLeft: "1.1rem", color: "var(--muted)",
                    fontSize: "0.92rem", lineHeight: 1.8,
                    marginBottom: "1.5rem", flex: 1,
                    fontFamily: "var(--font-sans)"
                  }}>
                    {p.points.map((pt, j) => <li key={j} style={{ marginBottom: "0.4rem" }}>{pt}</li>)}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.1rem" }}>
                    {p.tech.map((t) => {
                      const isHighlighted = selectedSkill === t;
                      return (
                        <span key={t} style={{
                          display: "inline-block",
                          background: isHighlighted ? "var(--accent)" : `${p.color}15`,
                          color: isHighlighted ? "#fff" : p.color,
                          border: `1px solid ${p.color}25`,
                          borderRadius: 20,
                          padding: "0.2rem 0.7rem",
                          fontSize: "0.74rem",
                          fontFamily: "var(--font-mono)",
                          margin: "0.15rem",
                          fontWeight: isHighlighted ? "bold" : "normal"
                        }}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
