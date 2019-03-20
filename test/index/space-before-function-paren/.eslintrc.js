module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 命名函数表达式括号前禁止有空格，箭头函数表达式括号前面必须有一个空格
         * @fixable
         */
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    }
};
