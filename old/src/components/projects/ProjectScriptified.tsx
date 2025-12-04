import React from 'react';
import ProjectTemplate from '../ProjectTemplate';

const ProjectScriptified: React.FC = () => {
  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'overview', title: 'Overview' },
        { id: 'features', title: 'Features' },
        { id: 'installation', title: 'Installation' },
        { id: 'configuration', title: 'Configuration' },
        { id: 'compatibility', title: 'Compatibility' }
      ]
    }
  ];

  const platformBadges = [
    {
      category: 'All Platforms',
      items: [
        { name: 'Required on Client', image: '/assets/images/badges/required_on_the_client.png', url: '' },
        { name: 'Required on Server', image: '/assets/images/badges/required_on_the_server.png', url: '' },
        { name: 'NeoForge', image: '/assets/images/badges/available_for_neoforge.png', url: '' },
        { name: 'CurseForge', image: '/assets/images/badges/available_on_curseforge.png', url: '' },
        { name: 'Modrinth', image: '/assets/images/badges/available_on_modrinth.png', url: '' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="si-scriptified"
      projectName="SI: Scriptified"
      projectLogo="/assets/images/projects/si_scriptified.png"
      projectType="Native"
      sections={sections}
      badges={platformBadges}
    >
      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        
        <div id="overview">
          <h3>Overview</h3>
          <p>SI: Scriptified is a terrifying addon for the mod "The Broken Script" that adds a collection of horror entities, random events, and jumpscares to enhance your gameplay experience. This mod transforms your world into an unpredictable nightmare where danger lurks around every corner.</p>
          <p>Designed to work seamlessly with The Broken Script mod, SI: Scriptified introduces spine-chilling encounters and atmospheric horror elements that will keep you on edge throughout your Minecraft adventure.</p>
        </div>

        <div id="features">
          <h3>Key Features</h3>
          <ul>
            <li><strong>Horror Entities:</strong> New terrifying creatures that spawn in specific conditions</li>
            <li><strong>Random Events:</strong> Unpredictable occurrences that create tension and atmosphere</li>
            <li><strong>Jumpscares:</strong> Carefully crafted scares that trigger at the perfect moments</li>
            <li><strong>Environmental Effects:</strong> Audio and visual effects that enhance the horror atmosphere</li>
            <li><strong>The Broken Script Integration:</strong> Full compatibility and enhancement for the base mod</li>
            <li><strong>Server Support:</strong> Multiplayer compatible for shared horror experiences</li>
          </ul>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1</li>
            <li>NeoForge (latest version for 1.21.1)</li>
            <li>The Broken Script mod (required dependency)</li>
          </ul>
          
          <h4>Installation Steps</h4>
          <ol>
            <li>Download and install NeoForge for Minecraft 1.21.1</li>
            <li>Download The Broken Script mod from CurseForge or Modrinth</li>
            <li>Download SI: Scriptified from the links above</li>
            <li>Place both mod files in your <code>mods</code> folder</li>
            <li>Launch Minecraft with the NeoForge profile</li>
            <li>Verify both mods are loaded in the Mods menu</li>
          </ol>

          <p><strong>Note:</strong> The Broken Script mod is required for SI: Scriptified to function. Make sure to install it first.</p>
        </div>

        <div id="configuration">
          <h3>Configuration</h3>
          <p>SI: Scriptified provides several configuration options to customize your horror experience:</p>
          
          <h4>Entity Settings</h4>
          <ul>
            <li><strong>Spawn Rates:</strong> Adjust how frequently horror entities appear</li>
            <li><strong>Entity Behavior:</strong> Modify AI patterns and aggression levels</li>
            <li><strong>Spawn Conditions:</strong> Set specific requirements for entity spawning</li>
          </ul>

          <h4>Event Configuration</h4>
          <ul>
            <li><strong>Event Frequency:</strong> Control how often random events occur</li>
            <li><strong>Event Types:</strong> Enable or disable specific event categories</li>
            <li><strong>Timing Settings:</strong> Adjust event timing and duration</li>
          </ul>

          <h4>Jumpscare Options</h4>
          <ul>
            <li><strong>Intensity Levels:</strong> Set jumpscare intensity from mild to terrifying</li>
            <li><strong>Trigger Conditions:</strong> Customize when jumpscares can occur</li>
            <li><strong>Visual Effects:</strong> Configure screen effects and animations</li>
            <li><strong>Audio Settings:</strong> Adjust volume and sound effects</li>
          </ul>
        </div>

        <div id="compatibility">
          <h3>Compatibility</h3>
          <p>SI: Scriptified is specifically designed for NeoForge 1.21.1 and requires The Broken Script mod to function properly.</p>
          
          <h4>Mod Dependencies</h4>
          <ul>
            <li><strong>Required:</strong> The Broken Script (any compatible version)</li>
            <li><strong>Loader:</strong> NeoForge only</li>
            <li><strong>Minecraft Version:</strong> 1.21.1</li>
            <li><strong>Environment:</strong> Client and Server</li>
          </ul>

          <h4>Known Compatibility</h4>
          <ul>
            <li>✅ Works with most horror and apocalypse modpacks</li>
            <li>✅ Compatible with other Soncresity Industries mods</li>
            <li>✅ Supports multiplayer servers</li>
            <li>⚠️ May conflict with mods that heavily modify entity spawning</li>
            <li>⚠️ Some visual effects may not work with certain shaderpack configurations</li>
          </ul>
        </div>
      </section>
    </ProjectTemplate>
  );
};

export default ProjectScriptified;