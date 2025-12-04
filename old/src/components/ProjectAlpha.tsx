import { Link } from 'react-router-dom'
import '../App.css'

function ProjectAlpha() {
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
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <section className="hero project-hero">
          <div className="container">
            <div className="project-header">
              <img src="/assets/images/projects/alpha-logo.png" alt="Enterprise Solution Alpha" className="project-hero-logo" />
              <div className="project-title">
                <h2>Enterprise Solution Alpha</h2>
                <p>Comprehensive Business Management Platform</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="content-section">
          <div className="container">
            <div className="project-wiki">
              <nav className="wiki-nav">
                <Link to="/projects" className="back-link">← Back to Projects</Link>
              </nav>
              
              <div className="wiki-content">
                <h3>Overview</h3>
                <p>
                  Enterprise Solution Alpha is a comprehensive business management platform designed for large-scale 
                  operations. It provides advanced analytics, real-time reporting, and seamless integration 
                  capabilities that help enterprises optimize their workflows and decision-making processes.
                </p>
                
                <h3>Key Features</h3>
                <ul>
                  <li><strong>Advanced Analytics Dashboard</strong> - Real-time data visualization and insights</li>
                  <li><strong>Enterprise Integration</strong> - Seamless connection with existing business systems</li>
                  <li><strong>Scalable Architecture</strong> - Handles enterprise-level data volumes and user loads</li>
                  <li><strong>Security Framework</strong> - Enterprise-grade security and compliance features</li>
                  <li><strong>Customizable Workflows</strong> - Adaptable to various business processes</li>
                </ul>
                
                <h3>Technical Specifications</h3>
                <div className="spec-grid">
                  <div className="spec-item">
                    <h4>Platform</h4>
                    <p>Cloud-native architecture with microservices</p>
                  </div>
                  <div className="spec-item">
                    <h4>Technology Stack</h4>
                    <p>React, Node.js, PostgreSQL, Redis, Docker</p>
                  </div>
                  <div className="spec-item">
                    <h4>Deployment</h4>
                    <p>Kubernetes, AWS/Azure/GCP compatible</p>
                  </div>
                  <div className="spec-item">
                    <h4>Security</h4>
                    <p>OAuth 2.0, RBAC, SOC 2 Type II compliant</p>
                  </div>
                </div>
                
                <h3>Project Timeline</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">Q1 2024</div>
                    <div className="timeline-content">
                      <h4>Planning & Design</h4>
                      <p>Requirements gathering, system architecture design, and UI/UX planning</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">Q2 2024</div>
                    <div className="timeline-content">
                      <h4>Core Development</h4>
                      <p>Backend infrastructure, database design, and core functionality implementation</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">Q3 2024</div>
                    <div className="timeline-content">
                      <h4>Frontend & Integration</h4>
                      <p>User interface development, API integration, and third-party service connections</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">Q4 2024</div>
                    <div className="timeline-content">
                      <h4>Testing & Deployment</h4>
                      <p>Quality assurance, performance testing, and production deployment</p>
                    </div>
                  </div>
                </div>
                
                <h3>Team</h3>
                <div className="team-grid">
                  <div className="team-member">
                    <h4>Project Manager</h4>
                    <p>Sarah Chen</p>
                  </div>
                  <div className="team-member">
                    <h4>Lead Developer</h4>
                    <p>Michael Rodriguez</p>
                  </div>
                  <div className="team-member">
                    <h4>UI/UX Designer</h4>
                    <p>Emma Thompson</p>
                  </div>
                  <div className="team-member">
                    <h4>DevOps Engineer</h4>
                    <p>James Liu</p>
                  </div>
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

export default ProjectAlpha