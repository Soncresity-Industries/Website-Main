import ProjectTemplate from '../ProjectTemplate'

function ProjectSoncresityAftermath() {
  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'overview', title: 'Overview' },
        { id: 'features', title: 'Features' },
        { id: 'installation', title: 'Installation' },
        { id: 'survival-guide', title: 'Survival Guide' },
        { id: 'gameplay', title: 'Gameplay Mechanics' },
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
      projectId="soncresity-aftermath"
      projectName="Soncresity: Aftermath"
      projectLogo="/assets/images/projects/soncresity_aftermath.png"
      projectType="Native"
      sections={sections}
      badges={platformBadges}
    >
      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        
        <div id="overview">
          <h3>Overview</h3>
          <p>Soncresity: Aftermath is an ultra-hardcore survival modpack that transforms Minecraft into a realistic zombie apocalypse simulation. Every decision matters as you struggle to survive in a world where resources are scarce, zombies are relentless, and death is permanent.</p>
          <p>This modpack strips away the comfort of traditional Minecraft, replacing it with brutal realism where hunger, thirst, temperature, disease, and fatigue all threaten your survival. Can you outlast the aftermath?</p>
        </div>

        <div id="features">
          <h3>Core Features</h3>
          <h4>Realistic Survival Mechanics</h4>
          <ul>
            <li><strong>Advanced Hunger & Thirst:</strong> Realistic nutrition and hydration systems with consequences</li>
            <li><strong>Temperature Control:</strong> Hypothermia and heat stroke based on weather and clothing</li>
            <li><strong>Disease & Infection:</strong> Wounds can become infected, illnesses spread</li>
            <li><strong>Fatigue System:</strong> Sleep deprivation affects performance and health</li>
            <li><strong>Realistic Healing:</strong> No instant health regeneration, wounds heal slowly</li>
            <li><strong>Sanity Mechanics:</strong> Psychological stress affects gameplay</li>
          </ul>

          <h4>Zombie Apocalypse Elements</h4>
          <ul>
            <li><strong>Zombie Hordes:</strong> Dynamic zombie spawning with increasing difficulty over time</li>
            <li><strong>Zombie Variants:</strong> Different types of undead with unique abilities and weaknesses</li>
            <li><strong>Infection Risk:</strong> Zombie bites can turn you into one of them</li>
            <li><strong>Noise Attraction:</strong> Loud sounds draw zombie attention</li>
            <li><strong>Safe Zones:</strong> Rare areas that provide temporary respite</li>
            <li><strong>Apocalypse Progression:</strong> World becomes more dangerous as time passes</li>
          </ul>

          <h4>Hardcore Survival Features</h4>
          <ul>
            <li><strong>Permadeath:</strong> Death is permanent with no respawning</li>
            <li><strong>Limited Resources:</strong> Scavenging and conservation are essential</li>
            <li><strong>Realistic Crafting:</strong> Complex recipes requiring proper tools and materials</li>
            <li><strong>Weather Hazards:</strong> Storms, extreme temperatures, and natural disasters</li>
            <li><strong>Tool Degradation:</strong> Equipment breaks down and needs maintenance</li>
            <li><strong>Limited Inventory:</strong> Realistic carrying capacity with weight systems</li>
          </ul>
        </div>

        <div id="installation">
          <h3>Installation</h3>
          <h4>Prerequisites</h4>
          <ul>
            <li>Minecraft 1.21.1</li>
            <li>NeoForge (latest version for 1.21.1)</li>
            <li>Minimum 12GB RAM allocated (16GB+ recommended)</li>
            <li>Strong nerves and patience for hardcore gameplay</li>
          </ul>
          
          <h4>Client Installation</h4>
          <ol>
            <li>Download Soncresity: Aftermath from our website (coming soon)</li>
            <li>Install NeoForge for Minecraft 1.21.1</li>
            <li>Extract the modpack files to your Minecraft directory</li>
            <li>Allocate at least 12GB of RAM (hardcore modpacks are resource-intensive)</li>
            <li>Configure video settings for optimal performance</li>
            <li>Launch Minecraft with the Aftermath profile</li>
            <li>Prepare for the most challenging survival experience</li>
          </ol>

          <h4>Server Installation</h4>
          <ol>
            <li>Download the server files from our website</li>
            <li>Install NeoForge server for Minecraft 1.21.1</li>
            <li>Configure difficulty settings and world generation</li>
            <li>Set up permadeath and backup systems</li>
            <li>Configure zombie spawning and progression settings</li>
            <li>Test all survival mechanics before opening to players</li>
          </ol>

          <p><strong>Warning:</strong> This modpack is designed for experienced players who enjoy extremely challenging survival gameplay.</p>
        </div>

        <div id="survival-guide">
          <h3>Survival Guide</h3>
          <h4>First 24 Hours</h4>
          <ol>
            <li><strong>Find Immediate Shelter:</strong> Locate or build basic protection before nightfall</li>
            <li><strong>Secure Water:</strong> Find a clean water source and purification method</li>
            <li><strong>Gather Food:</strong> Scavenge for non-perishable food items</li>
            <li><strong>Stay Quiet:</strong> Avoid making noise that attracts zombies</li>
            <li><strong>Treat Wounds:</strong> Address any injuries immediately to prevent infection</li>
            <li><strong>Plan for Tomorrow:</strong> Assess resources and plan next moves carefully</li>
          </ol>

          <h4>Long-Term Survival</h4>
          <ul>
            <li><strong>Establish Base:</strong> Create a secure, well-hidden base with multiple escape routes</li>
            <li><strong>Resource Management:</strong> Ration food and water carefully, maintain equipment</li>
            <li><strong>Medical Supplies:</strong> Stockpile bandages, antibiotics, and painkillers</li>
            <li><strong>Mental Health:</strong> Manage stress and sanity through safe activities</li>
            <li><strong>Weather Preparation:</strong> Create seasonal clothing and weatherproof shelter</li>
            <li><strong>Zombie Defense:</strong> Develop strategies for avoiding and eliminating threats</li>
          </ul>
        </div>

        <div id="gameplay">
          <h3>Gameplay Mechanics</h3>
          <h4>Health & Wellness</h4>
          <ul>
            <li><strong>Injury System:</strong> Broken bones, cuts, burns, and infections all require specific treatment</li>
            <li><strong>Nutrition Balance:</strong> Protein, carbohydrates, vitamins, and minerals all matter</li>
            <li><strong>Hydration Levels:</strong> Clean water vs. dirty water with disease risks</li>
            <li><strong>Sleep Cycles:</strong> REM sleep, insomnia, and sleep deprivation effects</li>
            <li><strong>Body Temperature:</strong> Clothing layers, shelter heating, and weather exposure</li>
          </ul>

          <h4>Zombie Mechanics</h4>
          <ul>
            <li><strong>Infection Chance:</strong> Bites have percentage chance of turning you</li>
            <li><strong>Zombie AI:</strong> Smart zombies that hunt, track, and coordinate</li>
            <li><strong>Horde Events:</strong> Massive zombie waves triggered by various factors</li>
            <li><strong>Sound System:</strong> Footsteps, breaking blocks, and combat attract attention</li>
            <li><strong>Scent Tracking:</strong> Zombies can follow blood trails and player scent</li>
          </ul>

          <h4>Resource Scarcity</h4>
          <ul>
            <li><strong>Limited Spawns:</strong> Resources don't respawn in most areas</li>
            <li><strong>Decay System:</strong> Food spoils, materials degrade over time</li>
            <li><strong>Realistic Crafting:</strong> Need proper workbenches, tools, and knowledge</li>
            <li><strong>Fuel Shortage:</strong> Limited coal, wood, and other fuel sources</li>
          </ul>
        </div>

        <div id="compatibility">
          <h3>Compatibility</h3>
          <p>Soncresity: Aftermath is specifically designed for NeoForge 1.21.1 with carefully balanced hardcore survival mechanics.</p>
          
          <h4>Technical Specifications</h4>
          <ul>
            <li><strong>Minecraft Version:</strong> 1.21.1 only</li>
            <li><strong>Mod Loader:</strong> NeoForge (latest stable)</li>
            <li><strong>Environment:</strong> Client and Server required</li>
            <li><strong>Recommended Players:</strong> 1-10 (small groups or solo play)</li>
          </ul>

          <h4>Performance Requirements</h4>
          <ul>
            <li>✅ High-end gaming computers for smooth performance</li>
            <li>✅ Dedicated server hosting recommended for multiplayer</li>
            <li>✅ Regular backups essential due to permadeath mechanics</li>
            <li>⚠️ Not suitable for casual or new Minecraft players</li>
            <li>⚠️ Requires significant time investment and patience</li>
            <li>⚠️ May cause stress or frustration due to hardcore nature</li>
          </ul>

          <h4>Current Status</h4>
          <ul>
            <li><strong>Development:</strong> Active development and balance testing</li>
            <li><strong>Testing Phase:</strong> Internal testing with hardcore survival experts</li>
            <li><strong>Release Status:</strong> Coming soon - not yet available for download</li>
            <li><strong>Target Audience:</strong> Hardcore survival enthusiasts and challenge seekers</li>
          </ul>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectSoncresityAftermath;