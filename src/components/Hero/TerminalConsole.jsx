import { useState, useRef, useEffect } from "react";
import { personalInfo, skills, projects } from "../../data/portfolioData";

export default function TerminalConsole() {
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Dhiraj's Portfolio Console v1.0.0" },
    { type: "output", text: "Type 'help' to see list of available commands." },
    { type: "output", text: "" }
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmedCmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: "input", text: `dhiraj@portfolio:~$ ${input}` }];

      if (trimmedCmd === "") {
        setHistory(newHistory);
        setInput("");
        return;
      }

      let response = [];
      switch (trimmedCmd) {
        case "help":
          response = [
            { type: "output", text: "Available commands:" },
            { type: "output", text: "  about     - Brief background of Dhiraj" },
            { type: "output", text: "  skills    - List core competencies and tech stack" },
            { type: "output", text: "  projects  - Highlighted software engineering projects" },
            { type: "output", text: "  contact   - Get email, github, and linkedin links" },
            { type: "output", text: "  clear     - Clear the terminal console" },
            { type: "output", text: "  sudo hire - Run the ultimate hire protocol" }
          ];
          break;
        case "about":
          response = [
            { type: "output", text: `Name: ${personalInfo.name}` },
            { type: "output", text: `Role: ${personalInfo.tagline}` },
            { type: "output", text: `Summary: ${personalInfo.summary}` },
            { type: "output", text: `Location: ${personalInfo.location}` }
          ];
          break;
        case "skills":
          response = [
            { type: "output", text: "Technical Competencies:" },
            ...Object.entries(skills).map(([category, list]) => ({
              type: "output",
              text: `  ${category.padEnd(10)}: ${list.join(", ")}`
            }))
          ];
          break;
        case "projects":
          response = [
            { type: "output", text: "Dhiraj's Core Projects:" },
            ...projects.flatMap((p) => [
              { type: "output", text: `  • ${p.title} (${p.tech.join(", ")})` },
              ...p.points.map((pt) => ({ type: "output", text: `    - ${pt}` }))
            ])
          ];
          break;
        case "contact":
          response = [
            { type: "output", text: `Email: ${personalInfo.email}` },
            { type: "output", text: `Phone: ${personalInfo.phone}` },
            { type: "output", text: `LinkedIn: ${personalInfo.linkedin}` },
            { type: "output", text: `GitHub: ${personalInfo.github}` }
          ];
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "sudo hire":
          response = [
            { type: "output", text: "⚡ HIRE PROTOCOL TRIGGERED! ⚡" },
            { type: "output", text: "[INFO] Contact authorization granted." },
            { type: "output", text: "[SUCCESS] Redirecting you to contact page..." }
          ];
          setTimeout(() => {
            document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
          }, 1200);
          break;
        default:
          response = [
            { type: "output", text: `command not found: ${trimmedCmd}. Type 'help' for suggestions.` }
          ];
      }

      setHistory([...newHistory, ...response, { type: "output", text: "" }]);
      setInput("");
    }
  };

  return (
    <div className="terminal-window" style={{ height: "350px", width: "100%", margin: "0 auto" }}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot-item" style={{ background: "#ff5f56" }} />
          <span className="terminal-dot-item" style={{ background: "#ffbd2e" }} />
          <span className="terminal-dot-item" style={{ background: "#27c93f" }} />
        </div>
        <span style={{ fontSize: "0.75rem", opacity: 0.6, fontFamily: "var(--font-mono)", color: "#fff" }}>
          bash - dhiraj-portfolio
        </span>
        <span style={{ width: 30 }} />
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, i) => (
          <div
            key={i}
            style={{
              whiteSpace: "pre-wrap",
              color: line.type === "input" ? "var(--accent)" : "#ffffffb3",
              fontFamily: "var(--font-mono)",
            }}
          >
            {line.text}
          </div>
        ))}
        <div className="terminal-prompt">
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>dhiraj@portfolio:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
