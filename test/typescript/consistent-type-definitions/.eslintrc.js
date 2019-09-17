module.exports = {
    rules: {
        /**
         * 优先使用 interface 而不是 type
         * @reason interface 可以 implement, extend 和 merge
         */
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
    }
};
