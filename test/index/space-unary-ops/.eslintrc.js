module.exports = {
    rules: {
        /**
         * new, typeof 等后面必须有空格，++, -- 等禁止有空格
         * @category Stylistic Issues
         * @fixable
         */
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ]
    }
};
