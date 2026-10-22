import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    name: 'CarbonLens',
    type: 'Concept · Sustainability · Blockchain',
    description: 'A blue-carbon registry platform concept combining blockchain with satellite-based Measurement, Reporting, and Verification (MRV).',
    note: 'Concept / project exploration',
    visual: 'carbon',
    link: 'https://carbonlens.space/',
    linkLabel: 'Visit CarbonLens',
  },
  {
    name: 'Academic Information Portal',
    type: 'Internship · Education · Data',
    description: 'An academic information management portal developed during an internship project associated with IIT Guwahati. Focused on organizing academic records through structured workflows and a PostgreSQL-backed data model.',
    note: 'Academic internship project',
    visual: 'campus',
  },
  {
    name: 'SkinWise',
    type: 'AI exploration · Healthcare',
    description: 'An AI-oriented skin disease detection project exploring image-based skin condition analysis and how machine learning might support healthcare workflows.',
    note: 'Exploratory project',
    visual: 'skinwise',
  },
  {
    name: 'HireWise',
    type: 'Product exploration · Recruitment',
    description: 'A hiring and recruitment workflow project exploring ways to connect candidates and opportunities more efficiently.',
    note: 'Product exploration',
    visual: 'hirewise',
  },
  {
    name: 'Tourism-NE',
    type: 'Web application · Northeast India',
    description: 'A tourism-focused web application concept showcasing destinations and travel opportunities across Northeast India.',
    note: 'Frontend project',
    visual: 'tourism',
  },
]

const skillGroups = [
  ['Programming', ['C', 'C++', 'Python', 'JavaScript', 'TypeScript']],
  ['Frontend', ['HTML', 'CSS', 'React', 'Vite', 'Tailwind CSS']],
  ['Data & backend', ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLAlchemy']],
  ['Tools & making', ['Git & GitHub', 'Docker', 'Figma', 'Canva', 'Notion', 'FL Studio']],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="topbar">
    <a className="brand" href="#home" aria-label="Nibir Kalita — homepage"><span>NK</span></a>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i/><i/></button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
      <a href="#work" onClick={closeMenu}>Selected work</a>
      <a href="#about" onClick={closeMenu}>About</a>
      <a href="#skills" onClick={closeMenu}>Skills</a>
      <a href="#experience" onClick={closeMenu}>Experience</a>
    </nav>
    <a className="pill pill-light top-cta" href="#contact"><span>Let’s Connect</span><span aria-hidden="true">↗</span></a>
  </header>
}

function PortfolioProject({ project, index, onOpen }) {
  return <button className={`project-card project-${index}`} type="button" onClick={() => onOpen(project)} aria-label={`View details for ${project.name}`}>
    <ProjectPreview kind={project.visual}/>
    <span className="project-shade"/>
    <span className="project-meta"><span><strong>{project.name}</strong><small>{project.type}</small></span><span className="project-arrow">↗</span></span>
    <span className="project-index">0{index + 1}</span>
  </button>
}

function ProjectPreview({ kind }) {
  return <span className={`project-preview preview-${kind}`} aria-hidden="true">
    <span className="preview-orb"/>
    <span className="preview-window">
      <span className="preview-bar"><i/><i/><i/></span>
      <span className="preview-content">
        {kind === 'carbon' && <><span className="preview-label">BLUE CARBON · REGISTRY</span><b>Restoring<br/>coastal nature.</b><span className="preview-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/></span><span className="preview-button">Explore projects ↗</span></>}
        {kind === 'campus' && <><span className="preview-label">ACADEMIC PORTAL</span><b>Information,<br/>in one place.</b><span className="preview-panels"><i/><i/><i/></span><span className="preview-lines"><i/><i/><i/></span></>}
        {kind === 'skinwise' && <><span className="preview-label">SKINWISE · AI EXPLORATION</span><b>Understand<br/>your skin.</b><span className="preview-skin"><i/></span><span className="preview-button">Start a check →</span></>}
        {kind === 'hirewise' && <><span className="preview-label">HIREWISE · TALENT</span><b>Find your<br/>next match.</b><span className="preview-profile"><i/><i/><i/></span><span className="preview-lines"><i/><i/><i/></span></>}
        {kind === 'tourism' && <><span className="preview-label">DISCOVER THE NORTHEAST</span><b>Closer to<br/>the wild.</b><span className="preview-landscape"><i/><i/><i/></span><span className="preview-button">Find your journey ↗</span></>}
      </span>
    </span>
  </span>
}

function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const handleKey = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [project, onClose])
  if (!project) return null
  return <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <button className="dialog-close" onClick={onClose} aria-label="Close project details">×</button>
      <p className="eyebrow">{project.note}</p>
      <h2 id="dialog-title">{project.name}</h2>
      <p className="dialog-type">{project.type}</p>
      <p className="dialog-description">{project.description}</p>
      {project.link && <a className="pill pill-light" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <span>↗</span></a>}
      {!project.link && <p className="dialog-note">Details describe the project scope provided; no public demo link was supplied.</p>}
    </section>
  </div>
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <p className="eyebrow">A NOTE TO NIBIR</p>
    <h3>{sent ? 'Thanks for reaching out.' : 'Have something in mind?'}</h3>
    {sent ? <p className="form-confirmation">This demo form doesn’t send messages yet. Connect a preferred email or form service to receive submissions.</p> : <>
      <div className="form-fields">
        <label>Your name<input name="name" autoComplete="name" required placeholder="How should I call you?"/></label>
        <label>Your e-mail<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
        <label className="wide">What would you like to talk about?<textarea name="message" rows="4" required placeholder="A project, an idea, or just hello…"/></label>
      </div>
      <button className="pill submit-button" type="submit">Send a note <span>↗</span></button>
      <small className="form-note">Demo only — your message stays in this browser and is not transmitted.</small>
    </>}
  </form>
}

