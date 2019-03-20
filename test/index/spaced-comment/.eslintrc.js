module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 注释的斜线或 * 后必须有空格
         * @fixable
         */
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true
                }
            }
        ]
    }
};
