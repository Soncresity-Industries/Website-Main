import { Link } from 'react-router-dom'
import '../App.css'

function ProjectSuite() {
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
              <img src="/assets/images/projects/suite-logo.png" alt="Digital Transformation Suite" className="project-hero-logo" />
              <div className="project-title">
                <h2>Digital Transformation Suite</h2>
                <p>End-to-End Modernization Package</p>
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
                  The Digital Transformation Suite is an end-to-end digital transformation package that helps 
                  businesses modernize their operations and embrace the digital future. It combines strategic 
                  consulting, technology implementation, and change management to ensure successful digital adoption.
                </p>
                
                <h3>Service Components</h3>
                <ul>
                  <li><strong>Digital Strategy Consulting</strong> - Roadmap development and transformation planning</li>
                  <li><strong>Legacy System Modernization</strong> - Upgrading existing systems and infrastructure</li>
                  <li><strong>Cloud Migration Services</strong> - Seamless transition to cloud platforms</li>
                  <li><strong>Process Automation</strong> - Workflow digitization and automation implementation</li>
                  <li><strong>Training & Change Management</strong> - Employee upskilling and adoption support</li>
                </ul>
                
                <h3>Implementation Methodology</h3>
                <div className="methodology-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Assessment</h4>
                      <p>Current state analysis and digital readiness evaluation</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Strategy</h4>
                      <p>Digital transformation roadmap and technology selection</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Implementation</h4>
                      <p>Phased rollout with pilot programs and iterative development</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Optimization</h4>
                      <p>Continuous improvement and performance monitoring</p>
                    </div>
                  </div>
                </div>
                
                <h3>Client Success Stories</h3>
                <div className="success-stories">
                  <div className="story-card">
                    <h4>Manufacturing Corp</h4>
                    <p>Reduced operational costs by 40% through process automation and cloud migration</p>
                    <div className="story-metrics">
                      <span>40% cost reduction</span>
                      <span>6 months implementation</span>
                    </div>
                  </div>
                  <div className="story-card">
                    <h4>Retail Chain Inc</h4>
                    <p>Improved customer experience with omnichannel digital platform</p>
                    <div className="story-metrics">
                      <span>60% faster checkout</span>
                      <span>95% customer satisfaction</span>
                    </div>
                  </div>
                  <div className="story-card">
                    <h4>Healthcare Network</h4>
                    <p>Enhanced patient care through digital health records and telemedicine</p>
                    <div className="story-metrics">
                      <span>50% faster diagnosis</span>
                      <span>30% increased capacity</span>
                    </div>
                  </div>
                </div>
                
                <h3>Technology Partners</h3>
                <div className="partners-grid">
                  <div className="partner-item">Microsoft Azure</div>
                  <div className="partner-item">Amazon Web Services</div>
                  <div className="partner-item">Google Cloud Platform</div>
                  <div className="partner-item">Salesforce</div>
                  <div className="partner-item">ServiceNow</div>
                  <div className="partner-item">Tableau</div>
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

export default ProjectSuite