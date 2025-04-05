# tree-to-folders

Project structure generator from various tree formats. This CLI tool allows you to quickly create folder and file structures from different sources: text files, JSON, or predefined templates.

## Installation

```bash
npm install -g tree-to-folders
```

## Video Tutorial

[![Tree-to-Folders Tutorial](https://img.shields.io/badge/YouTube-Tutorial-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=example)

Watch our video tutorial for a hands-on demonstration of how to use tree-to-folders effectively.

## Features

- Generate folder structures from text files
- Generate folder structures from JSON files
- Predefined templates for common project types
- Interactive mode for template selection

## Usage

```bash
tree-to-folders generate [options]
```

### Options

- `-i, --input <path>` - Path to the input file
- `-t, --type <type>` - Input type (text, json, template) [default: text]
- `-o, --output <path>` - Output path for the generated structure [default: current directory]
- `-n, --template-name <name>` - Template name to use (required for template type)

### Available Templates

You can list all available templates with:

```bash
tree-to-folders list-templates
```

Currently available templates:
- `react-app`: Basic structure for a React application
- `node-api`: Structure for a Node.js API
- `vue-app`: Basic structure for a Vue.js application
- `express-api`: Structure for an Express API

## Examples

### Generate from a text file

```bash
tree-to-folders generate -i structure.txt -t text -o ./my-project
```

### Generate from a JSON file

```bash
tree-to-folders generate -i structure.json -t json -o ./my-project
```

### Generate from a template

```bash
tree-to-folders generate -t template -n react-app -o ./my-react-app
```

### Generate from direct input

You can also provide the tree structure directly as input:

```bash
tree-to-folders generate -i "src/\n  components/\n  assets/" -t text -o ./my-project
```

## Input Format Examples

### Text Format

```
src/
  components/
    Button.js
    Card.js
  pages/
    Home.js
    About.js
  App.js
package.json
README.md
```

### JSON Format

```json
{
  "name": "folder-name",
  "type": "directory",
  "children": [
    {
      "name": "src",
      "type": "directory",
      "children": [
        {
          "name": "index.ts",
          "type": "file"
        },
        {
          "name": "types",
          "type": "directory",
          "children": [
            {
              "name": "index.ts",
              "type": "file"
            }
          ]
        },
        {
          "name": "endpoints",
          "type": "directory",
          "children": [
            {
              "name": "competitions.ts",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": ".env.example",
      "type": "file"
    },
    {
      "name": "README.md",
      "type": "file"
    },
    {
      "name": "package.json",
      "type": "file"
    }
  ]
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.