import ProjectTemplate from '../ProjectTemplate'

function ProjectLifesteal() {
  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'overview', title: 'Overview' },
        { id: 'features', title: 'Features' },
        { id: 'installation', title: 'Installation' },
        { id: 'configuration', title: 'Configuration' },
        { id: 'commands', title: 'Commands' },
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
        { name: 'Fabric', image: '/assets/images/badges/available_for_fabric.png' },
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'CurseForge', url: '', image: '/assets/images/badges/available_on_curseforge.png' },
        { name: 'Modrinth', url: '', image: '/assets/images/badges/available_on_modrinth.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-lifesteal"
      projectName="SI: Lifesteal"
      projectLogo="/assets/images/projects/si_lifesteal.png"
      projectType="Native"
      sections={sections}
      badges={platformBadges}
    >
      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        
        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Lifesteal is a comprehensive lifesteal mod that adds the classic lifesteal mechanic to Minecraft. When you deal damage to other players, you gain hearts while they lose them, creating intense PvP gameplay where every hit matters.</p>
          <p>This mod is perfect for lifesteal servers and PvP-focused gameplay, providing a balanced and configurable lifesteal system that keeps players engaged and strategic about combat encounters.</p>
        </div>

        <div id="features">
          <h3>Key Features</h3>
          <ul>
            <li><strong>Heart Stealing:</strong> Gain hearts when dealing damage to other players</li>
            <li><strong>Heart Loss:</strong> Lose hearts when taking damage from other players</li>
            <li><strong>Maximum Heart Limit:</strong> Configurable maximum hearts per player</li>
            <li><strong>Minimum Heart Protection:</strong> Configurable minimum hearts to prevent elimination</li>
            <li><strong>Heart Display:</strong> Visual heart counter showing current heart count</li>
            <li><strong>Death Penalties:</strong> Customizable heart loss on death</li>
            <li><strong>PvP Only Mode:</strong> Option to restrict lifesteal to player vs player combat</li>
            <li><strong>Heart Commands:</strong> Admin commands for heart management</li>
            <li><strong>Heart Trading:</strong> Optional heart trading system between players</li>
            <li><strong>Statistics Tracking:</strong> Track hearts gained/lost over time</li>
          </ul>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1, 1.21.4, or 1.21.10</li>
            <li>Fabric Loader or NeoForge (latest version for your MC version)</li>
            <li>Fabric API (if using Fabric)</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li>Download and install Fabric Loader or NeoForge for your Minecraft version</li>
            <li>If using Fabric, download and install Fabric API</li>
            <li>Download SI: Lifesteal from CurseForge or Modrinth</li>
            <li>Place the mod file in your <code>mods</code> folder</li>
            <li>Install on both client and server for full functionality</li>
            <li>Launch Minecraft and verify the mod is loaded</li>
          </ol>

          <p><strong>Note:</strong> This mod must be installed on both client and server to work properly in multiplayer environments.</p>
        </div>

        <div id="configuration">
          <h3>Configuration</h3>
          <p>SI: Lifesteal provides extensive configuration options to customize the lifesteal experience:</p>
          
          <h4>Heart Settings</h4>
          <ul>
            <li><strong>Starting Hearts:</strong> Number of hearts players start with</li>
            <li><strong>Maximum Hearts:</strong> Maximum hearts a player can have</li>
            <li><strong>Minimum Hearts:</strong> Minimum hearts before elimination</li>
            <li><strong>Hearts per Kill:</strong> How many hearts gained per player kill</li>
            <li><strong>Hearts Lost on Death:</strong> Hearts lost when dying to a player</li>
          </ul>

          <h4>Gameplay Options</h4>
          <ul>
            <li><strong>PvP Only:</strong> Restrict lifesteal to player vs player combat</li>
            <li><strong>Heart Trading:</strong> Allow players to trade hearts with each other</li>
            <li><strong>Elimination Mode:</strong> What happens when a player reaches minimum hearts</li>
            <li><strong>Heart Regeneration:</strong> Passive heart regeneration over time</li>
          </ul>

          <h4>Display Settings</h4>
          <ul>
            <li><strong>Heart Counter:</strong> Show current heart count in UI</li>
            <li><strong>Heart Messages:</strong> Chat messages for heart changes</li>
            <li><strong>Death Messages:</strong> Custom death messages for lifesteal deaths</li>
            <li><strong>Statistics Display:</strong> Show lifesteal statistics to players</li>
          </ul>
        </div>

        <div id="commands">
          <h3>Commands</h3>
          <h4>Player Commands</h4>
          <ul>
            <li><code>/hearts</code> - Check your current heart count</li>
            <li><code>/hearts stats</code> - View your lifesteal statistics</li>
            <li><code>/hearts trade &lt;player&gt; &lt;amount&gt;</code> - Trade hearts with another player (if enabled)</li>
            <li><code>/hearts top</code> - View the leaderboard of players with most hearts</li>
          </ul>

          <h4>Admin Commands</h4>
          <ul>
            <li><code>/hearts set &lt;player&gt; &lt;amount&gt;</code> - Set a player's heart count</li>
            <li><code>/hearts give &lt;player&gt; &lt;amount&gt;</code> - Give hearts to a player</li>
            <li><code>/hearts take &lt;player&gt; &lt;amount&gt;</code> - Remove hearts from a player</li>
            <li><code>/hearts reset &lt;player&gt;</code> - Reset a player's hearts to starting amount</li>
            <li><code>/hearts reload</code> - Reload the configuration</li>
          </ul>
        </div>

        <div id="compatibility">
          <h3>Compatibility</h3>
          <p>SI: Lifesteal is designed for maximum compatibility across multiple Minecraft versions and mod loaders.</p>
          
          <h4>Supported Versions</h4>
          <ul>
            <li><strong>Minecraft:</strong> 1.21.1, 1.21.4, 1.21.10</li>
            <li><strong>Fabric:</strong> Latest Fabric Loader + Fabric API</li>
            <li><strong>NeoForge:</strong> Latest NeoForge for each MC version</li>
            <li><strong>Environment:</strong> Client and Server required</li>
          </ul>

          <h4>Known Compatibility</h4>
          <ul>
            <li>✅ Works with most PvP and lifesteal server setups</li>
            <li>✅ Compatible with other Soncresity Industries mods</li>
            <li>✅ Works with most combat enhancement mods</li>
            <li>✅ Compatible with permission and rank plugins</li>
            <li>⚠️ May need configuration adjustments with other heart-modifying mods</li>
            <li>⚠️ Some statistics mods may conflict with heart tracking</li>
          </ul>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectLifesteal;