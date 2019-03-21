module.exports = {
    rules: {
        /**
         * 结尾必须有分号
         *
         * @category stylistic-issues
         * @fixable
         */
        semi: [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ]
    }
};
