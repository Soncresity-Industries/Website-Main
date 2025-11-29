import React, { useState } from 'react';

interface HeightDatapackGeneratorProps {
  onGenerate: (version: string, lowerLimit: number, upperLimit: number, description: string, packImage?: File) => void;
}

const HeightDatapackGenerator: React.FC<HeightDatapackGeneratorProps> = ({ onGenerate }) => {
  const [selectedVersion, setSelectedVersion] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [packImage, setPackImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const availableVersions = [
    '1.17.0', '1.17.1', '1.18.0', '1.18.1', '1.18.2',
    '1.19.0', '1.19.1', '1.19.2', '1.19.3', '1.19.4',
    '1.20.0', '1.20.1', '1.20.2', '1.20.3', '1.20.4', '1.20.5', '1.20.6',
    '1.21.0', '1.21.1', '1.21.2', '1.21.3', '1.21.4', '1.21.5', '1.21.6', '1.21.7', '1.21.8', '1.21.9', '1.21.10'
  ];

  const validateInput = (version: string, lower: string, upper: string, description: string, image?: File): string[] => {
    const errors: string[] = [];
    
    if (!version) {
      errors.push('Please select a Minecraft version.');
    }
    
    if (!lower || !upper) {
      errors.push('Please enter both lower and upper build limits.');
      return errors;
    }
    
    const lowerNum = parseInt(lower);
    const upperNum = parseInt(upper);
    
    if (isNaN(lowerNum) || isNaN(upperNum)) {
      errors.push('Build limit values must be valid numbers.');
      return errors;
    }
    
    if (lowerNum % 16 !== 0) {
      errors.push('Lower build limit must be divisible by 16.');
    }
    
    if (upperNum % 16 !== 0) {
      errors.push('Upper build limit must be divisible by 16.');
    }
    
    if (lowerNum >= upperNum) {
      errors.push('Upper build limit must be greater than lower build limit.');
    }
    
    if (lowerNum < -2048 || upperNum > 2047) {
      errors.push('Build limit values must be between -2048 and 2047.');
    }

    if (description.trim().length > 100) {
      errors.push('Description must be 100 characters or less.');
    }

    if (image && image.size > 5 * 1024 * 1024) { // 5MB limit
      errors.push('Pack image must be smaller than 5MB.');
    }

    if (image && !image.type.startsWith('image/png')) {
      errors.push('Pack image must be a PNG file.');
    }
    
    return errors;
  };

  const handleGenerate = () => {
    const description = customDescription.trim() || `Custom height limits: ${lowerLimit} to ${upperLimit}`;
    const validationErrors = validateInput(selectedVersion, lowerLimit, upperLimit, description, packImage || undefined);
    setErrors(validationErrors);
    
    if (validationErrors.length === 0) {
      onGenerate(selectedVersion, parseInt(lowerLimit), parseInt(upperLimit), description, packImage || undefined);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPackImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPackImage(null);
    setImagePreview(null);
    // Reset file input
    const fileInput = document.getElementById('pack-image') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleLowerLimitChange = (value: string) => {
    setLowerLimit(value);
    // Auto-suggest closest valid value
    const num = parseInt(value);
    if (!isNaN(num) && num % 16 !== 0) {
      const closest = Math.round(num / 16) * 16;
      // You could show a hint here
    }
  };

  const handleUpperLimitChange = (value: string) => {
    setUpperLimit(value);
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
          <label htmlFor="description">Custom Description (Optional):</label>
          <input
            id="description"
            type="text"
            value={customDescription}
            onChange={(e) => setCustomDescription(e.target.value)}
            placeholder="Leave empty for auto-generated description"
            className="form-control"
            maxLength={100}
          />
          <small className="form-hint">
            {customDescription.trim() 
              ? `"${customDescription.trim()}" (${customDescription.length}/100)` 
              : `Will use: "Custom height limits: ${lowerLimit || '?'} to ${upperLimit || '?'}"`
            }
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="pack-image">Custom Pack Icon (Optional):</label>
          <input
            id="pack-image"
            type="file"
            accept="image/png"
            onChange={handleImageUpload}
            className="form-control"
          />
          <small className="form-hint">Upload a PNG image (max 5MB). Leave empty to use default pack icon.</small>
          
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Pack preview" className="pack-preview" />
              <button type="button" onClick={handleRemoveImage} className="remove-image">
                Remove Image
              </button>
            </div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="lower-limit">Lower Build Limit:</label>
            <input
              id="lower-limit"
              type="number"
              value={lowerLimit}
              onChange={(e) => handleLowerLimitChange(e.target.value)}
              placeholder="e.g., -64"
              className="form-control"
              step="16"
            />
            <small className="form-hint">Must be divisible by 16 (e.g., -64, -48, -32, 0, 16, 32...)</small>
          </div>

          <div className="form-group">
            <label htmlFor="upper-limit">Upper Build Limit:</label>
            <input
              id="upper-limit"
              type="number"
              value={upperLimit}
              onChange={(e) => handleUpperLimitChange(e.target.value)}
              placeholder="e.g., 320"
              className="form-control"
              step="16"
            />
            <small className="form-hint">Must be divisible by 16 (e.g., 256, 320, 384, 448...)</small>
          </div>
        </div>

        {lowerLimit && upperLimit && parseInt(lowerLimit) < parseInt(upperLimit) && (
          <div className="height-range-display">
            <strong>Height Range:</strong> {parseInt(upperLimit) - parseInt(lowerLimit)} blocks
          </div>
        )}

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
          disabled={!selectedVersion || !lowerLimit || !upperLimit}
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