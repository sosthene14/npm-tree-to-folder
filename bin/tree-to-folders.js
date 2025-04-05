#!/usr/bin/env node

const { generateTree } = require('../dist/index');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { program } = require('commander');

program
  .name('tree-to-folders')
  .description('Project structure generator from different tree formats')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate a project structure')
  .option('-i, --input <path>', 'Path to the input file')
  .option('-t, --type <type>', 'Input type (text, json, template)', 'text')
  .option('-o, --output <path>', 'Output path for the generated structure', process.cwd())
  .option('-n, --template-name <name>', 'Template name to use')
  .action(async (options) => {
    try {
      // If it's a template, no need for an input file
      if (options.type === 'template') {
        if (!options.templateName) {
          const { templateName } = await inquirer.prompt([
            {
              type: 'list',
              name: 'templateName',
              message: 'Choose a template:',
              choices: ['react-app', 'node-api', 'vue-app', 'express-api']
            }
          ]);
          options.templateName = templateName;
        }
      } else if (!options.input) {
        console.error(chalk.red('Error: An input file is required for text and json types'));
        process.exit(1);
      }  else {
        // Check if the input is a file or a direct string
        try {
          // Check if the path exists
          if (fs.existsSync(options.input)) {
            options.input = fs.readFileSync(options.input, 'utf-8');
          } else {
            // If the file doesn't exist, consider the input as a direct string
            // (no action needed, options.input already contains the string)
            console.log(chalk.blue('Using direct input...'));
          }
        } catch (error) {
          console.error(chalk.red('Error reading input:'), error);
          process.exit(1);
        }}

      console.log(chalk.blue('Generating structure...'));
      await generateTree({
        input: options.input,
        inputType: options.type,
        outputPath: options.output,
        templateName: options.templateName
      });
      console.log(chalk.green('Structure generated successfully!'));
    } catch (error) {
      console.error(chalk.red('Error during generation:'), error);
      process.exit(1);
    }
  });

program
  .command('list-templates')
  .description('List available templates')
  .action(() => {
    console.log(chalk.blue('Available templates:'));
    console.log('- react-app: Basic structure for a React application');
    console.log('- node-api: Structure for a Node.js API');
    console.log('- vue-app: Basic structure for a Vue.js application');
    console.log('- express-api: Structure for an Express API');
  });

program.parse(process.argv);
