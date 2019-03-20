module.exports = {
    rules: {
        /**
         * @category possible-errors
         * @description 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
         * @fixable
         */
        'no-regex-spaces': 'error'
    }
};
