'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: "SI Refined Obsidian",
    type: "Minecraft Mod",
    description: "Enhanced obsidian mechanics and features for Minecraft gameplay.",
    status: "available",
    tags: ["Minecraft", "Mod", "Enhancement"],
    logo: "/projects/si_refined_obsidian.png"
  },
  {
    id: 2,
    name: "SI Death Bolt",
    type: "Minecraft Mod", 
    description: "A powerful lightning-based combat mod for Minecraft.",
    status: "available",
    tags: ["Minecraft", "Mod", "Combat"],
    logo: "/projects/si_death_bolt.png"
  },
  {
    id: 3,
    name: "SI Lifesteal",
    type: "Minecraft Mod",
    description: "Life-stealing mechanics and abilities for enhanced survival gameplay.",
    status: "available", 
    tags: ["Minecraft", "Mod", "Survival"],
    logo: "/projects/si_lifesteal.png"
  },
  {
    id: 4,
    name: "SI Item Remover",
    type: "Minecraft Mod",
    description: "Utility mod for efficient item management and removal systems.",
    status: "available",
    tags: ["Minecraft", "Mod", "Utility"],
    logo: "/projects/si_item_remover.png"
  },
  {
    id: 5,
    name: "SI Spectre",
    type: "Minecraft Mod", 
    description: "Spectral abilities and ghost-like mechanics for Minecraft.",
    status: "available",
    tags: ["Minecraft", "Mod", "Supernatural"],
    logo: "/projects/si_spectre.png"
  },
  {
    id: 6,
    name: "SI Scriptified",
    type: "Minecraft Mod",
    description: "Advanced scripting capabilities for Minecraft modding.",
    status: "available",
    tags: ["Minecraft", "Mod", "Scripting"],
    logo: "/projects/si_scriptified.png"
  },
  {
    id: 7,
    name: "SI Crownfall",
    type: "Minecraft Mod",
    description: "Epic fantasy adventure mod with crown-themed gameplay elements.",
    status: "available",
    tags: ["Minecraft", "Mod", "Adventure"],
    logo: "/projects/si_crownfall.png"
  },
  {
    id: 8,
    name: "SI Credits",
    type: "Minecraft Mod",
    description: "Credit system and acknowledgment features for Minecraft servers.",
    status: "available",
    tags: ["Minecraft", "Mod", "Server"],
    logo: "/projects/si_credits.png"
  },
  {
    id: 9,
    name: "Soncresity Aftermath",
    type: "Game Project",
    description: "Post-apocalyptic survival game with immersive storytelling.",
    status: "wip",
    tags: ["Game", "Survival", "Story"],
    logo: "/projects/soncresity_aftermath.png"
  },
  {
    id: 10,
    name: "Soncresity Fractured Horizons",
    type: "Game Project", 
    description: "Sci-fi exploration game set in fractured dimensional worlds.",
    status: "wip",
    tags: ["Game", "Sci-Fi", "Exploration"],
    logo: "/projects/soncresity_fractured_horizons.png"
  }
];

export default function Projects() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const projectTypes = ['Game', 'Modpack', 'Mod', 'Resourcepack', 'Shaderpack', 'Datapack', 'Map'];
  const statusTags = ['available', 'wip', 'discontinued'];
  const statusLabels = { available: 'Available', wip: 'Work In Progress', discontinued: 'Discontinued' };
  const allFilters = [...projectTypes, ...statusTags];
  
  const filteredProjects = activeFilters.length === 0 
    ? projects 
    : projects.filter(project => 
        activeFilters.some(filter => 
          project.type.toLowerCase().includes(filter.toLowerCase()) || 
          project.status === filter
        )
      );

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          <h3 style={{ textAlign: 'center', color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '2rem' }}>
            Our Projects
          </h3>
          
          {/* Project Filter */}
          <div className="projects-filter">
            <h3>Filter by Type</h3>
            <div className="filter-buttons">
              {projectTypes.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${activeFilters.includes(type) ? 'active' : ''}`}
                  onClick={() => toggleFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <h3 style={{ marginTop: '2rem' }}>Filter by Status</h3>
            <div className="filter-buttons">
              {statusTags.map(tag => (
                <button
                  key={tag}
                  className={`filter-btn ${activeFilters.includes(tag) ? 'active' : ''}`}
                  onClick={() => toggleFilter(tag)}
                >
                  {statusLabels[tag as keyof typeof statusLabels]}
                </button>
              ))}
            </div>
            
            {/* Active Filters Display */}
            {activeFilters.length > 0 && (
              <div className="active-filters">
                <span className="filter-label">Active Filters:</span>
                {activeFilters.map(filter => (
                  <div key={filter} className="active-tag">
                    {statusLabels[filter as keyof typeof statusLabels] || filter}
                    <button 
                      className="remove-tag"
                      onClick={() => toggleFilter(filter)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button className="clear-tags" onClick={clearFilters}>
                  Clear All
                </button>
              </div>
            )}
          </div>

          {/* Projects Count */}
          <div className="projects-count">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card project-overview">
                  {/* Status Indicator */}
                  <div className={`status-indicator-card ${project.status}-indicator`}></div>
                  
                  {/* Project Logo */}
                  <div className="project-logo">
                    <img 
                      src={project.logo} 
                      alt={`${project.name} Logo`}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-logo.png';
                      }}
                    />
                  </div>
                  
                  {/* Project Content */}
                  <h3>{project.name}</h3>
                  <p className="project-type">{project.type}</p>
                  <p>{project.description}</p>
                  
                  {/* Project Tags */}
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="project-overlay">
                    <div className="overlay-badges">
                      <span className={`project-status-badge ${project.status}-badge`}>
                        {statusLabels[project.status as keyof typeof statusLabels] || project.status}
                      </span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-type">{project.type} Project</p>
                    <Link href={`/projects/${project.id}`} className="wiki-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>No projects match your current filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}