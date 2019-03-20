module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 禁止 else 中只有一个单独的 if
         * @off 单独的 if 可以把逻辑表达的更清楚
         */
        'no-lonely-if': 'off'
    }
};
