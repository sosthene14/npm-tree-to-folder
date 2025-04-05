import fs from 'fs-extra';
import path from 'path';
import { TreeNode } from '../parsers/textParser';

/**
 * @param node L'objet représentant l'arborescence
 * @param basePath Le chemin de base où générer la structure
 */
export async function generateFileStructure(node: TreeNode, basePath: string): Promise<void> {
  const currentPath = path.join(basePath, node.name);
  
  try {
    if (node.type === 'directory') {
      await fs.mkdirp(currentPath);
      
      if (node.children && node.children.length > 0) {
        for (const child of node.children) {
          await generateFileStructure(child, currentPath);
        }
      }
    } else {
      await fs.ensureFile(currentPath);
    }
    
    console.log(`Créé: ${currentPath}`);
  } catch (error) {
    console.error(`Erreur lors de la création de ${currentPath}:`, error);
    throw error;
  }
}