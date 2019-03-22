import * as fs from 'fs';
import * as path from 'path';

import * as doctrine from 'doctrine';
import * as prettier from 'prettier';

const pkg = require('../package.json');

type RuleNamespaces = 'index' | 'react' | 'vue';

const RuleCategoryPriority = {
    'Possible Errors': 0,
    'Best Practices': 1,
    'Strict Mode': 2,
    Variables: 3,
    'Node.js and CommonJS': 4,
    'Stylistic Issues': 5,
    'ECMAScript 6': 6,
    '': 99
};

type RuleCategory = keyof typeof RuleCategoryPriority;

interface Rule {
    name: string;
    value: any;
    description: string;
    category: RuleCategory;
    reason?: string;
    fixable?: boolean;
    comments: string;
    [key: string]: string | boolean | undefined;
}

interface RuleMap {
    [key: string]: Rule;
}

class Builder {
    private namespace: RuleNamespaces = 'index';
    private ruleList: Rule[] = [];
    private ruleMap: RuleMap = {};
    private rulesContent: string = '';
    private baseEslintrcContent = this.getBaseEslintrc();

    public build(namespace: RuleNamespaces) {
        this.namespace = namespace;
        this.ruleList = this.getRuleList();
        this.ruleMap = this.getRuleMap();
        this.rulesContent = this.getRulesContent();
        this.buildRulesJson();
        this.buildEslintConfig();
    }

    private buildRulesJson() {
        fs.writeFileSync(
            path.resolve(__dirname, '../site/rules.json'),
            prettier.format(JSON.stringify(this.ruleMap), {
                ...require('../prettier.config'),
                parser: 'json'
            }),
            'utf-8'
        );
    }

    private buildEslintConfig() {
        const eslintConfigContent = `
/**
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * 贡献者：
 *     ${pkg.author}
 *     ${pkg.contributors.join('\n *     ')}
 *
 * 依赖版本：
 *     ${Object.keys(pkg.peerDependencies)
     .map((key) => `${key} ${pkg.peerDependencies[key]}`)
     .join('\n *     ')}
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 * 
 * @category 此规则属于哪种分类
 * @reason 为什么要开启（关闭）此规则
 * @fixable 支持自动修复
 */
${this.baseEslintrcContent.replace('};', `,rules:{${this.rulesContent}}};`)}
        `;

        fs.writeFileSync(
            path.resolve(__dirname, '../index.js'),
            // 使用 prettier 格式化文件内容
            prettier.format(eslintConfigContent, {
                ...require('../prettier.config'),
                parser: 'babel'
            }),
            'utf-8'
        );
    }

    /**
     * 获取规则列表，根据分类和字母排序
     */
    private getRuleList() {
        const ruleList = fs
            .readdirSync(path.resolve(__dirname, '../test', this.namespace))
            .filter((ruleName) =>
                fs
                    .lstatSync(path.resolve(__dirname, '../test', this.namespace, ruleName))
                    .isDirectory()
            )
            .map((ruleName) => {
                const filePath = path.resolve(
                    __dirname,
                    '../test',
                    this.namespace,
                    ruleName,
                    '.eslintrc.js'
                );
                return this.getRule(filePath);
            })
            .sort((aRule, bRule) => {
                const aRuleCategory = aRule.category;
                const bRuleCategory = bRule.category;

                if (RuleCategoryPriority[aRuleCategory] > RuleCategoryPriority[bRuleCategory]) {
                    return 1;
                }
                if (RuleCategoryPriority[aRuleCategory] < RuleCategoryPriority[bRuleCategory]) {
                    return -1;
                }
                return aRule.name > bRule.name ? 1 : -1;
            });

        return ruleList;
    }

    private getRule(filePath: string) {
        const fileModule = require(filePath);
        const ruleName = Object.keys(fileModule.rules)[0];
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const comments = /\/\*\*.*\*\//gms.exec(fileContent);
        let rule: Rule = {
            name: ruleName,
            value: fileModule.rules[ruleName],
            description: '',
            category: '',
            comments: ''
        };
        if (comments !== null) {
            const commentsAST = doctrine.parse(comments[0], { unwrap: true });
            rule.description = commentsAST.description;
            commentsAST.tags.forEach(({ title, description }) => {
                rule[title] = description === null ? true : description;
            });
            rule.comments = comments[0];
        }
        return rule;
    }

    private getRuleMap() {
        return this.ruleList.reduce<RuleMap>((prev, rule) => {
            prev[rule.name] = rule;
            return prev;
        }, {});
    }

    private getBaseEslintrc() {
        return fs.readFileSync(path.resolve(__dirname, '../test/.eslintrc.js'), 'utf-8');
    }

    private getRulesContent() {
        return this.ruleList
            .map(
                (rule) =>
                    `\n${rule.comments}\n'${rule.name}': ${JSON.stringify(rule.value, null, 4)},`
            )
            .join('');
    }
}

const builder = new Builder();
builder.build('index');
