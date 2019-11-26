module.exports = {
    rules: {
        /**
         * 使用 ?? 替代 ||
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off'
    }
};
