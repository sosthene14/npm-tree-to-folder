import { TreeNode } from '../parsers/textParser';

export const vueTemplate: TreeNode = {
  name: 'vue-app',
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
              name: 'HelloWorld.vue',
              type: 'file'
            }
          ]
        },
        {
          name: 'views',
          type: 'directory',
          children: [
            {
              name: 'Home.vue',
              type: 'file'
            },
            {
              name: 'About.vue',
              type: 'file'
            }
          ]
        },
        {
          name: 'router',
          type: 'directory',
          children: [
            {
              name: 'index.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'store',
          type: 'directory',
          children: [
            {
              name: 'index.js',
              type: 'file'
            }
          ]
        },
        {
          name: 'assets',
          type: 'directory',
          children: [
            {
              name: 'logo.png',
              type: 'file'
            }
          ]
        },
        {
          name: 'App.vue',
          type: 'file'
        },
        {
          name: 'main.js',
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