export default function DeathBoltWiki() {
  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          {/* Back Navigation */}
          <div className="back-nav">
            <a href="/projects" className="back-btn">
              ← Back to Projects
            </a>
          </div>

          {/* Project Header */}
          <div className="project-header">
            <div className="project-logo-large">
              <img 
                src="/projects/si_death_bolt.png"
                alt="SI Death Bolt Logo"
              />
            </div>
            <div className="project-info">
              <div className="project-status-header">
                <span className="project-status-badge available-badge">
                  Available
                </span>
              </div>
              <h1>SI: Death Bolt</h1>
              <p className="project-type-large">Minecraft Mod</p>
              <p className="project-description">A powerful lightning-based combat mod for Minecraft.</p>
              
              {/* Project Tags */}
              <div className="project-tags-large">
                <span className="tag">Minecraft</span>
                <span className="tag">Mod</span>
                <span className="tag">Combat</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="project-details">
            <div className="project-section">
              <h2>About</h2>
              <p>SI Death Bolt brings devastating lightning-based combat mechanics to Minecraft. Harness the power of thunder and lightning to defeat your enemies with spectacular electrical attacks.</p>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                <li>Lightning-based weapons and spells</li>
                <li>Electrical damage system</li>
                <li>Storm summoning abilities</li>
                <li>Chain lightning effects</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="project-actions">
              <a href="/downloads/death-bolt" className="action-btn primary">
                Download
              </a>
              <a href="https://github.com/SkyKingPX/SI-Death-Bolt" className="action-btn secondary">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}