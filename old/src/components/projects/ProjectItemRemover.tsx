import ProjectTemplate from '../ProjectTemplate'

function ProjectItemRemover() {
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
        { name: 'Required on Server', image: '/assets/images/badges/required_on_the_server.png' },
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/si-item-remover', image: '/assets/images/badges/available_on_curseforge.png' },
        { name: 'Modrinth', url: 'https://modrinth.com/mod/si-item-remover', image: '/assets/images/badges/available_on_modrinth.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-item-remover"
      projectName="SI: Item Remover"
      projectLogo="/assets/images/projects/si_item_remover.png"
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
              title="SI: Item Remover Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p><em>Watch the official tutorial to learn how to set up and use SI: Item Remover effectively.</em></p>
        </div>

        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Item Remover is a powerful server-side configuration mod for Minecraft that allows administrators to disable recipes or completely remove items from the game. It provides flexible control over item availability through a simple configuration file.</p>
          <p>This mod is now <strong>available for download</strong> and ensures that server operators can customize their gameplay experience by controlling which items and recipes are available to players.</p>
          
          <h4>Key Benefits</h4>
          <ul>
            <li><strong>Server-side only</strong> - No client installation required</li>
            <li><strong>NeoForge compatible</strong> - Built specifically for NeoForge 1.21.1</li>
            <li><strong>Configuration driven</strong> - Easy to configure through config files</li>
            <li><strong>Non-intrusive</strong> - Works without affecting client performance</li>
            <li><strong>Flexible control</strong> - Disable recipes or remove items entirely</li>
          </ul>
        </div>

        <div id="features">
          <h3>Features</h3>
          <p>SI: Item Remover offers a comprehensive set of features designed to give server administrators control over game content:</p>
          
          <ul>
            <li><strong>Recipe Disabling</strong> - Disable specific crafting, smelting, and other recipes</li>
            <li><strong>Item Removal</strong> - Completely remove items from the game world</li>
            <li><strong>Configuration File</strong> - Easy-to-edit config for all modifications</li>
            <li><strong>Hot Reload</strong> - Apply changes without server restart</li>
            <li><strong>Namespace Support</strong> - Target specific mods or vanilla content</li>
            <li><strong>Batch Operations</strong> - Remove multiple items or recipes at once</li>
            <li><strong>Backup Integration</strong> - Safe configuration with backup options</li>
            <li><strong>Performance Optimized</strong> - Minimal impact on server performance</li>
          </ul>
          
          <p>These features work together to provide complete control over item and recipe availability on your server.</p>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <p>Getting SI: Item Remover up and running is straightforward. Follow these steps for a smooth installation:</p>
          
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1 Server</li>
            <li>NeoForge 21.1.200+ installed on server</li>
            <li>Java 21</li>
            <li>Server administrator access</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li><strong>Download the mod</strong> from CurseForge or Modrinth using the badges above</li>
            <li><strong>Locate your server's mods folder</strong> - Usually found in the server directory</li>
            <li><strong>Place the downloaded .jar file</strong> into your server's mods folder</li>
            <li><strong>Start your server</strong> with NeoForge to generate configuration files</li>
            <li><strong>Stop the server</strong> and edit the configuration file as needed</li>
            <li><strong>Restart the server</strong> to apply your configuration</li>
          </ol>
          
          <p><strong>Note:</strong> This mod only needs to be installed on the server. Client installation is not required or recommended.</p>
        </div>

        <div id="usage">
          <h3>Usage</h3>
          <p>Once installed, SI: Item Remover operates through its configuration file system:</p>
          
          <h4>Configuration File</h4>
          <p>The mod generates a configuration file in <code>config/si-item-remover.toml</code> where you can specify:</p>
          <ul>
            <li>Items to completely remove from the game</li>
            <li>Recipes to disable (crafting, smelting, etc.)</li>
            <li>Namespace filters for targeting specific mods</li>
            <li>Batch operations for multiple items</li>
          </ul>
          
          <h4>Configuration Examples</h4>
          <pre><code># Remove specific items entirely
removed_items = [
  "minecraft:diamond_sword",
  "minecraft:netherite_ingot"
]

# Disable specific recipes
disabled_recipes = [
  "minecraft:diamond_sword",
  "minecraft:enchanting_table"
]

# Remove all items from a mod
removed_namespaces = ["example_mod"]</code></pre>
          
          <h4>Hot Reload</h4>
          <p>Use the reload command to apply configuration changes without restarting the server.</p>
        </div>

        <div id="commands">
          <h3>Commands</h3>
          <p>SI: Item Remover provides several useful commands for managing item and recipe removal:</p>
          
          <h4>Available Commands</h4>
          <pre><code>/itemremover reload
/itemremover list
/itemremover check &lt;item&gt;
/itemremover backup</code></pre>
          
          <h4>Command Details</h4>
          <ul>
            <li><code>/itemremover reload</code> - Reload the configuration file without server restart</li>
            <li><code>/itemremover list</code> - Display all currently removed items and disabled recipes</li>
            <li><code>/itemremover check &lt;item&gt;</code> - Check if a specific item or recipe is affected</li>
            <li><code>/itemremover backup</code> - Create a backup of the current configuration</li>
          </ul>
          
          <p><strong>Permissions:</strong> All commands require operator (OP) permissions or appropriate server permissions.</p>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectItemRemover;