module.exports = {
    rules: {
        /**
         * 定义过的变量必须使用
         */
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false,
                caughtErrors: 'none'
            }
        ]
    }
};
