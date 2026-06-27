import '../index.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-text card">
            <p>
              Hello! I'm Gracielle Mieh, a dedicated Frontend Developer with a strong passion for designing and building immersive, responsive, and highly interactive web experiences.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites worked behind the scenes. Over time, that curiosity evolved into a professional career focused on modern web technologies like React, JavaScript, HTML, and CSS.
            </p>
            <p>
              I believe in clean code, elegant design, and constant learning. When I'm not coding, I'm exploring new design trends or contributing to open-source projects.
            </p>
          </div>
          <div className="about-skills card">
            <h3>My Skills</h3>
            <div className="skills-container">
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">CSS3</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Vite</span>
              <span className="skill-badge">Responsive Design</span>
              <span className="skill-badge">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
