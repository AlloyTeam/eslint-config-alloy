module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 禁止 if 后面不加大括号而写两行代码
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
