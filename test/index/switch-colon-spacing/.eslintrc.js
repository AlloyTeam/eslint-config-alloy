module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description case 的冒号前禁止有空格，冒号后必须有空格
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
