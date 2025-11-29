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
import ElectricBorder from './components/ElectricBorder';
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
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.5}
                  thickness={2}
                  style={{ borderRadius: 25 }}
                >
                  <button 
                    className="search-btn google-search"
                    onClick={handleGoogleSearch}
                    disabled={!searchQuery.trim()}
                  >
                    Search Google
                  </button>
                </ElectricBorder>
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
    <>
      <video autoPlay muted loop className="background-video">
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </video>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div className="page-overlay"><About /></div>} />
        <Route path="/projects" element={<div className="page-overlay"><Projects /></div>} />
        <Route path="/projects/alpha" element={<div className="page-overlay"><ProjectAlpha /></div>} />
        <Route path="/projects/beta" element={<div className="page-overlay"><ProjectBeta /></div>} />
        <Route path="/projects/suite" element={<div className="page-overlay"><ProjectSuite /></div>} />
        <Route path="/projects/gamma" element={<div className="page-overlay"><ProjectGamma /></div>} />
        <Route path="/projects/credits" element={<div className="page-overlay"><ProjectCredits /></div>} />
        <Route path="/projects/death-bolt" element={<div className="page-overlay"><ProjectDeathBolt /></div>} />
        <Route path="/projects/refined-obsidian" element={<div className="page-overlay"><ProjectRefinedObsidian /></div>} />
        <Route path="/projects/item-remover" element={<div className="page-overlay"><ProjectItemRemover /></div>} />
        <Route path="/projects/spectre" element={<div className="page-overlay"><ProjectSpectre /></div>} />
        <Route path="/projects/scriptified" element={<div className="page-overlay"><ProjectScriptified /></div>} />
        <Route path="/projects/lifesteal" element={<div className="page-overlay"><ProjectLifesteal /></div>} />
        <Route path="/projects/crownfall" element={<div className="page-overlay"><ProjectCrownfall /></div>} />
        <Route path="/projects/soncresity-aftermath" element={<div className="page-overlay"><ProjectSoncresityAftermath /></div>} />
        <Route path="/projects/soncresity-fractured-horizons" element={<div className="page-overlay"><ProjectSoncresityFracturedHorizons /></div>} />
        <Route path="/projects/height-datapack-generator" element={<div className="page-overlay"><ProjectHeightDatapackGenerator /></div>} />
        <Route path="/contact" element={<div className="page-overlay"><Contact /></div>} />
      </Routes>
    </>
  )
}

export default App
