import HeightDatapackGenerator from './HeightDatapackGenerator';
import { useState } from 'react';
import '../App.css';

function Tools() {
  const [generatedDatapack, setGeneratedDatapack] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (version: string, lowerLimit: number, upperLimit: number, description: string, packImage?: File) => {
    setIsGenerating(true);
    
    try {
      // Simulate datapack generation process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate the datapack content
      const heightRange = upperLimit - lowerLimit;
      const datapackName = `height-limit-${lowerLimit}-to-${upperLimit}`;
      const datapackContent = generateDatapackContent(version, lowerLimit, heightRange, description);
      
      // Create and trigger download
      downloadDatapack(datapackContent, `${datapackName}-mc${version}`, packImage);
      
      setGeneratedDatapack(`Successfully generated datapack for Minecraft ${version} with height limits ${lowerLimit} to ${upperLimit}!`);
    } catch (error) {
      setGeneratedDatapack('Error generating datapack. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDatapackContent = (version: string, minHeight: number, heightRange: number, description: string) => {
    return {
      'pack.mcmeta': JSON.stringify({
        pack: {
          pack_format: getPackFormat(version),
          description: description
        }
      }, null, 2),
      'data/minecraft/dimension_type/overworld.json': JSON.stringify({
        ultrawarm: false,
        natural: true,
        coordinate_scale: 1.0,
        has_skylight: true,
        has_ceiling: false,
        ambient_light: 0.0,
        piglin_safe: false,
        bed_works: true,
        respawn_anchor_works: false,
        has_raids: true,
        min_y: minHeight,
        height: heightRange,
        logical_height: Math.min(heightRange, 384),
        infiniburn: "#minecraft:infiniburn_overworld",
        effects: "minecraft:overworld",
        monster_spawn_light_level: 0,
        monster_spawn_block_light_limit: 0
      }, null, 2)
    };
  };

  const getPackFormat = (version: string): number => {
    const versionMap: { [key: string]: number } = {
      '1.17.0': 7, '1.17.1': 7,
      '1.18.0': 8, '1.18.1': 8, '1.18.2': 9,
      '1.19.0': 10, '1.19.1': 10, '1.19.2': 10, '1.19.3': 12, '1.19.4': 12,
      '1.20.0': 15, '1.20.1': 15, '1.20.2': 18, '1.20.3': 26, '1.20.4': 26, '1.20.5': 41, '1.20.6': 48,
      '1.21.0': 48, '1.21.1': 48, '1.21.2': 57, '1.21.3': 57, '1.21.4': 61, '1.21.5': 61, 
      '1.21.6': 61, '1.21.7': 61, '1.21.8': 61, '1.21.9': 61, '1.21.10': 61
    };
    
    return versionMap[version] || 61;
  };

  const downloadDatapack = async (content: any, filename: string, packImage?: File) => {
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();
    
    zip.file('pack.mcmeta', content['pack.mcmeta']);
    
    Object.keys(content).forEach(filePath => {
      if (filePath !== 'pack.mcmeta') {
        zip.file(filePath, content[filePath]);
      }
    });
    
    if (packImage) {
      zip.file('pack.png', packImage);
    } else {
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
    
    const zipBlob = await zip.generateAsync({ 
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 6
      }
    });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.replace('.zip', '') + '.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="tools-page">
      <header className="page-header">
        <div className="container">
          <h1>Tools</h1>
          <p>Free utilities and generators for your projects</p>
        </div>
      </header>

      <main className="page-content">
        <div className="container">
          <section className="tools-grid">
            <div className="tool-card">
              <div className="tool-header">
                <h2>Height Datapack Generator</h2>
                <p>Create custom Minecraft datapacks to modify world height limits</p>
              </div>
              
              <div className="tool-content">
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
                    <p>Your datapack has been downloaded. Follow the installation guide in the project page for setup instructions.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Placeholder for future tools */}
            <div className="tool-card coming-soon">
              <div className="tool-header">
                <h2>More Tools Coming Soon</h2>
                <p>We're working on additional utilities and generators</p>
              </div>
              <div className="tool-content">
                <p>Stay tuned for more helpful tools and generators!</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Tools;