import React, { useState } from 'react';

interface HeightDatapackGeneratorProps {
  onGenerate: (version: string, minHeight: number, maxHeight: number) => void;
}

const HeightDatapackGenerator: React.FC<HeightDatapackGeneratorProps> = ({ onGenerate }) => {
  const [selectedVersion, setSelectedVersion] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const availableVersions = [
    '1.17.0', '1.17.1', '1.18.0', '1.18.1', '1.18.2',
    '1.19.0', '1.19.1', '1.19.2', '1.19.3', '1.19.4',
    '1.20.0', '1.20.1', '1.20.2', '1.20.3', '1.20.4', '1.20.5', '1.20.6',
    '1.21.0', '1.21.1', '1.21.2', '1.21.3', '1.21.4', '1.21.5', '1.21.6', '1.21.7', '1.21.8', '1.21.9', '1.21.10'
  ];

  const validateInput = (version: string, min: string, max: string): string[] => {
    const errors: string[] = [];
    
    if (!version) {
      errors.push('Please select a Minecraft version.');
    }
    
    if (!min || !max) {
      errors.push('Please enter both minimum and maximum heights.');
      return errors;
    }
    
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    
    if (isNaN(minNum) || isNaN(maxNum)) {
      errors.push('Height values must be valid numbers.');
      return errors;
    }
    
    if (minNum % 16 !== 0) {
      errors.push('Minimum height must be divisible by 16.');
    }
    
    if (maxNum % 16 !== 0) {
      errors.push('Maximum height must be divisible by 16.');
    }
    
    if (minNum >= maxNum) {
      errors.push('Maximum height must be greater than minimum height.');
    }
    
    if (minNum < -2048 || maxNum > 2047) {
      errors.push('Height values must be between -2048 and 2047.');
    }
    
    return errors;
  };

  const handleGenerate = () => {
    const validationErrors = validateInput(selectedVersion, minHeight, maxHeight);
    setErrors(validationErrors);
    
    if (validationErrors.length === 0) {
      onGenerate(selectedVersion, parseInt(minHeight), parseInt(maxHeight));
    }
  };

  const handleMinHeightChange = (value: string) => {
    setMinHeight(value);
    // Auto-suggest closest valid value
    const num = parseInt(value);
    if (!isNaN(num) && num % 16 !== 0) {
      const closest = Math.round(num / 16) * 16;
      // You could show a hint here
    }
  };

  const handleMaxHeightChange = (value: string) => {
    setMaxHeight(value);
    // Auto-suggest closest valid value
    const num = parseInt(value);
    if (!isNaN(num) && num % 16 !== 0) {
      const closest = Math.round(num / 16) * 16;
      // You could show a hint here
    }
  };

  return (
    <div className="height-generator">
      <h4>Generate Custom Height Datapack</h4>
      <div className="generator-form">
        <div className="form-group">
          <label htmlFor="version-select">Minecraft Version:</label>
          <select 
            id="version-select"
            value={selectedVersion} 
            onChange={(e) => setSelectedVersion(e.target.value)}
            className="form-control"
          >
            <option value="">Select a version...</option>
            {availableVersions.map(version => (
              <option key={version} value={version}>{version}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="min-height">Minimum Build Height:</label>
          <input
            id="min-height"
            type="number"
            value={minHeight}
            onChange={(e) => handleMinHeightChange(e.target.value)}
            placeholder="e.g., -64"
            className="form-control"
            step="16"
          />
          <small className="form-hint">Must be divisible by 16 (e.g., -64, -48, -32, 0, 16, 32...)</small>
        </div>

        <div className="form-group">
          <label htmlFor="max-height">Maximum Build Height:</label>
          <input
            id="max-height"
            type="number"
            value={maxHeight}
            onChange={(e) => handleMaxHeightChange(e.target.value)}
            placeholder="e.g., 320"
            className="form-control"
            step="16"
          />
          <small className="form-hint">Must be divisible by 16 (e.g., 256, 320, 384, 448...)</small>
        </div>

        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <div key={index} className="error-message">{error}</div>
            ))}
          </div>
        )}

        <button 
          onClick={handleGenerate}
          className="generate-button"
          disabled={!selectedVersion || !minHeight || !maxHeight}
        >
          Generate Datapack
        </button>
      </div>

      <div className="generator-info">
        <h5>About Height Datapacks</h5>
        <p>Height datapacks allow you to customize the build limits in your Minecraft world. This tool generates a datapack that modifies the minimum and maximum heights where blocks can be placed.</p>
        
        <h6>Important Notes:</h6>
        <ul>
          <li>Height values must be divisible by 16 due to Minecraft's chunk structure</li>
          <li>Values must be between -2048 and 2047</li>
          <li>The datapack will work in both single-player and multiplayer</li>
          <li>Make sure to backup your world before applying any datapack</li>
        </ul>
      </div>
    </div>
  );
};

export default HeightDatapackGenerator;