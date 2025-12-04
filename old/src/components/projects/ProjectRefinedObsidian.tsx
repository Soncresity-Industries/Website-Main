import ProjectTemplate from '../ProjectTemplate'

function ProjectRefinedObsidian() {
  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'tutorial', title: 'Tutorial' },
        { id: 'overview', title: 'Overview' },
        { id: 'features', title: 'Features' },
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'commands', title: 'Commands' }
      ]
    }
  ];

  const platformBadges = [
    {
      category: 'All Platforms',
      items: [
        { name: 'Required on Client', image: '/assets/images/badges/required_on_the_client.png' },
        { name: 'Required on Server', image: '/assets/images/badges/required_on_the_server.png' },
        { name: 'Forge', image: '/assets/images/badges/available_for_forge.png' },
        { name: 'Fabric', image: '/assets/images/badges/available_for_fabric.png' },
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/si-refined-obsidian', image: '/assets/images/badges/available_on_curseforge.png' },
        { name: 'Modrinth', url: 'https://modrinth.com/mod/si-refined-obsidian', image: '/assets/images/badges/available_on_modrinth.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-refined-obsidian"
      projectName="SI: Refined Obsidian"
      projectLogo="/assets/images/projects/si_refined_obsidian.png"
      projectType="Native"
      sections={sections}
      badges={platformBadges}
    >
      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        
        <div id="tutorial">
          <h3>Tutorial</h3>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000'}}>
            <iframe
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
              src="https://www.youtube.com/embed/Z3vgH5ml1AM"
              title="SI: Refined Obsidian Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p><em>Watch the official tutorial to learn how to set up and use SI: Refined Obsidian effectively.</em></p>
        </div>

        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Refined Obsidian is a comprehensive obsidian enhancement mod for Minecraft that adds new obsidian variants, a trim, and crafting recipes. It provides an expanded obsidian experience with additional functionality and visual improvements.</p>
          <p>This mod is now <strong>available for download</strong> and ensures that obsidian becomes more versatile and useful in your Minecraft builds and gameplay, making it easy to create amazing obsidian-based structures.</p>
          
          <h4>Key Benefits</h4>
          <ul>
            <li><strong>Client and server compatible</strong> - Works on both sides for full functionality</li>
            <li><strong>Multi-loader support</strong> - Available for Forge, Fabric, and NeoForge</li>
            <li><strong>Easy integration</strong> - Works seamlessly with existing mod setups</li>
            <li><strong>Enhanced building</strong> - More obsidian options for creative builds</li>
          </ul>
        </div>

        <div id="features">
          <h3>Features</h3>
          <p>SI: Refined Obsidian offers a comprehensive set of features designed to enhance obsidian in Minecraft:</p>
          
          <ul>
            <li><strong>Obsidian Variants</strong> - Multiple new types of obsidian blocks</li>
            <li><strong>Enhanced Tools</strong> - Improved obsidian-based tools and weapons</li>
            <li><strong>New Recipes</strong> - Additional crafting options for obsidian items</li>
            <li><strong>Visual Improvements</strong> - Better textures and visual effects</li>
            <li><strong>Building Blocks</strong> - Decorative obsidian variants for construction</li>
            <li><strong>Utility Items</strong> - Functional obsidian-based items and blocks</li>
            <li><strong>Performance Optimized</strong> - Efficient rendering and gameplay</li>
            <li><strong>Compatibility</strong> - Works well with other building mods</li>
          </ul>
          
          <p>These features work together to provide a complete obsidian enhancement experience.</p>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <p>Getting SI: Refined Obsidian up and running is straightforward. Follow these steps for a smooth installation:</p>
          
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1</li>
            <li>Forge, Fabric, or NeoForge 21.1.200+ installed</li>
            <li>Java 21</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li><strong>Download the mod</strong> from CurseForge or Modrinth using the badges above</li>
            <li><strong>Locate your mods folder</strong> - Usually found in <code>.minecraft/mods/</code></li>
            <li><strong>Place the downloaded .jar file</strong> into your mods folder</li>
            <li><strong>Launch Minecraft</strong> with your chosen mod loader to verify installation</li>
            <li><strong>Check the mod list</strong> in-game to confirm SI: Refined Obsidian is loaded</li>
          </ol>
          
          <p><strong>Note:</strong> This mod needs to be installed on both client and server for full functionality in multiplayer environments.</p>
        </div>

        <div id="usage">
          <h3>Usage</h3>
          <p>Once installed, SI: Refined Obsidian automatically adds new obsidian content to your Minecraft experience:</p>
          
          <h4>New Blocks</h4>
          <p>Find the new obsidian variants in your creative inventory or craft them using the new recipes. Each variant has unique properties and uses.</p>
          
          <h4>Crafting</h4>
          <p>Use the enhanced crafting recipes to create:</p>
          <ul>
            <li>Refined obsidian tools with improved durability</li>
            <li>Decorative obsidian blocks for building</li>
            <li>Utility items with special obsidian properties</li>
            <li>Advanced obsidian-based contraptions</li>
          </ul>
        </div>

        <div id="commands">
          <h3>Commands</h3>
          <p>SI: Refined Obsidian provides several useful commands for managing obsidian content:</p>
          
          <h4>Available Commands</h4>
          <pre><code>/refinedobs info
/refinedobs recipes
/refinedobs variants
/refinedobs help</code></pre>
          
          <h4>Command Details</h4>
          <ul>
            <li><code>/refinedobs info</code> - Display information about refined obsidian features</li>
            <li><code>/refinedobs recipes</code> - Show available crafting recipes</li>
            <li><code>/refinedobs variants</code> - List all obsidian variants and their properties</li>
            <li><code>/refinedobs help</code> - Display command help and usage information</li>
          </ul>
          
          <p><strong>Permissions:</strong> Most commands are available in single-player. In multiplayer, some commands may require appropriate permissions from server administrators.</p>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectRefinedObsidian;