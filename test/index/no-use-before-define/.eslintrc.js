module.exports = {
    rules: {
        /**
         * @category variables
         * @description 变量必须先定义后使用
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
