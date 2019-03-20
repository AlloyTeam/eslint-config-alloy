module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 禁止 if 后面不加大括号而写两行代码
         * @fixable
         */
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ]
    }
};
