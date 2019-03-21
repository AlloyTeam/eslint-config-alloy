module.exports = {
    rules: {
        /**
         * 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
         * @category Stylistic Issues
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
