module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 一个缩进必须用四个空格替代
         * @fixable
         */
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ]
    }
};
