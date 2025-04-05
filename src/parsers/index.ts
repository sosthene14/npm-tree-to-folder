import { parseTextTree, TreeNode } from './textParser';
import { parseJsonTree } from './jsonParser';

/**
 * Parse une structure d'arborescence selon le format spécifié
 * @param content Le contenu représentant l'arborescence
 * @param type Le type de format ('text' ou 'json')
 * @returns La structure d'arborescence sous forme d'objet
 */
export async function parseTree(content: string, type: 'text' | 'json' | 'template'): Promise<TreeNode> {
  switch (type) {
    case 'text':
      return parseTextTree(content);
    case 'json':
      return parseJsonTree(content);
    default:
      throw new Error(`Format non supporté: ${type}`);
  }
}

// Exporter les types et fonctions des parseurs individuels
export * from './textParser';
export * from './jsonParser';