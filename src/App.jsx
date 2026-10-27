import { useState } from 'react'
import './App.css'

const projects = [
  { number: '01', name: 'CarbonLens', category: 'Climate tech · Blockchain', description: 'A blue-carbon registry concept that brings satellite-based monitoring and transparent project records together.', visual: 'carbon', status: 'Concept exploration', link: 'https://carbonlens.space/' },
  { number: '02', name: 'Academic Portal', category: 'Education · Data systems', description: 'An academic information portal developed during an internship project associated with IIT Guwahati.', visual: 'campus', status: 'Academic project' },
  { number: '03', name: 'SkinWise', category: 'AI · Healthcare', description: 'An exploration of image-based skin analysis and how machine learning could support healthcare workflows.', visual: 'skin', status: 'Exploration' },
  { number: '04', name: 'HireWise', category: 'Product · Recruitment', description: 'A hiring workflow concept focused on making it easier to connect candidates with relevant opportunities.', visual: 'hire', status: 'Product exploration' },
  { number: '05', name: 'Tourism-NE', category: 'Web · Northeast India', description: 'A destination discovery experience celebrating the landscapes and local character of Northeast India.', visual: 'tourism', status: 'Frontend project' },
]

const capabilities = [
  { number: '01', title: 'Digital experiences', text: 'Thoughtful interfaces that make complex ideas feel clear, useful, and human.' },
  { number: '02', title: 'Intelligent systems', text: 'Exploring practical applications of AI, data, and emerging technology.' },
  { number: '03', title: 'Product thinking', text: 'Connecting the problem, the people, and the details that make a product work.' },
]

function ThreadMark() {
  return <svg className="thread-mark" viewBox="0 0 1200 700" fill="none" aria-hidden="true">
    <path d="M38 152C174 30 302 58 365 149c74 107-67 162-184 206-137 52-163 126-63 177 116 60 290-16 476-102 244-113 385-108 442-37 52 64 10 151-68 163-80 12-126-70-73-124 42-34 91-25 115 1 36 38 4 88-38 94" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="38" cy="152" r="5" fill="currentColor"/><circle cx="972" cy="627" r="7" fill="currentColor"/>
  </svg>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="topbar">
    <a className="brand" href="#home" aria-label="Nibir Kalita home">NK<span>—</span></a>
    <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i/><i/></button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      <a href="#capabilities" onClick={closeMenu}>CAPABILITIES</a><a href="#projects" onClick={closeMenu}>PROJECTS</a><a href="#about" onClick={closeMenu}>ABOUT</a><a href="#contact" onClick={closeMenu}>CONTACT</a>
    </nav>
  </header>
}

