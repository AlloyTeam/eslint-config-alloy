module.exports = {
    rules: {
        /**
         * 结尾必须有分号
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/semi': [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ]
    }
};
