import { useEffect, useState } from "react";
import "./App.css";
import "./Intro.css";
import "./IntroLayout.css";
import "./IntroSignature.css";
import "./SignatureFont.css";
import "./HeroIntro.css";
import "./HeroIntroFix.css";
import "./HeroTypography.css";
import "./HeroReference.css";
import "./ScrollEffects.css";
import Capabilities from "./components/Capabilities.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import heroIllustration from "../Group 2.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Nibir Kalita home">
        NK<span>—</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <i />
        <i />
      </button>
      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Primary navigation"
      >
        <a href="#capabilities" onClick={closeMenu}>
          CAPABILITIES
        </a>
        <a href="#projects" onClick={closeMenu}>
          PROJECTS
        </a>
        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>
        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </nav>
    </header>
  );
}

function IntroLoader({ phase }) {
  return (
    <section
      className={`intro-loader ${phase === "leaving" ? "is-leaving" : ""}`}
      aria-label="Portfolio introduction"
    >
      <svg
        className="signature-art"
        viewBox="0 0 1200 300"
        role="img"
        aria-labelledby="signature-title"
      >
        <title id="signature-title">
          Nibir Kalita — animated signature-style wordmark
        </title>
        <text
          className="signature-name"
          x="600"
          y="190"
          textAnchor="middle"
          textLength="1040"
          lengthAdjust="spacingAndGlyphs"
        >
          Nibir Kalita
        </text>
      </svg>
    </section>
  );
}

function App() {
  const [introPhase, setIntroPhase] = useState("loading");

  useEffect(() => {
    if (introPhase !== "loading") return undefined;
    const timer = window.setTimeout(() => setIntroPhase("leaving"), 3200);
    return () => window.clearTimeout(timer);
  }, [introPhase]);

  useEffect(() => {
    if (introPhase !== "leaving") return undefined;
    const timer = window.setTimeout(() => setIntroPhase("done"), 700);
    return () => window.clearTimeout(timer);
  }, [introPhase]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (introPhase !== "done") document.body.style.overflow = "hidden";
    else document.body.style.overflow = previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introPhase]);

  return (
    <>
      <div
        className={`site-shell site-content ${introPhase === "done" ? "is-ready" : ""}`}
        id="home"
        aria-hidden={introPhase !== "done"}
        inert={introPhase !== "done"}
      >
        <Header />
        <main id="main-content">
          <section className="hero scroll-panel" aria-labelledby="hero-title">
            <div className="hero-meta">
              <span>COMPUTER SCIENCE · DESIGN · BUILDING</span>
              <span>JORHAT, ASSAM / INDIA</span>
            </div>
            <div className="hero-intro-layout">
              <div className="hero-portrait scroll-parallax">
                <img
                  src={heroIllustration}
                  alt="Illustrated portrait collage of Nibir Kalita"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-intro-copy">
                <p className="hero-hello" aria-label="Hi">
                  <span className="hello-h">H</span>
                  <span className="hello-i" aria-hidden="true">
                    <i />
                    <svg viewBox="0 0 40 40" focusable="false">
                      <path d="M20 0 24.7 15.3 40 20 24.7 24.7 20 40 15.3 24.7 0 20 15.3 15.3Z" />
                    </svg>
                  </span>
                </p>
                <h1 id="hero-title">
                  I’m <span>Nibir</span>
                  <i>.</i>
                </h1>
                <p className="hero-intro-subtitle">
                  Developer, designer, and curious builder turning ideas into
                  useful things.
                </p>
                <a className="scroll-link" href="#capabilities">
                  SCROLL TO EXPLORE <span>↓</span>
                </a>
                <a className="hero-contact" href="#contact">
                  CONTACT <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>
          <Capabilities />
          <Projects />
          <About />
          <section className="experience-section scroll-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">LEARNING BY DOING</p>
                <h2>
                  Where ideas
                  <br />
                  meet people.
                </h2>
              </div>
              <p className="section-intro">
                A few places where I’ve been able to learn, contribute, and try
                things out.
              </p>
            </div>
            <div className="experience-list">
              <article>
                <span>01</span>
                <div>
                  <p className="eyebrow">ACADEMIC INTERNSHIP</p>
                  <h3>IIT Guwahati</h3>
                  <p>
                    Contributed to an academic information portal, exploring
                    structured workflows, application development, and database
                    design.
                  </p>
                </div>
                <b>↗</b>
              </article>
              <article>
                <span>02</span>
                <div>
                  <p className="eyebrow">TECH COMMUNITY</p>
                  <h3>GLUG · Jorhat Engineering College</h3>
                  <p>
                    Part of the GNU/Linux Users Group organizing committee,
                    helping bring technical activities and events to the
                    community.
                  </p>
                </div>
                <b>↗</b>
              </article>
              <article>
                <span>03</span>
                <div>
                  <p className="eyebrow">HACKATHONS &amp; EVENTS</p>
                  <h3>Hackvita 4.0</h3>
                  <p>
                    Explored collaborative problem-solving and rapid product
                    thinking through hackathon activities.
                  </p>
                </div>
                <b>↗</b>
              </article>
            </div>
          </section>
          <Contact />
        </main>
        <footer className="site-footer">
          <a className="brand" href="#home">
            NK<span>—</span>
          </a>
          <p>
            Designed with curiosity.
            <br />
            Built with purpose.
          </p>
          <span>© NIBIR KALITA / 2026</span>
          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </footer>
      </div>
      {introPhase !== "done" && <IntroLoader phase={introPhase} />}
    </>
  );
}

export default App;
