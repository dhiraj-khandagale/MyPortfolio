import { theme, fonts } from "../../data/theme";
import { skills } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

const categoryIcons = {
  Backend:  "⚙️",
  Frontend: "🎨",
  Database: "🗄️",
  Tools:    "🛠️",
};

// Polished crisp custom SVG icons for every skill in Dhiraj's stack
const skillIcons = {
  "Java": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="2" x2="6" y2="4"></line>
      <line x1="10" y1="2" x2="10" y2="4"></line>
      <line x1="14" y1="2" x2="14" y2="4"></line>
    </svg>
  ),
  "Spring Boot": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"></path>
    </svg>
  ),
  "REST APIs": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1"></rect>
      <rect x="2" y="16" width="6" height="6" rx="1"></rect>
      <rect x="9" y="2" width="6" height="6" rx="1"></rect>
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
      <line x1="12" y1="8" x2="12" y2="12"></line>
    </svg>
  ),
  "React.js": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 2c5.52 0 10 2.24 10 5s-4.48 5-10 5-10-2.24-10-5 4.48-5 10-5z" transform="rotate(30 12 12)"></path>
      <path d="M12 2c5.52 0 10 2.24 10 5s-4.48 5-10 5-10-2.24-10-5 4.48-5 10-5z" transform="rotate(150 12 12)"></path>
    </svg>
  ),
  "HTML": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  ),
  "CSS": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M8 11h8"></path>
      <path d="M8 15h6"></path>
    </svg>
  ),
  "JavaScript": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M9 9v6"></path>
      <path d="M15 15a2.5 2.5 0 0 0 2.5-2.5V9"></path>
    </svg>
  ),
  "MySQL": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"></path>
    </svg>
  ),
  "SQL": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
      <path d="M4 6v8c0 1.66 3.58 3 8 3s8-1.34 8-3V6"></path>
      <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4"></path>
    </svg>
  ),
  "Git": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="18" x2="18" y2="18.01"></line>
      <line x1="6" y1="6" x2="6" y2="6.01"></line>
      <line x1="6" y1="18" x2="6" y2="18.01"></line>
      <path d="M6 15v-6a3 3 0 0 1 3-3h3"></path>
      <line x1="18" y1="9" x2="18" y2="15"></line>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="18" r="3"></circle>
    </svg>
  ),
  "GitHub": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  "Postman": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.25-3 3-3 3s1.75-1.5 3-3zM22 2l-6 6M17 3l4 4M9 13c1.5 1.5 3 2.5 4.5 3L22 2l-7.5 8.5C14 9.5 12.5 9 11 9L6 14c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0l5-5c0-1.5-.5-3-1.5-3.5z"></path>
    </svg>
  ),
  "Eclipse IDE": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a7 7 0 1 0 10 10"></path>
    </svg>
  ),
  "VS Code": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"></path>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  )
};

export default function Skills({ selectedSkill, onSelectSkill }) {
  return (
    <section id="Skills" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "6rem 2rem" }}>
        <FadeIn>
          <SectionTitle label="Technical Skills" accent="var(--accent)" />
        </FadeIn>

        <p style={{
          textAlign: "center",
          color: "var(--light)",
          fontSize: "0.85rem",
          fontFamily: "var(--font-mono)",
          marginTop: "-1.5rem",
          marginBottom: "3rem"
        }}>
          💡 Click on any skill to highlight projects that use it!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}>
          {Object.entries(skills).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.08}>
              <div className="dk-card" style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>
                  {categoryIcons[cat]}
                </div>
                
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.74rem",
                  letterSpacing: "0.15em", color: "var(--accent)",
                  textTransform: "uppercase", marginBottom: "1rem", fontWeight: 600,
                }}>
                  {cat}
                </p>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
                  {items.map((skill) => {
                    const isSelected = selectedSkill === skill;
                    return (
                      <span
                        key={skill}
                        onClick={() => onSelectSkill(isSelected ? null : skill)}
                        className={`dk-skill-badge ${isSelected ? "selected" : ""}`}
                        title={`Click to see projects utilizing ${skill}`}
                      >
                        {skillIcons[skill] && (
                          <span style={{ display: "inline-flex", alignItems: "center" }}>
                            {skillIcons[skill]}
                          </span>
                        )}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
