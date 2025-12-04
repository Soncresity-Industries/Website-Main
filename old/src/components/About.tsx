import { Link } from 'react-router-dom'
import '../App.css'

function About() {
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
            <Link to="/about" className="active">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <section className="hero">
          <div className="container">
            <h2>About Soncresity Industries</h2>
            <p>Innovation and Excellence in Every Solution</p>
          </div>
        </section>
        
        <section className="content-section">
          <div className="container">
            <div className="about-content">
              <h3>Our Story</h3>
              <p>
                Soncresity Industries was founded with a vision to deliver cutting-edge solutions 
                that drive business success. We combine innovation with reliability to create 
                products and services that exceed expectations.
              </p>
              
              <h3>Our Mission</h3>
              <p>
                To empower businesses through technology and strategic consulting, enabling them 
                to achieve their goals with confidence and efficiency.
              </p>
              
              <h3>Our Values</h3>
              <div className="values-grid">
                <div className="value-card">
                  <h4>Innovation</h4>
                  <p>We constantly push boundaries to deliver breakthrough solutions.</p>
                </div>
                <div className="value-card">
                  <h4>Excellence</h4>
                  <p>Quality is at the core of everything we do.</p>
                </div>
                <div className="value-card">
                  <h4>Integrity</h4>
                  <p>We build trust through honest and transparent relationships.</p>
                </div>
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

export default About