function ProjectVisual({ kind }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
    <div className="mock-window">
      <div className="mock-top"><span/><span/><span/><b>{kind === 'carbon' ? 'CARBONLENS / OVERVIEW' : `${kind.toUpperCase()} / WORKSPACE`}</b></div>
      <div className="mock-body">
        {kind === 'carbon' && <><span className="mock-kicker">BLUE CARBON REGISTRY</span><strong>Restore nature.<br/>Track the impact.</strong><div className="mock-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="mock-stats"><span>PROJECTS <b>24</b></span><span>HECTARES <b>8.6k</b></span><span>STATUS <b>Verified</b></span></div></>}
        {kind === 'campus' && <><span className="mock-kicker">ACADEMIC INFORMATION PORTAL</span><strong>Everything<br/>in one place.</strong><div className="mock-panel-row"><i/><i/><i/></div><div className="mock-lines"><i/><i/><i/></div></>}
        {kind === 'skin' && <><span className="mock-kicker">SKINWISE / AI EXPLORATION</span><strong>Care starts<br/>with a question.</strong><div className="skin-orb"/><div className="mock-action">IMAGE ANALYSIS <span>↗</span></div></>}
        {kind === 'hire' && <><span className="mock-kicker">HIREWISE / TALENT</span><strong>Find the right<br/>next step.</strong><div className="candidate-list"><i/><i/><i/><i/></div><div className="mock-lines"><i/><i/></div></>}
        {kind === 'tourism' && <><span className="mock-kicker">NORTHEAST INDIA / DISCOVER</span><strong>Take the<br/>scenic route.</strong><div className="landscape"><i/><i/><i/></div><div className="mock-action">EXPLORE THE REGION <span>↗</span></div></>}
      </div>
    </div><span className="visual-stamp">NK / 2026</span>
  </div>
}

function ProjectCard({ project }) {
  const content = <><ProjectVisual kind={project.visual}/><div className="project-caption"><span className="project-number">{project.number} / {project.category}</span><div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow">↗</span></div><p>{project.description}</p><span className="project-status">{project.status}</span></div></>
  return project.link
    ? <a className={`project-card project-${project.visual}`} href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>{content}</a>
    : <article className={`project-card project-${project.visual}`}>{content}</article>
}

function App() {
  return <div className="site-shell" id="home">
    <Header/>
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta"><span>COMPUTER SCIENCE · DESIGN · BUILDING</span><span>JORHAT, ASSAM / INDIA</span></div><ThreadMark/>
        <h1 id="hero-title"><span>I BUILD</span><span>DIGITAL</span><span>EXPERIENCES<span className="hero-period">.</span></span></h1>
        <div className="hero-bottom"><p>Developer, designer, and curious builder turning ideas into useful things.</p><a className="scroll-link" href="#capabilities">SCROLL TO FOLLOW THE THREAD <span>↓</span></a></div>
        <span className="hero-coordinate">26°45′N<br/>94°12′E</span>
      </section>
      <section className="intro-section" id="capabilities">
        <div className="intro-copy"><p className="eyebrow">A LITTLE ABOUT THE WAY I WORK</p><h2>From what people need<br/>to what feels <em>right.</em></h2><p className="intro-description">I connect human intent, product behavior, and the systems underneath — with curiosity at every step.</p></div>
        <div className="process-visual" aria-label="A product thread connecting intent, interaction, and systems"><div className="process-line"><span/><span/><span/></div><div className="process-labels"><span>INTENT</span><span>INTERACTION</span><span>SYSTEM</span></div><div className="process-note">ONE QUESTION<br/>CAN START A LOT.</div></div>
        <div className="capability-heading"><p className="eyebrow">WHAT I LIKE TO WORK ON</p><h2>I BUILD THE EXPERIENCE.<br/>AND THE THINKING BEHIND IT.</h2></div>
        <div className="capability-grid">{capabilities.map(item => <article className="capability-card" key={item.number}><span>{item.number} / CAPABILITY</span><h3>{item.title}</h3><p>{item.text}</p><b>↗</b></article>)}</div>
      </section>
      <section className="projects-section" id="projects">
        <div className="section-heading"><div><p className="eyebrow">SELECTED EXPLORATIONS / 2023—26</p><h2>Things I’ve<br/>been making<span>.</span></h2></div><p className="section-intro">A mix of academic work, product ideas, and experiments. Each one starts with a question worth exploring.</p></div>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.name} project={project}/>)}</div><p className="project-footnote">Work status is noted on each project. Concepts and explorations are presented as such.</p>
      </section>
      <section className="about-section" id="about">
        <div className="about-left"><p className="eyebrow">A HUMAN, NOT JUST A KEYBOARD</p><h2>Curious by<br/>nature.<br/><em>Creative</em><br/>by practice.</h2><div className="about-coordinate">NIBIR KALITA<br/>ASSAM, INDIA</div></div>
        <div className="about-right"><div className="about-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-core">NK</div><span>FORM / SOUND / FEELING</span></div><p>I’m a Computer Science Engineering student at Jorhat Engineering College, interested in frontend development, database systems, AI, and blockchain.</p><p>Outside code, I’ve spent years around art and visual design. I enjoy music, making things, and learning how engineering and aesthetics can come together in a product that feels considered.</p><div className="about-signoff"><span>01 / HOW I THINK</span><span>Useful first. Clear always. A little unexpected.</span><span>↗</span></div></div>
      </section>
      <section className="experience-section"><div className="section-heading"><div><p className="eyebrow">LEARNING BY DOING</p><h2>Where ideas<br/>meet people.</h2></div><p className="section-intro">A few places where I’ve been able to learn, contribute, and try things out.</p></div><div className="experience-list">
        <article><span>01</span><div><p className="eyebrow">ACADEMIC INTERNSHIP</p><h3>IIT Guwahati</h3><p>Contributed to an academic information portal, exploring structured workflows, application development, and database design.</p></div><b>↗</b></article>
        <article><span>02</span><div><p className="eyebrow">TECH COMMUNITY</p><h3>GLUG · Jorhat Engineering College</h3><p>Part of the GNU/Linux Users Group organizing committee, helping bring technical activities and events to the community.</p></div><b>↗</b></article>
        <article><span>03</span><div><p className="eyebrow">HACKATHONS &amp; EVENTS</p><h3>Hackvita 4.0</h3><p>Explored collaborative problem-solving and rapid product thinking through hackathon activities.</p></div><b>↗</b></article>
      </div></section>
      <section className="contact-section" id="contact"><div><p className="eyebrow">HAVE AN IDEA? OR JUST WANT TO SAY HI?</p><h2>Let’s make<br/>something<span>.</span></h2><p>I’m always glad to meet curious people, talk through an idea, or explore a collaboration.</p></div><div className="contact-card"><span>OPEN TO</span><h3>Learning.<br/>Building.<br/>Collaborating.</h3><a href="https://github.com/Raag-Nibir" target="_blank" rel="noreferrer">FIND ME ON GITHUB <b>↗</b></a><a href="https://github.com/Nibir-Kalita" target="_blank" rel="noreferrer">ALSO ON GITHUB <b>↗</b></a><small>Email and LinkedIn can be added when you’re ready to share those details.</small></div></section>
    </main>
    <footer className="site-footer"><a className="brand" href="#home">NK<span>—</span></a><p>Designed with curiosity.<br/>Built with purpose.</p><span>© NIBIR KALITA / 2026</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>
}

export default App
