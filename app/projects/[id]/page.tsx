'use client';

import { use, useState, useCallback } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const projects = [
  {
    id: 1,
    name: "SI Refined Obsidian",
    type: "Minecraft Mod",
    description: "Enhanced obsidian mechanics and features for Minecraft gameplay.",
    status: "available",
    tags: ["Minecraft", "Mod", "Enhancement"],
    logo: "/projects/si_refined_obsidian.png",
    longDescription: "SI Refined Obsidian is a comprehensive Minecraft mod that revolutionizes obsidian mechanics. It introduces new crafting recipes, enhanced durability features, and magical properties to obsidian blocks and items.",
    features: [
      "Enhanced obsidian crafting system",
      "Magical obsidian properties",
      "New decorative obsidian blocks",
      "Improved mining mechanics"
    ],
    downloadLink: "/downloads/si-refined-obsidian",
    wikiLink: "/wiki/refined-obsidian"
  },
  {
    id: 2,
    name: "SI Death Bolt",
    type: "Minecraft Mod", 
    description: "A powerful lightning-based combat mod for Minecraft.",
    status: "available",
    tags: ["Minecraft", "Mod", "Combat"],
    logo: "/projects/si_death_bolt.png",
    longDescription: "SI Death Bolt brings devastating lightning-based combat mechanics to Minecraft. Harness the power of thunder and lightning to defeat your enemies with spectacular electrical attacks.",
    features: [
      "Lightning-based weapons and spells",
      "Electrical damage system",
      "Storm summoning abilities",
      "Chain lightning effects"
    ],
    downloadLink: "/downloads/death-bolt",
    wikiLink: "/wiki/death-bolt"
  },
  {
    id: 3,
    name: "SI Lifesteal",
    type: "Minecraft Mod",
    description: "Life-stealing mechanics and abilities for enhanced survival gameplay.",
    status: "available", 
    tags: ["Minecraft", "Mod", "Survival"],
    logo: "/projects/si_lifesteal.png",
    longDescription: "SI Lifesteal adds vampiric combat mechanics to Minecraft, allowing players to drain health from enemies and convert it into their own vitality.",
    features: [
      "Vampiric combat system",
      "Health absorption abilities",
      "Life essence mechanics",
      "Blood magic spells"
    ]
  },
  {
    id: 4,
    name: "SI Item Remover",
    type: "Minecraft Mod",
    description: "Utility mod for efficient item management and removal systems.",
    status: "available",
    tags: ["Minecraft", "Mod", "Utility"],
    logo: "/projects/si_item_remover.png",
    longDescription: "SI Item Remover provides advanced item management tools for Minecraft servers and single-player worlds, making inventory cleanup and item removal more efficient.",
    features: [
      "Bulk item removal tools",
      "Advanced filtering system",
      "Automated cleanup schedules",
      "Inventory management utilities"
    ]
  },
  {
    id: 5,
    name: "SI Spectre",
    type: "Minecraft Mod", 
    description: "Spectral abilities and ghost-like mechanics for Minecraft.",
    status: "available",
    tags: ["Minecraft", "Mod", "Supernatural"],
    logo: "/projects/si_spectre.png",
    longDescription: "SI Spectre introduces supernatural elements to Minecraft, allowing players to phase through walls, become invisible, and interact with the spirit world.",
    features: [
      "Spectral phasing abilities",
      "Invisibility mechanics",
      "Spirit world interaction",
      "Ghost-like movement options"
    ]
  },
  {
    id: 6,
    name: "SI Scriptified",
    type: "Minecraft Mod",
    description: "Advanced scripting capabilities for Minecraft modding.",
    status: "available",
    tags: ["Minecraft", "Mod", "Scripting"],
    logo: "/projects/si_scriptified.png",
    longDescription: "SI Scriptified brings powerful scripting capabilities to Minecraft, allowing for dynamic content creation and advanced mod interactions through script-based systems.",
    features: [
      "JavaScript-based scripting engine",
      "Dynamic content generation",
      "Advanced mod interaction APIs",
      "Real-time script execution"
    ]
  },
  {
    id: 7,
    name: "SI Crownfall",
    type: "Minecraft Mod",
    description: "Epic fantasy adventure mod with crown-themed gameplay elements.",
    status: "available",
    tags: ["Minecraft", "Mod", "Adventure"],
    logo: "/projects/si_crownfall.png",
    longDescription: "SI Crownfall is an epic fantasy adventure mod that introduces kingdom management, royal artifacts, and crown-based progression systems to Minecraft.",
    features: [
      "Kingdom management system",
      "Royal artifacts and crowns",
      "Noble progression mechanics",
      "Dynasty building features"
    ]
  },
  {
    id: 8,
    name: "SI Credits",
    type: "Minecraft Mod",
    description: "Credit system and acknowledgment features for Minecraft servers.",
    status: "available",
    tags: ["Minecraft", "Mod", "Server"],
    logo: "/projects/si_credits.png",
    longDescription: "SI Credits provides a comprehensive credit and acknowledgment system for Minecraft servers, helping server owners properly credit contributors and manage attribution.",
    features: [
      "Contributor credit system",
      "Attribution management",
      "Credit display interfaces",
      "Contribution tracking"
    ]
  },
  {
    id: 9,
    name: "Soncresity Aftermath",
    type: "Game Project",
    description: "Post-apocalyptic survival game with immersive storytelling.",
    status: "wip",
    tags: ["Game", "Survival", "Story"],
    logo: "/projects/soncresity_aftermath.png",
    longDescription: "Soncresity Aftermath is an ambitious post-apocalyptic survival game featuring deep storytelling, resource management, and emotional decision-making in a world recovering from catastrophe.",
    features: [
      "Immersive post-apocalyptic world",
      "Complex survival mechanics",
      "Branching narrative system",
      "Emotional decision trees"
    ]
  },
  {
    id: 10,
    name: "Soncresity Fractured Horizons",
    type: "Game Project", 
    description: "Sci-fi exploration game set in fractured dimensional worlds.",
    status: "wip",
    tags: ["Game", "Sci-Fi", "Exploration"],
    logo: "/projects/soncresity_fractured_horizons.png",
    longDescription: "Soncresity Fractured Horizons takes players on a journey through fractured dimensions, exploring alien worlds and uncovering the mysteries of interdimensional travel.",
    features: [
      "Multidimensional exploration",
      "Alien world discovery",
      "Dimensional portal mechanics",
      "Scientific puzzle solving"
    ]
  }
];

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const statusLabels = { 
  available: 'Available', 
  wip: 'Work In Progress', 
  discontinued: 'Discontinued' 
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  const [logoError, setLogoError] = useState(false);
  
  const handleImageError = useCallback(() => {
    setLogoError(true);
  }, []);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          {/* Back Navigation */}
          <div className="back-nav">
            <Link href="/projects" className="back-btn">
              ← Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="project-header">
            <div className="project-logo-large">
              <img 
                src={logoError ? '/placeholder-logo.png' : project.logo}
                alt={`${project.name} Logo`}
                onError={handleImageError}
              />
            </div>
            <div className="project-info">
              <div className="project-status-header">
                <span className={`project-status-badge ${project.status}-badge`}>
                  {statusLabels[project.status as keyof typeof statusLabels]}
                </span>
              </div>
              <h1>{project.name}</h1>
              <p className="project-type-large">{project.type}</p>
              <p className="project-description">{project.description}</p>
              
              {/* Project Tags */}
              <div className="project-tags-large">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="project-details">
            <div className="project-section">
              <h2>About</h2>
              <p>{project.longDescription}</p>
            </div>

            {project.features && (
              <div className="project-section">
                <h2>Key Features</h2>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="project-actions">
              {project.downloadLink && (
                <Link href={project.downloadLink} className="action-btn primary">
                  Download
                </Link>
              )}
              {project.wikiLink && (
                <Link href={project.wikiLink} className="action-btn secondary">
                  View Wiki
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}