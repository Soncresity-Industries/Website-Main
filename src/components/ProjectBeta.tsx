import { Link } from 'react-router-dom'
import '../App.css'

function ProjectBeta() {
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
              <img src="/assets/images/projects/beta-logo.png" alt="Smart Infrastructure Beta" className="project-hero-logo" />
              <div className="project-title">
                <h2>Smart Infrastructure Beta</h2>
                <p>IoT-Powered Monitoring System</p>
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
                  Smart Infrastructure Beta is an IoT-powered infrastructure monitoring system that provides 
                  predictive maintenance and optimization for industrial facilities. It leverages advanced 
                  sensors, machine learning algorithms, and real-time data processing to prevent downtime 
                  and optimize operational efficiency.
                </p>
                
                <h3>Key Features</h3>
                <ul>
                  <li><strong>IoT Sensor Network</strong> - Comprehensive monitoring of equipment and environmental conditions</li>
                  <li><strong>Predictive Analytics</strong> - AI-powered predictions for maintenance needs</li>
                  <li><strong>Real-time Alerts</strong> - Immediate notifications for critical issues</li>
                  <li><strong>Energy Optimization</strong> - Smart energy usage monitoring and optimization</li>
                  <li><strong>Mobile Dashboard</strong> - Remote monitoring via mobile applications</li>
                </ul>
                
                <h3>Technical Specifications</h3>
                <div className="spec-grid">
                  <div className="spec-item">
                    <h4>IoT Platform</h4>
                    <p>MQTT, LoRaWAN, WiFi, Bluetooth mesh networks</p>
                  </div>
                  <div className="spec-item">
                    <h4>Data Processing</h4>
                    <p>Apache Kafka, InfluxDB, TensorFlow, Python</p>
                  </div>
                  <div className="spec-item">
                    <h4>Visualization</h4>
                    <p>Grafana, D3.js, React Native mobile app</p>
                  </div>
                  <div className="spec-item">
                    <h4>Infrastructure</h4>
                    <p>Edge computing, 5G connectivity, cloud hybrid</p>
                  </div>
                </div>
                
                <h3>Deployment Sites</h3>
                <div className="deployment-grid">
                  <div className="deployment-item">
                    <h4>Manufacturing Plant A</h4>
                    <p>500+ sensors monitoring production equipment</p>
                    <span className="status active">Active</span>
                  </div>
                  <div className="deployment-item">
                    <h4>Warehouse Complex B</h4>
                    <p>Climate and security monitoring across 50k sq ft</p>
                    <span className="status active">Active</span>
                  </div>
                  <div className="deployment-item">
                    <h4>Office Building C</h4>
                    <p>Smart building management and energy optimization</p>
                    <span className="status testing">Testing</span>
                  </div>
                </div>
                
                <h3>Performance Metrics</h3>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <h4>Downtime Reduction</h4>
                    <div className="metric-value">35%</div>
                    <p>Average reduction in unplanned downtime</p>
                  </div>
                  <div className="metric-card">
                    <h4>Energy Savings</h4>
                    <div className="metric-value">22%</div>
                    <p>Reduction in energy consumption</p>
                  </div>
                  <div className="metric-card">
                    <h4>Maintenance Cost</h4>
                    <div className="metric-value">-28%</div>
                    <p>Decrease in maintenance expenses</p>
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

export default ProjectBeta