module.exports = {
    rules: {
        /**
         * @category ecmascript-6
         * @description generator 的 * 前面禁止有空格，后面必须有空格
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
