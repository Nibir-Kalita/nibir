export default function About() {
  return (
    <section className="about-section scroll-panel" id="about">
      <div className="about-left">
        <p className="eyebrow">A HUMAN, NOT JUST A KEYBOARD</p>
        <h2>
          Curious by
          <br />
          nature.
          <br />
          <em>Creative</em>
          <br />
          by practice.
        </h2>
        <div className="about-coordinate">
          NIBIR KALITA
          <br />
          ASSAM, INDIA
        </div>
      </div>
      <div className="about-right">
        <div className="about-art parallax-art scroll-parallax">
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-core">NK</div>
          <span>FORM / SOUND / FEELING</span>
        </div>
        <p>
          I’m a Computer Science Engineering student at Jorhat Engineering
          College, interested in frontend development, database systems, AI, and
          blockchain.
        </p>
        <p>
          Outside code, I’ve spent years around art and visual design. I enjoy
          music, making things, and learning how engineering and aesthetics can
          come together in a product that feels considered.
        </p>
        <div className="about-signoff">
          <span>01 / HOW I THINK</span>
          <span>Useful first. Clear always. A little unexpected.</span>
          <span>↗</span>
        </div>
      </div>
    </section>
  );
}
