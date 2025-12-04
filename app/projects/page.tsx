'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: "Height Datapack Generator",
    type: "Tool",
    description: "A powerful tool for generating Minecraft datapacks that modify player height mechanics.",
    status: "available",
    tags: ["Minecraft", "Datapack", "Web Tool"],
    logo: "/projects/height-generator-logo.png"
  },
  {
    id: 2,
    name: "ElectricBorder Component",
    type: "Library",
    description: "A React component library for creating animated electric border effects.",
    status: "native",
    tags: ["React", "Component", "Animation"],
    logo: "/projects/electric-border-logo.png"
  },
  {
    id: 3,
    name: "Modpack Collection",
    type: "Gaming",
    description: "Curated collection of Minecraft modpacks with enhanced gameplay experiences.",
    status: "partnered",
    tags: ["Minecraft", "Modpack", "Gaming"],
    logo: "/projects/modpack-logo.png"
  }
];

export default function Projects() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilters.length === 0 
    ? projects 
    : projects.filter(project => 
        activeFilters.some(filter => project.tags.includes(filter))
      );

  const toggleFilter = (tag: string) => {
    setActiveFilters(prev => 
      prev.includes(tag) 
        ? prev.filter(f => f !== tag)
        : [...prev, tag]
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
            <h3>Filter by Technology</h3>
            <div className="filter-buttons">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`filter-btn ${activeFilters.includes(tag) ? 'active' : ''}`}
                  onClick={() => toggleFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            {/* Active Filters Display */}
            {activeFilters.length > 0 && (
              <div className="active-filters">
                <span className="filter-label">Active Filters:</span>
                {activeFilters.map(filter => (
                  <div key={filter} className="active-tag">
                    {filter}
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
                        {project.status}
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