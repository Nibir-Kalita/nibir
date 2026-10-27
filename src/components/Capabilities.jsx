const capabilities = [
  {
    number: "01",
    title: "Digital experiences",
    text: "Thoughtful interfaces that make complex ideas feel clear, useful, and human.",
  },
  {
    number: "02",
    title: "Intelligent systems",
    text: "Exploring practical applications of AI, data, and emerging technology.",
  },
  {
    number: "03",
    title: "Product thinking",
    text: "Connecting the problem, the people, and the details that make a product work.",
  },
];

export default function Capabilities() {
  return (
    <section className="intro-section scroll-panel" id="capabilities">
      <div className="intro-copy">
        <p className="eyebrow">A LITTLE ABOUT THE WAY I WORK</p>
        <h2>
          From what people need
          <br />
          to what feels <em>right.</em>
        </h2>
        <p className="intro-description">
          I connect human intent, product behavior, and the systems underneath —
          with curiosity at every step.
        </p>
      </div>
      <div
        className="process-visual"
        aria-label="A product thread connecting intent, interaction, and systems"
      >
        <div className="process-line">
          <span />
          <span />
          <span />
        </div>
        <div className="process-labels">
          <span>INTENT</span>
          <span>INTERACTION</span>
          <span>SYSTEM</span>
        </div>
        <div className="process-note">
          ONE QUESTION
          <br />
          CAN START A LOT.
        </div>
      </div>
      <div className="capability-heading">
        <p className="eyebrow">WHAT I LIKE TO WORK ON</p>
        <h2>
          I BUILD THE EXPERIENCE.
          <br />
          AND THE THINKING BEHIND IT.
        </h2>
      </div>
      <div className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <span>{item.number} / CAPABILITY</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <b>↗</b>
          </article>
        ))}
      </div>
    </section>
  );
}
