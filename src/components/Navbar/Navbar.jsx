import { useState, useEffect } from "react";
import { theme as themeObj, fonts } from "../../data/theme";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Certifications", "Contact"];

export default function Navbar({ active, onNav, themeMode, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNav(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "var(--bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "var(--shadow)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 70,
        }}>
          {/* Logo Headshot and Name */}
          <div
            onClick={() => handleNav("About")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              cursor: "pointer"
            }}
          >
            <img
              src="/dhiraj.jpg"
              alt="Logo"
              style={{
                width: 32,
                height: 32,
                borderRadius: "6px",
                objectFit: "cover",
                objectPosition: "center 25%",
                border: "1.5px solid var(--accent)"
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "1rem",
                color: "var(--accent)", letterSpacing: "0.05em",
              }}
            >
              DK.
            </span>
          </div>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="dk-nav-links">
            <div style={{ display: "flex", gap: "0.15rem" }}>
              {NAV_LINKS.map((id) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    className={`dk-nav-btn ${isActive ? "active" : ""}`}
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.76rem", letterSpacing: "0.06em",
                      padding: "0.5rem 0.8rem", borderRadius: 6, cursor: "pointer", border: "none",
                      background: "transparent",
                      color: isActive ? "var(--accent)" : "var(--text)",
                      fontWeight: isActive ? 600 : 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {id}
                  </button>
                );
              })}
            </div>

            {/* Separator */}
            <span style={{ width: 1, height: 20, background: "var(--border)" }} />

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${themeMode === "light" ? "Dark" : "Light"} Mode`}
            >
              {themeMode === "light" ? (
                /* Moon Icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                /* Sun Icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
          </div>

          {/* Hamburger & mobile toggle container */}
          <div style={{ display: "none", alignItems: "center", gap: "0.5rem" }} className="dk-hamburger">
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              style={{ width: 34, height: 34 }}
            >
              {themeMode === "light" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none",
                fontSize: "1.3rem", cursor: "pointer", color: "var(--accent)",
                padding: "0.2rem 0.5rem"
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", top: 70, left: 0, right: 0, zIndex: 99,
        background: "var(--bg)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid var(--border)`,
        padding: menuOpen ? "1rem 2rem" : "0 2rem",
        maxHeight: menuOpen ? 450 : 0,
        overflow: "hidden",
        boxShadow: menuOpen ? "var(--shadow)" : "none",
        transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease",
        display: "flex", flexDirection: "column", gap: "0.35rem",
      }}>
        {NAV_LINKS.map((id) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => handleNav(id)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.06em",
                padding: "0.65rem 1rem", borderRadius: 6, cursor: "pointer", border: "none",
                background: isActive ? "var(--accentLight)" : "transparent",
                color: isActive ? "var(--accent)" : "var(--text)",
                textAlign: "left", textTransform: "uppercase",
                fontWeight: isActive ? 600 : 400
              }}
            >
              {id}
            </button>
          );
        })}
      </div>
    </>
  );
}
