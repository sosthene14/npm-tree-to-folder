
export interface TreeNode {
  name: string;
  type: 'file' | 'directory';
  children?: TreeNode[];
}

/**
 * Parse une structure d'arborescence au format texte (comme celle affichée par la commande `tree`)
 * @param textTree Le texte représentant l'arborescence
 * @returns La structure d'arborescence sous forme d'objet
 */
export function parseTextTree(textTree: string): TreeNode {
  const lines = textTree.split('\n').filter(line => line.trim().length > 0);
  
  // Trouver la racine
  const rootLine = lines[0];
  const rootName = rootLine.replace(/[│├└─\s]/g, '');
  
  const root: TreeNode = {
    name: rootName,
    type: 'directory',
    children: []
  };
  
  // Analyser le niveau d'indentation pour chaque ligne
  const stack: TreeNode[] = [root];
  let previousDepth = 0;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const depth = (line.match(/[│ ]{2,}[├└]─/) || [''])[0].length / 2;
    const name = line.replace(/[│├└─\s]/g, '');
    
    // Vérifier si c'est un fichier ou un répertoire (présence d'un / à la fin)
    const isDirectory = name.endsWith('/');
    const cleanName = isDirectory ? name.slice(0, -1) : name;
    
    const node: TreeNode = {
      name: cleanName,
      type: isDirectory ? 'directory' : 'file'
    };
    
    if (isDirectory) {
      node.children = [];
    }
    
    // Ajuster la pile en fonction de la profondeur
    while (stack.length > depth + 1) {
      stack.pop();
    }
    
    // Ajouter le nœud au parent
    if (stack.length > 0) {
      const parent = stack[stack.length - 1];
      parent.children = parent.children || [];
      parent.children.push(node);
    }
    
    // Si c'est un répertoire, l'ajouter à la pile
    if (isDirectory) {
      stack.push(node);
    }
    
    previousDepth = depth;
  }
  
  return root;
}