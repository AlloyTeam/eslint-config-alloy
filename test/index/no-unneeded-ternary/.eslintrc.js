module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 必须使用 !a 替代 a ? false : true
         * @off 后者表达的更清晰
         */
        'no-unneeded-ternary': 'off'
    }
};
