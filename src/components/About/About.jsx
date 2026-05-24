import { theme, fonts } from "../../data/theme";
import { personalInfo, stats } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

export default function About() {
  return (
    <section id="About" style={{ background: "var(--cardBg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeIn>
          <SectionTitle label="About Me" accent="var(--accent)" />
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "3.5rem",
          alignItems: "center",
          marginTop: "2rem"
        }} className="dk-about-grid">
          
          {/* Left Side: Beautiful Framed Photo headshot with proper centering */}
          <FadeIn delay={0.1}>
            <div className="dk-about-photo-col">
              <div style={{ position: "relative", display: "inline-block", maxWidth: "340px", width: "100%" }}>
                {/* Floating tech background badge */}
                <div style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  border: "2px dashed var(--accent)",
                  opacity: 0.3,
                  zIndex: 0
                }} />
                
                {/* Accent solid backplate */}
                <div style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  background: "var(--accentLight)",
                  zIndex: 0,
                  boxShadow: "var(--shadow)"
                }} />

                {/* Main Photo Image Card */}
                <img
                  src="/dhiraj.jpg"
                  alt="Dhiraj Khandagale - Full Stack Developer"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "380px",
                    borderRadius: "16px",
                    objectFit: "cover",
                    display: "block",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "var(--shadow-lg)",
                    border: "1px solid var(--border)",
                    transition: "transform 0.4s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.02) translateY(-4px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                  }}
                />

                {/* Floating Stat Badge */}
                <div style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "-20px",
                  background: "var(--cardBg)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "0.5rem 1rem",
                  boxShadow: "var(--shadow-lg)",
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <span style={{ fontSize: "1.2rem" }}>💻</span>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--light)", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>Specialization</p>
                    <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent)" }}>Java Full Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Professional details */}
          <FadeIn delay={0.2}>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "0.5rem"
              }}>
                Engineering Story
              </p>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "var(--text)",
                marginBottom: "1rem",
                lineHeight: 1.3
              }}>
                Passionate Developer &amp; <span style={{ color: "var(--accent)" }}>Problem Solver</span>
              </h2>

              <p style={{ color: "var(--muted)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "0.95rem", fontFamily: "var(--font-sans)" }}>
                {personalInfo.summary}
              </p>
              
              <p style={{ color: "var(--muted)", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "0.95rem", fontFamily: "var(--font-sans)" }}>
                {personalInfo.summary2}
              </p>

              {/* Stats grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem"
              }}>
                {stats.map(({ icon, value, label }) => (
                  <div key={label} style={{
                    background: "var(--accentLight)",
                    borderRadius: 12,
                    padding: "1rem",
                    textAlign: "center",
                    border: "1px solid rgba(16, 185, 129, 0.08)",
                  }}>
                    <div style={{ fontSize: "1.25rem", marginBottom: "0.2rem" }}>{icon}</div>
                    <div style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                    }}>
                      {value}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.05em",
                      color: "var(--muted)",
                      marginTop: "0.1rem",
                    }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Spoken Languages */}
              <div>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.1em",
                  color: "var(--light)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem"
                }}>
                  Languages Spoken:
                </p>
                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  {personalInfo.languages.map((lang) => (
                    <span key={lang} style={{
                      background: "var(--bg)",
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                      borderRadius: 20,
                      padding: "0.3rem 0.85rem",
                      fontSize: "0.76rem",
                      fontFamily: "var(--font-mono)",
                    }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
