import { CLIEngine } from 'eslint';

const cli = new CLIEngine({});

const report = cli.executeOnFiles(['./test/index/no-cond-assign/bad.js']);

console.log(report.results[0].messages);
