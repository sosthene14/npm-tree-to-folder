import { TreeNode } from '../parsers/textParser';

export const reactTemplate: TreeNode = {
  name: 'react-app',
  type: 'directory',
  children: [
    {
      name: 'src',
      type: 'directory',
      children: [
        {
          name: 'components',
          type: 'directory',
          children: [
            {
              name: 'App.js',
              type: 'file'
            },
            {
              name: 'App.css',
              type: 'file'
            }
          ]
        },
        {
          name: 'pages',
          type: 'directory',
          children: [
            {
              name: 'Home.js',
              type: 'file'
            },
            {
              name: 'About.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'utils',
          type: 'directory',
          children: []
        },
        {
          name: 'index.js',
          type: 'file'
        },
        {
          name: 'index.css',
          type: 'file'
        }
      ]
    },
    {
      name: 'public',
      type: 'directory',
      children: [
        {
          name: 'index.html',
          type: 'file'
        },
        {
          name: 'favicon.ico',
          type: 'file'
        }
      ]
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