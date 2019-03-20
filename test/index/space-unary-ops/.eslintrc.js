module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description new, typeof 等后面必须有空格，++, -- 等禁止有空格
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
