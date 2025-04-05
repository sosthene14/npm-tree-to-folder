import { generateFileStructure } from './generators/fileSystemGenerator';
import { parseTree } from './parsers';
import { getTemplate } from './templates';
import * as fs from 'fs-extra';

export interface TreeGeneratorOptions {
  input: string;
  inputType: 'text' | 'json' | 'template';
  outputPath: string;
  templateName?: string;
  templateUrl?: string;
}

export async function generateTree(options: TreeGeneratorOptions): Promise<void> {
  try {
    if (!fs.existsSync(options.outputPath)) {
      fs.mkdirpSync(options.outputPath);
    }

    let treeStructure;

    if (options.inputType === 'template' && options.templateName) {
      treeStructure = await getTemplate(options.templateName);
    } else {
      const inputContent = options.input;
      treeStructure = await parseTree(inputContent, options.inputType);
    }

    await generateFileStructure(treeStructure, options.outputPath);
    
    console.log(`Structure de projet générée avec succès dans: ${options.outputPath}`);
  } catch (error) {
    console.error('Erreur lors de la génération de la structure:', error);
    throw error;
  }
}

export * from './parsers';
export * from './generators';
export * from './templates';
