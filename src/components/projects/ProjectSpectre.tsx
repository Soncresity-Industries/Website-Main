import ProjectTemplate from '../ProjectTemplate'

function ProjectSpectre() {
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
        { name: 'Forge', image: '/assets/images/badges/available_for_forge.png' },
        { name: 'Fabric', image: '/assets/images/badges/available_for_fabric.png' },
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png' },
        { name: 'CurseForge', url: 'https://www.curseforge.com/minecraft/shaderpacks/si-spectre', image: '/assets/images/badges/available_on_curseforge.png' },
        { name: 'Modrinth', url: 'https://modrinth.com/shader/si-spectre', image: '/assets/images/badges/available_on_modrinth.png' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-spectre"
      projectName="SI: Spectre"
      projectLogo="/assets/images/projects/si_spectre.png"
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
              title="SI: Spectre Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p><em>Watch the official tutorial to learn how to install and configure SI: Spectre for the ultimate horror experience.</em></p>
        </div>

        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Spectre is a dark horror shaderpack designed to create a terrifying post-apocalyptic atmosphere in Minecraft. With pitch-black nights and dense fog effects, it transforms your world into a nightmare perfect for horror and zombie apocalypse modpacks.</p>
          <p>This shaderpack is now <strong>available for download</strong> and ensures that every moment in your Minecraft world feels tense and atmospheric, making survival a truly frightening experience.</p>
          
          <h4>Key Benefits</h4>
          <ul>
            <li><strong>Client-side only</strong> - No server installation required</li>
            <li><strong>Universal compatibility</strong> - Works with Forge, Fabric, and NeoForge</li>
            <li><strong>Wide version support</strong> - Compatible with Minecraft 1.7.3 and newer</li>
            <li><strong>Horror atmosphere</strong> - Designed specifically for scary gameplay</li>
            <li><strong>Modpack optimized</strong> - Perfect for zombie apocalypse and horror themes</li>
          </ul>
        </div>

        <div id="features">
          <h3>Features</h3>
          <p>SI: Spectre offers a comprehensive set of atmospheric features designed to create the ultimate horror experience:</p>
          
          <ul>
            <li><strong>Pitch Black Nights</strong> - Complete darkness that forces reliance on light sources</li>
            <li><strong>Dense Fog Effects</strong> - Thick atmospheric fog that limits visibility</li>
            <li><strong>Post-Apocalyptic Lighting</strong> - Eerie and unsettling lighting conditions</li>
            <li><strong>Horror Atmosphere</strong> - Dark, moody visuals perfect for scary scenarios</li>
            <li><strong>Performance Optimized</strong> - Efficient rendering for smooth gameplay</li>
            <li><strong>Customizable Settings</strong> - Adjust fog density and darkness levels</li>
            <li><strong>Survival Focus</strong> - Emphasizes the importance of preparation and light</li>
            <li><strong>Modpack Integration</strong> - Seamless compatibility with horror-themed mods</li>
          </ul>
          
          <p>These features work together to create an immersive and terrifying survival experience.</p>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <p>Getting SI: Spectre up and running requires a shader mod. Follow these steps for proper installation:</p>
          
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.7.3 or newer</li>
            <li>Forge, Fabric, or NeoForge installed</li>
            <li>OptiFine (for older versions) or Iris Shaders (recommended)</li>
            <li>Java 8+ (Java 17+ recommended for newer versions)</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li><strong>Install a shader mod</strong> - Download and install OptiFine or Iris Shaders</li>
            <li><strong>Download SI: Spectre</strong> from CurseForge or Modrinth using the badges above</li>
            <li><strong>Locate your shaderpacks folder</strong> - Usually found in <code>.minecraft/shaderpacks/</code></li>
            <li><strong>Place the downloaded .zip file</strong> into your shaderpacks folder (do not extract)</li>
            <li><strong>Launch Minecraft</strong> and go to Options → Video Settings → Shaders</li>
            <li><strong>Select SI: Spectre</strong> from the shader list and apply</li>
          </ol>
          
          <p><strong>Note:</strong> This shaderpack only needs to be installed on the client. Server installation is not required.</p>
        </div>

        <div id="usage">
          <h3>Usage</h3>
          <p>Once installed, SI: Spectre transforms your Minecraft world into a dark, atmospheric horror experience:</p>
          
          <h4>Horror Gameplay</h4>
          <p>The shaderpack is designed to make survival genuinely challenging and scary:</p>
          <ul>
            <li>Nights become completely dark, requiring torches and light sources</li>
            <li>Dense fog limits your vision, hiding dangers until they're close</li>
            <li>Atmospheric lighting creates an unsettling mood</li>
            <li>Perfect for horror modpacks and zombie apocalypse scenarios</li>
          </ul>
          
          <h4>Recommended Settings</h4>
          <p>For the best horror experience:</p>
          <ul>
            <li>Set render distance to 8-12 chunks for optimal fog effects</li>
            <li>Enable smooth lighting for better atmosphere</li>
            <li>Use high-quality settings if your system can handle it</li>
            <li>Consider pairing with horror-themed resource packs</li>
          </ul>
          
          <h4>Modpack Compatibility</h4>
          <p>SI: Spectre works excellently with:</p>
          <ul>
            <li>Zombie apocalypse modpacks</li>
            <li>Horror-themed mod collections</li>
            <li>Survival and hardcore modpacks</li>
            <li>Post-apocalyptic world mods</li>
          </ul>
        </div>

        <div id="commands">
          <h3>Commands</h3>
          <p>SI: Spectre shader settings are managed through the shader options menu rather than commands:</p>
          
          <h4>Shader Menu Access</h4>
          <p>Access shader settings through:</p>
          <ul>
            <li><strong>In-game:</strong> Options → Video Settings → Shaders → Shader Options</li>
            <li><strong>Hotkey:</strong> Usually F3 + S (varies by shader mod)</li>
          </ul>
          
          <h4>Available Settings</h4>
          <ul>
            <li><strong>Fog Density</strong> - Adjust the thickness of atmospheric fog</li>
            <li><strong>Darkness Level</strong> - Control how pitch black nights become</li>
            <li><strong>Atmospheric Effects</strong> - Toggle various horror atmosphere elements</li>
            <li><strong>Performance Options</strong> - Adjust quality vs performance settings</li>
          </ul>
          
          <p><strong>Note:</strong> Setting changes take effect immediately without requiring a restart.</p>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectSpectre;