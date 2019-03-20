module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 结尾必须有分号
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
