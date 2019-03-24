module.exports = {
    rules: {
        /**
         * 禁止 if 后面不加大括号而写两行代码
         * @category Stylistic Issues
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
