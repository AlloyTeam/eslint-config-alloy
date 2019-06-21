/* eslint-disable max-depth */
import * as fs from 'fs';
import * as path from 'path';

import * as doctrine from 'doctrine';
import * as prettier from 'prettier';
import { CLIEngine, Linter } from 'eslint';
const cli = new CLIEngine({});

import {
    RuleNamespaces,
    RuleNamespaceExtensionMap,
    RuleNamespacePrismLanguageMap,
    RuleCategoryPriority,
    Rule
} from '../site/constants/rule';

import '../site/vendor/prism';
declare const Prism: any;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');

class Builder {
    private namespace: RuleNamespaces = 'index';
    private ruleList: Rule[] = [];
    private rulesContent: string = '';
    private namespaceEslintrcContent: string = '';

    public build(namespace: RuleNamespaces) {
        this.namespace = namespace;
        this.ruleList = this.getRuleList();
        this.rulesContent = this.getRulesContent();
        this.namespaceEslintrcContent = this.getNamespaceEslintrc();
        this.buildRulesJson();
        if (this.namespace === 'index') {
            this.buildIndexEslintrc();
        } else {
            this.buildNamespaceEslintrc();
        }
    }

    private buildRulesJson() {
        fs.writeFileSync(
            path.resolve(__dirname, `../site/config/${this.namespace}.json`),
            prettier.format(
                JSON.stringify(
                    this.ruleList.reduce(
                        (prev, rule) => {
                            let newRule = { ...rule };
                            delete newRule.comments;
                            prev[newRule.name] = newRule;
                            return prev;
                        },
                        {} as any
                    )
                ),
                {
                    ...require('../prettier.config'),
                    parser: 'json'
                }
            ),
            'utf-8'
        );
    }

    private buildIndexEslintrc() {
        const eslintrcContent =
            this.buildEslintrcMeta() +
            `module.exports={extends:['./base.js'],rules:{${this.rulesContent}}};`;

        this.writeWithPrettier(path.resolve(__dirname, '../index.js'), eslintrcContent);
    }

