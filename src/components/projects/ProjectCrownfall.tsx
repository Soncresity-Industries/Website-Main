import ProjectTemplate from '../ProjectTemplate'

function ProjectCrownfall() {
  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'overview', title: 'Overview' },
        { id: 'features', title: 'Features' },
        { id: 'installation', title: 'Installation' },
        { id: 'server-setup', title: 'Server Setup' },
        { id: 'gameplay', title: 'Gameplay' },
        { id: 'compatibility', title: 'Compatibility' }
      ]
    }
  ];

  const platformBadges = [
    {
      category: 'All Platforms',
      items: [
        { name: 'Required on Client', image: '/assets/images/badges/required_on_the_client.png' },
        { name: 'Required on Server', image: '/assets/images/badges/required_on_the_server.png' },
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'Available on Our Website', url: '', image: '/assets/images/badges/available_on_our_website.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-crownfall"
      projectName="SI: Crownfall"
      projectLogo="/assets/images/projects/si_crownfall.png"
      projectType="Native"
      sections={sections}
      badges={platformBadges}
    >
      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        
        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Crownfall is an immersive medieval fantasy modpack designed specifically for large-scale multiplayer servers with MMO-style gameplay. Experience epic quests, build kingdoms, engage in massive battles, and explore a rich fantasy world with hundreds of other players.</p>
          <p>This comprehensive modpack transforms Minecraft into a persistent medieval world where players can form guilds, claim territories, engage in political intrigue, and participate in server-wide events that shape the realm's history.</p>
        </div>

        <div id="features">
          <h3>Key Features</h3>
          <h4>MMO Gameplay</h4>
          <ul>
            <li><strong>Guild System:</strong> Form powerful guilds with ranks, permissions, and shared resources</li>
            <li><strong>Territory Control:</strong> Claim and defend lands, build fortresses and cities</li>
            <li><strong>Player Economy:</strong> Complex economy with trade routes, markets, and currencies</li>
            <li><strong>Quest System:</strong> Dynamic quests and storylines that evolve based on player actions</li>
            <li><strong>Class System:</strong> Choose from multiple character classes with unique abilities</li>
          </ul>

          <h4>Medieval Fantasy Elements</h4>
          <ul>
            <li><strong>Medieval Architecture:</strong> Extensive building blocks for castles, towns, and fortifications</li>
            <li><strong>Fantasy Creatures:</strong> Dragons, mythical beasts, and magical entities</li>
            <li><strong>Magic Systems:</strong> Spellcasting, enchantments, and magical artifacts</li>
            <li><strong>Medieval Technology:</strong> Siege engines, advanced smithing, and period-appropriate tools</li>
            <li><strong>Noble Houses:</strong> Political system with kings, lords, and noble families</li>
          </ul>

          <h4>Server-Scale Features</h4>
          <ul>
            <li><strong>Large World Generation:</strong> Optimized for massive worlds with thousands of chunks</li>
            <li><strong>Server Events:</strong> Realm-wide events, wars, and celebrations</li>
            <li><strong>Performance Optimization:</strong> Carefully tuned for stable large-server gameplay</li>
            <li><strong>Admin Tools:</strong> Comprehensive server management and monitoring tools</li>
            <li><strong>Cross-Server Integration:</strong> Support for multiple connected server instances</li>
          </ul>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1</li>
            <li>NeoForge (latest version for 1.21.1)</li>
            <li>Minimum 8GB RAM allocated (16GB recommended for optimal performance)</li>
            <li>Stable internet connection for multiplayer gameplay</li>
          </ul>
          
          <h4>Client Installation</h4>
          <ol>
            <li>Download the SI: Crownfall modpack from our website</li>
            <li>Install NeoForge for Minecraft 1.21.1</li>
            <li>Extract the modpack files to your Minecraft directory</li>
            <li>Allocate at least 8GB of RAM to Minecraft (16GB recommended)</li>
            <li>Launch Minecraft with the Crownfall profile</li>
            <li>Connect to a compatible Crownfall server</li>
          </ol>

          <p><strong>Note:</strong> This modpack is specifically designed for multiplayer servers and requires both client and server installation for proper functionality.</p>
        </div>

        <div id="server-setup">
          <h3>Server Setup</h3>
          <h4>Server Requirements</h4>
          <ul>
            <li><strong>Minimum RAM:</strong> 16GB (32GB+ recommended for 100+ players)</li>
            <li><strong>CPU:</strong> High-performance multi-core processor</li>
            <li><strong>Storage:</strong> SSD recommended for world data and mod files</li>
            <li><strong>Network:</strong> High-bandwidth connection for large player counts</li>
          </ul>

          <h4>Installation Steps</h4>
          <ol>
            <li>Download the server files from our website</li>
            <li>Install NeoForge server for Minecraft 1.21.1</li>
            <li>Configure server.properties for your expected player count</li>
            <li>Set up database connections for player data (MySQL recommended)</li>
            <li>Configure guild, territory, and economy systems</li>
            <li>Import or generate the medieval fantasy world</li>
            <li>Set up backup systems for critical server data</li>
          </ol>

          <h4>Performance Optimization</h4>
          <ul>
            <li>Use dedicated server hosting with NVMe SSD storage</li>
            <li>Configure chunk loading and entity limits appropriately</li>
            <li>Set up load balancing for multiple server instances if needed</li>
            <li>Regular maintenance and cleanup schedules</li>
          </ul>
        </div>

        <div id="gameplay">
          <h3>Gameplay Guide</h3>
          <h4>Getting Started</h4>
          <ol>
            <li><strong>Choose Your Path:</strong> Select a character class and starting kingdom</li>
            <li><strong>Learn the Basics:</strong> Complete tutorial quests to understand game mechanics</li>
            <li><strong>Find Your Place:</strong> Join a guild or start building your own settlement</li>
            <li><strong>Explore the Realm:</strong> Discover dungeons, ruins, and hidden treasures</li>
            <li><strong>Build Your Legacy:</strong> Establish trade routes, forge alliances, or conquer enemies</li>
          </ol>

          <h4>Advanced Gameplay</h4>
          <ul>
            <li><strong>Guild Leadership:</strong> Manage resources, plan campaigns, and lead your members</li>
            <li><strong>Political Intrigue:</strong> Engage in diplomacy, form alliances, and navigate court politics</li>
            <li><strong>Economic Empire:</strong> Control trade routes and establish merchant networks</li>
            <li><strong>Military Campaigns:</strong> Plan and execute large-scale battles and sieges</li>
            <li><strong>Realm Events:</strong> Participate in server-wide storylines and seasonal events</li>
          </ul>
        </div>

        <div id="compatibility">
          <h3>Compatibility</h3>
          <p>SI: Crownfall is specifically designed for NeoForge 1.21.1 and optimized for large multiplayer servers.</p>
          
          <h4>Technical Specifications</h4>
          <ul>
            <li><strong>Minecraft Version:</strong> 1.21.1 only</li>
            <li><strong>Mod Loader:</strong> NeoForge (latest stable)</li>
            <li><strong>Environment:</strong> Client and Server required</li>
            <li><strong>Player Count:</strong> Optimized for 50-500+ concurrent players</li>
          </ul>

          <h4>Server Compatibility</h4>
          <ul>
            <li>✅ Dedicated server hosting platforms</li>
            <li>✅ Custom server configurations and plugins</li>
            <li>✅ Cross-server networking and load balancing</li>
            <li>✅ Database integration for persistent data</li>
            <li>⚠️ Requires significant server resources for optimal performance</li>
            <li>⚠️ Not recommended for small private servers (under 20 players)</li>
          </ul>

          <h4>Current Status</h4>
          <ul>
            <li><strong>Development:</strong> Active development with regular updates</li>
            <li><strong>Testing:</strong> Currently in beta testing phase</li>
            <li><strong>Availability:</strong> Download available exclusively from our website</li>
            <li><strong>Support:</strong> Community support and documentation available</li>
          </ul>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectCrownfall;