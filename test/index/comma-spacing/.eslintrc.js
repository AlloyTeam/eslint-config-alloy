module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 逗号前禁止有空格，逗号后必须要有空格
         */
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ]
    }
};
