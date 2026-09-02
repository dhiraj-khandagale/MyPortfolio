import { useState } from "react";
import { theme, fonts } from "../../data/theme";
import { certifications } from "../../data/portfolioData";
import { FadeIn, SectionTitle } from "../../hooks/useInView";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const isPDF = (filename) => filename.toLowerCase().endsWith(".pdf");

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
              <div 
                className="dk-card" 
                onClick={() => setSelectedCert(cert)}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid var(--border)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow)";
                }}
              >
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
                
                {/* View Certificate Button */}
                {cert.certificateFile && (
                  <div style={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border)",
                    width: "100%"
                  }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      📄 Click to View
                    </span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem"
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={{
              background: "var(--cardBg)",
              borderRadius: 16,
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: "1.5rem 2rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: 0
              }}>
                {selectedCert.title}
              </h2>
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  color: "var(--text)",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text)";
                }}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div style={{
              flex: 1,
              overflow: "auto",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {isPDF(selectedCert.certificateFile) ? (
                <iframe
                  src={selectedCert.certificateFile}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: 8,
                    minHeight: "400px"
                  }}
                  title={`${selectedCert.title} Certificate`}
                />
              ) : (
                <img
                  src={selectedCert.certificateFile}
                  alt={`${selectedCert.title} Certificate`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: 8,
                    objectFit: "contain"
                  }}
                />
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: "1.5rem 2rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "var(--font-mono)"
              }}>
                <p style={{ margin: "0 0 0.3rem 0" }}>
                  <strong style={{ color: "var(--text)" }}>{selectedCert.issuer}</strong>
                </p>
                <p style={{ margin: 0 }}>Issued: {selectedCert.year}</p>
              </div>
              <a
                href={selectedCert.certificateFile}
                download
                style={{
                  background: "var(--accent)",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "0.6rem 1.2rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--accentPop)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                ⬇️ Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