    private buildNamespaceEslintrc() {
        const eslintrcContent =
            this.buildEslintrcMeta() +
            this.namespaceEslintrcContent
                .replace(/extends:.*]/, "extends: ['./index.js']")
                .replace(/(,\s*rules: {([\s\S]*?)})?\s*};/, (_match, _p1, p2) => {
                    const rules = p2 ? `${p2},${this.rulesContent}` : this.rulesContent;
                    return `,rules:{${rules}}};`;
                });

        this.writeWithPrettier(path.resolve(__dirname, `../${this.namespace}.js`), eslintrcContent);
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

    private buildEslintrcMeta() {
        return `
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
     .sort((a, b) => {
         if (a.indexOf('eslint') > b.indexOf('eslint')) {
             return 1;
         } else if (a.indexOf('eslint') < b.indexOf('eslint')) {
             return -1;
         } else {
             return a > b ? 1 : -1;
         }
     })
     .map((key) => `${key} ${pkg.devDependencies[key]}`)
     .join('\n *     ')}
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @category 此规则属于哪种分类
 * @reason 为什么要开启（关闭）此规则
 * @fixable 支持自动修复
 */
`;
    }

    private writeWithPrettier(filePath: string, content: string) {
        fs.writeFileSync(
            filePath,
            // 使用 prettier 格式化文件内容
            prettier.format(content, {
                ...require('../prettier.config'),
                parser: 'babel'
            }),
            'utf-8'
        );
    }

    private getRule(filePath: string) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const fileModule = require(filePath);
        const ruleName = Object.keys(fileModule.rules)[0];
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const comments = /\/\*\*.*\*\//gms.exec(fileContent);
        let rule: Rule = {
            name: ruleName,
            value: fileModule.rules[ruleName],
            description: '',
            category: '',
            comments: '',
            badExample: '',
            goodExample: ''
        };
        if (comments !== null) {
            const commentsAST = doctrine.parse(comments[0], { unwrap: true });
            rule.description = commentsAST.description;
            commentsAST.tags.forEach(({ title, description }) => {
                rule[title] = description === null ? true : description;
            });
            rule.comments = comments[0];
        }
        const badFilePath = path.resolve(
            path.dirname(filePath),
            `bad.${RuleNamespaceExtensionMap[this.namespace]}`
        );
        const goodFilePath = path.resolve(
            path.dirname(filePath),
            `good.${RuleNamespaceExtensionMap[this.namespace]}`
        );

        if (fs.existsSync(badFilePath)) {
            const { results } = cli.executeOnFiles([badFilePath]);
            rule.badExample = this.insertMark(
                Prism.highlight(
                    fs.readFileSync(badFilePath, 'utf-8'),
                    Prism.languages[RuleNamespacePrismLanguageMap[this.namespace]],
                    RuleNamespacePrismLanguageMap[this.namespace]
                ),
                results[0].messages
            );
        }
        if (fs.existsSync(goodFilePath)) {
            rule.goodExample = Prism.highlight(
                fs.readFileSync(goodFilePath, 'utf-8'),
                Prism.languages[RuleNamespacePrismLanguageMap[this.namespace]],
                RuleNamespacePrismLanguageMap[this.namespace]
            );
        }
        return rule;
    }

    // private getRuleMap() {
    //     return this.ruleList.reduce<RuleMap>((prev, rule) => {
    //         prev[rule.name] = rule;
    //         return prev;
    //     }, {});
    // }

    private getNamespaceEslintrc() {
        const namespaceEslintrcPath = path.resolve(
            __dirname,
            `../test/${this.namespace}/.eslintrc.js`
        );
        if (!fs.existsSync(namespaceEslintrcPath)) {
            return '';
        }
        return fs.readFileSync(namespaceEslintrcPath, 'utf-8');
    }

    private getRulesContent() {
        return this.ruleList
            .map(
                (rule) =>
                    `\n${rule.comments}\n'${rule.name}': ${JSON.stringify(rule.value, null, 4)},`
            )
            .join('');
    }

    /** 依据 ESLint 结果，给 badExample 添加 <mark> 标签 */
    private insertMark(badExample: string, eslintMessages: Linter.LintMessage[]) {
        console.log(eslintMessages);
        let insertedBadExample = badExample;
        eslintMessages.forEach(
            // ({ ruleId, severity, message, line, column, endLine, endColumn }) => {
            ({ ruleId, line, column, endLine, endColumn }) => {
                /** 标签栈 */
                let tagStack: string[] = [];
                /** 当前列数 */
                let currentColumn = 1;
                /** 当前行数 */
                let currentLine = 1;
                /** 开始的插入位置 */
                let insertPosition = -1;
                /** 结束的插入位置 */
                let endInsertPosition = -1;
                /** 开始的插入字符 */
                let insertMark = '<mark>';
                /** 结束的插入字符 */
                let endInsertMark = '</mark>';
                /** 已匹配到开始位置之后，接下来的标签栈长度，可能为负值 */
                let insideStackLength = 0;
                for (let i = 0; i < badExample.length; i++) {
                    console.log('循环开始badExample[i]', badExample[i]);
                    // 进入标签内部，直到 > 之前都会在里面循环
                    if (badExample[i] === '<') {
                        // 是开始标签
                        if (badExample[i + 1] !== '/') {
                            let j = i + 1;
                            while (badExample[j] !== '>') {
                                j++;
                            }
                            // 已匹配到开始位置之后了
                            if (insertPosition >= 0) {
                                insideStackLength++;
                                console.log(insideStackLength);
                            }
                            // 入栈
                            tagStack.push(badExample.slice(i, j + 1));
                            i = j;
                            continue;
                        }
                        // 是闭合标签
                        else {
                            i = i + 2;
                            while (badExample[i] !== '>') {
                                i++;
                            }
                            // 已匹配到开始位置之后了
                            if (insertPosition >= 0) {
                                insideStackLength--;
                                console.log(insideStackLength);
                                // 栈长度为负数，需要给 insertMark 添加标签
                                if (insideStackLength < 0) {
                                    console.log(badExample);
                                    console.log(tagStack);
                                    console.log(ruleId);
                                    console.log(insertPosition);
                                    console.log(endInsertPosition);
                                    console.log(i);
                                    console.log(line, column);
                                    console.log(endLine, endColumn);
                                    const currentTag =
                                        tagStack[tagStack.length + insideStackLength];
                                    insertMark =
                                        currentTag.replace(/<([^ ]+).+/, '</$1>') +
                                        insertMark +
                                        currentTag;
                                }
                            }
                            // 出栈
                            tagStack.pop();
                            continue;
                        }
                    }
                    console.log('内部循环结束，badExample[i]', badExample[i]);
                    // 如果还没有确定开始位置，并且下一个字符不是 < 也不是 \n，则开始判断是不是开始位置结束位置
                    if (
                        insertPosition === -1 &&
                        badExample[i + 1] !== '<' &&
                        badExample[i + 1] !== '\n'
                    ) {
                        // 匹配上开始位置
                        if (currentLine === line && currentColumn === column) {
                            insertPosition = i;
                            if (endLine === undefined && endColumn === undefined) {
                                endInsertPosition = i + 1;
                                break;
                            }
                            continue;
                        }
                    }
                    // 匹配上结束位置
                    if (currentLine === endLine && currentColumn === endColumn) {
                        endInsertPosition = i;
                        break;
                    }
                    // 遇到换行符，行数加一
                    if (badExample[i] === '\n') {
                        currentLine++;
                        currentColumn = 1;
                        continue;
                    }
                    // 不在标签内部，列数加一
                    currentColumn++;
                }
                // 栈长度为正数，需要给 endInsertMark 添加标签
                if (insideStackLength > 0) {
                    const openedTagStack = tagStack.slice(
                        tagStack.length - insideStackLength,
                        tagStack.length
                    );
                    endInsertMark =
                        openedTagStack
                            .map((s) => s.replace(/<([^ ]+).+/, '</$1>'))
                            .reverse()
                            .join('') +
                        endInsertMark +
                        openedTagStack.join('');
                }
                // 真正开始插入
                insertedBadExample =
                    badExample.slice(0, insertPosition) +
                    insertMark +
                    badExample.slice(insertPosition, endInsertPosition) +
                    endInsertMark +
                    badExample.slice(endInsertPosition);
            }
        );
        return insertedBadExample;
    }
}

const builder = new Builder();
builder.build('index');
builder.build('react');
builder.build('vue');
builder.build('typescript');
