module.exports = {
    rules: {
        /**
         * 对象字面量只有一行时，大括号内的首尾必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ]
    }
};
