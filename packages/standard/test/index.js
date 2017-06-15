var eslint = require('eslint');

var CLIEngine = eslint.CLIEngine;

var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.js'
});