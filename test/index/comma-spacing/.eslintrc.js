module.exports = {
    rules: {
        /**
         * 逗号前禁止有空格，逗号后必须要有空格
         * @category Stylistic Issues
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
