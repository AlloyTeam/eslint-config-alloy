module.exports = {
    rules: {
        /**
         * 一个缩进必须用四个空格替代
         *
         * @category stylistic-issues
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
