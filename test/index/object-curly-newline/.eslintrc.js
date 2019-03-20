module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 大括号内的首尾必须有换行
         */
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ]
    }
};
