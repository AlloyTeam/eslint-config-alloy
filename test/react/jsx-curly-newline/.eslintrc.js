module.exports = {
    rules: {
        /**
         * 限制 jsx 中的大括号内部首尾换行符
         * @category JSX-specific
         * @fixable
         * @reason 要么首尾都换行，要么首尾都不换行
         */
        'react/jsx-curly-newline': 'error'
    }
};
