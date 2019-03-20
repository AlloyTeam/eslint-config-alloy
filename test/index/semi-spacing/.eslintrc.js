module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
         */
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ]
    }
};
