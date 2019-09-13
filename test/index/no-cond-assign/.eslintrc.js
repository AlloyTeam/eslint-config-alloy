module.exports = {
    rules: {
        /**
         * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
         */
        'no-cond-assign': ['error', 'except-parens']
    }
};
