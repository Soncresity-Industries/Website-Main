import ProjectTemplate from '../ProjectTemplate'

function ProjectDeathBolt() {
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
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/si-death-bolt', image: '/assets/images/badges/available_on_curseforge.png' },
        { name: 'Modrinth', url: 'https://modrinth.com/mod/si-death-bolt', image: '/assets/images/badges/available_on_modrinth.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-death-bolt"
      projectName="SI: Death Bolt"
      projectLogo="/assets/images/projects/si_death_bolt.png"
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
              title="SI: Death Bolt Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p><em>Watch the official tutorial to learn how to set up and use SI: Death Bolt effectively.</em></p>
        </div>

        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Death Bolt is a powerful death management mod for Minecraft that adds enhanced death mechanics and visual effects. It provides an immersive death experience with lightning bolts and advanced respawn options.</p>
          <p>This mod is now <strong>available for download</strong> and ensures that death in Minecraft becomes more dramatic and meaningful, adding excitement to your gameplay experience.</p>
          
          <h4>Key Benefits</h4>
          <ul>
            <li><strong>Client and server compatible</strong> - Works on both sides for full functionality</li>
            <li><strong>Forge & NeoForge compatible</strong> - Works with both major mod loaders</li>
            <li><strong>Customizable effects</strong> - Tailor death effects to your preferences</li>
            <li><strong>Performance optimized</strong> - Minimal impact on game performance</li>
          </ul>
        </div>

        <div id="features">
          <h3>Features</h3>
          <p>SI: Death Bolt offers a comprehensive set of features designed to enhance the death experience in Minecraft:</p>
          
          <ul>
            <li><strong>Lightning Death Effects</strong> - Dramatic lightning bolts strike when players die</li>
            <li><strong>Custom Death Messages</strong> - Enhanced death messages with more information</li>
            <li><strong>Sound Effects</strong> - Immersive audio to accompany death events</li>
            <li><strong>Respawn Mechanics</strong> - Advanced respawn options and timers</li>
            <li><strong>Configuration Options</strong> - Customize all aspects of the death experience</li>
            <li><strong>Multiplayer Support</strong> - Works seamlessly in multiplayer environments</li>
          </ul>
          
          <p>These features work together to provide a complete overhaul of Minecraft's death mechanics.</p>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <p>Getting SI: Death Bolt up and running is straightforward. Follow these steps for a smooth installation:</p>
          
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1</li>
            <li>Forge or NeoForge 21.1.200+ installed</li>
            <li>Java 21</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li><strong>Download the mod</strong> from CurseForge or Modrinth using the badges above</li>
            <li><strong>Locate your mods folder</strong> - Usually found in <code>.minecraft/mods/</code></li>
            <li><strong>Place the downloaded .jar file</strong> into your mods folder</li>
            <li><strong>Launch Minecraft</strong> with Forge or NeoForge to verify installation</li>
            <li><strong>Check the mod list</strong> in-game to confirm SI: Death Bolt is loaded</li>
          </ol>
          
          <p><strong>Note:</strong> This mod needs to be installed on both client and server for full functionality in multiplayer environments.</p>
        </div>

        <div id="usage">
          <h3>Usage</h3>
          <p>Once installed, SI: Death Bolt automatically enhances your death experience in Minecraft:</p>
          
          <h4>Death Effects</h4>
          <p>When you die, the mod will automatically trigger lightning bolts at your death location, creating a dramatic visual effect.</p>
          
          <h4>Customization</h4>
          <p>Access the configuration file to customize:</p>
          <ul>
            <li>Lightning effect intensity and frequency</li>
            <li>Death message formats and content</li>
            <li>Sound effect volume and types</li>
            <li>Visual effect preferences</li>
          </ul>
        </div>

      </section>
    </ProjectTemplate>
  );
}

export default ProjectDeathBolt;