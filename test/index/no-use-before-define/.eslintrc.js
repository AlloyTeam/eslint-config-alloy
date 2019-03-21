module.exports = {
    rules: {
        /**
         * 变量必须先定义后使用
         *
         * @category variables
         */
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: false
            }
        ]
    }
};
