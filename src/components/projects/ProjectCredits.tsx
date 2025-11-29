import ProjectTemplate from '../ProjectTemplate'

function ProjectCredits() {
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
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/si-credits', image: '/assets/images/badges/available_on_curseforge.png' },
        { name: 'Modrinth', url: 'https://modrinth.com/mods', image: '/assets/images/badges/available_on_modrinth.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-credits"
      projectName="SI: Credits"
      projectLogo="/assets/images/projects/si_credits.png"
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
              title="SI: Credits Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p><em>Watch the official tutorial to learn how to set up and use SI: Credits effectively.</em></p>
        </div>

        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Credits is a comprehensive credit and attribution management mod for Minecraft. It provides an elegant way to display credits for Soncresity Industries directly within the game interface.</p>
          <p>This mod ensures proper recognition and attribution for all contributors to your Minecraft experience, making it easy to acknowledge the hard work of the Soncresity Industries team.</p>
          
          <h4>Key Benefits</h4>
          <ul>
            <li><strong>Client-side only</strong> - No server installation required</li>
            <li><strong>NeoForge compatible</strong> - Built specifically for modern Minecraft modding</li>
            <li><strong>Easy integration</strong> - Works seamlessly with existing mod setups</li>
          </ul>
        </div>

        <div id="features">
          <h3>Features</h3>
          <p>SI: Credits offers a comprehensive set of features designed to make displaying credits simple and effective:</p>
          
          <ul>
            <li><strong>In-Game Credits Display</strong> - Show credits directly within Minecraft's interface</li>
            <li><strong>Developer Recognition</strong> - Highlight mod developers and their contributions</li>
          </ul>
          
          <p>These features work together to provide a complete solution for managing and displaying credits in your Minecraft environment.</p>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <p>Getting SI: Credits up and running is straightforward. Follow these steps for a smooth installation:</p>
          
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1</li>
            <li>NeoForge 21.1.200+ installed</li>
            <li>Java 21</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li><strong>Download the mod</strong> from CurseForge or Modrinth using the badges above</li>
            <li><strong>Locate your mods folder</strong> - Usually found in <code>.minecraft/mods/</code></li>
            <li><strong>Place the downloaded .jar file</strong> into your mods folder</li>
            <li><strong>Launch Minecraft</strong> with NeoForge to verify installation</li>
            <li><strong>Check the mod list</strong> in-game to confirm SI: Credits is loaded</li>
          </ol>
          
          <p><strong>Note:</strong> This mod only needs to be installed on the client. Server installation is not required or recommended.</p>
        </div>

        <div id="usage">
          <h3>Usage</h3>
          <p>Once installed, SI: Credits integrates seamlessly into your Minecraft experience:</p>
          
          <h4>Viewing Credits</h4>
          <p>Access the credits through the main menu. Credits are displayed at the bottom right corner of your game window.</p>

        </div>

      </section>
    </ProjectTemplate>
  );
}

export default ProjectCredits;