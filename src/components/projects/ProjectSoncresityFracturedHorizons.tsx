import ProjectTemplate from '../ProjectTemplate'

function ProjectSoncresityFracturedHorizons() {
  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'overview', title: 'Overview' },
        { id: 'features', title: 'Features' },
        { id: 'story', title: 'Story & Setting' },
        { id: 'gameplay', title: 'Gameplay' },
        { id: 'world', title: 'Open World' },
        { id: 'system-requirements', title: 'System Requirements' }
      ]
    }
  ];

  return (
    <ProjectTemplate
      projectId="soncresity-fractured-horizons"
      projectName="Soncresity: Fractured Horizons"
      projectLogo="/assets/images/projects/soncresity_fractured_horizons.png"
      projectType="Native"
      sections={sections}
    >
      {/* Content Section */}
      <section id="content">
        <h2>Content</h2>
        
        <div id="overview">
          <h3>Overview</h3>
          <p>Soncresity: Fractured Horizons is an epic medieval fantasy single-player RPG built in Unreal Engine 5. Explore a vast open world filled with ancient mysteries, political intrigue, and supernatural forces that threaten to tear the realm apart.</p>
          <p>Set in a world where reality itself has been fractured by an ancient catastrophe, players must navigate through shifting landscapes, uncover lost civilizations, and master powerful abilities to restore balance to the shattered realm.</p>
        </div>

        <div id="features">
          <h3>Key Features</h3>
          <h4>Core Gameplay</h4>
          <ul>
            <li><strong>Open World Exploration:</strong> Vast seamless world with diverse biomes and hidden secrets</li>
            <li><strong>Dynamic Combat System:</strong> Fluid melee and magic combat with combo systems</li>
            <li><strong>Character Progression:</strong> Deep skill trees and ability customization</li>
            <li><strong>Crafting & Equipment:</strong> Extensive weapon and armor crafting with enchantments</li>
            <li><strong>Mount System:</strong> Tame and ride various creatures across the landscape</li>
            <li><strong>Day/Night Cycle:</strong> Dynamic weather and lighting affecting gameplay</li>
          </ul>

          <h4>Unreal Engine 5 Features</h4>
          <ul>
            <li><strong>Nanite Virtualized Geometry:</strong> Incredibly detailed environments and assets</li>
            <li><strong>Lumen Global Illumination:</strong> Realistic dynamic lighting and reflections</li>
            <li><strong>Chaos Physics:</strong> Advanced physics simulation for realistic interactions</li>
            <li><strong>Metahuman Technology:</strong> Lifelike character models and animations</li>
            <li><strong>World Partition:</strong> Seamless open world with no loading screens</li>
            <li><strong>Temporal Upsampling:</strong> Enhanced visual fidelity and performance</li>
          </ul>

          <h4>RPG Elements</h4>
          <ul>
            <li><strong>Branching Storylines:</strong> Player choices affect the world and story outcomes</li>
            <li><strong>Faction System:</strong> Align with different groups and influence political balance</li>
            <li><strong>NPC Relationships:</strong> Build relationships that impact quests and story</li>
            <li><strong>Housing System:</strong> Build and customize personal strongholds</li>
            <li><strong>Economy & Trade:</strong> Dynamic market system affected by player actions</li>
            <li><strong>Achievement System:</strong> Extensive progression tracking and rewards</li>
          </ul>
        </div>

        <div id="story">
          <h3>Story & Setting</h3>
          <h4>The Fractured Realm</h4>
          <p>Long ago, an event known as the Great Sundering tore reality itself apart, creating fractures in space and time that scattered pieces of different worlds across the landscape. Ancient kingdoms fell, magic became unstable, and the natural order was forever changed.</p>
          
          <h4>Your Journey</h4>
          <p>As a Wayfinder - one of the few who can navigate the fractured reality - you possess the rare ability to see and interact with the dimensional rifts. Your quest begins when you discover that the fractures are expanding, threatening to consume what remains of the world.</p>

          <h4>Key Story Elements</h4>
          <ul>
            <li><strong>The Sundering:</strong> Uncover the truth behind the catastrophic event that broke reality</li>
            <li><strong>Lost Kingdoms:</strong> Explore the ruins of civilizations displaced by the fractures</li>
            <li><strong>The Void Touched:</strong> Face creatures corrupted by exposure to dimensional rifts</li>
            <li><strong>Ancient Guardians:</strong> Discover the watchers who tried to prevent the catastrophe</li>
            <li><strong>The Mending:</strong> Learn to harness fracture energy to heal or reshape the world</li>
          </ul>
        </div>

        <div id="gameplay">
          <h3>Gameplay Mechanics</h3>
          <h4>Combat System</h4>
          <ul>
            <li><strong>Weapon Mastery:</strong> Swords, axes, bows, staves, and unique fracture weapons</li>
            <li><strong>Magic Schools:</strong> Elemental, temporal, spatial, and void magic disciplines</li>
            <li><strong>Combo Attacks:</strong> Chain abilities for devastating combination effects</li>
            <li><strong>Defensive Options:</strong> Blocking, dodging, parrying, and magical shields</li>
            <li><strong>Enemy Variety:</strong> From bandits and beasts to eldritch horrors and demons</li>
          </ul>

          <h4>Exploration & Discovery</h4>
          <ul>
            <li><strong>Fracture Navigation:</strong> Use Wayfinder abilities to access hidden areas</li>
            <li><strong>Environmental Puzzles:</strong> Solve reality-bending challenges</li>
            <li><strong>Hidden Treasures:</strong> Discover artifacts from lost civilizations</li>
            <li><strong>Landmark Discovery:</strong> Uncover points of interest that reveal lore</li>
            <li><strong>Vertical Exploration:</strong> Climb mountains, delve into caverns, explore floating islands</li>
          </ul>

          <h4>Character Development</h4>
          <ul>
            <li><strong>Attribute System:</strong> Strength, Agility, Intelligence, Wisdom, and Resonance</li>
            <li><strong>Skill Trees:</strong> Warrior, Ranger, Mage, and Wayfinder specializations</li>
            <li><strong>Talent Points:</strong> Customize abilities and unlock powerful techniques</li>
            <li><strong>Equipment Progression:</strong> Forge and enchant gear with fracture crystals</li>
            <li><strong>Companion Growth:</strong> Train and bond with creature companions</li>
          </ul>
        </div>

        <div id="world">
          <h3>Open World Design</h3>
          <h4>Major Regions</h4>
          <ul>
            <li><strong>The Sundered Plains:</strong> Starting region with gentle rolling hills and scattered ruins</li>
            <li><strong>Crystalfall Peaks:</strong> Mountainous region where fracture energy crystallizes</li>
            <li><strong>The Twisted Marshlands:</strong> Swamplands where reality constantly shifts</li>
            <li><strong>Voidtouched Wastes:</strong> Desolate lands consumed by dimensional corruption</li>
            <li><strong>The Floating Isles:</strong> Sky-bound fragments of ancient civilizations</li>
            <li><strong>The Undergrowth:</strong> Vast underground networks connecting fracture points</li>
          </ul>

          <h4>Dynamic World Features</h4>
          <ul>
            <li><strong>Fracture Events:</strong> Random dimensional storms and reality shifts</li>
            <li><strong>Seasonal Changes:</strong> Weather patterns affect exploration and combat</li>
            <li><strong>Wildlife Behavior:</strong> Animals and monsters with realistic AI patterns</li>
            <li><strong>Settlement Growth:</strong> Towns and outposts evolve based on player actions</li>
            <li><strong>Resource Renewal:</strong> Gathering spots replenish over time</li>
          </ul>
        </div>

        <div id="system-requirements">
          <h3>System Requirements</h3>
          <h4>Minimum Requirements</h4>
          <ul>
            <li><strong>OS:</strong> Windows 10 64-bit (Version 1909 or later)</li>
            <li><strong>Processor:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600</li>
            <li><strong>Memory:</strong> 16 GB RAM</li>
            <li><strong>Graphics:</strong> NVIDIA GTX 1660 Super / AMD RX 580 (6GB VRAM)</li>
            <li><strong>DirectX:</strong> Version 12</li>
            <li><strong>Storage:</strong> 85 GB available space (SSD recommended)</li>
            <li><strong>Network:</strong> Broadband Internet connection (for updates)</li>
          </ul>

          <h4>Recommended Requirements</h4>
          <ul>
            <li><strong>OS:</strong> Windows 11 64-bit</li>
            <li><strong>Processor:</strong> Intel Core i7-10700K / AMD Ryzen 7 3700X</li>
            <li><strong>Memory:</strong> 32 GB RAM</li>
            <li><strong>Graphics:</strong> NVIDIA RTX 3070 / AMD RX 6800 XT (8GB+ VRAM)</li>
            <li><strong>DirectX:</strong> Version 12</li>
            <li><strong>Storage:</strong> 85 GB available space (NVMe SSD)</li>
            <li><strong>Network:</strong> Broadband Internet connection</li>
          </ul>

          <h4>Development Status</h4>
          <ul>
            <li><strong>Engine:</strong> Unreal Engine 5.3+</li>
            <li><strong>Development Stage:</strong> Pre-Alpha (Active Development)</li>
            <li><strong>Target Platforms:</strong> PC (Windows), with potential console releases</li>
            <li><strong>Release Timeline:</strong> Development ongoing - release date TBA</li>
            <li><strong>Team Size:</strong> Independent development with specialized contractors</li>
          </ul>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectSoncresityFracturedHorizons;