import * as fs from 'fs';
import * as path from 'path';

import * as doctrine from 'doctrine';
// import * as babylon from 'babylon';

enum RuleNamespaces {
    index = 'index',
    react = 'react',
    vue = 'vue'
}

interface RuleMeta {
    description: string;
    category?: string;
    reason?: string;
    fixable?: boolean;
    [key: string]: string | boolean | undefined;
}

class EslintrcBuilder {
    private namespace: RuleNamespaces;
    private ruleList: string[];

    public constructor(namespace: RuleNamespaces) {
        this.namespace = namespace;
        this.ruleList = this.getRuleList();
    }

    public build() {
        console.log(this.ruleList);
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
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const comments = /\/\*\*.*\*\//gms.exec(fileContent);
                let meta: RuleMeta = {
                    description: ''
                };
                if (comments !== null) {
                    const commentsAST = doctrine.parse(comments[0], { unwrap: true });
                    meta.description = commentsAST.description;
                    commentsAST.tags.forEach(({ title, description }) => {
                        meta[title] = description === null ? true : description;
                    });
                }
                // const ruleContent = fileContent.replace(/^.*\n.*\n/, '').replace(/.*\n.*\n$/, '');
                // console.log(ruleContent);

                // let ruleMeta = {};

                return '';
            });
        // .sort((aRuleJson, bRuleJson) => {
        //     const aRuleCategory = aRuleJson.meta.category;
        //     const bRuleCategory = bRuleJson.meta.category;

        //     if (
        //         Builder.RuleCategoryPriority[aRuleCategory] >
        //         Builder.RuleCategoryPriority[bRuleCategory]
        //     ) {
        //         return 1;
        //     }
        //     if (
        //         Builder.RuleCategoryPriority[aRuleCategory] <
        //         Builder.RuleCategoryPriority[bRuleCategory]
        //     ) {
        //         return -1;
        //     }
        //     return this.getRuleName(aRuleJson) > this.getRuleName(bRuleJson) ? 1 : -1;
        // });

        return ruleList;
    }

    private getRuleMeta() {}
}

const builder = new EslintrcBuilder(RuleNamespaces.index);
builder.build();
