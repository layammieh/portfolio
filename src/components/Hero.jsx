import profilePic from '../assets/pfp.png';
import dragonGif from '../assets/dragon.gif';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <img src={dragonGif} alt="Flying Dragon" className="flying-dragon" />
      
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
            <a href="https://github.com/layammieh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Projects</a>
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