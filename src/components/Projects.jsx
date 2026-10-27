const projects = [
  {
    number: "01",
    name: "CarbonLens",
    category: "Climate tech · Blockchain",
    description:
      "A blue-carbon registry concept that brings satellite-based monitoring and transparent project records together.",
    visual: "carbon",
    status: "Concept exploration",
    link: "https://carbonlens.space/",
  },
  {
    number: "02",
    name: "Academic Portal",
    category: "Education · Data systems",
    description:
      "An academic information portal developed during an internship project associated with IIT Guwahati.",
    visual: "campus",
    status: "Academic project",
  },
  {
    number: "03",
    name: "SkinWise",
    category: "AI · Healthcare",
    description:
      "An exploration of image-based skin analysis and how machine learning could support healthcare workflows.",
    visual: "skin",
    status: "Exploration",
  },
  {
    number: "04",
    name: "HireWise",
    category: "Product · Recruitment",
    description:
      "A hiring workflow concept focused on making it easier to connect candidates with relevant opportunities.",
    visual: "hire",
    status: "Product exploration",
  },
  {
    number: "05",
    name: "Tourism-NE",
    category: "Web · Northeast India",
    description:
      "A destination discovery experience celebrating the landscapes and local character of Northeast India.",
    visual: "tourism",
    status: "Frontend project",
  },
];

function ProjectVisual({ kind }) {
  return (
    <div
      className={`project-visual scroll-parallax visual-${kind}`}
      aria-hidden="true"
    >
      <div className="visual-orbit orbit-a" />
      <div className="visual-orbit orbit-b" />
      <div className="mock-window">
        <div className="mock-top">
          <span />
          <span />
          <span />
          <b>
            {kind === "carbon"
              ? "CARBONLENS / OVERVIEW"
              : `${kind.toUpperCase()} / WORKSPACE`}
          </b>
        </div>
        <div className="mock-body">
          {kind === "carbon" && (
            <>
              <span className="mock-kicker">BLUE CARBON REGISTRY</span>
              <strong>
                Restore nature.
                <br />
                Track the impact.
              </strong>
              <div className="mock-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="mock-stats">
                <span>
                  PROJECTS <b>24</b>
                </span>
                <span>
                  HECTARES <b>8.6k</b>
                </span>
                <span>
                  STATUS <b>Verified</b>
                </span>
              </div>
            </>
          )}
          {kind === "campus" && (
            <>
              <span className="mock-kicker">ACADEMIC INFORMATION PORTAL</span>
              <strong>
                Everything
                <br />
                in one place.
              </strong>
              <div className="mock-panel-row">
                <i />
                <i />
                <i />
              </div>
              <div className="mock-lines">
                <i />
                <i />
                <i />
              </div>
            </>
          )}
          {kind === "skin" && (
            <>
              <span className="mock-kicker">SKINWISE / AI EXPLORATION</span>
              <strong>
                Care starts
                <br />
                with a question.
              </strong>
              <div className="skin-orb" />
              <div className="mock-action">
                IMAGE ANALYSIS <span>↗</span>
              </div>
            </>
          )}
          {kind === "hire" && (
            <>
              <span className="mock-kicker">HIREWISE / TALENT</span>
              <strong>
                Find the right
                <br />
                next step.
              </strong>
              <div className="candidate-list">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="mock-lines">
                <i />
                <i />
              </div>
            </>
          )}
          {kind === "tourism" && (
            <>
              <span className="mock-kicker">NORTHEAST INDIA / DISCOVER</span>
              <strong>
                Take the
                <br />
                scenic route.
              </strong>
              <div className="landscape">
                <i />
                <i />
                <i />
              </div>
              <div className="mock-action">
                EXPLORE THE REGION <span>↗</span>
              </div>
            </>
          )}
        </div>
      </div>
      <span className="visual-stamp">NK / 2026</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const content = (
    <>
      <ProjectVisual kind={project.visual} />
      <div className="project-caption">
        <span className="project-number">
          {project.number} / {project.category}
        </span>
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span className="project-arrow">↗</span>
        </div>
        <p>{project.description}</p>
        <span className="project-status">{project.status}</span>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        className={`project-card project-${project.visual}`}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name} (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={`project-card project-${project.visual}`}>
      {content}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section scroll-panel" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SELECTED EXPLORATIONS / 2023—26</p>
          <h2>
            Things I’ve
            <br />
            been making<span>.</span>
          </h2>
        </div>
        <p className="section-intro">
          A mix of academic work, product ideas, and experiments. Each one
          starts with a question worth exploring.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <p className="project-footnote">
        Work status is noted on each project. Concepts and explorations are
        presented as such.
      </p>
    </section>
  );
}
