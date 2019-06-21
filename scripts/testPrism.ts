import { CLIEngine } from 'eslint';

const cli = new CLIEngine({});

const report = cli.executeOnFiles(['./test/index/accessor-pairs/bad.js']);

console.log(report.results[0].messages);
