module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 必须使用单引号，禁止使用双引号
         * @fixable
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
