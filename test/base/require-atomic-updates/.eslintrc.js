module.exports = {
    rules: {
        /**
         * 禁止将 await 或 yield 的结果做为运算符的后面项
         * @reason 这样会导致不符合预期的结果
         * https://github.com/eslint/eslint/issues/11899
         * 在上面 issue 修复之前，关闭此规则
         */
        'require-atomic-updates': 'off'
    }
};

// // bad
// async function foo() {
//     result += await somethingElse;
//     result = result + await somethingElse;
// }

// // good
// async function foo() {
//     result = await somethingElse + result;
// }
