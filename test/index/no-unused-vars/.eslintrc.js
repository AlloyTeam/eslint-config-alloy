module.exports = {
    rules: {
        /**
         * @category variables
         * @description 定义过的变量必须使用
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
