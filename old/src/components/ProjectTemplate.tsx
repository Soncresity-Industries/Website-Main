import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../App.css'

interface Section {
  id: string
  title: string
  subsections?: { id: string; title: string }[]
}

interface ProjectTemplateProps {
  projectId: string
  projectName: string
  projectLogo: string
  projectType: 'Native' | 'Partnered'
  sections: Section[]
  badges?: { category: string; items: { name: string; url?: string; image: string }[] }[]
  children: React.ReactNode
}

function ProjectTemplate({ 
  projectName, 
  projectLogo, 
  projectType, 
  sections, 
  badges = [], 
  children 
}: ProjectTemplateProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [activeSection, setActiveSection] = useState('')

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Expand the section if it has subsections
      const section = sections.find(s => s.id === sectionId)
      if (section?.subsections) {
        setExpandedSections(prev => new Set([...prev, sectionId]))
      }
    }
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

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
      
      <main className="main project-main">
        <div className="container">
          <div className="project-layout">
            {/* Sidebar */}
            <aside className="project-sidebar">
              <nav className="sidebar-nav">
                <Link to="/projects" className="back-link">← Back to Projects</Link>
                
                <div className="sidebar-sections">
                  {sections.map(section => (
                    <div key={section.id} className="sidebar-section">
                      <button
                        className={`sidebar-section-btn ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => {
                          scrollToSection(section.id)
                          if (section.subsections) {
                            toggleSection(section.id)
                          }
                        }}
                      >
                        {section.title}
                        {section.subsections && (
                          <span className={`expand-icon ${expandedSections.has(section.id) ? 'expanded' : ''}`}>
                            ▼
                          </span>
                        )}
                      </button>
                      
                      {section.subsections && expandedSections.has(section.id) && (
                        <div className="sidebar-subsections">
                          {section.subsections.map(subsection => (
                            <button
                              key={subsection.id}
                              className="sidebar-subsection-btn"
                              onClick={() => scrollToSection(subsection.id)}
                            >
                              {subsection.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="project-content">
              {/* Project Header */}
              <div className="project-header-section">
                <div className="project-logo-large">
                  <img src={projectLogo} alt={projectName} />
                </div>
                
                <h1 className="project-title">{projectName}</h1>
                
                <div className="project-type-tag">
                  <span className={`type-badge ${projectType.toLowerCase()}`}>
                    {projectType}
                  </span>
                </div>

                {/* Platform Badges */}
                {badges.length > 0 && (
                  <div className="platform-badges">
                    {badges.map(category => (
                      <div key={category.category} className="badge-category">
                        <div className="badge-row">
                          {category.items.map(badge => (
                            badge.url ? (
                              <a
                                key={badge.name}
                                href={badge.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="platform-badge"
                                title={badge.name}
                              >
                                <img src={badge.image} alt={badge.name} />
                              </a>
                            ) : (
                              <span
                                key={badge.name}
                                className="platform-badge"
                                title={badge.name}
                              >
                                <img src={badge.image} alt={badge.name} />
                              </span>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-body">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Soncresity Industries. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default ProjectTemplate