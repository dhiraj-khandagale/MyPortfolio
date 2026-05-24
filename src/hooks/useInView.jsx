import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ label, accent }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.8rem",
        letterSpacing: "0.2em",
        color: accent,
        textTransform: "uppercase",
        marginBottom: "0.4rem",
      }}>
        ── {label} ──
      </p>
      <div style={{ width: 40, height: 3, background: accent, margin: "0 auto", borderRadius: 2 }} />
    </div>
  );
}
