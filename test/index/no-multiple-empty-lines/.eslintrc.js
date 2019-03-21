module.exports = {
    rules: {
        /**
         * 禁止出现超过三行的连续空行
         * @category Stylistic Issues
         * @fixable
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
