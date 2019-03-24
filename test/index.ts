import * as path from 'path';
import * as assert from 'assert';

import * as eslint from 'eslint';

const RULE_PREFIX_MAP = {
    index: '',
    react: 'react/',
    vue: 'vue/',
    typescript: '@typescript-eslint/'
};

type RulePrefix = keyof typeof RULE_PREFIX_MAP;

const CLIEngine = eslint.CLIEngine;
const cli = new CLIEngine({});

const goodReport = cli.executeOnFiles([
    './**/good.js',
    './**/good.jsx',
    './**/good.ts',
    './**/good.vue'
]);

goodReport.results.forEach((goodReportForOneFile) => {
    const { errorCount, filePath } = goodReportForOneFile;
    assert.equal(errorCount, 0, `${filePath} should have no error`);
});

const badReport = cli.executeOnFiles([
    './**/bad.js',
    './**/bad.jsx',
    './**/bad.ts',
    './**/bad.vue'
]);

badReport.results.forEach((badReportForOneFile) => {
    const { errorCount, filePath, messages } = badReportForOneFile;

    const dirList = path.dirname(filePath).split(path.sep);
    const ruleName = dirList.pop();
    const rulePrefix = dirList.pop() as RulePrefix;

    assert(errorCount > 0, `${filePath} should have at least one error`);

    messages.forEach((message) => {
        const fullRuleName = RULE_PREFIX_MAP[rulePrefix] + ruleName;
        if (message.ruleId !== fullRuleName) {
            assert.equal(
                message.ruleId,
                fullRuleName,
                `${filePath} should only have error ${fullRuleName}, but got ${message.ruleId}`
            );
        }
    });
});
