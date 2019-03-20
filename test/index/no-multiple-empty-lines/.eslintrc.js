module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 禁止出现超过三行的连续空行
         */
        'no-multiple-empty-lines': [
            'error',
            {
                max: 3,
                maxEOF: 1,
                maxBOF: 1
            }
        ]
    }
};
