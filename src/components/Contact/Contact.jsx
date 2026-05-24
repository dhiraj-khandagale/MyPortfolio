import { theme, fonts } from "../../data/theme";
import { personalInfo } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    label: "Email",
    getValue: (p) => p.email,
    getHref: (p) => `mailto:${p.email}`
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    label: "Phone",
    getValue: (p) => p.phone,
    getHref: (p) => `tel:${p.phone}`
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    label: "LinkedIn",
    getValue: () => "linkedin.com/in/dhirajkhandagale",
    getHref: (p) => p.linkedin
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    label: "GitHub",
    getValue: () => "github.com/dhirajkhandagale",
    getHref: (p) => p.github
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    label: "Location",
    getValue: (p) => p.location,
    getHref: () => null
  },
];

export default function Contact() {
  return (
    <section id="Contact" style={{ background: "var(--cardBg)", borderBottom: "1px solid var(--border)", transition: "background 0.3s" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto",
        padding: "6rem 2rem", textAlign: "center",
      }}>
        <FadeIn>
          <SectionTitle label="Get In Touch" accent="var(--accent)" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{
            color: "var(--muted)", maxWidth: 520,
            margin: "0 auto 2.5rem", lineHeight: 1.8,
            fontFamily: "var(--font-sans)",
            fontSize: "1rem"
          }}>
            I'm actively looking for new opportunities. Whether you have a role, a collaborative project,
            or just want to say hi — my inbox is always open!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.25rem",
            justifyContent: "center",
          }}>
            {contactItems.map((item) => {
              const href  = item.getHref(personalInfo);
              const value = item.getValue(personalInfo);
              return (
                <div key={item.label} className="dk-contact-card dk-card" style={{
                  padding: "1.5rem 1.25rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: "140px"
                }}>
                  {/* Icon container */}
                  <div style={{
                    color: "var(--accent)",
                    background: "var(--accentLight)",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                    border: "1px solid rgba(16, 185, 129, 0.08)"
                  }}>
                    {item.icon}
                  </div>

                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.68rem",
                    color: "var(--light)", textTransform: "uppercase",
                    letterSpacing: "0.12em", marginBottom: "0.4rem",
                    fontWeight: 650
                  }}>
                    {item.label}
                  </p>
                  
                  {href ? (
                    <a href={href} style={{
                      color: "var(--accentPop)", fontSize: "0.8rem",
                      textDecoration: "none", wordBreak: "break-all",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500
                    }}
                      onMouseOver={(e) => e.currentTarget.style.color = "var(--accent)"}
                      onMouseOut={(e) => e.currentTarget.style.color = "var(--accentPop)"}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontFamily: "var(--font-sans)" }}>{value}</p>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a href={`mailto:${personalInfo.email}`} style={{ textDecoration: "none" }}>
            <button className="dk-btn-primary" style={{ marginTop: "2.5rem" }}>
              Say Hello 👋
            </button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
