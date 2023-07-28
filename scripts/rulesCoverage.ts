/* eslint-disable @typescript-eslint/no-require-imports */
import fs from 'fs';
import path from 'path';
import { rimrafSync } from 'rimraf';

import { NAMESPACE_CONFIG, NAMESPACES } from '../config';

let allRuleMap: Map<string, any> = new Map();
/** 可用的规则（去除废弃的和 Prettier 的规则） */
let activeRules: string[] = [];
let deprecatedRules: string[] = [];
const prettierRules = [...Object.keys(require('eslint-config-prettier').rules)];
const vue2Rules = [
  'vue/no-custom-modifiers-on-v-model',
  'vue/no-multiple-template-root',
  'vue/no-v-for-template-key',
  'vue/no-v-for-template-key-on-child',
  'vue/no-v-model-argument',
  'vue/valid-v-bind-sync',
];
// /** vue3 recommend rules，直接继承，不需要再覆盖了 */
// const vue3RecommendedRules = Object.keys({
//   ...require('eslint-plugin-vue/lib/configs/base').rules,
//   ...require('eslint-plugin-vue/lib/configs/vue3-essential').rules,
//   ...require('eslint-plugin-vue/lib/configs/vue3-strongly-recommended').rules,
//   ...require('eslint-plugin-vue/lib/configs/vue3-recommended').rules,
// });

// 填充 deprecatedRules 和 activeRules
Object.values(NAMESPACE_CONFIG).forEach(({ rulePrefix, pluginName }) => {
  const ruleEntries = pluginName
    ? Object.entries<any>(require(pluginName).rules)
    : Array.from<any>(require('eslint/use-at-your-own-risk').builtinRules.entries());
  ruleEntries.forEach(([ruleName, ruleValue]) => {
    const fullRuleName = rulePrefix + ruleName;
    allRuleMap.set(fullRuleName, ruleValue);
    if (ruleValue.meta.deprecated) {
      deprecatedRules.push(fullRuleName);
      return;
    }
    if (prettierRules.includes(fullRuleName)) {
      return;
    }
    if (vue2Rules.includes(fullRuleName)) {
      return;
    }
    // if (vue3RecommendedRules.includes(fullRuleName)) {
    //   return;
    // }
    activeRules.push(fullRuleName);
  });
});

const errors: string[] = [];
/** 可用的规则中，未使用的规则 */
const remainingRules = [...activeRules];

/**
 * 通过分析 test 目录下的文件，找出
 * 1. 使用了已废弃的规则
 * 2. 使用了 Prettier 的规则
 * 3. 可用的规则没有被使用
 */
NAMESPACES.forEach((namespace) => {
  fs.readdirSync(path.resolve(__dirname, '../test', namespace))
    .filter((ruleName) => fs.existsSync(path.resolve(__dirname, '../test', namespace, ruleName, '.eslintrc.js')))
    .forEach((ruleName) => {
      const fullRuleName = NAMESPACE_CONFIG[namespace].rulePrefix + ruleName;
      const fullRuleDir = getFullRuleDir(fullRuleName);
      if (deprecatedRules.includes(fullRuleName)) {
        const errorMessage = `${fullRuleName} is deprecated, automatically removed`;
        errors.push(errorMessage);
        rimrafSync(fullRuleDir);
        console.error(errorMessage);
        return;
      }
      if (prettierRules.includes(fullRuleName)) {
        const errorMessage = `${fullRuleName} is ignored by prettier, automatically removed`;
        errors.push(errorMessage);
        rimrafSync(fullRuleDir);
        console.error(errorMessage);
        return;
      }
      if (vue2Rules.includes(fullRuleName)) {
        const errorMessage = `${fullRuleName} is ignored by vue2, automatically removed`;
        errors.push(errorMessage);
        rimrafSync(fullRuleDir);
        console.error(errorMessage);
        return;
      }
      if (activeRules.includes(fullRuleName)) {
        remainingRules.splice(remainingRules.indexOf(fullRuleName), 1);
        return;
      }
    });
});

if (remainingRules.length > 0) {
  remainingRules.forEach((fullRuleName) => {
    const fullRuleDir = getFullRuleDir(fullRuleName);
    const ruleValue = allRuleMap.get(fullRuleName);
    if (!fs.existsSync(fullRuleDir)) {
      fs.mkdirSync(fullRuleDir);
    }
    fs.writeFileSync(
      path.resolve(fullRuleDir, '.eslintrc.js'),
      `module.exports = {
  rules: {
    /**
     * ${ruleValue.meta.docs.description}
     */
    '${fullRuleName}': 'off',
  },
};
`,
    );

    const errorMessage = `${fullRuleName} is a new rule, automatically added, ${getDocsUrlFromRuleName(fullRuleName)}`;
    errors.push(errorMessage);
    console.error(errorMessage);
  });
}

if (errors.length > 0) {
  process.exit(1);
}

export function getFullRuleDir(fullRuleName: string) {
  if (!fullRuleName.includes('/')) {
    return path.resolve(__dirname, '../test/base', fullRuleName);
  }
  const [prefix, rule] = fullRuleName.split('/');
  for (const [namespace, config] of Object.entries(NAMESPACE_CONFIG)) {
    if (config.rulePrefix === `${prefix}/`) {
      return path.resolve(__dirname, '../test', namespace, rule);
    }
  }
  return '';
}

function getDocsUrlFromRuleName(ruleName: string) {
  for (const namespaceConfig of Object.values(NAMESPACE_CONFIG).reverse()) {
    const { rulePrefix, getDocsUrl } = namespaceConfig;
    if (ruleName.startsWith(rulePrefix)) {
      return getDocsUrl(ruleName);
    }
  }
}
