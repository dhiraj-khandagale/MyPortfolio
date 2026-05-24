import { theme, fonts } from "../../data/theme";
import { personalInfo } from "../../data/portfolioData";
import TerminalConsole from "./TerminalConsole";
import { FadeIn } from "../../hooks/useInView";

export default function Hero({ onNav }) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg, var(--bg) 0%, rgba(21, 121, 84, 0.04) 50%, var(--bg) 100%)",
      padding: "6rem 2rem 3rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative gradients */}
      <div style={{
        position: "absolute", borderRadius: "50%", opacity: 0.12, filter: "blur(80px)",
        width: 400, height: 400, background: "var(--accent)", top: -50, right: -100,
        zIndex: 0
      }} />
      <div style={{
        position: "absolute", borderRadius: "50%", opacity: 0.1, filter: "blur(60px)",
        width: 300, height: 300, background: "var(--purple)", bottom: -50, left: -50,
        zIndex: 0
      }} />

      <div style={{
        position: "relative", zIndex: 1, maxWidth: 1100, width: "100%",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "3rem", alignItems: "center"
      }} className="dk-hero-grid">
        
        {/* Left Column: Welcome & Summary */}
        <FadeIn delay={0.05}>
          <div style={{ textAlign: "left" }}>
            {/* Availability Badge */}
            {personalInfo.available && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--accentLight)", color: "var(--accent)",
                border: "1px solid rgba(16, 185, 129, 0.15)", borderRadius: 20,
                padding: "0.4rem 1.1rem", fontSize: "0.8rem",
                fontFamily: "var(--font-mono)", marginBottom: "1.5rem",
                boxShadow: "0 2px 10px rgba(16, 185, 129, 0.08)",
                animation: "pulseGlow 2.5s infinite"
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "var(--accent)", display: "inline-block",
                  animation: "pulse 1.5s infinite",
                }} />
                Available for Roles
              </div>
            )}

            {/* Visual Headshot Avatar inside Hero (Responsive alignment) */}
            <div className="dk-hero-avatar-group">
              <img
                src="/dhiraj.jpg"
                alt="Dhiraj Khandagale"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2.5px solid var(--accent)",
                  boxShadow: "var(--shadow)"
                }}
              />
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Hello World, I am
                </p>
                <h1 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}>
                  {personalInfo.name}
                </h1>
              </div>
            </div>

            {/* Taglines */}
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}>
              {personalInfo.tagline}
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--light)",
              marginBottom: "1.5rem",
            }}>
              {personalInfo.subTagline}
            </p>

            <p style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              fontFamily: "var(--font-sans)"
            }}>
              Engineering high-fidelity full stack software with **Java**, **Spring Boot**, and **React**. 
              Specialized in crafting clean backend logic, database schema design, and seamless user experiences with academic excellence.
            </p>

            {/* CTA Buttons (Responsive alignment) */}
            <div className="dk-hero-ctas" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <button
                onClick={() => {
                  document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
                  onNav("Contact");
                }}
                className="dk-btn-primary"
              >
                Get In Touch 🚀
              </button>
              <button
                onClick={() => {
                  document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
                  onNav("Projects");
                }}
                className="dk-btn-secondary"
              >
                View Projects 📦
              </button>
            </div>

            {/* Meta chips (Responsive alignment) */}
            <div className="dk-hero-chips" style={{
              display: "flex", gap: "1.25rem", flexWrap: "wrap"
            }}>
              {[
                ["📍", personalInfo.location],
                ["🎓", "B.E. IT Pravara Rural"],
                ["⭐", "SGPA 8.2"]
              ].map(([icon, text]) => (
                <span key={text} style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--muted)",
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  background: "var(--cardBg)", border: "1px solid var(--border)",
                  padding: "0.3rem 0.75rem", borderRadius: 20
                }}>
                  {icon} {text}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right Column: Terminal Console */}
        <FadeIn delay={0.2}>
          <div style={{ width: "100%", maxWidth: "520px", margin: "0 auto" }}>
            <TerminalConsole />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
