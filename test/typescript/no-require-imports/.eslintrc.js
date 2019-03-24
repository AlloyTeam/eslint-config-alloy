module.exports = {
    rules: {
        /**
         * 禁止使用 require
         * @category TypeScript
         * @reason 有时需要动态引入，还是需要用 require
         */
        '@typescript-eslint/no-require-imports': 'off'
    }
};
