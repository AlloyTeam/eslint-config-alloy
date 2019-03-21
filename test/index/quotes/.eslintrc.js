module.exports = {
    rules: {
        /**
         * 必须使用单引号，禁止使用双引号
         * @category Stylistic Issues
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
