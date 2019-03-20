module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 关键字前后必须有空格
         */
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ]
    }
};
