'use client';

import { useState } from 'react';

interface GeneratorState {
  packName: string;
  description: string;
  minHeight: number;
  maxHeight: number;
  packIcon: File | null;
  isGenerating: boolean;
  result: string | null;
}

export default function Tools() {
  const [generator, setGenerator] = useState<GeneratorState>({
    packName: '',
    description: '',
    minHeight: 1,
    maxHeight: 10,
    packIcon: null,
    isGenerating: false,
    result: null
  });

  const handleInputChange = (field: keyof GeneratorState, value: any) => {
    setGenerator(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleInputChange('packIcon', file);
  };

  const validateForm = () => {
    const errors = [];
    
    if (!generator.packName.trim()) {
      errors.push('Pack name is required');
    }
    
    if (generator.minHeight < 0.1 || generator.minHeight > 10) {
      errors.push('Minimum height must be between 0.1 and 10');
    }
    
    if (generator.maxHeight < 0.1 || generator.maxHeight > 10) {
      errors.push('Maximum height must be between 0.1 and 10');
    }
    
    if (generator.minHeight >= generator.maxHeight) {
      errors.push('Maximum height must be greater than minimum height');
    }

    return errors;
  };

  const generateDatapack = async () => {
    const errors = validateForm();
    if (errors.length > 0) {
      alert('Please fix the following errors:\n' + errors.join('\n'));
      return;
    }

    handleInputChange('isGenerating', true);
    
    // Simulate generation process
    setTimeout(() => {
      const packFileName = `${generator.packName.replace(/\s+/g, '-').toLowerCase()}.zip`;
      handleInputChange('result', packFileName);
      handleInputChange('isGenerating', false);
    }, 2000);
  };

  const removeIcon = () => {
    handleInputChange('packIcon', null);
  };

  return (
    <div className="page-overlay">
      <section className="tools-page">
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '2rem' }}>
            Development Tools
          </h2>
          
          <div className="tools-grid">
            {/* Height Datapack Generator */}
            <div className="tool-card">
              <div className="tool-header">
                <h2>Height Datapack Generator</h2>
                <p>
                  Generate custom Minecraft datapacks that modify player height mechanics. 
                  Create unique gameplay experiences with customizable height ranges.
                </p>
              </div>
              
              <div className="tool-content">
                <div className="height-generator">
                  {!generator.isGenerating && !generator.result && (
                    <div className="generator-form">
                      <div className="form-group">
                        <label htmlFor="packName">Datapack Name *</label>
                        <input
                          type="text"
                          id="packName"
                          className="form-control"
                          value={generator.packName}
                          onChange={(e) => handleInputChange('packName', e.target.value)}
                          placeholder="Enter datapack name"
                          maxLength={50}
                        />
                        <div className="form-hint">
                          A descriptive name for your height datapack
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          id="description"
                          className="form-control"
                          value={generator.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Brief description of your datapack"
                          maxLength={100}
                        />
                        <div className="form-hint">
                          Optional description that will appear in pack.mcmeta
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="minHeight">Minimum Height *</label>
                          <input
                            type="number"
                            id="minHeight"
                            className="form-control"
                            value={generator.minHeight}
                            onChange={(e) => handleInputChange('minHeight', parseFloat(e.target.value))}
                            min="0.1"
                            max="10"
                            step="0.1"
                          />
                          <div className="form-hint">
                            Range: 0.1 - 10.0 blocks
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="maxHeight">Maximum Height *</label>
                          <input
                            type="number"
                            id="maxHeight"
                            className="form-control"
                            value={generator.maxHeight}
                            onChange={(e) => handleInputChange('maxHeight', parseFloat(e.target.value))}
                            min="0.1"
                            max="10"
                            step="0.1"
                          />
                          <div className="form-hint">
                            Range: 0.1 - 10.0 blocks
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="packIcon">Pack Icon (Optional)</label>
                        <input
                          type="file"
                          id="packIcon"
                          className="form-control"
                          accept=".png"
                          onChange={handleFileUpload}
                        />
                        <div className="form-hint">
                          PNG image, 128x128 recommended
                        </div>
                        
                        {generator.packIcon && (
                          <div className="image-preview">
                            <img 
                              src={URL.createObjectURL(generator.packIcon)} 
                              alt="Pack Icon Preview" 
                              className="pack-preview"
                            />
                            <span>{generator.packIcon.name}</span>
                            <button type="button" className="remove-image" onClick={removeIcon}>
                              Remove
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="height-range-display">
                        Height Range: {generator.minHeight} - {generator.maxHeight} blocks
                      </div>

                      <button 
                        className="generate-button"
                        onClick={generateDatapack}
                        disabled={generator.isGenerating}
                      >
                        Generate Datapack
                      </button>
                    </div>
                  )}

                  {generator.isGenerating && (
                    <div className="generating-status">
                      <div className="loading-spinner"></div>
                      <p>Generating your height datapack...</p>
                      <p>This may take a moment.</p>
                    </div>
                  )}

                  {generator.result && !generator.isGenerating && (
                    <div className="generation-result">
                      <h4>Datapack Generated Successfully!</h4>
                      <p>Your datapack '{generator.result}' has been generated.</p>
                      <p>
                        The datapack modifies player height between {generator.minHeight} and {generator.maxHeight} blocks.
                      </p>
                      <button 
                        className="generate-button"
                        onClick={() => {
                          setGenerator({
                            packName: '',
                            description: '',
                            minHeight: 1,
                            maxHeight: 10,
                            packIcon: null,
                            isGenerating: false,
                            result: null
                          });
                        }}
                      >
                        Generate Another
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Placeholder for future tools */}
            <div className="tool-card coming-soon">
              <div className="tool-header">
                <h2>More Tools Coming Soon</h2>
                <p>
                  We're constantly developing new tools to enhance your 
                  development workflow. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}