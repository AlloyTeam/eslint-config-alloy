import fs from 'fs';
import path from 'path';

import doctrine from 'doctrine';
import prettier from 'prettier';
import { CLIEngine, Linter } from 'eslint';
const cli = new CLIEngine({});
import insertTag from 'insert-tag';
import xmlEscape from 'xml-escape';

import {
    NAMESPACE_CONFIG,
    NAMESPACES,
    buildEslintrcMeta,
    Namespace,
    Rule,
    locale
} from '../config';

import '../site/vendor/prism';
declare const Prism: any;

class Builder {
    private namespace: Namespace = NAMESPACES[0];
    /** 当前 namespace 的规则列表 */
    private ruleList: Rule[] = [];
    /** 当前 namespace 的所有规则合并后的文本，包含注释 */
    private rulesContent = '';
    /** 插件初始配置的内容，如 test/react/.eslintrc.js */
    private initialEslintrcContent = '';

    public build(namespace: Namespace) {
        this.namespace = namespace;
        this.ruleList = this.getRuleList();
        this.rulesContent = this.getRulesContent();
        this.initialEslintrcContent = this.getInitialEslintrc();
        this.buildRulesJson();
        this.buildLocaleJson();
        this.buildEslintrc();
    }

    /** 获取规则列表，根据字母排序 */
    private getRuleList() {
        const ruleList = fs
            .readdirSync(path.resolve(__dirname, '../test', this.namespace))
            .filter((ruleName) =>
                fs
                    .lstatSync(path.resolve(__dirname, '../test', this.namespace, ruleName))
                    .isDirectory()
            )
            .map((ruleName) =>
                this.getRule(
                    path.resolve(__dirname, '../test', this.namespace, ruleName, '.eslintrc.js')
                )
            );

        return ruleList;
    }

    /** 解析单条规则为一个规则对象 */
    private getRule(filePath: string) {
        /* eslint-disable-next-line @typescript-eslint/no-require-imports */
        const fileModule = require(filePath);
        const ruleName = Object.keys(fileModule.rules)[0];
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const comments = /\/\*\*.*\*\//gms.exec(fileContent);
        const rule: Rule = {
            name: ruleName,
            value: fileModule.rules[ruleName],
            description: '',
            category: '',
            comments: '',
            badExample: '',
            goodExample: ''
        };
        if (comments !== null) {
            // 通过 doctrine 解析注释
            const commentsAST = doctrine.parse(comments[0], { unwrap: true });
            // 将注释体解析为 description
            rule.description = commentsAST.description;
            // 解析其他的注释内容，如 @reason
            commentsAST.tags.forEach(({ title, description }) => {
                rule[title] = description === null ? true : description;
            });
            // 保留整体注释文本
            rule.comments = comments[0];
        }
        const badFilePath = path.resolve(
            path.dirname(filePath),
            `bad.${NAMESPACE_CONFIG[this.namespace].exampleExtension}`
        );
        const goodFilePath = path.resolve(
            path.dirname(filePath),
            `good.${NAMESPACE_CONFIG[this.namespace].exampleExtension}`
        );

        if (fs.existsSync(badFilePath)) {
            const { results } = cli.executeOnFiles([badFilePath]);
            // 通过 Prism 和 insertMark 生成 html 格式的代码
            rule.badExample = this.insertMark(
                Prism.highlight(
                    fs.readFileSync(badFilePath, 'utf-8'),
                    Prism.languages[NAMESPACE_CONFIG[this.namespace].prismLanguage],
                    NAMESPACE_CONFIG[this.namespace].prismLanguage
                ),
                results[0].messages
            ).trim();
        }
        if (fs.existsSync(goodFilePath)) {
            rule.goodExample = Prism.highlight(
                fs.readFileSync(goodFilePath, 'utf-8'),
                Prism.languages[NAMESPACE_CONFIG[this.namespace].prismLanguage],
                NAMESPACE_CONFIG[this.namespace].prismLanguage
            ).trim();
        }
        return rule;
    }

