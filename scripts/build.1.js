const path = require('path');
const fse = require('fs-extra');

const babylon = require('babylon');

const rules = ['index'];

rules.forEach((rule) => {
    buildRuleComments(rule);
});

function buildRuleComments(filename) {
    const fileContent = fse.readFileSync(path.resolve(__dirname, `../${filename}.js`), 'utf-8');
    const fileAST = babylon.parse(fileContent);

    const fileModule = require(path.resolve(__dirname, `../${filename}.js`));

    // 将每条规则对应的注释保存在这个对象中
    let ruleComments = {};
    let rulesStart = false;
    // 临时存储当前的注释
    let commentLines = [];

    fileAST.tokens.forEach((token) => {
        // 从 rules 开始遍历
        if (token.value === 'rules') {
            rulesStart = true;
        }
        if (rulesStart) {
            if (token.type === 'CommentLine') {
                // 如果是注释，则存储在 commentLines 中
                commentLines.push(token.value.replace(/^ /, ''));
                // 如果时空行注释，则清除当前存储的注释
                if (token.value === '') {
                    commentLines = [];
                }
                // 如果某一行不是注释，并且之前存储过了注释，则说明该行是一条规则
            } else if (commentLines.length > 0) {
                fse.mkdirpSync(path.resolve(__dirname, `../test/${token.value}`));
                fse.writeFileSync(
                    path.resolve(__dirname, `../test/${token.value}/.eslintrc.js`),
                    `module.exports = {
    rules: {
        /**
         * @memberof
         * @description ${commentLines.join('\n         * ')}
         */
        '${token.value}': ${JSON.stringify(fileModule.rules[token.value], null, 4)}
    }
};
`,
                    'utf-8'
                );
                ruleComments[token.value] = commentLines.join('\n');
                commentLines = [];
            }
        }
    });

    fse.outputFileSync(
        path.resolve(__dirname, `../site/rule-comments/${filename}.json`),
        JSON.stringify(ruleComments, null, 4),
        'utf-8'
    );
}
