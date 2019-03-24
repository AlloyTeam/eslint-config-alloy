module.exports = {
    rules: {
        /**
         * 禁止使用 module 来定义命名空间
         * @category TypeScript
         * @reason module 已成为 js 的关键字
         * @fixable
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error'
    }
};
