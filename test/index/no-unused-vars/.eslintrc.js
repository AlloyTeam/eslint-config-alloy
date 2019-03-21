module.exports = {
    rules: {
        /**
         * 定义过的变量必须使用
         *
         * @category variables
         */
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
                ignoreRestSiblings: true
            }
        ]
    }
};
