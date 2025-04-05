import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import { TreeNode } from '../parsers/textParser';
import { parseJsonTree } from '../parsers/jsonParser';

import { reactTemplate } from './react';
import { nodeTemplate } from './node';
import { vueTemplate } from './vue';
import { expressTemplate } from './express';

interface TemplateMap {
  [key: string]: TreeNode;
}

const builtInTemplates: TemplateMap = {
  'react-app': reactTemplate,
  'node-api': nodeTemplate,
  'vue-app': vueTemplate,
  'express-api': expressTemplate
};

/**
 * Récupère un template par son nom
 * @param templateName Nom du template
 * @returns Structure du template
 */
export async function getTemplate(templateName: string): Promise<TreeNode> {
  if (builtInTemplates[templateName]) {
    return builtInTemplates[templateName];
  }
  
  // Sinon, essayer de charger depuis les fichiers
  try {
    const templatePath = path.join(__dirname, '../../templates', `${templateName}.json`);
    if (fs.existsSync(templatePath)) {
      const templateJson = await fs.readJson(templatePath);
      return parseJsonTree(JSON.stringify(templateJson));
    }
  } catch (error) {
    console.error(`Erreur lors du chargement du template ${templateName}:`, error);
  }
  
  throw new Error(`Template non trouvé: ${templateName}`);
}

/**
 * Charge un template depuis une URL
 * @param url URL du template
 * @returns Structure du template
 */
export async function getTemplateFromUrl(url: string): Promise<TreeNode> {
  try {
    const response = await axios.get(url);
    return parseJsonTree(JSON.stringify(response.data));
  } catch (error) {
    console.error(`Erreur lors du chargement du template depuis ${url}:`, error);
    throw new Error(`Impossible de charger le template depuis ${url}`);
  }
}