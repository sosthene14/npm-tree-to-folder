import { TreeNode } from '../parsers/textParser';

export const expressTemplate: TreeNode = {
  name: 'express-api',
  type: 'directory',
  children: [
    {
      name: 'src',
      type: 'directory',
      children: [
        {
          name: 'routes',
          type: 'directory',
          children: [
            {
              name: 'index.js',
              type: 'file'
            },
            {
              name: 'api.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'controllers',
          type: 'directory',
          children: [
            {
              name: 'apiController.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'middleware',
          type: 'directory',
          children: [
            {
              name: 'auth.js',
              type: 'file'
            },
            {
              name: 'errorHandler.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'config',
          type: 'directory',
          children: [
            {
              name: 'index.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'utils',
          type: 'directory',
          children: [
            {
              name: 'logger.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'app.js',
          type: 'file'
        },
        {
          name: 'server.js',
          type: 'file'
        }
      ]
    },
    {
      name: 'tests',
      type: 'directory',
      children: [
        {
          name: 'routes.test.js',
          type: 'file'
        }
      ]
    },
    {
      name: '.env.example',
      type: 'file'
    },
    {
      name: 'package.json',
      type: 'file'
    },
    {
      name: 'README.md',
      type: 'file'
    },
    {
      name: '.gitignore',
      type: 'file'
    }
  ]
};