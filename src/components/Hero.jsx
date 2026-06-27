import profilePic from '../assets/pfp.png';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to my portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span>Gracielle Mieh</span><br />
            C. Layam
          </h1>
          <p className="hero-description">
            I am a passionate Frontend Developer dedicated to creating stunning, 
            responsive, and user-friendly web applications. Let's build something amazing together.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={profilePic} alt="Gracielle Mieh C. Layam" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;