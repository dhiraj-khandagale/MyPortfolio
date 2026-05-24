import { useState, useEffect } from "react";
import "./index.css";

import Navbar         from "./components/Navbar/Navbar";
import Hero           from "./components/Hero/Hero";
import About          from "./components/About/About";
import Skills         from "./components/Skills/Skills";
import Experience     from "./components/Experience/Experience";
import Projects       from "./components/Projects/Projects";
import Education      from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact        from "./components/Contact/Contact";
import Footer         from "./components/Footer/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("About");
  const [themeMode, setThemeMode] = useState("dark");
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Synchronize theme state with DOM custom attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
    if (skill) {
      setTimeout(() => {
        document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
        setActiveNav("Projects");
      }, 150);
    }
  };

  return (
    <>
      <Navbar
        active={activeNav}
        onNav={setActiveNav}
        themeMode={themeMode}
        onToggleTheme={handleToggleTheme}
      />
      <Hero onNav={setActiveNav} />
      <About />
      <Skills
        selectedSkill={selectedSkill}
        onSelectSkill={handleSelectSkill}
      />
      <Experience />
      <Projects
        selectedSkill={selectedSkill}
      />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
