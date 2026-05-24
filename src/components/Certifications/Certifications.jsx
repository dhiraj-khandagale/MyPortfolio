import { theme, fonts } from "../../data/theme";
import { certifications } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

export default function Certifications() {
  return (
    <section id="Certifications" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeIn>
          <SectionTitle label="Credentials &amp; Certifications" accent="var(--accent)" />
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.1}>
              <div className="dk-card" style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                justifyContent: "space-between"
              }}>
                <div style={{ width: "100%" }}>
                  {/* Visual Icon Header */}
                  <div style={{
                    fontSize: "2.2rem",
                    marginBottom: "1rem",
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--accentLight)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(16, 185, 129, 0.08)",
                    margin: "0 auto 1.25rem"
                  }}>
                    {cert.icon}
                  </div>

                  <h3 style={{
                    fontWeight: 700, fontSize: "1.1rem", color: "var(--text)",
                    marginBottom: "0.4rem", fontFamily: "var(--font-sans)",
                    lineHeight: 1.3
                  }}>
                    {cert.title}
                  </h3>

                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                    color: "var(--accent)", marginBottom: "1.25rem",
                    fontWeight: 550
                  }}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Score & Year Container */}
                <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                  {cert.score && (
                    <span style={{
                      background: "var(--accentLight)", color: "var(--accentPop)",
                      border: "1px solid rgba(16, 185, 129, 0.12)",
                      borderRadius: 20, padding: "0.25rem 0.8rem",
                      fontSize: "0.76rem", fontFamily: "var(--font-mono)",
                      fontWeight: 600
                    }}>
                      Score: {cert.score}
                    </span>
                  )}
                  <span style={{
                    background: "var(--bg)", color: "var(--muted)",
                    border: "1px solid var(--border)",
                    borderRadius: 20, padding: "0.25rem 0.8rem",
                    fontSize: "0.76rem", fontFamily: "var(--font-mono)",
                  }}>
                    Issued: {cert.year}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
