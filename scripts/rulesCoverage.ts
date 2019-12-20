/* eslint-disable @typescript-eslint/no-require-imports */
import fs from 'fs';
import path from 'path';

import { NAMESPACE_CONFIG, NAMESPACES } from '../config';

/** 可用的规则（去除废弃的和 Prettier 的规则） */
let activeRules: string[] = [];
let deprecatedRules: string[] = [];
const prettierRules = [
    ...Object.keys(require('eslint-config-prettier').rules),
    ...Object.keys(require('eslint-config-prettier/@typescript-eslint').rules),
    ...Object.keys(require('eslint-config-prettier/babel').rules),
    ...Object.keys(require('eslint-config-prettier/flowtype').rules),
    ...Object.keys(require('eslint-config-prettier/react').rules),
    ...Object.keys(require('eslint-config-prettier/standard').rules),
    ...Object.keys(require('eslint-config-prettier/unicorn').rules),
    ...Object.keys(require('eslint-config-prettier/vue').rules)
];

// 填充 deprecatedRules 和 activeRules
Object.values(NAMESPACE_CONFIG).forEach(({ rulePrefix, pluginName }) => {
    const ruleEntries = pluginName
        ? Object.entries<any>(require(pluginName).rules)
        : Array.from<any>(require('eslint/lib/rules').entries());
    ruleEntries.forEach(([ruleName, ruleValue]) => {
        const fullRuleName = rulePrefix + ruleName;
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
NAMESPACES.forEach((namespace) => {
    fs.readdirSync(path.resolve(__dirname, '../test', namespace))
        .filter((ruleName) =>
            fs.lstatSync(path.resolve(__dirname, '../test', namespace, ruleName)).isDirectory()
        )
        .forEach((ruleName) => {
            const fullRuleName = NAMESPACE_CONFIG[namespace].rulePrefix + ruleName;
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
