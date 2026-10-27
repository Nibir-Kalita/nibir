import { useEffect, useState } from 'react'
import './App.css'
import './Intro.css'
import './IntroLayout.css'
import './SignatureFont.css'
import './HeroIntro.css'
import './HeroIntroFix.css'
import fireflyPortrait from '../Firefly.png'

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

function IntroLoader({ phase, onSkip }) {
  return <section className={`intro-loader ${phase === 'leaving' ? 'is-leaving' : ''}`} aria-label="Portfolio introduction">
    <div className="intro-loader-top"><span>NK <i>—</i></span><span>AN INTRODUCTION / 2026</span></div>
    <svg className="signature-art" viewBox="0 0 1200 250" role="img" aria-labelledby="signature-title">
      <title id="signature-title">Nibir Kalita — animated signature-style wordmark</title>
      <path className="signature-flourish" d="M22 135C104 135 151 133 210 127C293 119 332 102 305 75C278 47 216 63 187 101C164 132 179 158 218 157C257 156 277 129 304 95C324 70 345 45 354 50C365 56 322 130 315 148C308 166 328 146 341 129C361 103 377 77 386 84C393 89 370 133 369 146C368 159 386 147 398 133"/>
      <text className="signature-name" x="393" y="151">Nibir Kalita</text>
      <path className="signature-underline" d="M390 177C533 186 673 166 817 157C946 149 1068 151 1178 132"/>
      <path className="signature-tail" d="M793 159C780 187 765 211 751 231C780 205 809 177 833 151"/>
    </svg>
    <div className="intro-loader-bottom"><p>Developer, designer, and curious builder.<br/>A portfolio by Nibir Kalita.</p><div className="intro-progress" aria-hidden="true"><i/></div><button type="button" onClick={onSkip}>ENTER PORTFOLIO <span>↗</span></button></div>
    <span className="intro-loader-note">JORHAT, ASSAM / INDIA</span>
  </section>
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
  const [introPhase, setIntroPhase] = useState('loading')

  useEffect(() => {
    if (introPhase !== 'loading') return undefined
    const timer = window.setTimeout(() => setIntroPhase('leaving'), 3200)
    return () => window.clearTimeout(timer)
  }, [introPhase])

  useEffect(() => {
    if (introPhase !== 'leaving') return undefined
    const timer = window.setTimeout(() => setIntroPhase('done'), 700)
    return () => window.clearTimeout(timer)
  }, [introPhase])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (introPhase !== 'done') document.body.style.overflow = 'hidden'
    else document.body.style.overflow = previousOverflow
    return () => { document.body.style.overflow = previousOverflow }
  }, [introPhase])

  return <>
    <div className={`site-shell site-content ${introPhase === 'done' ? 'is-ready' : ''}`} id="home" aria-hidden={introPhase !== 'done'} inert={introPhase !== 'done'}>
    <Header/>
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta"><span>COMPUTER SCIENCE · DESIGN · BUILDING</span><span>JORHAT, ASSAM / INDIA</span></div>
        <div className="hero-intro-layout">
          <div className="hero-portrait"><img src={fireflyPortrait} alt="Portrait of Nibir Kalita" fetchPriority="high"/></div>
          <div className="hero-intro-copy"><p className="hero-hello">Hi</p><h1 id="hero-title">I’m <span>Nibir</span><i>.</i></h1><p className="hero-intro-subtitle">Developer, designer, and curious builder turning ideas into useful things.</p><a className="scroll-link" href="#capabilities">SCROLL TO EXPLORE <span>↓</span></a></div>
        </div>
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
    {introPhase !== 'done' && <IntroLoader phase={introPhase} onSkip={() => setIntroPhase('leaving')}/>}
  </>
}

export default App
