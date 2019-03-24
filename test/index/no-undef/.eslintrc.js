module.exports = {
    rules: {
        /**
         * 禁止使用未定义的变量
         * @category Variables
         */
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ]
    }
};
