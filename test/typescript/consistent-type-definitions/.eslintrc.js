module.exports = {
    rules: {
        /**
         * 优先使用接口而不是字面类型
         * @reason 接口可以 implement extend 和 merge
         */
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
    }
};
