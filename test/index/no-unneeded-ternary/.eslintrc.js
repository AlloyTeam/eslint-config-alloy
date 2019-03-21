module.exports = {
    rules: {
        /**
         * 必须使用 !a 替代 a ? false : true
         * @category Stylistic Issues
         * @reason 后者表达的更清晰
         * @fixable
         */
        'no-unneeded-ternary': 'off'
    }
};
