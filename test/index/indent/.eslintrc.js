module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 一个缩进必须用四个空格替代
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
