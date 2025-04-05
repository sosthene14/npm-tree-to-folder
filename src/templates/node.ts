import { TreeNode } from '../parsers/textParser';

export const nodeTemplate: TreeNode = {
  name: 'node-api',
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
              name: 'users.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'controllers',
          type: 'directory',
          children: [
            {
              name: 'userController.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'models',
          type: 'directory',
          children: [
            {
              name: 'User.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'middlewares',
          type: 'directory',
          children: [
            {
              name: 'auth.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'config',
          type: 'directory',
          children: [
            {
              name: 'database.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'app.js',
          type: 'file'
        }
      ]
    },
    {
      name: 'tests',
      type: 'directory',
      children: []
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