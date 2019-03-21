module.exports = {
    rules: {
        /**
         * case 的冒号前禁止有空格，冒号后必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ]
    }
};
