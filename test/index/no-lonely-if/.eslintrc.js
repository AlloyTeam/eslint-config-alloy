module.exports = {
    rules: {
        /**
         * 禁止 else 中只有一个单独的 if
         * @category Stylistic Issues
         * @reason 单独的 if 可以把逻辑表达的更清楚
         * @fixable
         */
        'no-lonely-if': 'off'
    }
};
