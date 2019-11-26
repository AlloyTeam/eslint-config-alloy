module.exports = {
    rules: {
        /**
         * 使用 optional chaining 替代 &&
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-optional-chain': 'error'
    }
};
