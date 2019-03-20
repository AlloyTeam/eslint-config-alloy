module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
         * @fixable
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