    /** 获取插件初始配置的内容 */
    private getInitialEslintrc() {
        const initialEslintrcPath = path.resolve(
            __dirname,
            `../test/${this.namespace}/.eslintrc.js`
        );
        if (!fs.existsSync(initialEslintrcPath)) {
            return '';
        }
        return fs.readFileSync(initialEslintrcPath, 'utf-8');
    }

    /** 获取当前 namespace 的所有规则合并后的文本，包含注释 */
    private getRulesContent() {
        return this.ruleList
            .map(
                (rule) =>
                    `\n${rule.comments}\n'${rule.name}': ${JSON.stringify(rule.value, null, 4)},`
            )
            .join('');
    }

    /** 写入 config/rules/***.json */
    private buildRulesJson() {
        this.writeWithPrettier(
            path.resolve(__dirname, `../config/rules/${this.namespace}.json`),
            JSON.stringify(
                this.ruleList.reduce((prev, rule) => {
                    const newRule = { ...rule };
                    delete newRule.comments;
                    prev[newRule.name] = newRule;
                    return prev;
                }, {} as any)
            ),
            'json'
        );
    }

    /** 写入 config/locale/*.json */
    private buildLocaleJson() {
        const current: any = locale['en-US'];

        Object.values(this.ruleList).forEach((rule) => {
            if (!current[rule.description]) {
                current[rule.description] = rule.description;
            }
            if (rule.reason && !current[rule.reason]) {
                current[rule.reason] = rule.reason;
            }
        });

        this.writeWithPrettier(
            path.resolve(__dirname, '../config/locale/en-US.json'),
            JSON.stringify(current),
            'json'
        );
    }

    /** 写入各插件的 eslintrc 文件 */
    private buildEslintrc() {
        const eslintrcContent =
            buildEslintrcMeta() +
            this.initialEslintrcContent
                // 去掉 extends
                .replace(/extends:.*],/, '')
                // 将 rulesContent 写入 rules
                .replace(/(,\s*rules: {([\s\S]*?)})?\s*};/, (_match, _p1, p2) => {
                    const rules = p2 ? `${p2},${this.rulesContent}` : this.rulesContent;
                    return `,rules:{${rules}}};`;
                });

        this.writeWithPrettier(path.resolve(__dirname, `../${this.namespace}.js`), eslintrcContent);
    }

    /** 经过 Prettier 格式化后写入文件 */
    private writeWithPrettier(filePath: string, content: string, parser = 'babel') {
        fs.writeFileSync(
            filePath,
            // 使用 prettier 格式化文件内容
            prettier.format(content, {
                /* eslint-disable-next-line @typescript-eslint/no-require-imports */
                ...require('../.prettierrc'),
                parser
            }),
            'utf-8'
        );
    }

    /** 依据 ESLint 结果，给 badExample 添加 <mark> 标签 */
    private insertMark(badExample: string, eslintMessages: Linter.LintMessage[]) {
        let insertedBadExample = badExample;
        eslintMessages.forEach(({ ruleId, message, line, column, endLine, endColumn }) => {
            const insertLine = line - 1;
            const insertColumn = column - 1;
            const insertLineEnd = (endLine || line) - 1;
            let insertColumnEnd = (endColumn || column + 1) - 1;
            if (insertLineEnd === insertLine && insertColumnEnd === insertColumn) {
                insertColumnEnd = insertColumnEnd + 1;
            }
            insertedBadExample = insertTag(
                insertedBadExample,
                `<mark class="eslint-error" data-tip="${`${xmlEscape(
                    xmlEscape(message)
                )}<br/><span class='eslint-error-rule-id'>eslint(${ruleId})</span>`}">`,
                [insertLine, insertColumn, insertLineEnd, insertColumnEnd]
            );
        });
        return insertedBadExample;
    }
}

const builder = new Builder();
NAMESPACES.forEach((namespace) => builder.build(namespace));
