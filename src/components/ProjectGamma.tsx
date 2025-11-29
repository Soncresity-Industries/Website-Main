import { Link } from 'react-router-dom'
import '../App.css'

function ProjectGamma() {
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
              <img src="/assets/images/projects/gamma-logo.png" alt="Security Framework Gamma" className="project-hero-logo" />
              <div className="project-title">
                <h2>Security Framework Gamma</h2>
                <p>Advanced Cybersecurity Protection</p>
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
                  Security Framework Gamma is an advanced cybersecurity framework providing multi-layered 
                  protection for sensitive business data and communications. It combines cutting-edge 
                  threat detection, zero-trust architecture, and comprehensive compliance management 
                  to safeguard enterprise assets.
                </p>
                
                <h3>Security Layers</h3>
                <ul>
                  <li><strong>Zero-Trust Architecture</strong> - Never trust, always verify approach</li>
                  <li><strong>Advanced Threat Detection</strong> - AI-powered anomaly detection and response</li>
                  <li><strong>Data Encryption</strong> - End-to-end encryption for data at rest and in transit</li>
                  <li><strong>Identity Management</strong> - Multi-factor authentication and privileged access</li>
                  <li><strong>Compliance Monitoring</strong> - Automated compliance checking and reporting</li>
                </ul>
                
                <h3>Threat Protection</h3>
                <div className="protection-grid">
                  <div className="protection-item">
                    <h4>Malware Defense</h4>
                    <p>Real-time scanning and behavioral analysis</p>
                    <div className="effectiveness">99.8% detection rate</div>
                  </div>
                  <div className="protection-item">
                    <h4>Phishing Protection</h4>
                    <p>Email security and user awareness training</p>
                    <div className="effectiveness">95% reduction in incidents</div>
                  </div>
                  <div className="protection-item">
                    <h4>Ransomware Shield</h4>
                    <p>Prevention, detection, and recovery capabilities</p>
                    <div className="effectiveness">100% prevention rate</div>
                  </div>
                  <div className="protection-item">
                    <h4>Data Breach Prevention</h4>
                    <p>DLP and access control mechanisms</p>
                    <div className="effectiveness">Zero breaches recorded</div>
                  </div>
                </div>
                
                <h3>Compliance Standards</h3>
                <div className="compliance-badges">
                  <div className="compliance-badge">
                    <h4>SOC 2 Type II</h4>
                    <p>Security, availability, and confidentiality</p>
                    <span className="status certified">Certified</span>
                  </div>
                  <div className="compliance-badge">
                    <h4>ISO 27001</h4>
                    <p>Information security management</p>
                    <span className="status certified">Certified</span>
                  </div>
                  <div className="compliance-badge">
                    <h4>GDPR</h4>
                    <p>Data protection and privacy</p>
                    <span className="status compliant">Compliant</span>
                  </div>
                  <div className="compliance-badge">
                    <h4>HIPAA</h4>
                    <p>Healthcare information protection</p>
                    <span className="status compliant">Compliant</span>
                  </div>
                </div>
                
                <h3>Security Operations Center</h3>
                <div className="soc-stats">
                  <div className="stat-item">
                    <h4>24/7 Monitoring</h4>
                    <div className="stat-value">365 days/year</div>
                    <p>Continuous threat monitoring and response</p>
                  </div>
                  <div className="stat-item">
                    <h4>Mean Response Time</h4>
                    <div className="stat-value">&lt; 15 min</div>
                    <p>Average time to threat containment</p>
                  </div>
                  <div className="stat-item">
                    <h4>Threat Intelligence</h4>
                    <div className="stat-value">50M+ indicators</div>
                    <p>Global threat intelligence database</p>
                  </div>
                </div>
                
                <h3>Implementation Architecture</h3>
                <div className="architecture-layers">
                  <div className="arch-layer">
                    <h4>Perimeter Security</h4>
                    <p>Firewalls, IPS/IDS, DDoS protection</p>
                  </div>
                  <div className="arch-layer">
                    <h4>Network Security</h4>
                    <p>Network segmentation, VPN, monitoring</p>
                  </div>
                  <div className="arch-layer">
                    <h4>Endpoint Security</h4>
                    <p>EDR, device management, compliance</p>
                  </div>
                  <div className="arch-layer">
                    <h4>Application Security</h4>
                    <p>SAST/DAST, API security, WAF</p>
                  </div>
                  <div className="arch-layer">
                    <h4>Data Security</h4>
                    <p>Encryption, DLP, backup, recovery</p>
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

export default ProjectGamma