module.exports = {
    rules: {
        /**
         * new, typeof 等后面必须有空格，++, -- 等禁止有空格
         *
         * @category stylistic-issues
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
