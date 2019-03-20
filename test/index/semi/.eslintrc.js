module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 结尾必须有分号
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
