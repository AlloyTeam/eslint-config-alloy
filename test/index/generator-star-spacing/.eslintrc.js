module.exports = {
    rules: {
        /**
         * @memberof ecmascript-6
         * @description @fixable generator 的 * 前面禁止有空格，后面必须有空格
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
