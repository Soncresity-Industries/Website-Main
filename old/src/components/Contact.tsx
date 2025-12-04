import { Link } from 'react-router-dom'
import '../App.css'

function Contact() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src="/assets/images/logo.png" className="logo" alt="Soncresity Industries" />
            <h1>Soncresity Industries</h1>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact" className="active">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <section className="hero">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Get in touch with our team</p>
          </div>
        </section>
        
        <section className="content-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>Ready to discuss your next project? We'd love to hear from you.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <h4>Email</h4>
                    <p>info@soncresity.com</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4>Address</h4>
                    <p>123 Innovation Drive<br />Tech City, TC 12345</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h3>Send us a message</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Soncresity Industries. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Contact