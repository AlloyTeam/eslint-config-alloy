/* eslint-disable @typescript-eslint/no-require-imports */
import fs from 'fs';
import path from 'path';

/** 可用的规则（去除废弃的和 Prettier 的规则） */
let activeRules: string[] = [];
let deprecatedRules: string[] = [];
const prettierRules = [
    ...Object.keys(require('eslint-config-prettier').rules),
    ...Object.keys(require('eslint-config-prettier/react').rules),
    ...Object.keys(require('eslint-config-prettier/vue').rules),
    ...Object.keys(require('eslint-config-prettier/@typescript-eslint').rules),
    // https://github.com/prettier/eslint-config-prettier/issues/124
    '@typescript-eslint/space-before-function-paren'
];

const RULE_PREFIX_MAP = {
    index: '',
    react: 'react/',
    vue: 'vue/',
    typescript: '@typescript-eslint/'
};
const rulesEntriesMap = {
    index: Array.from<any>(require('eslint/lib/rules').entries()),
    react: Object.entries<any>(require('eslint-plugin-react').rules),
    vue: Object.entries<any>(require('eslint-plugin-vue').rules),
    typescript: Object.entries<any>(require('@typescript-eslint/eslint-plugin').rules)
};

type RulePrefix = keyof typeof RULE_PREFIX_MAP;
const namespaces: RulePrefix[] = ['index', 'react', 'vue', 'typescript'];

// 填充 deprecatedRules 和 activeRules
namespaces.forEach((namespace) => {
    rulesEntriesMap[namespace].forEach(([ruleName, ruleValue]) => {
        const fullRuleName = RULE_PREFIX_MAP[namespace] + ruleName;
        if (ruleValue.meta.deprecated) {
            deprecatedRules.push(fullRuleName);
            return;
        }
        if (prettierRules.includes(fullRuleName)) {
            return;
        }
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
namespaces.forEach((namespace) => {
    fs.readdirSync(path.resolve(__dirname, '../test', namespace))
        .filter((ruleName) =>
            fs.lstatSync(path.resolve(__dirname, '../test', namespace, ruleName)).isDirectory()
        )
        .forEach((ruleName) => {
            const fullRuleName = RULE_PREFIX_MAP[namespace] + ruleName;
            if (deprecatedRules.includes(fullRuleName)) {
                errors.push(`${fullRuleName} 是已废弃的规则，请删除`);
                return;
            }
            if (prettierRules.includes(fullRuleName)) {
                errors.push(`${fullRuleName} 是 Prettier 的规则，请删除`);
                return;
            }
            if (activeRules.includes(fullRuleName)) {
                remainingRules.splice(remainingRules.indexOf(fullRuleName), 1);
                return;
            }
        });
});

if (remainingRules.length > 0) {
    errors.push(
        `以下规则需要补充：${remainingRules.map((ruleName) => `\n  - ${ruleName}`).join('')}`
    );
}

if (errors.length > 0) {
    throw new Error(errors.map((error) => `\n- ${error}`).join(''));
}
