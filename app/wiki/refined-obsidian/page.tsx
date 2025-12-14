export default function RefinedObsidianWiki() {
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
                src="/projects/si_refined_obsidian.png"
                alt="SI Refined Obsidian Logo"
              />
            </div>
            <div className="project-info">
              <div className="project-status-header">
                <span className="project-status-badge available-badge">
                  Available
                </span>
              </div>
              <h1>SI: Refined Obsidian</h1>
              <p className="project-type-large">Minecraft Mod</p>
              <p className="project-description">Enhanced obsidian mechanics and features for Minecraft gameplay.</p>
              
              {/* Project Tags */}
              <div className="project-tags-large">
                <span className="tag">Minecraft</span>
                <span className="tag">Mod</span>
                <span className="tag">Enhancement</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="project-details">
            <div className="project-section">
              <h2>About</h2>
              <p>SI Refined Obsidian is a comprehensive Minecraft mod that revolutionizes obsidian mechanics. It introduces new crafting recipes, enhanced durability features, and magical properties to obsidian blocks and items.</p>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                <li>Enhanced obsidian crafting system</li>
                <li>Magical obsidian properties</li>
                <li>New decorative obsidian blocks</li>
                <li>Improved mining mechanics</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="project-actions">
              <a href="/downloads/refined-obsidian" className="action-btn primary">
                Download
              </a>
              <a href="https://github.com/SkyKingPX/SI-Refined-Obsidian" className="action-btn secondary">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}