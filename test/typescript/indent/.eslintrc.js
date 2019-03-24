module.exports = {
    rules: {
        /**
         * 一个缩进必须用四个空格替代
         * @category Stylistic Issues
         * @fixable
         */
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ]
    }
};
