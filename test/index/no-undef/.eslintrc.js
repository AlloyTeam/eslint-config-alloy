module.exports = {
    rules: {
        /**
         * @category variables
         * @description 禁止使用未定义的变量
         */
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ]
    }
};