function CookieNotice() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('nibir-cookie-choice'))
  const dismiss = () => { localStorage.setItem('nibir-cookie-choice', 'accepted'); setVisible(false) }
  if (!visible) return null
  return <aside className="cookie-card" aria-label="Cookie preferences">
    <button className="cookie-close" aria-label="Close cookie notice" onClick={dismiss}>×</button>
    <h2>A little privacy note</h2>
    <p>This portfolio stores one local preference so it won’t show this note again. No analytics or tracking are enabled.</p>
    <div className="cookie-actions"><button className="pill pill-dark" onClick={dismiss}>Not now</button><button className="pill pill-light" onClick={dismiss}>Got it</button></div>
  </aside>
}

function Footer() {
  return <footer className="site-footer"><div className="footer-top">
    <a className="brand brand-large" href="#home" aria-label="Back to top"><span>NK</span></a>
    <p>Designed with curiosity.<br/>Built with purpose.</p>
    <a className="pill pill-light" href="#contact">Let’s Connect <span>↗</span></a>
  </div><div className="footer-bottom"><span>© Nibir Kalita — All rights reserved.</span><span>Assam, India</span><a href="https://github.com/Raag-Nibir" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
}

function App() {
  const [activeProject, setActiveProject] = useState(null)
  return <>
    <div className="site-shell">
      <Header/>
      <main>
        <section className="hero" id="home">
          <div className="hero-photo" aria-hidden="true"/>
          <div className="hero-topline"><span className="eyebrow">COMPUTER SCIENCE · DESIGN · BUILDING</span><span>Jorhat, Assam &nbsp;·&nbsp; India</span></div>
          <div className="hero-title"><h1>Nibir</h1><p>Building digital experiences at the intersection of technology, design, and innovation.</p></div>
          <div className="hero-bottom"><div>
            <div className="hero-stats"><span>Developer</span><span>Designer</span><span>Builder at heart</span></div>
            <h2>Hi, I’m Nibir Kalita.</h2>
            <p>Computer Science Engineering student at Jorhat Engineering College. I enjoy turning ideas into useful, thoughtful digital products.</p>
            <div className="hero-actions"><a className="pill pill-light" href="#work">Explore My Work <span>↓</span></a><a className="pill pill-outline" href="#contact">Let’s Connect <span>↗</span></a></div>
          </div><a className="hero-side-note" href="#about"><span className="availability-dot"/>Open to learning, building &amp; collaborating<span className="side-arrow">↘</span></a></div>
        </section>

        <section className="client-strip" aria-label="Areas of interest"><span className="eyebrow">CURIOUS ABOUT</span><div>{['Frontend','AI','Blockchain','Product','Visual design','Entrepreneurship'].map(item => <b key={item}>{item}</b>)}</div></section>

        <section className="section featured" id="work"><div className="section-heading"><div><p className="eyebrow">A FEW THINGS I’VE BEEN EXPLORING</p><h2>Selected Work</h2></div><span className="section-aside">Concepts, academic work, and projects — each card shares its scope and current status.</span></div>
          <div className="project-grid">{projects.map((project, index) => <PortfolioProject key={project.name} project={project} index={index} onOpen={setActiveProject}/>)}</div>
          <p className="work-footnote">Project descriptions reflect the work and status provided. Concepts and explorations are labeled as such.</p>
        </section>

        <section className="section about-section" id="about"><div className="section-heading"><div><p className="eyebrow">A BIT ABOUT ME</p><h2>Curious by nature.<br/>Creative by practice.</h2></div><p className="section-aside">Technology is how I solve problems. Design and art help me see them differently.</p></div>
          <div className="about-copy"><div><p>I’m a developer and creative thinker passionate about technology, design, and problem-solving. My interests span frontend development, database systems, blockchain, and AI-powered applications.</p><p>Alongside coding, I have 10–12 years of artistic experience and a strong interest in graphic design, music, and creative expression. That mix helps me think about both how a product works and how it feels to use.</p></div><div><p>I enjoy collaborating, exploring new ideas, and working on projects that solve real-world problems. My long-term ambition is to build innovative products and eventually create ventures that make a meaningful impact.</p><a className="text-link" href="#creative">A little beyond code <span>↓</span></a></div></div>
          <div className="about-signoff"><span>01 / HOW I THINK</span><span>Good products balance usefulness, clarity, and a point of view.</span><span>↗</span></div>
        </section>

        <section className="section skills-section" id="skills"><div className="section-heading"><div><p className="eyebrow">TOOLS I’M LEARNING AND USING</p><h2>Skills &amp; Interests</h2></div><p className="section-aside">A growing toolkit. I care as much about learning the right tool as collecting another one.</p></div>
          <div className="skill-groups">{skillGroups.map(([group, items], index) => <article className="skill-group" key={group}><span className="skill-number">0{index + 1}</span><div><h3>{group}</h3><div className="tag-list">{items.map(item => <span key={item}>{item}</span>)}</div></div></article>)}</div>
          <div className="interest-row"><span className="eyebrow">ALWAYS EXPLORING</span><div>{['UI/UX Design','Artificial Intelligence','Blockchain Technology','Full-Stack Development','Product Development','Entrepreneurship'].map(item => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section className="section experience-section" id="experience"><div className="section-heading"><div><p className="eyebrow">LEARNING BY DOING</p><h2>Experience &amp; Community</h2></div><p className="section-aside">The best learning happens when ideas meet real people and real constraints.</p></div>
          <div className="experience-list">
            <article><span className="experience-index">01</span><div><p className="eyebrow">ACADEMIC INTERNSHIP</p><h3>IIT Guwahati</h3><p>Worked on an academic information management portal, focusing on database design, academic record management, and application development.</p></div><span className="experience-arrow">↗</span></article>
            <article><span className="experience-index">02</span><div><p className="eyebrow">TECH COMMUNITY</p><h3>GLUG · Jorhat Engineering College</h3><p>Part of the GNU/Linux Users Group organizing committee, contributing to technical community activities and events.</p></div><span className="experience-arrow">↗</span></article>
            <article><span className="experience-index">03</span><div><p className="eyebrow">HACKATHONS &amp; EVENTS</p><h3>Hackvita 4.0</h3><p>Joined hackathon-related activities to explore collaborative problem-solving and product development.</p></div><span className="experience-arrow">↗</span></article>
          </div>
        </section>

        <section className="section creative-section" id="creative"><div className="creative-copy"><p className="eyebrow">BEYOND THE SCREEN</p><h2>Different ways<br/>to make things.</h2><p>Technology is only one part of how I express myself. I enjoy graphic design, music, singing, and exploring visual ideas — from Figma and Canva to making sounds in FL Studio.</p><p>I believe the best products combine engineering, aesthetics, and a deep understanding of the people using them.</p><a className="pill pill-outline" href="#contact">Let’s make something <span>↗</span></a></div><div className="creative-art" aria-label="Abstract visual composition representing creativity"><span className="art-disc"/><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/><span className="art-caption">FORM · SOUND · FEELING</span><span className="art-coordinate">26°45′N<br/>94°12′E</span></div></section>

        <section className="section focus-section"><div className="section-heading"><div><p className="eyebrow">RIGHT NOW</p><h2>Current Focus</h2></div><p className="section-aside">Small, consistent steps toward thoughtful and useful work.</p></div><div className="focus-grid">{['Building practical software projects','Improving frontend and UI/UX skills','Exploring AI and blockchain applications','Learning product strategy and entrepreneurship','Growing a portfolio of real-world work'].map((item,index)=><article key={item}><span>0{index+1}</span><p>{item}</p><b>↗</b></article>)}</div></section>

        <section className="contact-block" id="contact"><div className="contact-intro"><p className="eyebrow">HAVE AN IDEA OR JUST WANT TO SAY HI?</p><h2>Let’s<br/>talk<span className="period">.</span></h2><p>I’m always happy to connect with curious people, explore a collaboration, or talk through an idea.</p><div className="contact-details"><span>BASED IN</span><strong>Assam, India</strong><a href="https://github.com/Raag-Nibir" target="_blank" rel="noreferrer">GitHub · Raag-Nibir ↗</a><a href="https://github.com/Nibir-Kalita" target="_blank" rel="noreferrer">GitHub · Nibir-Kalita ↗</a><small>Email and LinkedIn links can be added when you’re ready to share them.</small></div></div><ContactForm/></section>
      </main>
      <Footer/>
    </div>
    <CookieNotice/>
    <ProjectDialog project={activeProject} onClose={() => setActiveProject(null)}/>
  </>
}

export default App