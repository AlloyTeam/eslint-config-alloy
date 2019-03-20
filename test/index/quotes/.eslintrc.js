module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 必须使用单引号，禁止使用双引号
         */
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ]
    }
};
