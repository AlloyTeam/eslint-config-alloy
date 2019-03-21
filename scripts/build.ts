import * as fs from 'fs';
import * as path from 'path';

// import * as babylon from 'babylon';

enum RuleNamespaces {
    index = 'index',
    react = 'react',
    vue = 'vue'
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
            .filter((filename) =>
                fs
                    .lstatSync(path.resolve(__dirname, '../test', this.namespace, filename))
                    .isDirectory()
            )
            .map((ruleName) => {
                const fileContent = fs.readFileSync(
                    path.resolve(__dirname, '../test', this.namespace, ruleName, '.eslintrc.js'),
                    'utf-8'
                );
                const newFileContent = fileContent.replace(/@description (.*)\n/, '$1\n');
                fs.writeFileSync(
                    path.resolve(__dirname, '../test', this.namespace, ruleName, '.eslintrc.js'),
                    newFileContent,
                    'utf-8'
                );
                // const fileAST = babylon.parse(fileContent);
                // fileAST.tokens.forEach((token) => {
                //     console.log(token);
                // });
                // const comments = /\/\*\*.*\*\//gms.exec(fileContent);
                // if (comments !== null) {
                //     console.log(comments[0]);
                // }
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
}

const builder = new EslintrcBuilder(RuleNamespaces.index);
builder.build();
