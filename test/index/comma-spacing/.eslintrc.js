module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 逗号前禁止有空格，逗号后必须要有空格
         * @fixable
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
