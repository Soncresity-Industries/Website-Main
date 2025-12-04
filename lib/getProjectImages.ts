import { readdir } from 'fs/promises';
import { join } from 'path';

export async function getProjectImages(): Promise<string[]> {
  try {
    const projectsDir = join(process.cwd(), 'public', 'projects');
    const files = await readdir(projectsDir);
    
    // Filter for image files and sort them
    const imageFiles = files
      .filter(file => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file))
      .sort();
    
    return imageFiles;
  } catch (error) {
    console.error('Error reading projects directory:', error);
    // Fallback to known files
    return [
      'height_datapack_generator.png',
      'si_credits.png',
      'si_crownfall.png',
      'si_death_bolt.png',
      'si_item_remover.png',
      'si_lifesteal.png',
      'si_refined_obsidian.png',
      'si_scriptified.png',
      'si_spectre.png',
      'soncresity_aftermath.png',
      'soncresity_fractured_horizons.png'
    ];
  }
}