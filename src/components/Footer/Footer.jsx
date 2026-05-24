import { theme, fonts } from "../../data/theme";
import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "2.5rem 2rem",
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      color: "var(--light)",
      borderTop: `1px solid var(--border)`,
      background: "var(--bg)",
      transition: "background 0.3s, border-color 0.3s"
    }}>
      <p style={{ letterSpacing: "0.02em" }}>
        Designed &amp; Built with ☕ &amp; React by{" "}
        <span style={{ color: "var(--accent)", fontWeight: "bold" }}>{personalInfo.name}</span>{" "}
        · {new Date().getFullYear()}
      </p>
      <p style={{ marginTop: "0.4rem", opacity: 0.8 }}>
        {personalInfo.tagline} ·Pravara Rural College IT '26
      </p>
    </footer>
  );
}
