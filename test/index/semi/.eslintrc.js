module.exports = {
    rules: {
        /**
         * 结尾必须有分号
         * @category Stylistic Issues
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
