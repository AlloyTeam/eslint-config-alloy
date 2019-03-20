module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
         * let foo = new Person();
         * bar = bar++;
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
