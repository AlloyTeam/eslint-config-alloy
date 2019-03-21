module.exports = {
    rules: {
        /**
         * 不允许有空函数，除非是将一个空函数设置为某个项的默认值
         *
         * @category best-practices
         */
        'no-empty-function': [
            'error',
            {
                allow: ['functions', 'arrowFunctions']
            }
        ]
    }
};
