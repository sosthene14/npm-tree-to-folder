import { TreeNode } from './textParser';

/**
 * @param jsonContent Le contenu JSON représentant l'arborescence
 * @returns La structure d'arborescence sous forme d'objet
 */
export function parseJsonTree(jsonContent: string): TreeNode {
  try {
    const parsed = JSON.parse(jsonContent);
    return validateAndTransformJsonTree(parsed);
  } catch (error) {
    throw new Error(`Erreur lors du parsing JSON: ${error}`);
  }
}

/**
 * @param node L'objet JSON à valider et transformer
 * @returns La structure TreeNode validée
 */
function validateAndTransformJsonTree(node: any): TreeNode {
  if (!node.name) {
    throw new Error('Chaque nœud doit avoir une propriété "name"');
  }

  const nodeType = node.type || (node.children ? 'directory' : 'file');

  const treeNode: TreeNode = {
    name: node.name,
    type: nodeType
  };

  if (node.children && Array.isArray(node.children)) {
    treeNode.children = node.children.map((child:Node) => validateAndTransformJsonTree(child));
  } else if (nodeType === 'directory') {
    treeNode.children = [];
  }

  return treeNode;
}