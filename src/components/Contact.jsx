import '../index.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <div className="contact-content card">
          <p className="contact-description">
            I'm currently available for freelance work and new opportunities. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required className="form-input" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
