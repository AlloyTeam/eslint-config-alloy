module.exports = {
    rules: {
        /**
         * generator 的 * 前面禁止有空格，后面必须有空格
         * @category ECMAScript 6
         * @fixable
         */
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ]
    }
};
