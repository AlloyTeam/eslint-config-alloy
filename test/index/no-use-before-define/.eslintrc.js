module.exports = {
    rules: {
        /**
         * 变量必须先定义后使用
         * @category Variables
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
