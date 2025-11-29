import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectAlpha from './components/ProjectAlpha'
import ProjectBeta from './components/ProjectBeta'
import ProjectSuite from './components/ProjectSuite'
import ProjectGamma from './components/ProjectGamma'
import ProjectCredits from './components/projects/ProjectCredits'
import ProjectDeathBolt from './components/projects/ProjectDeathBolt'
import ProjectRefinedObsidian from './components/projects/ProjectRefinedObsidian'
import ProjectItemRemover from './components/projects/ProjectItemRemover'
import ProjectSpectre from './components/projects/ProjectSpectre';
import ProjectScriptified from './components/projects/ProjectScriptified';
import ProjectLifesteal from './components/projects/ProjectLifesteal';
import ProjectCrownfall from './components/projects/ProjectCrownfall';
import ProjectSoncresityAftermath from './components/projects/ProjectSoncresityAftermath';
import ProjectSoncresityFracturedHorizons from './components/projects/ProjectSoncresityFracturedHorizons';
import ProjectHeightDatapackGenerator from './components/projects/ProjectHeightDatapackGenerator';
import './App.css'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleGoogleSearch = () => {
    if (searchQuery.trim()) {
      const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
      window.open(googleUrl, '_blank')
    }
  }

  const handleSiteSearch = () => {
    if (searchQuery.trim()) {
      // For now, we'll use Google site search. You can replace this with your own search functionality later
      const siteSearchUrl = `https://www.google.com/search?q=site:soncresity.com ${encodeURIComponent(searchQuery)}`
      window.open(siteSearchUrl, '_blank')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGoogleSearch()
    }
  }

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
        <section className="hero search-hero">
          <div className="container">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="search-buttons">
                <button 
                  className="search-btn site-search"
                  onClick={handleSiteSearch}
                  disabled={!searchQuery.trim()}
                >
                  Search Site
                </button>
                <button 
                  className="search-btn google-search"
                  onClick={handleGoogleSearch}
                  disabled={!searchQuery.trim()}
                >
                  Search Google
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="features">
          <div className="container">
            <h3>Quick Links</h3>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Company Resources</h4>
                <p>Access internal documents, policies, and employee resources</p>
              </div>
              <div className="feature-card">
                <h4>Project Tools</h4>
                <p>Quick access to project management and collaboration tools</p>
              </div>
              <div className="feature-card">
                <h4>Support</h4>
                <p>IT support, HR assistance, and company directory</p>
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/alpha" element={<ProjectAlpha />} />
      <Route path="/projects/beta" element={<ProjectBeta />} />
      <Route path="/projects/suite" element={<ProjectSuite />} />
      <Route path="/projects/gamma" element={<ProjectGamma />} />
      <Route path="/projects/credits" element={<ProjectCredits />} />
      <Route path="/projects/death-bolt" element={<ProjectDeathBolt />} />
      <Route path="/projects/refined-obsidian" element={<ProjectRefinedObsidian />} />
      <Route path="/projects/item-remover" element={<ProjectItemRemover />} />
      <Route path="/projects/spectre" element={<ProjectSpectre />} />
      <Route path="/projects/scriptified" element={<ProjectScriptified />} />
      <Route path="/projects/lifesteal" element={<ProjectLifesteal />} />
      <Route path="/projects/crownfall" element={<ProjectCrownfall />} />
      <Route path="/projects/soncresity-aftermath" element={<ProjectSoncresityAftermath />} />
      <Route path="/projects/soncresity-fractured-horizons" element={<ProjectSoncresityFracturedHorizons />} />
      <Route path="/projects/height-datapack-generator" element={<ProjectHeightDatapackGenerator />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
