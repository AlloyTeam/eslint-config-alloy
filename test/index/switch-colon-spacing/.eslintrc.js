module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable case 的冒号前禁止有空格，冒号后必须有空格
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
