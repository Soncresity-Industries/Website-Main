import React, { useState } from 'react';
import ProjectTemplate from '../ProjectTemplate';
import HeightDatapackGenerator from '../HeightDatapackGenerator';

function ProjectHeightDatapackGenerator() {
  const [generatedDatapack, setGeneratedDatapack] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const sections = [
    {
      id: 'content',
      title: 'Content',
      subsections: [
        { id: 'overview', title: 'Overview' },
        { id: 'generator', title: 'Generator Tool' },
        { id: 'features', title: 'Features' },
        { id: 'installation', title: 'Installation Guide' },
        { id: 'compatibility', title: 'Compatibility' },
        { id: 'technical', title: 'Technical Details' }
      ]
    }
  ];

  const platformBadges = [
    {
      category: 'All Platforms',
      items: [
        { name: 'Available on Our Website', image: '/assets/images/badges/available_on_our_website.png' },
        { name: 'Available on GitHub', url: '', image: '/assets/images/badges/available_on_github.png' }
      ]
    }
  ];

  const handleGenerate = async (version: string, lowerLimit: number, upperLimit: number, description: string, packImage?: File) => {
    setIsGenerating(true);
    
    try {
      // Simulate datapack generation process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate the datapack content
      const heightRange = upperLimit - lowerLimit;
      const datapackName = `height-limit-${lowerLimit}-to-${upperLimit}`;
      const datapackContent = generateDatapackContent(version, lowerLimit, heightRange, description, datapackName);
      
      // Create and trigger download
      downloadDatapack(datapackContent, `${datapackName}-mc${version}`, packImage);
      
      setGeneratedDatapack(`Successfully generated datapack for Minecraft ${version} with height limits ${lowerLimit} to ${upperLimit}!`);
    } catch (error) {
      setGeneratedDatapack('Error generating datapack. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDatapackContent = (version: string, minHeight: number, heightRange: number, description: string, name: string) => {
    // Create proper datapack structure
    const maxHeight = minHeight + heightRange;
    
    return {
      'pack.mcmeta': JSON.stringify({
        pack: {
          pack_format: getPackFormat(version),
          description: description
        }
      }, null, 2),
      [`data/${name}/dimension_type/overworld.json`]: JSON.stringify({
        ultrawarm: false,
        natural: true,
        coordinate_scale: 1.0,
        has_skylight: true,
        has_ceiling: false,
        ambient_light: 0.0,
        fixed_time: null,
        piglin_safe: false,
        bed_works: true,
        respawn_anchor_works: false,
        has_raids: true,
        min_y: minHeight,
        height: heightRange,
        logical_height: Math.min(heightRange, 384),
        infiniburn: "#minecraft:infiniburn_overworld",
        effects: "minecraft:overworld",
        monster_spawn_light_level: {
          type: "minecraft:uniform",
          value: {
            min_inclusive: 0,
            max_inclusive: 7
          }
        },
        monster_spawn_block_light_limit: 0
      }, null, 2),
      [`data/minecraft/dimension_type/overworld.json`]: JSON.stringify({
        ultrawarm: false,
        natural: true,
        coordinate_scale: 1.0,
        has_skylight: true,
        has_ceiling: false,
        ambient_light: 0.0,
        fixed_time: null,
        piglin_safe: false,
        bed_works: true,
        respawn_anchor_works: false,
        has_raids: true,
        min_y: minHeight,
        height: heightRange,
        logical_height: Math.min(heightRange, 384),
        infiniburn: "#minecraft:infiniburn_overworld",
        effects: "minecraft:overworld",
        monster_spawn_light_level: {
          type: "minecraft:uniform",
          value: {
            min_inclusive: 0,
            max_inclusive: 7
          }
        },
        monster_spawn_block_light_limit: 0
      }, null, 2)
    };
  };

  const getPackFormat = (version: string): number => {
    // Map Minecraft versions to pack formats (accurate as of 2025)
    const versionMap: { [key: string]: number } = {
      '1.17.0': 7, '1.17.1': 7,
      '1.18.0': 8, '1.18.1': 8, '1.18.2': 9,
      '1.19.0': 10, '1.19.1': 10, '1.19.2': 10, '1.19.3': 12, '1.19.4': 12,
      '1.20.0': 15, '1.20.1': 15, '1.20.2': 18, '1.20.3': 26, '1.20.4': 26, '1.20.5': 41, '1.20.6': 48,
      '1.21.0': 48, '1.21.1': 48, '1.21.2': 57, '1.21.3': 57, '1.21.4': 61, '1.21.5': 61, 
      '1.21.6': 61, '1.21.7': 61, '1.21.8': 61, '1.21.9': 61, '1.21.10': 61
    };
    
    // For versions not in the map, use the latest format
    return versionMap[version] || 61;
  };

  const downloadDatapack = async (content: any, filename: string, packImage?: File) => {
    // Create a proper ZIP file structure
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();
    
    // Add pack.mcmeta file
    zip.file('pack.mcmeta', content['pack.mcmeta']);
    
    // Add the dimension file with proper folder structure
    const dimensionPath = Object.keys(content).find(key => key.includes('dimension'));
    if (dimensionPath) {
      zip.file(dimensionPath, content[dimensionPath]);
    }
    
    // Add pack.png (either custom or default)
    if (packImage) {
      zip.file('pack.png', packImage);
    } else {
      // Create a simple default pack.png (1x1 blue pixel as PNG)
      const defaultPng = new Uint8Array([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
        0x0C, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0xF8, 0x0F, 0x00, 0x00,
        0x01, 0x00, 0x01, 0x6B, 0xD6, 0x8E, 0x1C, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]);
      zip.file('pack.png', defaultPng);
    }
    
    // Generate and download the ZIP
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.replace('.zip', '') + '.zip';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ProjectTemplate
      projectId="height-datapack-generator"
      projectName="Height Datapack Generator"
      projectLogo="/assets/images/projects/height_datapack_generator.png"
      projectType="Native"
      sections={sections}
      badges={platformBadges}
    >
      <section id="content">
        <h2>Content</h2>
        
        <div id="overview">
          <h3>Overview</h3>
          <p>The Height Datapack Generator is a web-based tool that creates custom Minecraft datapacks to modify world height limits. Whether you want to build massive skyscrapers or dig deeper underground, this tool generates the perfect datapack for your needs.</p>
          <p>Supporting Minecraft versions from 1.17.0 to 1.21.10, this generator creates properly formatted datapacks that work seamlessly in both single-player and multiplayer environments.</p>
        </div>

        <div id="generator">
          <h3>Generator Tool</h3>
          {isGenerating ? (
            <div className="generating-status">
              <div className="loading-spinner"></div>
              <p>Generating your custom height datapack...</p>
            </div>
          ) : (
            <HeightDatapackGenerator onGenerate={handleGenerate} />
          )}
          
          {generatedDatapack && (
            <div className="generation-result">
              <h4>Generation Complete!</h4>
              <p>{generatedDatapack}</p>
              <p>Your datapack has been downloaded. Follow the installation guide below to add it to your world.</p>
            </div>
          )}
        </div>

        <div id="features">
          <h3>Key Features</h3>
          <ul>
            <li><strong>Version Support:</strong> Compatible with Minecraft 1.17.0 through 1.21.10</li>
            <li><strong>Custom Height Limits:</strong> Set any minimum and maximum build heights (divisible by 16)</li>
            <li><strong>Instant Generation:</strong> Create and download datapacks in seconds</li>
            <li><strong>Proper Formatting:</strong> Generates correctly formatted pack.mcmeta and dimension files</li>
            <li><strong>Validation:</strong> Built-in validation ensures your height values work properly</li>
            <li><strong>Cross-Platform:</strong> Works on any device with a web browser</li>
            <li><strong>No Installation Required:</strong> Generate datapacks directly in your browser</li>
            <li><strong>Free to Use:</strong> Completely free tool with no registration required</li>
          </ul>
        </div>

        <div id="installation">
          <h3>Installation Guide</h3>
          <h4>Single-Player Installation</h4>
          <ol>
            <li>Generate and download your custom height datapack using the tool above</li>
            <li>Extract the downloaded ZIP file</li>
            <li>Open your Minecraft saves folder (usually in <code>.minecraft/saves/</code>)</li>
            <li>Navigate to your world folder, then to the <code>datapacks</code> subfolder</li>
            <li>Copy the extracted datapack folder into the datapacks directory</li>
            <li>Launch Minecraft and load your world</li>
            <li>Run <code>/reload</code> in-game to apply the datapack</li>
            <li>Verify installation with <code>/datapack list</code></li>
          </ol>

          <h4>Server Installation</h4>
          <ol>
            <li>Generate your datapack using the tool above</li>
            <li>Stop your Minecraft server</li>
            <li>Navigate to your world folder on the server</li>
            <li>Place the datapack in the <code>world/datapacks/</code> directory</li>
            <li>Start your server</li>
            <li>Use <code>/reload</code> to activate the datapack</li>
            <li>Confirm activation with <code>/datapack list</code></li>
          </ol>

          <h4>Important Notes</h4>
          <ul>
            <li>Always backup your world before installing any datapack</li>
            <li>Height changes only affect newly generated chunks</li>
            <li>Existing chunks will retain their original height limits</li>
            <li>You may need to explore new areas to see the height changes</li>
          </ul>
        </div>

        <div id="compatibility">
          <h3>Compatibility</h3>
          <h4>Supported Minecraft Versions</h4>
          <div className="version-grid">
            <div className="version-category">
              <h5>1.17 Series</h5>
              <ul>
                <li>1.17.0</li>
                <li>1.17.1</li>
              </ul>
            </div>
            <div className="version-category">
              <h5>1.18 Series</h5>
              <ul>
                <li>1.18.0</li>
                <li>1.18.1</li>
                <li>1.18.2</li>
              </ul>
            </div>
            <div className="version-category">
              <h5>1.19 Series</h5>
              <ul>
                <li>1.19.0 - 1.19.4</li>
              </ul>
            </div>
            <div className="version-category">
              <h5>1.20 Series</h5>
              <ul>
                <li>1.20.0 - 1.20.6</li>
              </ul>
            </div>
            <div className="version-category">
              <h5>1.21 Series</h5>
              <ul>
                <li>1.21.0 - 1.21.10</li>
              </ul>
            </div>
          </div>

          <h4>Platform Compatibility</h4>
          <ul>
            <li>✅ Minecraft Java Edition (all supported versions)</li>
            <li>✅ Single-player worlds</li>
            <li>✅ Multiplayer servers</li>
            <li>✅ Modded servers (most configurations)</li>
            <li>❌ Minecraft Bedrock Edition (not supported)</li>
            <li>❌ Realms (datapack limitations)</li>
          </ul>
        </div>

        <div id="technical">
          <h3>Technical Details</h3>
          <h4>Height Limitations</h4>
          <ul>
            <li><strong>Minimum Height:</strong> -2048 blocks (technical limit)</li>
            <li><strong>Maximum Height:</strong> 2047 blocks (technical limit)</li>
            <li><strong>Divisibility:</strong> All values must be divisible by 16 (chunk alignment)</li>
            <li><strong>Default Vanilla:</strong> -64 to 320 blocks (varies by version)</li>
          </ul>

          <h4>Datapack Structure</h4>
          <ul>
            <li><strong>pack.mcmeta:</strong> Contains pack format and description</li>
            <li><strong>Dimension Files:</strong> Modifies overworld generation settings</li>
            <li><strong>Pack Format:</strong> Automatically selected based on Minecraft version</li>
            <li><strong>Namespace:</strong> Uses custom namespace to avoid conflicts</li>
          </ul>

          <h4>Performance Considerations</h4>
          <ul>
            <li>Larger height ranges may impact world generation performance</li>
            <li>Extremely tall builds may affect rendering performance</li>
            <li>Deep mining may require more server resources</li>
            <li>Consider your hardware when setting extreme height limits</li>
          </ul>
        </div>
      </section>
    </ProjectTemplate>
  );
}

export default ProjectHeightDatapackGenerator;