import path from 'path';
import assert from 'assert';
import eslint from 'eslint';
import type { Namespace } from '../config';
import { NAMESPACE_CONFIG } from '../config';

const { ESLint } = eslint;
const eslintInstance = new ESLint({});

main();
async function main() {
  const goodResults = await eslintInstance.lintFiles([
    './**/good.js',
    // './**/good.jsx',
    './**/good.ts',
    './**/good.vue',
  ]);

  goodResults.forEach((goodReportForOneFile) => {
    const { errorCount, filePath } = goodReportForOneFile;
    assert.strictEqual(errorCount, 0, `${filePath} should have no error`);
  });

  const badResults = await eslintInstance.lintFiles([
    './**/bad.js',
    // './**/bad.jsx',
    './**/bad.ts',
    './**/bad.vue',
  ]);

  // 忽略这些规则的报错信息
  const badWhitelist = [
    'react/jsx-uses-react',
    'react/jsx-uses-vars',
    'vue/jsx-uses-vars',
    'vue/experimental-script-setup-vars',
    'vue/script-setup-uses-vars',
  ];

  badResults.forEach((badReportForOneFile) => {
    const { errorCount, filePath, messages } = badReportForOneFile;

    const dirList = path.dirname(filePath).split(path.sep);
    const ruleName = dirList.pop();
    const namespace = dirList.pop() as Namespace;

    assert(errorCount > 0, `${filePath} should have at least one error`);

    messages.forEach((message) => {
      const fullRuleName = NAMESPACE_CONFIG[namespace].rulePrefix + ruleName;
      if (badWhitelist.includes(fullRuleName)) {
        return;
      }
      if (message.ruleId !== fullRuleName) {
        assert.strictEqual(
          message.ruleId,
          fullRuleName,
          `${filePath} should only have error ${fullRuleName}, but got ${message.ruleId}`,
        );
      }
    });
  });
}
