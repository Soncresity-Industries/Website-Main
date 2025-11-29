import { Link } from 'react-router-dom'
import { useState, useMemo, useEffect } from 'react'
import '../App.css'

// Tag priority order
const tagPriority = {
  'WIP': 1,
  'Native': 2,
  'Partnered': 3,
  'Available': 4,
  'Discontinued': 5
};

// Status Indicator for non-hovered cards
function StatusIndicator({ tags }: { tags: string[] }) {
  const sortedTags = tags.sort((a, b) => (tagPriority[a] || 999) - (tagPriority[b] || 999));
  const highestPriorityTag = sortedTags[0];
  
  return (
    <div className={`status-indicator-card ${highestPriorityTag.toLowerCase()}-indicator`} />
  );
}

// Collapsible Tags Component
function CollapsibleTags({ tags, projectId, isHovered }: { tags: string[], projectId: string, isHovered: boolean }) {
  const [expanded, setExpanded] = useState(false);
  
  // Auto-collapse when not hovering
  useEffect(() => {
    if (!isHovered && expanded) {
      setExpanded(false);
    }
  }, [isHovered, expanded]);
  
  // Sort tags by priority
  const sortedTags = tags.sort((a, b) => (tagPriority[a] || 999) - (tagPriority[b] || 999));
  const highestPriorityTag = sortedTags[0];
  
  return (
    <div className="project-status-badges overlay-badges">
      {!expanded ? (
        <div 
          className={`tag-indicator ${highestPriorityTag.toLowerCase()}-indicator`}
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(true);
          }}
          title={`Click to view tags (${tags.length})`}
        />
      ) : (
        <div className="expanded-tags">
          <div 
            className="collapse-btn"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
          >
            ×
          </div>
          {sortedTags.map(tag => (
            <div 
              key={tag} 
              className={`project-status-badge ${tag.toLowerCase()}-badge`}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Project data structure
const projectsData = [
  {
    id: 'credits',
    name: 'SI: Credits',
    type: 'Mods',
    logo: '/assets/images/projects/si_credits.png',
    route: '/projects/credits',
    tags: ['Native', 'Available']
  },
  {
    id: 'crownfall',
    name: 'SI: Crownfall',
    type: 'Modpacks',
    logo: '/assets/images/projects/si_crownfall.png',
    route: '/projects/crownfall',
    tags: ['Available', 'NeoForge']
  },
  {
    id: 'death-bolt',
    name: 'SI: Death Bolt',
    type: 'Mods',
    logo: '/assets/images/projects/si_death_bolt.png',
    route: '/projects/death-bolt',
    tags: ['Native', 'Available']
  },
  {
    id: 'height-datapack-generator',
    name: 'Height Datapack Generator',
    type: 'Tools',
    logo: '/assets/images/projects/height_datapack_generator.png',
    route: '/projects/height-datapack-generator',
    tags: ['Available', 'Native']
  },
  {
    id: 'item-remover',
    name: 'SI: Item Remover',
    type: 'Mods',
    logo: '/assets/images/projects/si_item_remover.png',
    route: '/projects/item-remover',
    tags: ['Native', 'Available']
  },
  {
    id: 'lifesteal',
    name: 'SI: Lifesteal',
    type: 'Mods',
    logo: '/assets/images/projects/si_lifesteal.png',
    route: '/projects/lifesteal',
    tags: ['Available', 'Fabric', 'NeoForge']
  },
  {
    id: 'refined-obsidian',
    name: 'SI: Refined Obsidian',
    type: 'Mods',
    logo: '/assets/images/projects/si_refined_obsidian.png',
    route: '/projects/refined-obsidian',
    tags: ['Native', 'Available']
  },
  {
    id: 'soncresity-aftermath',
    name: 'Soncresity: Aftermath',
    type: 'Modpacks',
    logo: '/assets/images/projects/soncresity_aftermath.png',
    route: '/projects/soncresity-aftermath',
    tags: ['Available', 'NeoForge']
  },
  {
    id: 'soncresity-fractured-horizons',
    name: 'Soncresity: Fractured Horizons',
    type: 'Games',
    logo: '/assets/images/projects/soncresity_fractured_horizons.png',
    route: '/projects/soncresity-fractured-horizons',
    tags: ['Available', 'Native']
  },
  {
    id: 'spectre',
    name: 'SI: Spectre',
    type: 'Shaderpacks',
    logo: '/assets/images/projects/si_spectre.png',
    route: '/projects/spectre',
    tags: ['Native', 'Available']
  },
  {
    id: 'scriptified',
    name: 'SI: Scriptified',
    type: 'Mods',
    logo: '/assets/images/projects/si_scriptified.png',
    route: '/projects/scriptified',
    tags: ['Available', 'NeoForge']
  },
];

const projectTypes = ['All', 'Mods', 'Modpacks', 'Modloaders', 'Resourcepacks', 'Datapacks', 'Shaderpacks', 'Tools', 'Games'];
const availableTags = ['All Tags', 'WIP', 'Native', 'Partnered', 'Available', 'Discontinued'];

function Projects() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>(['All Tags']);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleTagToggle = (tag: string) => {
    if (tag === 'All Tags') {
      setSelectedTags(['All Tags']);
    } else {
      setSelectedTags(prev => {
        const newTags = prev.filter(t => t !== 'All Tags');
        if (newTags.includes(tag)) {
          const filtered = newTags.filter(t => t !== tag);
          return filtered.length === 0 ? ['All Tags'] : filtered;
        } else {
          return [...newTags, tag];
        }
      });
    }
  };

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = selectedType === 'All' 
      ? projectsData 
      : projectsData.filter(project => project.type === selectedType);
    
    // Filter by tags if not 'All Tags'
    if (!selectedTags.includes('All Tags')) {
      filtered = filtered.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
    }
    
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedType, selectedTags]);

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
            <Link to="/projects" className="active">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <section className="hero">
          <div className="container">
            <h2>Our Projects</h2>
            <p>Showcasing innovation and excellence in action</p>
          </div>
        </section>
        
        <section className="content-section">
          <div className="container">
            <div className="projects-filter">
              <h3>Filter by Type</h3>
              <div className="filter-buttons">
                {projectTypes.map(type => (
                  <button
                    key={type}
                    className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="projects-filter">
              <h3>Filter by Tags</h3>
              <div className="filter-buttons">
                {availableTags.map(tag => (
                  <button
                    key={tag}
                    className={`filter-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {selectedTags.length > 0 && !selectedTags.includes('All Tags') && (
                <div className="active-filters">
                  <span className="filter-label">Active tags: </span>
                  {selectedTags.map(tag => (
                    <span key={tag} className="active-tag">
                      {tag}
                      <button 
                        className="remove-tag"
                        onClick={() => handleTagToggle(tag)}
                        title={`Remove ${tag} filter`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <button 
                    className="clear-tags"
                    onClick={() => setSelectedTags(['All Tags'])}
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
            
            <div className="projects-count">
              Showing {filteredAndSortedProjects.length} project{filteredAndSortedProjects.length !== 1 ? 's' : ''}
              {selectedType !== 'All' && ` in ${selectedType}`}
              {!selectedTags.includes('All Tags') && ` with tags: ${selectedTags.join(', ')}`}
            </div>
            
            <div className="projects-grid">
              {filteredAndSortedProjects.map(project => (
                <div 
                  key={project.id} 
                  className="project-card project-overview"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <StatusIndicator tags={project.tags} />
                  <div className="project-logo">
                    <img src={project.logo} alt={project.name} />
                  </div>
                  <div className="project-overlay">
                    <CollapsibleTags 
                      tags={project.tags} 
                      projectId={project.id} 
                      isHovered={hoveredProject === project.id}
                    />
                    <h3>{project.name}</h3>
                    <div className="project-type">{project.type}</div>
                    <Link to={project.route} className="wiki-btn">Wiki</Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredAndSortedProjects.length === 0 && (
              <div className="no-projects">
                <p>No projects found for the selected type.</p>
              </div>
            )}
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

export default Projects